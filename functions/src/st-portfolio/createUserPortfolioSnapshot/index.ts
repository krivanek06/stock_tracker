import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';
import { getLivePriceAPI } from '../../api';

const symbolPriceMap: Map<string, number> = new Map<string, number>();

export const createUserPortfolioSnapshot = functions.pubsub.topic('createUserPortfolioSnapshot').onPublish(async () => {
  console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

  // load users who has non empty holdings
  const usersWithHoldings = await getAllUserWithExistingHoldings();

  for await (const user of usersWithHoldings) {
    // not cached holdings
    const unsavedSymbols = user.holdings.map((h) => h.symbol).filter((symbol) => !symbolPriceMap.has(symbol));
    for await (const unsavedSymbol of unsavedSymbols) {
      const unsavedSymbolsPrice = await getLivePriceAPI(unsavedSymbol);
      symbolPriceMap.set(unsavedSymbolsPrice.symbol, unsavedSymbolsPrice.price); // cache them into map
    }

    // construct portfolio snapshot and save it into DB
    await savePortfolioSnapShot(user, constructPortfolioSnapshot(user));
  }

  console.log(`Distinct symbols: ${symbolPriceMap.size}`);
  console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
});

const savePortfolioSnapShot = async ({ id, lastPortfolioSnapshot }: api.STUserPublicData, portfolioSnapshot: api.STPortfolioSnapshot) => {
  // save into array
  await admin
    .firestore()
    .collection('users')
    .doc(id)
    .collection('more_information')
    .doc('historical_data')
    .set(
      {
        portfolioSnapshots: admin.firestore.FieldValue.arrayUnion(portfolioSnapshot),
      },
      { merge: true }
    );

  const previousBalance = lastPortfolioSnapshot.portfolioCash + lastPortfolioSnapshot.portfolioInvested;
  const currentBalance = portfolioSnapshot.portfolioCash + portfolioSnapshot.portfolioInvested;

  // save as latest snapshot
  await admin
    .firestore()
    .collection('users')
    .doc(id)
    .set(
      {
        lastPortfolioSnapshot: portfolioSnapshot,
        lastPortfolioIncreaseNumber: Number((currentBalance - previousBalance).toFixed(2)),
        lastPortfolioIncreasePrct: Number(((currentBalance - previousBalance) / previousBalance).toFixed(4)),
      } as api.STUserPublicData,
      { merge: true }
    );
};

const constructPortfolioSnapshot = (user: api.STUserPublicData): api.STPortfolioSnapshot => {
  const portfolioInvested = user.holdings.map((h) => (symbolPriceMap.get(h.symbol) ?? 0) * h.units).reduce((a, b) => a + b, 0);

  const portfolioSnapshot: api.STPortfolioSnapshot = {
    portfolioInvested,
    portfolioCash: user.portfolioCash,
    date: admin.firestore.Timestamp.now().toDate().toISOString(),
  };
  return portfolioSnapshot;
};

const getAllUserWithExistingHoldings = async (): Promise<api.STUserPublicData[]> => {
  // cannot use holdings for filtering because when somebody had increase 90% and sold everythin,
  // then he would not be filtered out
  const usersWithHoldings = await admin.firestore().collection('users').where('numberOfExecutedTransactions', '>', 0).get();
  return usersWithHoldings.docs.map((d) => d.data() as api.STUserPublicData);
};

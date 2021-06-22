import {StGroupAllData, StGroupUser, StHolding, StTransaction, StTransactionOperationEnum} from '@core';

const user: StGroupUser = {
    id: '1245690',
    sinceDate: '2021-06-23T22:00:00.000Z',
    accountCreatedDate: '2020-07-01T22:00:00.000Z',
    locale: 'SK',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/groups%2Fthis.fileName?alt=media&token=c365ad0e-3268-4667-9f8c-6195bcbaef42',
    nickName: 'User 123',
    numberOfExecutedTransactions: 12,
    startingPortfolioSnapshot: {
        portfolioInvested: 11456,
        portfolioCash: 4569,
        date: '2021-06-23T22:00:00.000Z'
    },
    lastPortfolioSnapshot: {
        portfolioInvested: 11456,
        portfolioCash: 4569,
        date: '2021-06-23T22:00:00.000Z'
    },
    previousPosition: 5,
    currentPosition: 3,
    numberOfExecutedBuyTransactions: 17,
    numberOfExecutedSellTransactions: 9,
    lastPortfolioIncreasePrct: 0.45,
    lastPortfolioIncreaseNumber: 1025,
    lastTransactionSnapshot: {
        transactionsBuy: 456,
        transactionsSell: 4015,
        date: '2021-06-24T22:00:00.000Z'
    }
};

const transaction: StTransaction = {
    date: '2021-01-15T19:20:46.293Z',
    operation: StTransactionOperationEnum.Buy,
    units: 15,
    symbol: 'JD',
    price: 65.45,
    returnChange: null,
    return: null,
    transactionId: 'asd456',
    symbol_logo_url: 'https://logo.clearbit.com/jd.com',
    user: {
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/users%2Fthis.fileName?alt=media&token=7e4fe244-cd7b-43a2-a95f-1fe5ef778932',
        accountCreatedDate: '2021-01-15T19:20:46.293Z',
        locale: null,
        id: 'wqe7890',
        nickName: 'Terminator 456'
    }
};

export const holding: StHolding = {
    symbol: 'JD',
    breakEvenPrice: 12.45,
    units: 45,
    summary: {
        avgVolume: 8977100,
        currency: 'USD',
        currencySymbol: '$',
        dividendDate: null,
        ePSTTM: 5.124,
        earningsDate: 1597104000,
        exDividendDate: null,
        exchangeName: 'NasdaqGS',
        fiveTwoWeekRange: '56.8 - 108.29',
        forwardDividendRate: null,
        forwardDividendYield: null,
        forwardEPS: 2.56,
        forwardPE: 27.832031,
        fullTimeEmployees: 310000,
        id: 'JD',
        industry: 'Internet Retail',
        lastSplitDate: null,
        lastSplitFactor: null,
        logo_url: 'https://logo.clearbit.com/jd.com',
        longBusinessSummary: 'JD.com, Inc. operates as an e-commerce company and retail infrastructure service provider in the People\'s Republic of China. It operates in two segments, JD Retail and New Businesses. The company offers home appliances; mobile handsets and other digital products; desktop, laptop, and other computers, as well as printers and other office equipment; furniture and household goods; apparel; cosmetics, personal care items, and pet products; women\'s shoes, bags, jewelry, and luxury goods; men\'s shoes, sports gears, and fitness equipment; automobiles and accessories; maternal and childcare products, toys, and musical instruments; and food, beverage, and fresh produce. It also provides gifts, flowers, and plants; pharmaceutical and healthcare products, including OCT pharmaceutical products, nutritional supplements, healthcare services, and other healthcare equipment; books, e-books, music, movie, and other media products; and virtual goods, such as online travel agency, attraction tickets, and prepaid phone and game cards, as well as industrial products and installation and maintenance services. In addition, the company offers an online marketplace for third-party merchants to sell products to customers; and transaction processing and billing, and other services. Further, it provides online marketing services for suppliers, third-party merchants, and other business partners; supply chain and logistics services for various industries; and consumer financing services to individual customers, as well as online-to-offline solutions. JD.com, Inc. offers its products through its website jd.com and mobile apps, as well as directly to customers. As of December 31, 2020, JD.com, Inc. operated fulfillment centers with a network of approximately 900 warehouses in various counties and districts in China. The company has strategic cooperation agreement with Tencent Holdings Limited. JD.com, Inc. was incorporated in 2006 and is headquartered in Beijing, China.',
        longName: 'JD.com, Inc.',
        marketCap: 112262922240,
        marketPrice: 71.25,
        oneyTargetEst: 103.5,
        open: 71.2,
        pERatioTTM: 13.905152,
        previousClose: 71.19,
        recommendationKey: 'buy',
        recommendationMean: 1.7,
        residance: {
            addressOne: 'Building A',
            city: 'Beijing',
            country: 'China',
            state: null,
            zip: '101111'
        },
        sandPFiveTwoWeekChange: 0.38506937,
        sector: 'Consumer Cyclical',
        sharesOutstanding: 1558989952,
        shortName: 'JD.com, Inc.',
        shortRatio: 2.51,
        symbol: 'JD',
        targetEstOneyPercent: 0.69,
        volume: 6545303,
        website: 'http://www.jd.com',
        weekRangeFiveTwoMax: 108.29,
        weekRangeFiveTwoMin: 56.8,
        yearToDatePrice: 59.56,
        yearToDatePriceReturn: 0.19626951
    }
};

const position1 = {...user, currentPosition: 1, previousPosition: 5} as StGroupUser;
const position2 = {...user, currentPosition: 2, previousPosition: 4} as StGroupUser;
const position3 = {...user, currentPosition: 3, previousPosition: 1} as StGroupUser;
const position10 = {...user, currentPosition: 10, previousPosition: 5} as StGroupUser;

let members = [position1];
for (let i = 0; i < 25; i++) {
    const previous = members[i];
    members.push({
        ...previous,
        currentPosition: i + 1,
        lastPortfolioSnapshot: {
            ...previous.lastPortfolioSnapshot,
            portfolioInvested: previous.lastPortfolioSnapshot.portfolioInvested * 1.1
        },
        lastPortfolioIncreasePrct: Math.floor(Math.random() * 1) - 1
    } as StGroupUser);
}
members.splice(0, 1);

let lastTransactions: StTransaction[] = [transaction];
for (let i = 0; i < 15; i++) {
    lastTransactions.push({
        ...transaction,
        operation: i % 2 == 0 ? StTransactionOperationEnum.Buy : StTransactionOperationEnum.Sell,
        return: i % 2 == 0 ? null : i + Math.random() * 123,
        returnChange: i % 2 == 0 ? null : i + Math.random()
    });
}

let topTransactions = lastTransactions.filter(t => t.operation === StTransactionOperationEnum.Sell);

export const groupTestData: StGroupAllData = {
    groupId: '123465',
    numberOfExecutedTransactions: 456,
    startDate: '2021-07-01T22:00:00.000Z',
    endDate: '2021-09-22T22:00:00.000Z',
    isPrivate: true,
    isInfinite: false,
    name: 'test group 1',
    owner: {
        ...position1,
        id: 'Rd6txjVNB7UkiVTop1YZVrweUtE2'
    },
    invitationSent: [position1, position1, position1, position1].map(user => {
        return {...user, currentPosition: null, previousPosition: null};
    }),
    members: members,
    managers: [],
    description: 'This is a group description, remember it',
    currentAchievedRanks: null,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/groups%2Fthis.fileName?alt=media&token=c365ad0e-3268-4667-9f8c-6195bcbaef42',
    imagePath: 'groups/this.fileName',
    holdings: [
        {numberOfUsers: 3, holding: holding},
        {numberOfUsers: 5, holding: {...holding, symbol: 'AAPL', units: 8, breakEvenPrice: 22.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'CCL', units: 45, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: 'MSFT', units: 5, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: 'MMM', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: 'ABC', units: 8, breakEvenPrice: 21.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'ADD', units: 12, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: 'EEE', units: 6, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: 'VVV', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: 'AAPL1', units: 8, breakEvenPrice: 22.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'CCL1', units: 45, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: 'MSFT1', units: 5, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: 'MM1M', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: 'AB1C', units: 8, breakEvenPrice: 21.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'AD11D', units: 12, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: 'EE1E', units: 6, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: 'V1VV', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 4, holding: {...holding, symbol: '22MM1M', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: '22AB1C', units: 8, breakEvenPrice: 21.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: '22AD11D', units: 12, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: '22EE1E', units: 6, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: '22V1VV', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: 'AAPL78', units: 8, breakEvenPrice: 22.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'CCL87', units: 45, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: 'MS78FT', units: 5, breakEvenPrice: 45.12}},
        {numberOfUsers: 4, holding: {...holding, symbol: 'MM54M', units: 45, breakEvenPrice: 12.45}},
        {numberOfUsers: 5, holding: {...holding, symbol: '2354ABC', units: 8, breakEvenPrice: 21.56}},
        {numberOfUsers: 2, holding: {...holding, symbol: 'A65DD', units: 12, breakEvenPrice: 78.45}},
        {numberOfUsers: 8, holding: {...holding, symbol: '456EEE', units: 6, breakEvenPrice: 45.12}}
    ],
    createdDate: '2021-06-10T22:00:00.000Z',
    numberOfMembers: 4,
    topMembers: [position1, position2, position3, position10],
    lastUpdateDate: '2021-06-10T22:00:00.000Z',
    lastEditedDate: '2021-06-10T22:00:00.000Z',
    invitationReceived: [position1, position1, position1, position1, position1, position1].map(user => {
        return {...user, currentPosition: null, previousPosition: null};
    }),
    startedBalance: 25600,
    lastTransactionSnapshot: {
        transactionsBuy: 4512,
        transactionsSell: 12568,
        date: '2021-06-15T22:00:00.000Z'
    },
    lastPortfolioSnapshot: {
        portfolioInvested: 25160,
        portfolioCash: 16000,
        date: '2021-06-15T22:00:00.000Z'
    },
    lastTransactions: lastTransactions,
    topTransactions: topTransactions,
    lastPortfolioBalance: 15236,
    lastPortfolioIncreaseNumber: 105.1,
    lastPortfolioIncreasePrct: 0.036,
    numberOfExecutedBuyTransactions: 15,
    numberOfExecutedSellTransactions: 12,
    groupHistoricalData: {
        bestAchievedRanks: [],
        groupLogs: [],
        transactionSnapshots: [
            {transactionsBuy: 456, transactionsSell: 4015, date: '2021-06-09T22:00:00.000Z'},
            {transactionsBuy: 4563, transactionsSell: 4565465, date: '2021-06-10T22:00:00.000Z'},
            {transactionsBuy: 12356, transactionsSell: 0, date: '2021-06-11T22:00:00.000Z'},
            {transactionsBuy: 56548, transactionsSell: 0, date: '2021-06-12T22:00:00.000Z'},
            {transactionsBuy: 98754, transactionsSell: 4015, date: '2021-06-13T22:00:00.000Z'},
            {transactionsBuy: 0, transactionsSell: 456456, date: '2021-06-14T22:00:00.000Z'},
            {transactionsBuy: 23132, transactionsSell: 0, date: '2021-06-15T22:00:00.000Z'}
        ],
        portfolioSnapshots: [
            {portfolioInvested: 18560, portfolioCash: 8510, date: '2021-06-07T22:00:00.000Z'},
            {portfolioInvested: 18560, portfolioCash: 7510, date: '2021-06-08T22:00:00.000Z'},
            {portfolioInvested: 19560, portfolioCash: 6510, date: '2021-06-09T22:00:00.000Z'},
            {portfolioInvested: 18560, portfolioCash: 8510, date: '2021-06-10T22:00:00.000Z'},
            {portfolioInvested: 18560, portfolioCash: 7510, date: '2021-06-11T22:00:00.000Z'},
            {portfolioInvested: 19560, portfolioCash: 6510, date: '2021-06-12T22:00:00.000Z'},
            {portfolioInvested: 22160, portfolioCash: 2510, date: '2021-06-13T22:00:00.000Z'},
            {portfolioInvested: 16560, portfolioCash: 38510, date: '2021-06-14T22:00:00.000Z'},
            {portfolioInvested: 18560, portfolioCash: 68510, date: '2021-06-15T22:00:00.000Z'}
        ],
    }
};

groupTestData.lastPortfolioSnapshot.portfolioInvested = groupTestData.holdings.map(h => h.holding.units * h.holding.breakEvenPrice)
                                                                               .reduce((a, b) => a + b, 0)

console.log(groupTestData.lastPortfolioSnapshot.portfolioInvested, groupTestData.lastPortfolioSnapshot.portfolioCash)

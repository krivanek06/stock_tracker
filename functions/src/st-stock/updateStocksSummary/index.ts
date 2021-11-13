import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { chunk, flatten } from 'lodash';
import * as api from 'stock-tracker-common-interfaces';
import { getCompanyQuoteBatch } from '../../api';

// functions.https.onRequest(
// functions.pubsub.topic('updateStocksSummary').onPublish(async () => {
export const updateStocksSummary = functions.pubsub.topic('updateStocksSummary').onPublish(async () => {
	const startTime = new Date().getTime();
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

	// query only symbols which was not updated
	const today = new Date();
	today.setHours(today.getHours() - 2);

	console.log(today.toISOString());

	const documents = await admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.where('summaryLastUpdate', '<', today.toISOString())
		.limit(75)
		.get();

	const refs = documents.docs.map((d) => d.ref);
	console.log(`Totally fetched ${refs.length} symbols`);

	// divide symbols into chunks of 15 => less api requests
	const symbolChunks = chunk(
		refs.map((r) => r.id),
		15
	);

	// fire all api requests at once and wait thme
	console.log('Make promises for quote batch request');
	const companyQuotesPromises = flatten(await Promise.all([...symbolChunks.map((s) => getCompanyQuoteBatch(s))]));

	// update firestore for all symbols
	for await (const ref of refs) {
		try {
			console.log(`Updating: ${ref.id}`);
			const companyQuote = companyQuotesPromises.find((quote) => quote.symbol === ref.id);
			if (!companyQuote) {
				console.log(`No data for ${ref.id} !!!!`);
				await ref.set(
					{
						summaryLastUpdate: new Date().toISOString(),
					},
					{ merge: true }
				);
				continue;
			}

			// create object
			const partialSummary: Partial<api.STSummary> = {
				avgVolume: companyQuote.avgVolume,
				volume: companyQuote.volume,
				ePSTTM: companyQuote.eps,
				pERatioTTM: companyQuote.pe,
				marketCap: companyQuote.marketCap,
				marketPrice: companyQuote.price,
				previousClose: companyQuote.previousClose,
				earningsDate: companyQuote.earningsAnnouncement,
				weekRangeFiveTwoMax: companyQuote.yearHigh,
				weekRangeFiveTwoMin: companyQuote.yearLow,
			};

			// update fields in firestore
			await ref.set(
				{
					summaryLastUpdate: new Date().toISOString(),
					details: {
						summary: {
							...partialSummary,
						},
					},
				},
				{ merge: true }
			);
		} catch (error) {
			console.log(`Error for ${ref.id}`);
			console.log(error);
			continue;
		}
	}

	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}, took ${(new Date().getTime() - startTime) / 1000} sec.`);
});

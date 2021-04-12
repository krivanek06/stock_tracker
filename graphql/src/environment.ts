
//export const stockDataAPI = 'http://127.0.0.1:5000';  // local dev flask
//export const stockDataAPI = 'http://127.0.0.1:5001/api/market_data'; // outside docker container
export const stockDataAPI = 'http://nginx:5001/api/market_data';    // inside docker container
//export const stockDataAPI = 'https://serverflask-eqvqg22pdq-ew.a.run.app'; // GCP

// "stock-tracker-common-interfaces": "file:../common-interfaces" / "1.0.7"

/*
credential: admin.credential.cert({
        projectId: "stocktrackertest-e51fc",
        privateKey: "57d40ecd8dc55f2ecd0e4d09dc5136b26f3de8f7",
        clientEmail: "firebase-adminsdk-jnpup@stocktrackertest-e51fc.iam.gserviceaccount.com"
    }),
 */

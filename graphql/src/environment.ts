export const stockDataAPI = 'http://127.0.0.1:5000'; // local dev flask
//export const stockDataAPI = 'http://127.0.0.1:5001/api/market_data'; // outside docker container
//export const stockDataAPI = 'http://nginx:5001/api/market_data';    // inside docker container

// "stock-tracker-common-interfaces": "file:../common-interfaces" / "1.0.7"

export const financialModelingAPI = 'https://financialmodelingprep.com';
export const financialModelingAPIKey = '795742ba1ec2f519ffa9ea50967d2240';
export const IS_PRODUCTION = false;

//export const stockDataAPI = IS_PRODUCTION ? 'https://serverflask-j6sqew4pvq-lm.a.run.app' : 'https://serverflask-eqvqg22pdq-lz.a.run.app';

/*
credential: admin.credential.cert({
        projectId: "stocktrackertest-e51fc",
        privateKey: "57d40ecd8dc55f2ecd0e4d09dc5136b26f3de8f7",
        clientEmail: "firebase-adminsdk-jnpup@stocktrackertest-e51fc.iam.gserviceaccount.com"
    }),
 */

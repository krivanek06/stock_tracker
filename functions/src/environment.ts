//export const stockDataAPI = 'http://127.0.0.1:5000';

// "stock-tracker-common-interfaces": "file:../common-interfaces" / "1.0.7"
export const financialModelingAPI = 'https://financialmodelingprep.com';
export const financialModelingAPIKey = '795742ba1ec2f519ffa9ea50967d2240';

export const IS_PRODUCTION = false;

export const stockDataAPI = IS_PRODUCTION ? 'https://serverflask-j6sqew4pvq-lm.a.run.app' : 'https://serverflask-eqvqg22pdq-lz.a.run.app';

// sudo firebase setup:emulators:firestore
// sudo npm install -g firebase-tools
// sudo firebase emulators:start --only functions
// firebase deploy --only functions --project test

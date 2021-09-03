export const environment = {
	production: true,

	// docker - outside
	// graphql: 'http://127.0.0.1:5001/graphql',

	// local
	// graphql: 'http://localhost:4000/graphql',

	// GCP
	graphql: 'https://servergraphql-eqvqg22pdq-lz.a.run.app/graphql',

	// PROD env
	// firebase: {
	// 	apiKey: "AIzaSyBrI9eMFHdjytB-f57QxVjtruKJZdDBm48",
	// 	authDomain: "stock-tracker-prod.firebaseapp.com",
	// 	projectId: "stock-tracker-prod",
	// 	storageBucket: "stock-tracker-prod.appspot.com",
	// 	messagingSenderId: "465302188869",
	// 	appId: "1:465302188869:web:0bc51824750a5cadc4042c",
	// 	measurementId: "G-C20ZWXSJZ2"
	// }

	// TEST env
	firebase: {
		apiKey: 'AIzaSyCcIdEPY2ke4Z0SuM69PJrUT5SUlW1nE_U',
		authDomain: 'stocktrackertest-e51fc.firebaseapp.com',
		databaseURL: 'https://stocktrackertest-e51fc.firebaseio.com',
		projectId: 'stocktrackertest-e51fc',
		storageBucket: 'stocktrackertest-e51fc.appspot.com',
		messagingSenderId: '514791811531',
		appId: '1:514791811531:web:c865792582281fc865ae4e',
		measurementId: 'G-73NKLPNQ5G',
	},

	version: '0.7.6',
};

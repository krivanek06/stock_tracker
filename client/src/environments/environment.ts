// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,

	// local
	graphql: 'http://localhost:4000/graphql',

	// GCP - prod
	// graphql: 'https://servergraphql-j6sqew4pvq-lm.a.run.app',

	// PROD
	firebase: {
		apiKey: 'AIzaSyBrI9eMFHdjytB-f57QxVjtruKJZdDBm48',
		authDomain: 'stock-tracker-prod.firebaseapp.com',
		projectId: 'stock-tracker-prod',
		storageBucket: 'stock-tracker-prod.appspot.com',
		messagingSenderId: '465302188869',
		appId: '1:465302188869:web:0bc51824750a5cadc4042c',
		measurementId: 'G-C20ZWXSJZ2',
	},

	version: '0.9.8.2',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

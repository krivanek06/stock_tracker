// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    // docker - outside
    //graphql: 'http://127.0.0.1:5001/graphql',

    // local
    graphql: 'http://localhost:4000/graphql',

    // GCP
    //graphql: 'https://servergraphql-eqvqg22pdq-lz.a.run.app/graphql',

    // finnhubKEY: 'brsrc5vrh5r9dg9d77pg',
    firebase: {
        apiKey: 'AIzaSyCcIdEPY2ke4Z0SuM69PJrUT5SUlW1nE_U',
        authDomain: 'stocktrackertest-e51fc.firebaseapp.com',
        databaseURL: 'https://stocktrackertest-e51fc.firebaseio.com',
        projectId: 'stocktrackertest-e51fc',
        storageBucket: 'stocktrackertest-e51fc.appspot.com',
        messagingSenderId: '514791811531',
        appId: '1:514791811531:web:c865792582281fc865ae4e',
        measurementId: 'G-73NKLPNQ5G'
    },

    version: '0.3.4'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

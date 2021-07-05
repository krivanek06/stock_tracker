export const environment = {
    production: true,

    // docker - outside
    // graphql: 'http://127.0.0.1:5001/graphql',

    // local
    // graphql: 'http://localhost:4000/graphql',

    // GCP
    graphql: 'https://servergraphql-eqvqg22pdq-lz.a.run.app/graphql',

    // PROD env
    /*firebase: {
        apiKey: 'AIzaSyCyCxLITip9zdDAqqNwNFlR4ZR2vnLZkdk',
        authDomain: 'stocktracker-8e307.firebaseapp.com',
        databaseURL: 'https://stocktracker-8e307.firebaseio.com',
        projectId: 'stocktracker-8e307',
        storageBucket: 'stocktracker-8e307.appspot.com',
        messagingSenderId: '102120357424',
        appId: '1:102120357424:web:f80bf8e36b1d791b1777f5',
        measurementId: 'G-B90GS8PNES'
    }*/

    // TEST env
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

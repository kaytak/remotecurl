// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'knowledge-base1',
    appId: '1:1076977121976:web:740e1a4ba57f2b06b7124d',
 //   databaseURL: 'https://knowledge-base1.firebaseio.com',
 //   storageBucket: 'knowledge-base1.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBi0N_Iim-M-IWcbeotwcB9OcTm10mi82I',
  //  authDomain: 'knowledge-base1.firebaseapp.com',
  //  messagingSenderId: '1076977121976',
    measurementId: 'G-9JS3CDMFGP',
  },
  production: false,
  useEmulators:true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

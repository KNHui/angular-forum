// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyA3X9av4HOlEoaTmqa0GLLIsLx6yhYF-_Y",
    authDomain: "forum-baa95.firebaseapp.com",
    databaseURL: "https://forum-baa95.firebaseio.com",
    projectId: "forum-baa95",
    storageBucket: "forum-baa95.appspot.com",
    messagingSenderId: "51336442340",
    appId: "1:51336442340:web:600503bf9a0b9638e997f1",
    measurementId: "G-SGRXKY6LXS",
  },
};

export const snapshotToArray = (snapshot) => {
  let ret = [];
  snapshot.forEach((element) => {
    let item = element.val();
    item.key = element.key;
    ret.push(item);
  });
  return ret;
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* export const environment = {
  production: false
}; */

/* <script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script> */

// git clone https://git-codecommit.us-east-2.amazonaws.com/v1/repos/staffConference

export const environment = {
  production: true,
  firebase : {
    apiKey: "AIzaSyCnf7NkEPvgZ0rpzpsdgKK9MMIGgsUCcGY",
    authDomain: "ala-staff-conference.firebaseapp.com",
    databaseURL: "https://ala-staff-conference.firebaseio.com",
    projectId: "ala-staff-conference",
    storageBucket: "ala-staff-conference.appspot.com",
    messagingSenderId: "561784250725",
    vapidKey: "BFXaQthryvGouSUJSw1FMryojLJr1-JQylK6tHYfgPJ-XYRsYYloRd7CZ1ZO1V5p1eIECaZQLAEfzYdZjuTwWtQ"
   },
};   

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDc_Z9CDCz4cRtPtXvP4DRY8_jWHuB58AE",
  authDomain: "cnvs-46f55.firebaseapp.com",
  databaseURL: "https://cnvs-46f55.firebaseio.com",
  projectId: "cnvs-46f55",
  storageBucket: "cnvs-46f55.appspot.com",
  messagingSenderId: "629286529954",
  appId: "1:629286529954:web:f95763dc3cb687bcdf60fb",
  measurementId: "G-010RKMJEBG",
});
console.log(firebaseApp);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

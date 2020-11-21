import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2dV9TKsVftW38X3ZTZE5ntQhIzmQTxpk",
  authDomain: "cnvs-4180c.firebaseapp.com",
  databaseURL: "https://cnvs-4180c.firebaseio.com",
  projectId: "cnvs-4180c",
  storageBucket: "cnvs-4180c.appspot.com",
  messagingSenderId: "896443227151",
  appId: "1:896443227151:web:7437f3fc304827b432177a",
  measurementId: "G-PRHHD0KWBN",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

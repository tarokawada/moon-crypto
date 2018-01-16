import * as firebase from 'firebase';
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyAzqdqhTse_x4IXCm8BhlgSTGzTxCBEXv4",
  authDomain: "moon-2b1f9.firebaseapp.com",
  databaseURL: "https://moon-2b1f9.firebaseio.com",
  projectId: "moon-2b1f9",
  storageBucket: "moon-2b1f9.appspot.com",
  messagingSenderId: "447830237384"
}

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
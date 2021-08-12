import firebase from "firebase/app";

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKFZAASmDVuFvCwfB5X72JAdHzWlUD8wc",
    authDomain: "crown-db-bf2f0.firebaseapp.com",
    projectId: "crown-db-bf2f0",
    storageBucket: "crown-db-bf2f0.appspot.com",
    messagingSenderId: "1026686139281",
    appId: "1:1026686139281:web:f9f4b74703e53901b23830",
    measurementId: "G-HL6YXH8EPV"
  }; 

  firebase.initializeApp(config);
//   firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
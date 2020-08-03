import 'firebase/storage';
import 'firebase/firestore';

import * as firebase from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyDqXXhs1MYO0swXp5_mou3983R1vQ1mN3I",
    authDomain: "pixgram-56929.firebaseapp.com",
    databaseURL: "https://pixgram-56929.firebaseio.com",
    projectId: "pixgram-56929",
    storageBucket: "pixgram-56929.appspot.com",
    messagingSenderId: "385392776903",
    appId: "1:385392776903:web:1153fbaa4abcdcb96690e2",
    measurementId: "G-9DJ07MR9KP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
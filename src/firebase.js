import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEyJbz_eCsUffdev6l1t0pdD_bkRNIhfI",
    authDomain: "react-slack-466bb.firebaseapp.com",
    projectId: "react-slack-466bb",
    storageBucket: "react-slack-466bb.appspot.com",
    messagingSenderId: "18758879435",
    appId: "1:18758879435:web:309dbeae120d6441b7f34e"
  };
  
// Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

//   Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }
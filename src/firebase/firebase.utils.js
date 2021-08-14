import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCY3XpuCJkzpG7JyIWbrUl8YRY3UISVeGA",
  authDomain: "crwn-db-ff97f.firebaseapp.com",
  projectId: "crwn-db-ff97f",
  storageBucket: "crwn-db-ff97f.appspot.com",
  messagingSenderId: "1058985941575",
  appId: "1:1058985941575:web:3ad1d98ab2d3abcc476f62",
  measurementId: "G-XD2WHSKKPP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

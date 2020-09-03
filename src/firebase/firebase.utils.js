import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCf3sUmEuklc8L04k6J6IQkdGZ5q9THJF8',
  authDomain: 'missioned-bb43f.firebaseapp.com',
  databaseURL: 'https://missioned-bb43f.firebaseio.com',
  projectId: 'missioned-bb43f',
  storageBucket: 'missioned-bb43f.appspot.com',
  messagingSenderId: '613467196576',
  appId: '1:613467196576:web:6ec0773fa2f2d7cb388dc5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//create userProfileDocument
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export default firebase;

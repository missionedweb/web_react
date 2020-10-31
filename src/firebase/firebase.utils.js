import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function writeUserData(userId, name, message, timestamp) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      name: name,
      message: message,
      timestamp: timestamp,
    });
}
function writeNewPost(userId, name, message, timestamp) {
  // A post entry.
  var postData = {
    name: name,
    message: message,
    timestamp: timestamp,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("posts").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + name + "/" + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

//  create userProfileDocument
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  var database = firebase.database();
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, phone } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,

        createdAt,
        phone,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;

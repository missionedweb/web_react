import App from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf3sUmEuklc8L04k6J6IQkdGZ5q9THJF8",
  authDomain: "missioned-bb43f.firebaseapp.com",
  databaseURL: "https://missioned-bb43f.firebaseio.com",
  projectId: "missioned-bb43f",
  storageBucket: "missioned-bb43f.appspot.com",
  messagingSenderId: "613467196576",
  appId: "1:613467196576:web:6ec0773fa2f2d7cb388dc5",
};

class Firebase {
  constructor() {
    App.initializeApp(firebaseConfig);
    this.auth = App.auth();
    this.db = App.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async register(name, lastName, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: `${name} ${lastName}`,
    });
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser;
  }

  authChange(user) {
    this.auth.onAuthStateChanged(user);
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  emailVerification() {
    return this.auth.currentUser.sendEmailVerification();
  }
  // addQuote(quote) {
  // 	if(!this.auth.currentUser) {
  // 		return alert('Not authorized')
  // 	}

  // 	return this.db.doc(`User/${this.auth.currentUser.uid}`).set({
  // 		quote
  // 	})
  // }

  // isInitialized() {
  // 	return new Promise(resolve => {
  // 		this.auth.onAuthStateChanged(resolve)
  // 	})
  // }

  // getCurrentUsername() {
  // 	return this.auth.currentUser && this.auth.currentUser.displayName
  // }

  // async getCurrentUserQuote() {
  // 	const quote = await this.db.doc(`User/${this.auth.currentUser.uid}`).get()
  // 	return quote.get('quote')
  // }
}

export default new Firebase();

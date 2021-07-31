import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzRxIRh-VO8wmWSAuEFNxbvWP2vJUrMSU",
  authDomain: "facebook-de76e.firebaseapp.com",
  projectId: "facebook-de76e",
  storageBucket: "facebook-de76e.appspot.com",
  messagingSenderId: "601768740601",
  appId: "1:601768740601:web:37a42301f07f1775254428",
  measurementId: "G-R8MYC7KEH9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

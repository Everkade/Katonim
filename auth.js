import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDeZ3ZlIMCFm7NW2DppxaNv44wcLNUgF8",
  authDomain: "katonim-games.firebaseapp.com",
  projectId: "katonim-games",
  storageBucket: "katonim-games.firebasestorage.app",
  messagingSenderId: "67503523149",
  appId: "1:67503523149:web:5c39e14dc4b4b2ae672304",
  measurementId: "G-1GBDDMXKN7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signUp = () => {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );
};

window.login = () => {
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );
};

window.resetPassword = () => {
  sendPasswordResetEmail(auth, email.value);
};

onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
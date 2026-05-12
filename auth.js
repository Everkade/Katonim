import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


window.signUp = () => {
  createUserWithEmailAndPassword(
    auth,
    emailInput.value,
    passwordInput.value
  ).catch(alert);
};

window.login = () => {
  signInWithEmailAndPassword(
    auth,
    emailInput.value,
    passwordInput.value
  ).catch(alert);
};

window.resetPassword = () => {
  sendPasswordResetEmail(auth, emailInput.value)
    .then(() => alert("Password reset email sent"))
    .catch(alert);
};

onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
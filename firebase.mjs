  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbn3VcJywbMuBtbyVArAZSgzPxzpeuUIo",
    authDomain: "login-registration-7eafa.firebaseapp.com",
    projectId: "login-registration-7eafa",
    storageBucket: "login-registration-7eafa.appspot.com",
    messagingSenderId: "438791868697",
    appId: "1:438791868697:web:786b676d8e6a5a842df588"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)

  const dBase = getFirestore(app)

  export {collection, addDoc,dBase, auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail, sendEmailVerification  }
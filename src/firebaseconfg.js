import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWaakLizXp6Ik6h9dhO5-SeOHuKTx9Ep0",
    authDomain: "portfolio-2e0f3.firebaseapp.com",
    projectId: "portfolio-2e0f3",
    storageBucket: "portfolio-2e0f3.appspot.com",
    messagingSenderId: "655219941439",
    appId: "1:655219941439:web:9a1d3e3a3320afd5aa188a",
    measurementId: "G-MYSJ82V7DL"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;

import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDOLvywh8pifl-ERtlRZKooP08DgpxBmes",
    authDomain: "rbk-rebootkamp.firebaseapp.com",
    projectId: "rbk-rebootkamp",
    storageBucket: "rbk-rebootkamp.appspot.com",
    messagingSenderId: "154985372207",
    appId: "1:154985372207:web:a0ddae30addabeca01c4da"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
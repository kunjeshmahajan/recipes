import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCSBG5TW39t8o1SrWpNSI1XLejXER238XM",
  authDomain: "recipe-react-87a6e.firebaseapp.com",
  projectId: "recipe-react-87a6e",
  storageBucket: "recipe-react-87a6e.appspot.com",
  messagingSenderId: "491186896607",
  appId: "1:491186896607:web:129331502899ec3a58736a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
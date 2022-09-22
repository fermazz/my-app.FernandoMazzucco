import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDcvWnBqTSS77HBuPs-ay8XqlsPQ-L6g24",
  authDomain: "react-fermazz.firebaseapp.com",
  projectId: "react-fermazz",
  storageBucket: "react-fermazz.appspot.com",
  messagingSenderId: "140775625426",
  appId: "1:140775625426:web:c19ad4c4f125c4ea2cd30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Lamo a firestone
const db = getFirestore(app)

export default db
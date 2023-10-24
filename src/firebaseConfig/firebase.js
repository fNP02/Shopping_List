// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from '@firebase/firestore'

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb8i-VNcL7aDUIE0mSnpozewqq7fo2LZ8",
  authDomain: "shopping-list-2561c.firebaseapp.com",
  projectId: "shopping-list-2561c",
  storageBucket: "shopping-list-2561c.appspot.com",
  messagingSenderId: "1087439443220",
  appId: "1:1087439443220:web:2ed18c1ebdd75ec2809e01",
  measurementId: "G-B15M5QSL9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
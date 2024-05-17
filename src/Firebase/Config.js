import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY7kq5A5SpHKZ40cnl3BPIoz8tmej4bb8",
  authDomain: "burger-mate-b5b77.firebaseapp.com",
  projectId: "burger-mate-b5b77",
  storageBucket: "burger-mate-b5b77.appspot.com",
  messagingSenderId: "583807432606",
  appId: "1:583807432606:web:de09b585edb6b1d416088f",
  measurementId: "G-GMMGF2F1RW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
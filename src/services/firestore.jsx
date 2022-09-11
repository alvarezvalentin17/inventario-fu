
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD863jSOAXvTasEKIpvBTpO3t-kc6yvKpI",
  authDomain: "stockti.firebaseapp.com",
  projectId: "stockti",
  storageBucket: "stockti.appspot.com",
  messagingSenderId: "118672008179",
  appId: "1:118672008179:web:de0c4c0a6229c2be4ba886"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default db;
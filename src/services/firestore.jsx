
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBaLw63G6Y5SRpY6NYXx7HUtJ__9KkrkL4",
  authDomain: "inventariofu.firebaseapp.com",
  projectId: "inventariofu",
  storageBucket: "inventariofu.appspot.com",
  messagingSenderId: "306685268017",
  appId: "1:306685268017:web:02a983609733c0abf44510"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default db;
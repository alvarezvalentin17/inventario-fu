
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
//Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyD863jSOAXvTasEKIpvBTpO3t-kc6yvKpI",
//   authDomain: "stockti.firebaseapp.com",
//   projectId: "stockti",
//   storageBucket: "stockti.appspot.com",
//   messagingSenderId: "118672008179",
//   appId: "1:118672008179:web:de0c4c0a6229c2be4ba886"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDWz38TelygDN8Ti-CnkHWBA8msVe65hUA",
  authDomain: "stock-ti-testing.firebaseapp.com",
  projectId: "stock-ti-testing",
  storageBucket: "stock-ti-testing.appspot.com",
  messagingSenderId: "131690804048",
  appId: "1:131690804048:web:f299dcb99b2e2dd037f255"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default db;
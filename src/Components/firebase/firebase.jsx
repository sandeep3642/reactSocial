import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1lsNv5-SNqHtG2sGe7jdh0e7NPGjVtAg",
  authDomain: "media-63b42.firebaseapp.com",
  projectId: "media-63b42",
  storageBucket: "media-63b42.appspot.com",
  messagingSenderId: "623771255094",
  appId: "1:623771255094:web:8ae4b06a1998426343b397"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMYGbLry-rMMSJeaFrP6vlazcaomo2wOE",
  authDomain: "triple7tatou.firebaseapp.com",
  projectId: "triple7tatou",
  storageBucket: "triple7tatou.appspot.com",
  messagingSenderId: "401146497015",
  appId: "1:401146497015:web:fec3e100621561501990f2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//get collection
export const servicesCollection = collection(db, 'services');
export const tattooCategoriesCollection = collection(db, 'tattooCategories');
export const tattooGalleryCollection = collection(db, 'tattooGallery');
export const piercingGalleryCollection = collection(db, 'piercingGallery');
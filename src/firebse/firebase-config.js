 import { initializeApp } from "firebase/app";
import { getFirestore,} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBjKdpz2fG8qFQwUpFH72--55KgbGVYOWY",
  authDomain: "elpidio-e3ec0.firebaseapp.com",
  projectId: "elpidio-e3ec0",
  storageBucket: "elpidio-e3ec0.appspot.com",
  messagingSenderId: "515589842918",
  appId: "1:515589842918:web:d816a8fb327c6a08281827"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

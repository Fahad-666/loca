import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0etCm1_SnLnKM9h9djHoV_LycJTwunKw",
    authDomain: "pk-chat-a0bc0.firebaseapp.com",
    projectId: "pk-chat-a0bc0",
    storageBucket: "pk-chat-a0bc0.firebasestorage.app",
    messagingSenderId: "737368819687",
    appId: "1:737368819687:web:9f0f6a3f1a92d06d6f9f42",
    measurementId: "G-2YD0KKZ069"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

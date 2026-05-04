import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkDD1sU3aAsBfKD7nc278obJF_mjTFCQM",
  authDomain: "khalid-portfolio2026.firebaseapp.com",
  projectId: "khalid-portfolio2026",
  storageBucket: "khalid-portfolio2026.firebasestorage.app",
  messagingSenderId: "557589634292",
  appId: "1:557589634292:web:6640c2005c01059c6112a1",
  measurementId: "G-4546DBNNPN",
};

export const app = initializeApp(firebaseConfig);

export const analytics = isSupported()
  .then((supported) => (supported ? getAnalytics(app) : null))
  .catch(() => null);

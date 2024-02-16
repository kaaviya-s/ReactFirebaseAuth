import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDi9wHZZoyWz0Uo1-62OVrg7MMTehAe3HQ",
    authDomain: "react-firebase-auth-56ed8.firebaseapp.com",
    projectId: "react-firebase-auth-56ed8",
    storageBucket: "react-firebase-auth-56ed8.appspot.com",
    messagingSenderId: "222361790752",
    appId: "1:222361790752:web:2ea8f8807520cb67720f45",
    measurementId: "G-0ZDE88QCZK"
  };

  const app = initializeApp(firebaseConfig);

  export const firebaseAuth=getAuth(app);
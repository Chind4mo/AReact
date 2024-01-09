import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { productos } from './products.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqhOcV5Xn_8P9msX0yNK9rBgj6jx78cK8",
  authDomain: "react1-c2a84.firebaseapp.com",
  projectId: "react1-c2a84",
  storageBucket: "react1-c2a84.appspot.com",
  messagingSenderId: "1020430904705",
  appId: "1:1020430904705:web:dd468896f060266b508c80",
  measurementId: "G-VT6KPDQ5RF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// productos.forEach((productos) => {
//   addDoc(collection(db, 'productos'), productos)
//   .then((docRef => {
//     console.log('Documento agregado con Id:', docRef.id)
//   }))
//   .catch((error) => {
//     console.error('Error al agregar documentos', error)
//   })
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
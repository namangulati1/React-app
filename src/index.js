import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrLeUjHXIe9G0eVj2tyuG-M9wync87Fvc",
  authDomain: "cart-7d329.firebaseapp.com",
  projectId: "cart-7d329",
  storageBucket: "cart-7d329.appspot.com",
  messagingSenderId: "719972967533",
  appId: "1:719972967533:web:3c757ee9100c79995ccb64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

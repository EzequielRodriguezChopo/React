import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAP8aAoL-7bsvHK0fxJOgG8KaZMwsJnCJg",
  authDomain: "react-2022-428db.firebaseapp.com",
  projectId: "react-2022-428db",
  storageBucket: "react-2022-428db.appspot.com",
  messagingSenderId: "1035591083396",
  appId: "1:1035591083396:web:0de023158771dd78d7a9d1"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)

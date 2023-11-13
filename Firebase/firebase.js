// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjEUKpIFwNE9Q8kByWj9DpgUSZL2qQ-Qg",
  authDomain: "novotec-amostra.firebaseapp.com",
  projectId: "novotec-amostra",
  storageBucket: "novotec-amostra.appspot.com",
  messagingSenderId: "141733226931",
  databaseURL: "https://novotec-amostra-default-rtdb.firebaseio.com",
  appId: "1:141733226931:web:4bbe40eb7e6b75ba4d43c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }
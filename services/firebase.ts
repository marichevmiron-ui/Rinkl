import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDlRdUzoMEcWL9BreQLNuNq7JnwKk6ZPXM",
  authDomain: "talker-7e14c.firebaseapp.com",
  databaseURL: "https://talker-7e14c-default-rtdb.firebaseio.com",
  projectId: "talker-7e14c",
  storageBucket: "talker-7e14c.firebasestorage.app",
  messagingSenderId: "615957572269",
  appId: "1:615957572269:web:6b082400bbdd3a69d23424",
  measurementId: "G-KEDM752JXL"
};

// Initialize only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
export const storage = firebase.storage();
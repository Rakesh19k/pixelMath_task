import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIWKuJ7O-XFY_-hMvP1Q6bvHp0dweSLAM",
  authDomain: "task-c294f.firebaseapp.com",
  projectId: "task-c294f",
  storageBucket: "task-c294f.appspot.com",
  messagingSenderId: "577296823636",
  appId: "1:577296823636:web:089f6f890f6b81934f84c1",
  measurementId: "G-CENVCSFTTY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;
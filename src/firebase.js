import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1CMX7eh85W3_p3gw_k-JH_nr8SUqMEmY",
  authDomain: "login-5be52.firebaseapp.com",
  projectId: "login-5be52",
  storageBucket: "login-5be52.appspot.com",
  messagingSenderId: "919630400084",
  appId: "1:919630400084:web:64fae8e16fe173c6e1fbc1",
  measurementId: "G-F9CDH34FMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

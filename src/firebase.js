import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA40KQwjvrOtmWoD8RXp5KTLnMFaBNotWg",
  authDomain: "mingle-3a451.firebaseapp.com",
  projectId: "mingle-3a451",
  storageBucket: "mingle-3a451.appspot.com",
  messagingSenderId: "78485946208",
  appId: "1:78485946208:web:253a6c927e5d08f4a86805",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export default firebaseApp;

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMWf89YLFbZTpMqpc9YTyD8IkmsvjHc7I",
  authDomain: "uploading-files-db7ea.firebaseapp.com",
  projectId: "uploading-files-db7ea",
  storageBucket: "uploading-files-db7ea.appspot.com",
  messagingSenderId: "481984513029",
  appId: "1:481984513029:web:ca6fb7454db91a727b086c",
  measurementId: "G-28GW1B5G5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

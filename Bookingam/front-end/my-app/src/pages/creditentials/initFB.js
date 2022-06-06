import { initializeApp } from "firebase/app";
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyDIEFlPECMWoFjYcxgRg7Rf1DBhXdjTruQ",
  authDomain: "cc-uaic-350913.firebaseapp.com",
  databaseURL: "https://cc-uaic-350913-b9a9c.firebaseio.com/",
  projectId: "cc-uaic-350913",
  storageBucket: "cc-uaic-350913.appspot.com",
  messagingSenderId: "481327442034",
  appId: "1:481327442034:web:bc10c2bf4f7affe4b93aeb",
  measurementId: "G-STR7KNL5NC",
};

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);

setPersistence(auth, browserSessionPersistence);

export default firebaseApp;

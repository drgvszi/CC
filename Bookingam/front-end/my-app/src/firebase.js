import { getAuth, onAuthStateChanged, browserSessionPersistence, setPersistence } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDIEFlPECMWoFjYcxgRg7Rf1DBhXdjTruQ",
  authDomain: "cc-uaic-350913.firebaseapp.com",
  projectId: "cc-uaic-350913",
  storageBucket: "cc-uaic-350913.appspot.com",
  messagingSenderId: "481327442034",
  appId: "1:481327442034:web:bc10c2bf4f7affe4b93aeb",
  measurementId: "G-STR7KNL5NC"
});

const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);

export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError("err");
      }
    });
    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, error }} {...props} />
}
export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
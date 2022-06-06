import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
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
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};

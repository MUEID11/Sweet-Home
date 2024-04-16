import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //slider state
  const [user, setUser] = useState(null);
  //onAuth state
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/BannerData.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  },[]);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth sate of user", currentUser);
      setCurrentUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  },[]);
  const authInfo = {
    user,
    data,
    createUser,
    signInUser,
    currentUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

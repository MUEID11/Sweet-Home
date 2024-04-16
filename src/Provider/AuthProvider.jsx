import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/BannerData.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  },[]);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOutUser = () =>{
    setLoading(true)
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth sate of user", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  },[]);
  const authInfo = {
    user,
    data,
    loading,
    createUser,
    signInUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

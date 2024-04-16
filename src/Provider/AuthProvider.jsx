import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

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
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
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
    googleSignIn,
    logOutUser,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/bannerData.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  },[]);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //update user porfile
  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    } )
  }
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider)
  }
  const logOutUser = () =>{
    setLoading(true);
    setUser(null)
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
    githubSignIn,
    logOutUser,
    updateUserProfile,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

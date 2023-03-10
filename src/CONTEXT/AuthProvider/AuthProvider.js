import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../../FIREBASE/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

const AUTH_CONTEXT = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  ///leading state to prevent the reload log out issue
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  //Sign Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // SignIn With email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  // Google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //On auth state change. Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside auth state change", currentUser);

      setUser(currentUser);
      // When email verify active
      // if (currentUser === null || currentUser.emailVerified) {
      //   setUser(currentUser);
      // }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [reload]);

  //Sign-out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // --------- Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    // return sendPasswordResetEmail(auth, email);
  };
  // Verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
    login,
    updateUserProfile,
    googleLogin,
    logout,
    loading,
    setReload,
    resetPassword,
    verifyEmail,
  };
  return (
    <AUTH_CONTEXT.Provider value={authInfo}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AUTH_CONTEXT);
  return context;
};

export default AuthProvider;

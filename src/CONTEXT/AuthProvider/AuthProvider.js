import React, { createContext, useContext, useState } from "react";
import app from "../../FIREBASE/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AUTH_CONTEXT = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  ///leading state to prevent the reload log out issue
  const [loading, setLoading] = useState(true);

  //Sign Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // SignIn With email and password
  // Update user profile (updateProfile)
  // Google sign in
  // On auth state change. Observe user
  // Sign-out
  // Verify email

  const authInfo = {};
  return (
    <AUTH_CONTEXT.Provider value={authInfo}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AUTH_CONTEXT);
  return context;
};

export default AuthProvider;

import React, { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  async function signUp(email, password, name, phone) {
    try {
      // Await createUserWithEmailAndPassword to get the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("userCredential:", userCredential);
      console.log("user:", user);

      // Await setDoc to save user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date(),
      });

      console.log("User signed up and additional data saved successfully");
    } catch (error) {
      console.log("errorCode:", error.code);
      console.log("errorMessage:", error.message);
    }
  }

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      toast.error("Incorrect password !");

      console.log("sign in error:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}

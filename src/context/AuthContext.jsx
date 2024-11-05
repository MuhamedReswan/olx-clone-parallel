import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {

const [user, setUser]=useState(null);


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

   // Set the display name
   await updateProfile(user, {
    displayName: name,
  });


      // Await setDoc to save user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date(),
      });

      console.log("User signed up and additional data saved successfully");
    } catch (error) {
      console.log("Sign-in error:", error.code, error.message);
      if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password!");
      } else if (error.code === 'auth/user-not-found') {
        toast.error("User not found!");
      } else {
        toast.error("Sign-in failed!");
      }
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


  async function logout() {
    
await signOut(auth).then(() => {
  return;
}).catch((error) => {
  console.log("error when log out " + error.message);
});
  }



  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  });


  return (
    <AuthContext.Provider value={{ signUp, signIn, logout ,user}}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}


// AuthContext.js
import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from './Config';

const AuthContext = createContext(null);

async function signup(email, password, name) {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = collection(db, "users"); 
        const newUser = {
            name,
            email,
        };
    await addDoc(userRef, newUser); 
    return userCredential;
} catch (error) {
    console.error("Signup failed:", error.message);
    throw error;
}
}

async function login(email, password) {
  const auth = getAuth();
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
        console.error("Login failed:", error.message);
        throw error;
    }
}

async function logout() {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("Logout successful!");
    } catch (error) {
        console.error("Logout failed:", error.message);
        throw error;
    }
}

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => setCurrentUser(user));
    }, []);
    
    return (
        <AuthContext.Provider value={{ signup, login, logout, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
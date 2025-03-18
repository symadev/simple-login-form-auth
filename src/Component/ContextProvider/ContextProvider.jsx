import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from '../../Firebase/Firebase';


export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const name= 'potato alu mia';

   


const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}


  const signInUser =  (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)

}

const signOutUser = () =>{
    return signOut(auth);
}



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('currently logged user', currentUser);
        setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
}, []);

 

// why we use this portion?
// ChatGPT said:
// এই useEffect অংশটি ব্যবহারের মূল কারণ হলো Firebase Authentication-এর মাধ্যমে লগইন অবস্থার
//  (authentication state) পরিবর্তনগুলি পর্যবেক্ষণ করা এবং সেটি React state (user) এর মধ্যে সংরক্ষণ করা।



//reload korle jate hairai na jai console hote 

// onAuthStateChanged(auth, currentUser => {
//     if (currentUser) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//    console.log('currently logged user',currentUser);
//    setUser(currentUser);
//       // ...
//     } else {
//       // User is signed out
//       console.log('no user logged in');
//       setUser(null);
//     }
//   });



    const authInfo = {
        name,
        createUser,
        signInUser,
        signOutUser,
        user
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
    console.log(loggedUser)

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update profile
    const updateInformation = (userInformation, name, image) => {
        return updateProfile(userInformation, {
            displayName: name,
            photoURL: image
        }) 
    }

    // Log out
    const logOut = () => {
        signOut(auth)
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { createUser, 
        user, 
        login,
        loggedUser,
        setLoggedUser,
        updateInformation,
        logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
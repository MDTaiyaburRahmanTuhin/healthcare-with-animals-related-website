import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firbase/firbase.init";

initializeAuthentication();
const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState('')
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.users)
            })
            .finally(() => setIsLoading(false));


    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, users => {
            if (users) {
                setUsers(users);
            }
            else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 charcter long')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        users,
        isLoading,
        signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handlePassword,
        logOut,
        toggleLogin,
        isLogin,
        handleName,
        error
    }
}
export default useFirebase;
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase/config.js";
import {login, logout} from "../store/auth/index.js";
import {startLoadingNotes} from '../store/journal/index.js'

export const useCheckAuth = () => {
    const {status} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout())
            const {uid, email, displayName, photoURL} = user;
            dispatch(login({uid, email, displayName, photoURL}))
            dispatch( startLoadingNotes() )
        });
    }, []);

    return{
        status,
    }
}
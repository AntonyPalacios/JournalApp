import {checkingCredentials, login, logout} from "./authSlice.js";
import {
    loginWithEmailAndPassword,
    logoutFirebase,
    signInWithEmail,
    signInWithGoogle
} from "../../firebase/providers.js";
import {clearNotesLogout} from "../journal/index.js";

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle()
        console.log(result)
        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({email,password,displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok,uid,photoURL,errorMessage} = await signInWithEmail({email,password,displayName})
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid,displayName,email,photoURL}))
    }
}

export const startLoginWithEmailAndPassword = ({email,password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok,uid, photoURL,errorMessage,displayName}
            = await loginWithEmailAndPassword({email,password})
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid,displayName,email,photoURL}))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout({}));
    }
}
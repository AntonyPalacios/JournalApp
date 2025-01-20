import {GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {firebaseAuth} from "./config.js";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName, email, photoURL,uid} = result.user;
        return{
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    }catch (error) {
        console.log(error)
        return{
            ok:false,
            errorMessage: error.message,
        }
    }
}

export const signInWithEmail = async ({email, password, displayName}) => {
    try {
        const response = await createUserWithEmailAndPassword(firebaseAuth,email, password)
        const {uid,photoURL} = response.user;
        await updateProfile(firebaseAuth.currentUser, {
            displayName,
        });
        return{
            ok:true,
            uid,photoURL,email,displayName
        }
    }catch (error) {
        return{
            ok:false,
            errorMessage: error.message,
        }
    }
}
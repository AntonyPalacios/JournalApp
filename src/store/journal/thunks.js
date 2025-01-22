import {collection, doc, setDoc} from 'firebase/firestore/lite'
import {firebaseDB} from "../../firebase/config.js";
import {addNewEmptyNote, savingNewNote, setActiveNote, setNotes} from "./journalSlice.js";
import {loadNotes} from "../../helpers/index.js";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        console.log('starting new note');
        //const {uid} = useSelector((state) => state.auth);
        const {uid} = getState().auth

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch,getState) => {
        const {uid} = getState().auth
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes));
    }
}
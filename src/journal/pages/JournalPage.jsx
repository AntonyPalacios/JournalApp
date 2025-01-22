import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NoteView, NothingSelectedView} from "../views/index.js";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {startNewNote} from "../../store/journal/index.js";

export const JournalPage = () => {
    const dispatch = useDispatch();
    const {isSaving, active} = useSelector((state) => state.journal);
    const onClickNewNote = () => {
        dispatch(startNewNote());
    }
    return (
        <JournalLayout>
            {   !active
                ? <NothingSelectedView/>
                : <NoteView/>}

            <IconButton
                onClick={onClickNewNote}
                size='large'
                disabled={isSaving}
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    bottom: 50,
                    right: 50,
                }}
            >
                <AddOutlined sx={{fontSize: 30}}/>
            </IconButton>
        </JournalLayout>
    );
};

import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NoteView, NothingSelectedView} from "../views/index.js";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>

          <NothingSelectedView/>
        {/*<NoteView/>*/}
            <IconButton
                size='large'
                sx={{
                    color:'white',
                    backgroundColor:'error.main',
                    ':hover':{backgroundColor:'error.main', opacity:0.9},
                    position:'fixed',
                    bottom:50,
                    right:50,
                }}
            >
                <AddOutlined sx={{fontSize: 30}} />
            </IconButton>
        </JournalLayout>
    );
};

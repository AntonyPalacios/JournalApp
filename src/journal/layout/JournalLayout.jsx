import {Box} from "@mui/material";
import {NavBar} from "../components/index.js";

const drawerWidth = 240

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {/*    Navbar */}
            <NavBar drawerWidth={drawerWidth}/>
        {/*    Sidebar */}
            <Box component='main'
                sx={{flexGrow: 1, p: 3}}
            >
            {/*    Toolbar */}
                {children}
            </Box>
        </Box>
    );
};

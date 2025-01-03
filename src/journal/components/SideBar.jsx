import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

export const SideBar = ({drawerWidth = 240}) => {
    return (
       <Box
           component='nav'
           sx={{width: {sm:drawerWidth}, flexShrink:{sm:0}}}
       >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: {xs:'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div' >Antony Palacios</Typography>
                </Toolbar>
                <Divider/>
                <List component='nav'>
                    {['Enero','Febrero','Marzo','Abril'].map((text) => (
                        <ListItem
                            key={text}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Probando los features que nos brinda Material UI'} />

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
       </Box>
    );
};

import {CssBaseline, ThemeProvider} from "@mui/material";
import {purpleTheme} from "./purpleTheme.js";

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

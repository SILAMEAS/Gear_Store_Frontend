import {ThemeProvider} from "@mui/material";
import {PropsWithChildren} from "react";
import theme from "./theme.tsx";

const AppProvider = ({children}: PropsWithChildren) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppProvider;
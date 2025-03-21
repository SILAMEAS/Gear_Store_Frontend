import {PropsWithChildren} from "react";
import {ThemeProvider} from "./ThemeProvider.tsx";
import {SnackbarProvider} from "notistack";

const AppProvider = ({children}: PropsWithChildren) => {
    return (
        <ThemeProvider>
            <SnackbarProvider>
                {children}
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default AppProvider;
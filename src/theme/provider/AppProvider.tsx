import {PropsWithChildren} from "react";
import {SnackbarProvider} from "notistack";
import {ThemeProvider} from "@theme/provider/ThemeProvider.tsx";

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
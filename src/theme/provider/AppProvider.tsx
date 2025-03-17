import {PropsWithChildren, Suspense} from "react";
import {ThemeProvider} from "./ThemeProvider.tsx";
import { SnackbarProvider } from "notistack";
const AppProvider = ({children}: PropsWithChildren) => {
    return (
        <Suspense fallback={null}>
            <ThemeProvider>
                <SnackbarProvider>
                    {children}
                </SnackbarProvider>
            </ThemeProvider>
        </Suspense>
    );
};

export default AppProvider;
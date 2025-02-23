import {PropsWithChildren, Suspense} from "react";
import {ThemeProvider} from "./ThemeProvider.tsx";

const AppProvider = ({children}: PropsWithChildren) => {
    return (
        <Suspense fallback={null}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Suspense>
    );
};

export default AppProvider;
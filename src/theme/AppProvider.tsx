import {ThemeProvider} from "@mui/material";
import {PropsWithChildren, Suspense} from "react";
import theme from "./theme.tsx";
import {useProtectedRoute} from "../utils/hooks/useProtectedRoute.tsx";

const AppProvider = ({children}: PropsWithChildren) => {
    const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
    if(resultRefreshToken.isLoading||resultUserDetail.isLoading||resultUserDetail.isFetching){
        return null
    }

    return (
        <Suspense fallback={null}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Suspense>
    );
};

export default AppProvider;
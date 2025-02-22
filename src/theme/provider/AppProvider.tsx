import {PropsWithChildren, Suspense} from "react";
import {useProtectedRoute} from "../../utils/hooks/useProtectedRoute.tsx";
import {ThemeProvider} from "./ThemeProvider.tsx";

const AppProvider = ({children}: PropsWithChildren) => {
    const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
    if(resultRefreshToken.isLoading||resultUserDetail.isLoading||resultUserDetail.isFetching){
        return null
    }

    return (
        <Suspense fallback={null}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Suspense>
    );
};

export default AppProvider;
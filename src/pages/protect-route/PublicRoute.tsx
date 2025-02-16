import PublicLayout from "../page-share/products/PublicLayout.tsx";
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {Navigate} from "react-router-dom";
import {Route} from "../../constants/Route.ts";
// App config provider
export const PublicRoute = () => {
    const {currentData,isLoading,isFetching}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    if(isFetching||isLoading){
        return <> loading ... </>
    }
    if(currentData?.is_superuser){
        return <Navigate to={Route.admin.HOME} replace/>
    }else if(!currentData?.is_superuser && currentData?.is_active){
        return <Navigate to={Route.endUser.HOME} replace/>
    }else
        return <PublicLayout/>
};

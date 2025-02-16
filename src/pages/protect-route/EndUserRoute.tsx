import UserLayout from "../user/UserLayout.tsx";
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {Navigate} from "react-router-dom";
import {Route} from "../../constants/Route.ts";

export const EndUserRoute = () => {
    const {currentData,isLoading,isFetching}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    if(isFetching||isLoading){
        return <> loading ... </>
    }
    if(currentData?.is_active){
        if(currentData?.is_superuser){
            return <Navigate to={Route.admin.HOME} replace/>
        }
        return <Navigate to={Route.endUser.HOME} replace/>
    }
    if(!currentData){
        return <Navigate to={Route.public.LOGIN} replace/>
    }
    return <UserLayout />
};
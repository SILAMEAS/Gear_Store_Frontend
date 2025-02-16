import AdminLayout from "../admin/AdminLayout.tsx";
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {Navigate} from "react-router-dom";
import {Route} from "../../constants/Route.ts";

export const AdminRoute = () => {
    const {currentData,isFetching,isLoading}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    if(currentData?.is_active){
        if(!currentData?.is_superuser)
            return <Navigate to={Route.endUser.HOME} replace/>
    }
    if(!currentData){
        return <Navigate to={Route.public.LOGIN} replace/>
    }
    if(isFetching||isLoading){
        return <> loading ... </>
    }
    return <AdminLayout />
};
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import {Route} from "../../constants/Route.ts";
import React from "react";

const useCheckAuth = () => {
    const {currentData:userDetail,isLoading:isUserDetailLogin}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    const {navigate}=useGlobalHook()
     React.useEffect(()=>{
         if(userDetail?.is_active){
             if(userDetail?.is_superuser){
                 navigate(Route.admin.HOME)
             }else {
                 navigate(Route.endUser.HOME)
             }
         }else {
             navigate(Route.ROOT)
         }
     },[userDetail])
    if(isUserDetailLogin){
        return <>loading ... </>
    }
};

export default useCheckAuth;

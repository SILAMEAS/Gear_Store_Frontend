import {useGetUserDetailQuery} from "../../../redux/services/userApi.ts";
import getToken from "../../../utils/local-storage/token/useGetToken.ts";
import useGlobalHook from "../../../utils/hooks/useGlobalHook.tsx";
import {Route} from "../../../constants/Route.ts";
import React from "react";
import {store} from "../../../redux/redux.ts";
import {setUserDetail} from "../../../redux/store/application.ts";

const useCheckAuth = () => {
    const {currentData:userDetail,isFetching}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    const {navigate}=useGlobalHook()
     React.useLayoutEffect(()=>{
         console.log('user',userDetail)
         if(!userDetail){
              navigate(Route.public.LOGIN)
         }
         if(userDetail){
             store.dispatch(setUserDetail(userDetail))
         }
         if(userDetail?.is_active){
             if(userDetail?.is_superuser){
                 navigate(Route.admin.HOME);
             }else {
                 navigate(Route.endUser.HOME);
             }
         }
     },[userDetail,isFetching])
    if(isFetching){
        return <>loading ... </>
    }
};

export default useCheckAuth;

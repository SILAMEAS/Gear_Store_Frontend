import {useAppSelector} from "@redux/redux.ts";
import {RedirectUrlByRole} from "@/constant/Route.ts";
import {Navigate} from "react-router-dom";
import React from "react";
import {EnumRole} from "@redux/services/types/IUserApi.ts";

const useCheckRedirectByRole = () => {
    const {userDetail}=useAppSelector(state=>state.application);
    const checkDirect =React.useCallback(()=>{
        if (userDetail?.role) {
            return <Navigate to={RedirectUrlByRole[userDetail?.role as EnumRole]} replace />;
        }
    },[userDetail?.role])
    return {checkDirect}
};

export default useCheckRedirectByRole;

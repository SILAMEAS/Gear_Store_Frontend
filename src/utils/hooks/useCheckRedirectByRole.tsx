import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import {RedirectUrlByRole} from "../../constants/Route.ts";
import {Navigate} from "react-router-dom";
import React from "react";

const useCheckRedirectByRole = () => {
    const {role}=useAppSelector(state => state.application)
    const checkDirect =React.useCallback(()=>{
        if (role) {
            console.log(role,RedirectUrlByRole[role as EnumRole])
            return <Navigate to={RedirectUrlByRole[role as EnumRole]} replace />;
        }
    },[role])
    return {checkDirect}
};

export default useCheckRedirectByRole;

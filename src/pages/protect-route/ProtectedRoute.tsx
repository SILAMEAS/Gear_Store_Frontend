import {ReactNode} from "react";
import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import {Navigate} from "react-router-dom";
import {RedirectUrlByRole} from "../../constants/Route.ts";
import AppProvider from "../../theme/AppProvider.tsx";

const ProtectedRoute = ({protectedUrlWithRole,render}:{protectedUrlWithRole:EnumRole,render:ReactNode}) => {
    const role = useAppSelector(state => state.application.role);
    if(role.toString().includes(protectedUrlWithRole as string)){
        return <AppProvider>{render}</AppProvider>
    }else {
        return <Navigate to={ RedirectUrlByRole[role as EnumRole]} replace />
    }
};

export default ProtectedRoute;

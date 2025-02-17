import {ReactNode} from "react";
import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import PublicLayout from "../public/PublicLayout.tsx";
import {Navigate} from "react-router-dom";
import {RedirectUrlByRole} from "../../constants/Route.ts";
import AppProvider from "../../theme/AppProvider.tsx";

const ProtectedRoute = ({protectedUrlWithRole=EnumRole.PUBLIC,render=<PublicLayout/>}:{protectedUrlWithRole?:EnumRole,render?:ReactNode}) => {
    const role = useAppSelector(state => state.application.role);
    if(role===protectedUrlWithRole){
        return <AppProvider>{render}</AppProvider>
    }else {
        return <Navigate to={ RedirectUrlByRole[role as EnumRole]} replace />
    }
};

export default ProtectedRoute;

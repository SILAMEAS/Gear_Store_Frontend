import UserLayout from "../user/UserLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import {Route} from "../../constants/Route.ts";
import {Navigate} from "react-router-dom";
import {EnumRole} from "../../redux/store/type.ts";

export const EndUserRoute = () => {
    const role = useAppSelector(state => state.application.role);
    if(role===EnumRole.ADMIN){
        return <Navigate to={Route.admin.HOME} replace />
    }else if(role===EnumRole.PUBLIC){
        return <Navigate to={Route.public.LOGIN} replace />
    }else
        return role===EnumRole.USER&& <UserLayout />
};
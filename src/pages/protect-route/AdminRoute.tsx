import AdminLayout from "../admin/AdminLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import {Route} from "../../constants/Route.ts";
import {Navigate} from "react-router-dom";
import {EnumRole} from "../../redux/store/type.ts";

export const AdminRoute = () => {
    const role = useAppSelector(state => state.application.role);
    if(role===EnumRole.USER){
        return <Navigate to={Route.endUser.HOME} replace />
    }else if(role==EnumRole.PUBLIC){
        return <Navigate to={Route.public.LOGIN} replace />
    }else
        return role===EnumRole.ADMIN&& <AdminLayout />
};
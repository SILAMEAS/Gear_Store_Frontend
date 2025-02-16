import PublicLayout from "../page-share/products/PublicLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import {Route} from "../../constants/Route.ts";
import {useProtectedRoute} from "../../utils/hooks/useProtectedRoute.tsx";
import {Navigate} from "react-router-dom";
import {EnumRole} from "../../redux/store/type.ts";
// App config provider
export const PublicRoute = () => {
    useProtectedRoute();
    const role = useAppSelector(state => state.application.role);
    if(role===EnumRole.ADMIN){
        return <Navigate to={Route.admin.HOME} replace />
    }else if(role==EnumRole.USER){
        return <Navigate to={Route.endUser.HOME} replace />
    }else
        return role===EnumRole.PUBLIC&& <PublicLayout/>
};

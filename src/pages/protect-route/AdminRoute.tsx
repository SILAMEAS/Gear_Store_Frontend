import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import {AdminLayout} from "../../routerLazy.ts";
import {Navigate} from "react-router-dom";
import {Route} from "../../constants/Route.ts";

const AdminRoute = () => {
    const {role}=useAppSelector(state=>state.application);
    return role === EnumRole.ADMIN ? <AdminLayout/>:<Navigate to={Route.ROOT} replace/>
};


export default AdminRoute;

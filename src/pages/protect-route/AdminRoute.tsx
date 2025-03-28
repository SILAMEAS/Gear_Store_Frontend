import {AdminLayout} from "@/routerLazy.ts";
import {Navigate} from "react-router-dom";
import {EnumRole} from "@/redux/services/types/IUserApi.ts";
import {useAppSelector} from "@/redux/redux.ts";
import {Route} from "@constant/Route";

const AdminRoute = () => {
    const {userDetail}=useAppSelector(state=>state.application);
    return  userDetail?.role === EnumRole.ADMIN ? <AdminLayout/>:<Navigate to={Route.ROOT} replace/>
};


export default AdminRoute;

import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import {AdminLayout, PublicRoute} from "../../routerLazy.ts";

const AdminRoute = () => {
    const {role}=useAppSelector(state=>state.application)
    return role === EnumRole.ADMIN ? <AdminLayout/>:<PublicRoute/>
};


export default AdminRoute;

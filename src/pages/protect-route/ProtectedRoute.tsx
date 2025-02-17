import {EnumRole} from "../../redux/store/type.ts";
import {AdminLayout, Login, UserLayout} from "../../routerLazy.ts";
import {useAppSelector} from "../../redux/redux.ts";

const ProtectedRoute = () => {
    const {role}=useAppSelector(state=>state.application)
    switch (role){
        case EnumRole.ADMIN:{
            return <AdminLayout/>
        }
        case EnumRole.USER:{
            return <UserLayout/>
        }
        case EnumRole.PUBLIC:{
            return <UserLayout/>
        }
        default:{
            return <Login/>
        }
    }
};

export default ProtectedRoute;

import {Navigate} from "react-router-dom";
import {Route} from "@/constant/Route.ts";
import {useAppSelector} from "@redux/redux.ts";
import {EnumRole} from "@redux/services/types/IUserApi.ts";
import {UserLayout} from "@/routerLazy.ts";


const EndUserRoute = () => {
    const {userDetail}=useAppSelector(state=>state.application);
    return userDetail?.role===EnumRole.USER ? <UserLayout/>:<Navigate to={Route.ROOT} replace/>
};

export default EndUserRoute;

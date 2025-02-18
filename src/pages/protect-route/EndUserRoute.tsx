import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import {PublicRoute, UserLayout} from "../../routerLazy.ts";

const EndUserRoute = () => {
    const role=useAppSelector(state=>state.application.role)
    return role===EnumRole.USER ? <UserLayout/>:<PublicRoute/>
};

export default EndUserRoute;

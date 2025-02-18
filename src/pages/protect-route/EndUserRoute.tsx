import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import { UserLayout} from "../../routerLazy.ts";
import {Navigate} from "react-router-dom";
import {Route} from "../../constants/Route.ts";

const EndUserRoute = () => {
    const role=useAppSelector(state=>state.application.role)
    return role===EnumRole.USER ? <UserLayout/>:<Navigate to={Route.ROOT} replace/>
};

export default EndUserRoute;

import { PublicLayout} from "../../routerLazy.ts";
import {useProtectedRoute} from "../../utils/hooks/useProtectedRoute.tsx";
import MainLoading from "../../components/loading/MainLoading.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import {EnumRole} from "../../redux/store/type.ts";
import AppProvider from "../../theme/AppProvider.tsx";
import {Navigate} from "react-router-dom";
import {RedirectUrlByRole} from "../../constants/Route.ts";


const PublicRoute = () => {
    const role=useAppSelector(state=>state.application.role)
    const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
    /** When refresh token and user detail is loading or fetching it will log in main loading **/
    if(resultRefreshToken.isLoading||resultUserDetail.isLoading||resultUserDetail.isFetching){
        return <MainLoading/>
    }
    /** if data of refresh token and get user detail is finish it will check depend on role of user login **/
    if(resultUserDetail.currentData){
        /** if you are public it will show public layout */
        if(role===EnumRole.PUBLIC)
            return <AppProvider> <PublicLayout/></AppProvider>
        /** else if user is not public it will redirect to url of role that user login
            example : if you log in as user  it will redirect to /user  routes
                      if you log in as admin it will redirect to /admin routes
         */
        else
            /** navigate to url user log in  **/
            return <Navigate to={RedirectUrlByRole[role as EnumRole]} replace/>
    }else {
        /** if your user detail is null or undefined it will return route of public */
        return <AppProvider> <PublicLayout/></AppProvider>
    }
};

export default PublicRoute;

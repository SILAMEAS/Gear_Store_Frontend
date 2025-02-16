import PublicLayout from "../page-share/products/PublicLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import {useProtectedRoute} from "../../utils/hooks/useProtectedRoute.tsx";
// App config provider
export const PublicRoute = () => {
    useProtectedRoute();
    const role = useAppSelector(state => state.application.role);
    const {navigate}=useGlobalHook();
    if(role==='admin'){
        navigate('/admin')
    }else if(role=='user'){
        navigate('/user')
    }else
        return role==='public'&& <PublicLayout/>
};

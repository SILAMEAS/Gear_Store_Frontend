import AdminLayout from "../admin/AdminLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";

export const AdminRoute = () => {
    const role = useAppSelector(state => state.application.role);
    const {navigate}=useGlobalHook();
    if(role==='user'){
        navigate('/user')
    }else if(role=='public'){
        navigate('/login')
    }else
        return role==='admin'&& <AdminLayout />
};
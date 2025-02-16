import UserLayout from "../user/UserLayout.tsx";
import {useAppSelector} from "../../redux/redux.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";

export const EndUserRoute = () => {
    const role = useAppSelector(state => state.application.role);
    const {navigate}=useGlobalHook();
    if(role==='admin'){
        navigate('/admin')
    }else if(role==='public'){
        navigate('/login')
    }else
        return role==='user'&& <UserLayout />
};
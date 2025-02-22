import {PropsWithChildren} from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";

const CustomRoute = ({Title,route,children}:{Title:string,route:string}&PropsWithChildren) => {
    const {navigate}=useGlobalHook();
    const {pathname}=useGlobalHook();
    return  <ListItem onClick={()=>navigate(route)} sx={{cursor:"pointer"}}>
        <ListItemIcon sx={{color:route===pathname?"primary.main" :"inherit"}}>
            {children}
        </ListItemIcon>
        <ListItemText primary={Title} sx={{color:route===pathname?"primary.main" :"inherit"}}/>
    </ListItem>
};

export default CustomRoute;

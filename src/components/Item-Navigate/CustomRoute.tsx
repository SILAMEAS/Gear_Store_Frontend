import {PropsWithChildren} from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";

const CustomRoute = ({Title,route,children}:{Title:string,route:string}&PropsWithChildren) => {
    const {navigate}=useGlobalHook();
    return  <ListItem onClick={()=>navigate(route)} sx={{cursor:"pointer"}}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={Title} />
    </ListItem>
};

export default CustomRoute;

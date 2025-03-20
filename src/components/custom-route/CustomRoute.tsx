import {PropsWithChildren} from "react";
import {ListItem, ListItemIcon, Tooltip} from "@mui/material";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";

const CustomRoute = ({Title,route,children}:Readonly<{Title:string,route:string}&PropsWithChildren>) => {
    const {navigate,pathname}=useGlobalHook();
    const activeColor=route===pathname?"primary.main" :"Grey.main"
    return  <ListItem onClick={()=>navigate(route)} sx={{cursor:"pointer",bgcolor:route===pathname?"primary.light" :"transparent",py:"10px",borderRadius:"10px",m:"5px",width:"60px"}} >
        <Tooltip title={Title} placement="right-start">
            <ListItemIcon sx={{color:activeColor}}>
                {children}
            </ListItemIcon>
        </Tooltip>
    </ListItem>
};

export default CustomRoute;

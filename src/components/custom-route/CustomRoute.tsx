import {PropsWithChildren} from "react";
import {ListItem, ListItemIcon} from "@mui/material";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import Text from "../text/Text.tsx";

const CustomRoute = ({Title,route,children}:{Title:string,route:string}&PropsWithChildren) => {
    const {navigate,pathname}=useGlobalHook();
    return  <ListItem onClick={()=>navigate(route)} sx={{cursor:"pointer"}}>
        <ListItemIcon sx={{color:route===pathname?"primary.main" :"inherit"}}>
            {children}
        </ListItemIcon>
        <Text variant={"subtitle1"} sx={{color:route===pathname?"primary.main" :"inherit"}}>{Title}</Text>
    </ListItem>
};

export default CustomRoute;

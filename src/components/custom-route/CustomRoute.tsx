import {PropsWithChildren} from "react";
import {ListItem, ListItemIcon, Stack, Tooltip} from "@mui/material";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import Text from "../text/Text.tsx";

const CustomRoute = ({Inner=false,Title,route,children}:Readonly<{Inner?:boolean,Title:string,route:string}&PropsWithChildren>) => {
    const {navigate,pathname}=useGlobalHook();
    const activeColor=route===pathname?"primary.main" :"Grey.main";
    if(Inner){
        return  <ListItem onClick={()=>navigate(route)} sx={{cursor:"pointer",borderRadius:"10px",m:"10px",width:"auto",height:"30px",bgcolor:route===pathname?"Blue.main":"inherit"}} >
            <ListItem>
                <Stack direction={"row"} gap={"10px"} alignItems={"center"} justifyContent={"center"} >
                    {children} <Text variant={"body2"} color={"inherit"}>{Title}</Text>
                </Stack>
            </ListItem>
        </ListItem>
    }
    return  <ListItem onClick={()=>navigate(route)} sx={{
        cursor:"pointer",
        bgcolor:route===pathname?"Blue.light" :"transparent",
        py:"10px",
        borderRadius:"10px",
        m:"5px",
        mr:0,
        width:"60px",
        border:route===pathname?1:0,
        borderRight:route===pathname?5:0,
        borderColor:"primary.main"}} >
        <Tooltip title={Title} placement="right-start">
            <ListItemIcon sx={{color:activeColor}}>
                {children}
            </ListItemIcon>
        </Tooltip>
    </ListItem>
};

export default CustomRoute;

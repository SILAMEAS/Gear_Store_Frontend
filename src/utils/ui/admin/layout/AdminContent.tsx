import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";
import {Route} from "../../../../constants/Route.ts";

const AdminContent = () =>{
    const {pathnameRemoveLastSlash}=useCheckUrl();
    const defaultSxStyle={
        height:"calc(100vh - 70px)",
        overflow:"hidden",
        flexGrow:1,
        pt:{lg: "20px", md: "20px"},
        px:{lg: "50px", md: "20px"}

    }
    const handleStyleAdminContent=()=>{
        const sxStyle=defaultSxStyle
        if(pathnameRemoveLastSlash.includes(Route.admin.SETTING)){
            console.log("in")
            return {...sxStyle,px:0,pt:0}
        }else {
            return sxStyle;
        }
    }
    return  <Stack  sx={handleStyleAdminContent()} >
        <Outlet />
    </Stack>
}

export default AdminContent;

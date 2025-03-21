import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";
import PageTransition from "../../../../components/loading/PageTransition.tsx";

const AdminContent = () =>{
    const {IncludeSettingsPage}=useCheckUrl();
    const defaultSxStyle={
        height:"calc(100vh - 70px)",
        overflow:"hidden",
        flexGrow:1,
        pt:{lg: "20px", md: "20px"},
        px:{lg: "50px", md: "20px"}

    }
    const handleStyleAdminContent=()=>{
        const sxStyle=defaultSxStyle
        if(IncludeSettingsPage){
            return {...sxStyle,px:0,pt:0}
        }else {
            return sxStyle;
        }
    }
    return  <Stack  sx={handleStyleAdminContent()} >
        {
            IncludeSettingsPage?
                <Outlet />:
                <PageTransition>
                    <Outlet />
                </PageTransition>
        }

    </Stack>
}

export default AdminContent;

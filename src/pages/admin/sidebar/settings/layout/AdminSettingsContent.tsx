import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import HeroSections from "../../../../../utils/ui/shares/HeroSections.tsx";

const AdminSettingsContent = () =>{
    return  <Stack width={"100%"}>
        <HeroSections Slash={3}/>
        <Stack p={"20px"}>
            <Outlet />
        </Stack>
    </Stack>
}

export default AdminSettingsContent;

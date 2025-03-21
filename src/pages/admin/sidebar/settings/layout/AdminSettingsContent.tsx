import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import HeroSections from "../../../../../utils/ui/shares/HeroSections.tsx";
import PageTransition from "../../../../../components/loading/PageTransition.tsx";

const AdminSettingsContent = () =>{
    return  <Stack width={"100%"}>
        <HeroSections Slash={3}/>
            <PageTransition>
                <Stack p={"20px"} height={"calc( 100vh - 120px)"}>
                <Outlet />
                </Stack>
            </PageTransition>
    </Stack>
}

export default AdminSettingsContent;

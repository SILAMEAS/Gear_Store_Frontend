import useRKTFromStore from "../../../utils/hooks/useRTKFromStore.tsx";
import {Stack} from "@mui/material";
import AdminSettingsContent from "./settings/layout/AdminSettingsContent.tsx";
import SettingsSideBar from "./settings/layout/SettingsSideBar.tsx";

const AdminSettingPage = () => {
    const {userDetail}=useRKTFromStore();
    if(!userDetail){
        return <>loading ... </>
    }
    return <Stack overflow={"hidden"}>
        {/*** Header  **/}
        {/*<AdminHeader />*/}
        <Stack direction={"row"} height={"calc(100vh - 70px)"} width={"100%"}>
            {/** Sidebar **/}
            <SettingsSideBar />
            {/*** Content of admin  **/}
            <AdminSettingsContent/>
        </Stack>
    </Stack>}

export default AdminSettingPage;

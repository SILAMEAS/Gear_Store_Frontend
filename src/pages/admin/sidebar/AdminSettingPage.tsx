import {Stack} from "@mui/material";
import useRKTFromStore from "@utils/hooks/useRTKFromStore.tsx";
import SettingsSideBar from "@pages/admin/sidebar/settings/layout/SettingsSideBar.tsx";
import AdminSettingsContent from "@pages/admin/sidebar/settings/layout/AdminSettingsContent.tsx";

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

import useRKTFromStore from "../../../utils/hooks/useRTKFromStore.tsx";
import {Stack} from "@mui/material";

const AdminSettingPage = () => {
    const {userDetail}=useRKTFromStore();
    if(!userDetail){
        return <>loading ... </>
    }
    return <Stack>Setting</Stack>}

export default AdminSettingPage;

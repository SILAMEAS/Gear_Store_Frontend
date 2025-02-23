import ProfileSetting from "./profile/ProfileSetting.tsx";
import useRKTFromStore from "../../../utils/hooks/useRTKFromStore.tsx";

const AdminSettingPage = () => {
    const {userDetail}=useRKTFromStore();
    if(!userDetail){
        return <>loading ... </>
    }
    return <ProfileSetting userDetail={userDetail}/>}

export default AdminSettingPage;

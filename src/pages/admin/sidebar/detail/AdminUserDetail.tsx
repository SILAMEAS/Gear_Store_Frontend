import useRKTFromStore from "@utils/hooks/useRTKFromStore.tsx";
import ProfileSetting from "@pages/admin/sidebar/profile/ProfileSetting.tsx";


const AdminUserDetail = () => {
    const {userSelected}=useRKTFromStore();
    if(!userSelected){
        return <>loading ... </>
    }
    return <ProfileSetting userDetail={userSelected}/>
};

export default AdminUserDetail;

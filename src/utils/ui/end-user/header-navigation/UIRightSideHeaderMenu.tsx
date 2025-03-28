import {Stack} from "@mui/material";
import useCheckUrl from "@utils/hooks/useCheckUrl.tsx";
import useRTKFromStore from "@utils/hooks/useRTKFromStore.tsx";
import {EnumRole} from "@redux/services/types/IUserApi.ts";
import HeaderSearch from "@components/header/HeaderSearch.tsx";
import getToken from "@utils/local-storage/token/useGetToken.ts";
import HeaderWishlist from "@components/header/HeaderWishlist.tsx";
import HeaderCart from "@components/header/HeaderCart.tsx";
import HeaderProfile from "@components/header/HeaderProfile.tsx";

const UIRightSideHeaderMenu = () => {
    const {IsLoginPage}=useCheckUrl();
    const {userDetail}=useRTKFromStore();
    const isUser=userDetail?.role=== EnumRole.USER;
    return (
        <Stack minWidth={"80px"} direction={"row"} sx={{alignItems: "center",justifyItems:"center"}}>
            {/** Search  **/}
            {
                isUser&&  <HeaderSearch/>
            }
            {/** Wishlist  **/}
            {
                getToken().access&&isUser&& <HeaderWishlist/>
            }
            {/** Cart  **/}
            {
                getToken().access&&isUser&&<HeaderCart/>
            }
            {/** Profile  **/}
            {
                !IsLoginPage&&   <HeaderProfile/>
            }
        </Stack>
    );
};

export default UIRightSideHeaderMenu;

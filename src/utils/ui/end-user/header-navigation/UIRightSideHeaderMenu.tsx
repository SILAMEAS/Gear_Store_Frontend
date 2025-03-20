import {Stack} from "@mui/material";
import HeaderSearch from "../../../../components/header/HeaderSearch.tsx";
import getToken from "../../../local-storage/token/useGetToken.ts";
import HeaderWishlist from "../../../../components/header/HeaderWishlist.tsx";
import HeaderCart from "../../../../components/header/HeaderCart.tsx";
import HeaderProfile from "../../../../components/header/HeaderProfile.tsx";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";
import useRTKFromStore from "../../../hooks/useRTKFromStore.tsx";
import {EnumRole} from "../../../../redux/services/types/IUserApi.ts";

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

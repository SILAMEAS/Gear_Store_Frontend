import {Stack} from "@mui/material";
import HeaderSearch from "../../components/header/HeaderSearch.tsx";
import getToken from "../local-storage/token/useGetToken.ts";
import HeaderWishlist from "../../components/header/HeaderWishlist.tsx";
import HeaderCart from "../../components/header/HeaderCart.tsx";
import HeaderProfile from "../../components/header/HeaderProfile.tsx";
import useCheckUrl from "../hooks/useCheckUrl.tsx";

const UILeftSideHeaderMenu = () => {
    const {IsLoginPage}=useCheckUrl();
    return (
        <Stack minWidth={'80px'} direction={"row"} sx={{alignItems: "center"}}>
            {/** Search  **/}
            <HeaderSearch/>
            {/** Wishlist  **/}
            {
                getToken().access&&<HeaderWishlist/>
            }
            {/** Cart  **/}
            {
                getToken().access&&<HeaderCart/>
            }
            {/** Profile  **/}
            {
                !IsLoginPage&&   <HeaderProfile/>
            }
        </Stack>
    );
};

export default UILeftSideHeaderMenu;

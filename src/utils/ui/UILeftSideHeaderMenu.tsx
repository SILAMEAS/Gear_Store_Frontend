import {Stack} from "@mui/material";
import HeaderCart from "../../components/header/HeaderCart.tsx";
import HeaderProfile from "../../components/header/HeaderProfile.tsx";
import HeaderWishlist from "../../components/header/HeaderWishlist.tsx";
import HeaderSearch from "../../components/header/HeaderSearch.tsx";
import getToken from "../local-storage/token/useGetToken.ts";

const UILeftSideHeaderMenu = () => {
    return (
        <Stack direction={"row"} sx={{alignItems: "center"}}>
            {/** Search  **/}
            <HeaderSearch/>
            {/** Wishlist  **/}
            <HeaderWishlist/>
            {/** Cart  **/}
            {
                getToken()?.access&&  <HeaderCart/>
            }
            {/** Profile  **/}
            <HeaderProfile/>
        </Stack>
    );
};

export default UILeftSideHeaderMenu;

import {Stack} from "@mui/material";
import HeaderCart from "../../components/header/HeaderCart.tsx";
import HeaderProfile from "../../components/header/HeaderProfile.tsx";
import HeaderWishlist from "../../components/header/HeaderWishlist.tsx";
import HeaderSearch from "../../components/header/HeaderSearch.tsx";
import useGetLocalStorage from "../hooks/useGetLocalStorage.tsx";

const UILeftSideHeaderMenu = () => {
    const {access}=useGetLocalStorage();
    return (
        <Stack direction={"row"} sx={{alignItems: "center"}}>
            {/** Search  **/}
            <HeaderSearch/>
            {/** Wishlist  **/}
            <HeaderWishlist/>
            {/** Cart  **/}
            {
                access&&  <HeaderCart/>
            }
            {/** Profile  **/}
            <HeaderProfile/>
        </Stack>
    );
};

export default UILeftSideHeaderMenu;

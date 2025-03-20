import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import UIRightSideHeaderMenu from "../../end-user/header-navigation/UIRightSideHeaderMenu.tsx";
import UILogo from "../../end-user/header-navigation/UILogo.tsx";
import Text from "../../../../components/text/Text.tsx";

const AdminHeader: React.FC = () => {
    return (
        <AppBar position="static" sx={{height:"65px",borderColor:"Grey.light"}}>
            <Toolbar>
                <UILogo/>
                <Text variant="h6" component="div" sx={{ flexGrow: 1 ,color:"primary.main"}}/>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                   {/** Handler Header of Admin **/}
                   {/*<AdminHeaderHandler/>*/}
                    <UIRightSideHeaderMenu/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;
import {AppBar, Box, Stack, Toolbar,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCustom from "../../../../components/Drawer/DrawerCustom.tsx";
import UILogo from "../header-navigation/UILogo.tsx";
import {UICenterHeaderMenu} from "../header-navigation/UICenterHeaderMenu.tsx";
import UIRightSideHeaderMenu from "../header-navigation/UIRightSideHeaderMenu.tsx";
import Colors from "../../../../theme/mode/Colors.ts";

const AppHeader = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "black",
        boxShadow: 3,
        width: "100%",
        margin: "0 auto",
          p:0,
          py:"10px",
          height: {sm:80,md:100},
          borderBottom:1,
          borderColor:Colors._ffffff
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
          {/** Mobile UI */}
          <Stack justifyContent={"center"} direction={"row"} alignItems={"center"}>
              <DrawerCustom
                  renderButton={<Box
                  sx={{ display: { xs: "visible", md: "none" }}}
              >
                  <MenuIcon sx={{color:Colors._ffffff}}/>
              </Box>}
                  anchor={"left"}
                  bgcolor={"black"}
              >
                  <Stack>
                      <UILogo  sx={{ display: { xs: "block", md: "none" }}}/>
                      <Stack sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>
                          <UICenterHeaderMenu/>
                      </Stack>
                  </Stack>
              </DrawerCustom>
             <UILogo/>
          </Stack>

        {/** Desk Top UI */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <UICenterHeaderMenu/>
        </Box>

          <UIRightSideHeaderMenu/>

      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

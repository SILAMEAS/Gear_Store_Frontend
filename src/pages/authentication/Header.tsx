import {AppBar, Box, Button, IconButton, Stack, Toolbar,} from "@mui/material";
import HeaderCart from "../../components/Cart/HeaderCart.tsx";
import HeaderProfile from "../../components/profiles/HeaderProfile.tsx";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = ["Home", "About", "Services", "Contact"];

const AppHeader = () => {

  const toggleDrawer = (open: boolean) => {
      console.log(open)
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "black",
        boxShadow: "2px",
        width: "100%",
        margin: "0 auto",
          py:'10px',
          height:100
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
            position:"relative"
        }}
      >
          <Stack justifyContent={'center'} direction={'row'}>
              {/* Mobile Menu: Menu Icon */}
              <IconButton
                  edge="end"
                  aria-label="menu"
                  onClick={() => toggleDrawer(true)}
                  sx={{ display: { xs: "visible", md: "none" }}}
              >
                  <MenuIcon sx={{color:"white"}}/>
              </IconButton>
              <Stack width={'150px'}>
                  <img
                      src={`logo.png`}
                      alt={'logo.png'}
                      loading="lazy"
                  />
              </Stack>
          </Stack>

        {/* Desktop Menu: Buttons for each menu item */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button key={item} sx={{ color: "white", textTransform: "none" }}>
              {item}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <SearchInput /> */}
          <HeaderCart />
          <HeaderProfile />
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

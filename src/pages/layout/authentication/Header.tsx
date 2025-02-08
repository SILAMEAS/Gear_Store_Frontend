import MenuIcon from "@mui/icons-material/Menu";
import {AppBar, Box, Button, IconButton, Stack, Toolbar,} from "@mui/material";
import HeaderCart from "../../../components/HeaderCart";
import HeaderProfile from "../../../components/HeaderProfile";

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
          py:'10px'
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       <Stack width={'150px'}>
           <img
               src={`logo.png`}
               alt={'logo.png'}
               loading="lazy"
           />
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

        {/* Mobile Menu: Menu Icon */}
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

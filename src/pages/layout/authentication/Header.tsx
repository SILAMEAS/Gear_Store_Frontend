import {AppBar, Box, Button, Stack, Toolbar,} from "@mui/material";
import HeaderCart from "../../../components/HeaderCart";
import HeaderProfile from "../../../components/HeaderProfile";

const menuItems = ["Home", "About", "Services", "Contact"];

const AppHeader = () => {

  // const toggleDrawer = (open: boolean) => {
  //     console.log(open)
  // };

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
       <Stack width={'150px'}>
           {/* Mobile Menu: Menu Icon */}
           {/*<IconButton*/}
           {/*    edge="end"*/}
           {/*    aria-label="menu"*/}
           {/*    onClick={() => toggleDrawer(true)}*/}
           {/*    sx={{ display: { xs: "block", md: "none" },position:'absolute' }}*/}
           {/*>*/}
           {/*    <MenuIcon sx={{color:"white"}}/>*/}
           {/*</IconButton>*/}
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

      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

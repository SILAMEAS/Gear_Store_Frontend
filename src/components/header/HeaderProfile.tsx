import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip,} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import useAuth from "../../utils/hooks/useAuth.tsx";
import LoginIcon from "@mui/icons-material/Login";
import {Route} from "../../constants/Route.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import Colors from "../../theme/mode/Colors.ts";

const HeaderProfile = () => {
  console.log("HeaderProfile")
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const {navigate}=useGlobalHook();
  const open = Boolean(anchorEl);
  const {handleLogout}=useAuth();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if(!getToken().access){
    return <IconButton
        size="small"
        sx={{ ml: 2 }}
        onClick={()=>{
          navigate(Route.public.LOGIN)
        }}
    >
      <LoginIcon sx={{color:Colors._ffffff}}/>
    </IconButton>
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center",width:"100%",justifyContent:"flex-end" }}>
        <Tooltip title="Account settings">
          <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          >
          <AccountCircleIcon sx={{color:"primary.main"}}/>
          </IconButton>
          </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: "\"\"",
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default HeaderProfile;

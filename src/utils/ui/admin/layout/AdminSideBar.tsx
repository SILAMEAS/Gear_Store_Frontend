import React from "react";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import UILogo from "../../end-user/header-navigation/UILogo.tsx";
import CustomRoute from "../../../../components/Item-Navigate/CustomRoute.tsx";
import {MenuAdmin} from "../MenuAdmin.tsx";
import useAuth from "../../../hooks/useAuth.tsx";
import {Logout} from "@mui/icons-material";
import ThemeToggle from "../../../../theme/toggle/ThemeToggle.tsx";

const drawerWidth = 240;

const AdminSideBar: React.FC = () => {
    const {handleLogout}=useAuth();
     return   <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                ["& .MuiDrawer-paper"]: { width: drawerWidth, boxSizing: "border-box" },
            }}
        >
            <Stack justifyContent={"space-between"} height={"100%"}>
                {/** Sidebar Top*/}
                <List>
                    <UILogo/>
                    <Divider sx={{mb:"20px"}}/>
                    {
                        MenuAdmin.map(item=>
                            <CustomRoute Title={item.Title} route={item.route} key={item.route+item.Title}>
                                {item.Icon}
                            </CustomRoute>)
                    }
                </List>
                {/** Sidebar Bottom*/}
                <List>
                    <Divider sx={{mb:"20px"}}/>
                        <ThemeToggle label={'Theme'}/>

                        <ListItem onClick={handleLogout} sx={{cursor:"pointer"}}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={"logout"} />
                        </ListItem>
                </List>
            </Stack>
        </Drawer>
}

export default AdminSideBar;

import React from "react";
import {Divider, Drawer, List} from "@mui/material";
import UILogo from "../../end-user/header-navigation/UILogo.tsx";
import CustomRoute from "../../../../components/Item-Navigate/CustomRoute.tsx";
import {MenuAdmin} from "../MenuAdmin.tsx";

const drawerWidth = 240;

const AdminSideBar: React.FC = () => {
     return   <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                ["& .MuiDrawer-paper"]: { width: drawerWidth, boxSizing: "border-box" },
            }}
        >
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
        </Drawer>
}

export default AdminSideBar;

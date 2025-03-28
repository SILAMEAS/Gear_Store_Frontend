import React from "react";
import {List, Stack} from "@mui/material";
import {MenuAdmin} from "@utils/ui/admin/MenuAdmin.tsx";
import CustomRoute from "@components/custom-route/CustomRoute.tsx";

const AdminSideBar: React.FC = () => {
     return  <Stack justifyContent={"space-between"} height={"100%"} width={"fit-content"} borderRight={1} borderColor={"Grey.light"} >
         {/** Sidebar Top*/}
         <List sx={{py:"20px"}}>
             {
                 MenuAdmin.map(item=>
                     <CustomRoute Title={item.Title} route={item.route} key={item.route+item.Title}>
                         {item.Icon}
                     </CustomRoute>)
             }
         </List>
     </Stack>
}

export default AdminSideBar;

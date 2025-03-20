import React from "react";
import {List, Stack} from "@mui/material";
import {MenuSettings} from "../MenuSettings.tsx";
import CustomRoute from "../../../../../components/custom-route/CustomRoute.tsx";
import HeroSections from "../../../../../utils/ui/shares/HeroSections.tsx";


const SettingsSideBar: React.FC = () => {
     return  <Stack  height={"100%"} width={"fit-content"} borderRight={1} borderColor={"Grey.light"} >
         <HeroSections/>
         {/** Sidebar Top*/}
         <List sx={{py:"20px"}}>
             {
                 MenuSettings.map(item=>
                     <CustomRoute Title={item.Title} route={item.route} key={item.route+item.Title} Inner={true}>
                         {item.Icon}
                     </CustomRoute>)
             }
         </List>
     </Stack>
}

export default SettingsSideBar;

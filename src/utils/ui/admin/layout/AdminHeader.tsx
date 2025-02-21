import React, {useState} from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import useGlobalHook from "../../../hooks/useGlobalHook.tsx";
import AdminHeaderHandler from "./AdminHeaderHandler.tsx";

const AdminHeader: React.FC = () => {
    const {location}=useGlobalHook();
    const [label,setLabel]=useState<string>("Dashboard")
    React.useEffect(()=>{
        if(location?.pathname?.split("/")[2]){
            setLabel(location?.pathname?.split("/")[2])
        }else {
            setLabel("Dashboard")
        }
    },[location?.pathname])
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {label.toLocaleUpperCase()}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                   {/** Handler Header of Admin **/}
                   <AdminHeaderHandler/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;
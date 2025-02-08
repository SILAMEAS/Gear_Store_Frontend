import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AppContent = () => <Stack height={'calc(100vh - 100px)'}>
    <Outlet />
</Stack>

export default AppContent;

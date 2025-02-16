import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AppContent = () => <Stack height={"calc(100vh - 150px)"} py={"20px"} px={"50px"} overflow={"auto"}>
    <Outlet />
</Stack>

export default AppContent;

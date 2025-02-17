import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AppContent = () => <Stack height={"calc(100vh - 140px)"} overflow={"hidden"} bgcolor={'black'}>
    <Outlet />
</Stack>

export default AppContent;

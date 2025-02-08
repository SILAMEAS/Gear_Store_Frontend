import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AppContent = () => <Stack overflow={'hidden'}  py={'50px'}>
    <Outlet />
</Stack>;

export default AppContent;

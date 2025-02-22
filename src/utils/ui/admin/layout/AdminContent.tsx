import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AdminContent = () => <Stack height={"calc(100vh - 70px)"} overflow={"hidden"}>
    <Outlet />
</Stack>

export default AdminContent;

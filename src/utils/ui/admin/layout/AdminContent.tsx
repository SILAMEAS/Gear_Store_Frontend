import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";

const AdminContent = () => <Stack height={"calc(100vh - 64px)"} overflow={"hidden"}>
    <Stack justifyContent={"center"} alignItems={"center"} height={"100%"} width={"100%"}>
        <Outlet />
    </Stack>
</Stack>

export default AdminContent;

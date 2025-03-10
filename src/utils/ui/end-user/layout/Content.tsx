import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";

const AppContent = () => {
    const {IsLoginPage}=useCheckUrl();
    return <Stack height={`calc(100vh - ${IsLoginPage?40:140}px)`} overflow={"hidden"} bgcolor={"black"}>
        <Outlet />
    </Stack>
}

export default AppContent;

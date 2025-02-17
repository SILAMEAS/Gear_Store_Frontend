import {Backdrop, CircularProgress} from "@mui/material";

const MainLoading = () => {
    return <Backdrop
        sx={{
            color: "white",
            zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={true}>
        <CircularProgress color="inherit" />
    </Backdrop>
};

export default MainLoading;

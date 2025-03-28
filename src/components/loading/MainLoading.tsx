import {Backdrop, CircularProgress} from "@mui/material";
import Colors from "@theme/mode/Colors.ts";

const MainLoading = () => {
    return <Backdrop
        sx={{
            color:Colors._ffffff,
            zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={true}>
        <CircularProgress color="inherit" />
    </Backdrop>
};

export default MainLoading;

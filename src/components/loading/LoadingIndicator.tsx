import {LinearProgress} from "@mui/material";
import {useNavigation} from "react-router-dom";

const LoadingIndicator = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return isLoading ? (
        <LinearProgress sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100 }} />
    ) : null;
};

export default LoadingIndicator;
import {useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import {useTheme} from "@mui/material";
import {useAppDispatch} from "@redux/redux.ts";

const useGlobalHook = () => {
    const location = useLocation();
    const param = useParams();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const theme = useTheme();
    const [search] = useSearchParams();
    const dispatch = useAppDispatch();
    const clearParams = () => {
        navigate(window.location.pathname, { replace: true }); // Navigates without query params
    };
    return {location, param, navigate, theme, search, pathname, dispatch,clearParams};
};

export default useGlobalHook;
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const usePreservePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/login") { // Prevent storing login page as lastPath
            sessionStorage.setItem("lastPath", location.pathname);
        }
    }, [location.pathname]);
};

export default usePreservePage;
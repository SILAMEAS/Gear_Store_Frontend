import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const useLastUrlStorage = () => {
    const location = useLocation();

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem("lastUrl", location.pathname + location.search);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [location]);
};

export default useLastUrlStorage;
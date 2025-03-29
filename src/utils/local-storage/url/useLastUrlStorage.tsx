import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {$ok} from "@utils/common/$ok.ts";
import {isRouteIncluded} from "@utils/local-storage/url/useCheckUrlDependOnRole.tsx";
import {Route} from "@constant/Route.ts";

const useLastUrlStorage = () => {
    const location = useLocation();
    useEffect(() => {
        const handleBeforeUnload = () => {
            const arrayPublicUrlRoute=Object.values(Route.public);
            if($ok(location.pathname)&&!isRouteIncluded(`${location.pathname}`,arrayPublicUrlRoute))
                 localStorage.setItem("lastUrl", location.pathname + location.search);
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [location]);
};

export default useLastUrlStorage;
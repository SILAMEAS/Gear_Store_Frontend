import {cleanPath} from "../common/cleaPath.ts";
import {RouteConstant} from "../../constants/Route.ts";
import useGlobalHook from "./useGlobalHook.tsx";


const useCheckUrl = () => {
    const {location} = useGlobalHook();
    const pathname = location.pathname;
    const pathnameRemoveLastSlash = cleanPath(pathname);
    /** =============================================================================== */
    /**                             LOGIN Page                                          */
    /** =============================================================================== */
    const IsLoginPage = Boolean(
        pathnameRemoveLastSlash === RouteConstant.LOGIN,
    );
    return {
        /** =============================================================================== */
        /**                             LOGIN Page                                          */
        /** =============================================================================== */
        IsLoginPage,
        pathname,
    };
};

export default useCheckUrl;
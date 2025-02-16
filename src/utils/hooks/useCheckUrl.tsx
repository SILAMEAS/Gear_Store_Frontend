import {cleanPath} from "../common/cleaPath.ts";
import useGlobalHook from "./useGlobalHook.tsx";
import {Route} from "../../constants/Route.ts";


const useCheckUrl = () => {
    const {location} = useGlobalHook();
    const pathname = location.pathname;
    const pathnameRemoveLastSlash = cleanPath(pathname);
    /** =============================================================================== */
    /**                             LOGIN Page                                          */
    /** =============================================================================== */
    const IsLoginPage = Boolean(
        pathnameRemoveLastSlash === Route.public.LOGIN,
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
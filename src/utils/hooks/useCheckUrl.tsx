import {Route} from "@/constant/Route.ts";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {cleanPath} from "@utils/common/cleaPath.ts";


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
    const IncludeSettingsPage=pathnameRemoveLastSlash.includes(Route.admin.SETTING)
    return {
        /** =============================================================================== */
        /**                             LOGIN Page                                          */
        /** =============================================================================== */
        IsLoginPage,
        pathname,
        pathnameRemoveLastSlash,
        IncludeSettingsPage
    };
};

export default useCheckUrl;
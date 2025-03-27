import {useGetUrlBeforeRefresh} from "./useGetUrlBeforeRefresh.tsx";
import {$ok} from "../../common/$ok.ts";

const useCheckUrlDependOnRole = ({root,objectUrl}:{root:string, objectUrl:Record<string,any>}) => {
    const {lastUrl}=useGetUrlBeforeRefresh();
    const arrayUrlRoute=Object.values(objectUrl);
    const active= $ok(lastUrl)? arrayUrlRoute.includes(lastUrl):false;
    const lastUrlActive= $ok (lastUrl) &&active;
    return {urlRedirect: lastUrlActive?lastUrl: root}

};

export default useCheckUrlDependOnRole;

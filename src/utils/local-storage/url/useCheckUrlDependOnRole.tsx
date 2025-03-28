import {$ok} from "@utils/common/$ok.ts";
import {useGetUrlBeforeRefresh} from "@utils/local-storage/url/useGetUrlBeforeRefresh.tsx";

const useCheckUrlDependOnRole = ({root,objectUrl}:{root:string, objectUrl:Record<string,any>}) => {
    const {lastUrl}=useGetUrlBeforeRefresh();
    const arrayUrlRoute=Object.values(objectUrl);
    const active= $ok(lastUrl)? arrayUrlRoute.includes(lastUrl):false;
    const lastUrlActive= $ok (lastUrl) &&active;
    return {urlRedirect: lastUrlActive?lastUrl: root}

};

export default useCheckUrlDependOnRole;

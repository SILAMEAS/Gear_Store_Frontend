import {$ok} from "@utils/common/$ok.ts";
import {useGetUrlBeforeRefresh} from "@utils/local-storage/url/useGetUrlBeforeRefresh.tsx";

// function isRouteIncluded(url: string, routes: string[]): boolean {
//     return routes.some(route => {
//         // Convert route to a regex pattern, replacing dynamic segments
//         const pattern = route?.replace(/:\w+/g, "[^/]+");
//         const regex = new RegExp(`^${pattern}$`);
//         return regex.test(url);
//     });
// }
const useCheckUrlDependOnRole = ({root,objectUrl}:{root:string, objectUrl:Record<string,any>}) => {
    const {lastUrl}=useGetUrlBeforeRefresh();
    const arrayUrlRoute=Object.values(objectUrl);
    const active= $ok(lastUrl)?arrayUrlRoute.includes(lastUrl):false;
    const lastUrlActive= $ok (lastUrl) &&active;
    return {urlRedirect: lastUrlActive?lastUrl: root}

};

export default useCheckUrlDependOnRole;

import {$ok} from "@utils/common/$ok.ts";
import {useGetUrlBeforeRefresh} from "@utils/local-storage/url/useGetUrlBeforeRefresh.tsx";

/**
 * Recursively extracts all route paths from a nested object.
 */
const extractRoutes = (routes: Record<string, any>): string[] => {
    return Object.values(routes).flatMap(route =>
        typeof route === "object" ? extractRoutes(route) : route
    );
};

/**
 * Checks if a given URL matches any route pattern in a list.
 */
export function isRouteIncluded(url: string, routes: string[]): boolean {
    return routes.some(route => {
        // Convert route to a regex pattern, replacing dynamic segments
        const pattern = route.replace(/:\w+/g, "[^/]+");
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(url);
    });
}

/**
 * Determines the appropriate redirect URL based on user role and last visited URL.
 */
const useCheckUrlDependOnRole = ({ root, objectUrl }: { root: string, objectUrl: Record<string, any> }) => {
    const { lastUrl } = useGetUrlBeforeRefresh();

    // Flatten nested route objects into an array of route strings
    const arrayUrlRoute = extractRoutes(objectUrl);

    // Check if last visited URL is within the allowed routes
    const active = $ok(lastUrl) ? isRouteIncluded(lastUrl, arrayUrlRoute) : false;
    const lastUrlActive = $ok(lastUrl) && active;

    return { urlRedirect: lastUrlActive ? lastUrl : root };
};

export default useCheckUrlDependOnRole;

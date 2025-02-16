import getToken from "./useGetToken.ts";

export const storeToken = (res:Record<string, any>) => {
    if(!getToken().refresh)
        localStorage.setItem("refresh", res.refresh);
    localStorage.setItem("access", res.access);
};
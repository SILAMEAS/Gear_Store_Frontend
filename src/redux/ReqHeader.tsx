import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import getToken from "../utils/local-storage/token/useGetToken.ts";

export const ReqHeader=(route:string)=>{
    return fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL +route,
        prepareHeaders: (headers) => {
            const token =getToken()?.access;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    })
}
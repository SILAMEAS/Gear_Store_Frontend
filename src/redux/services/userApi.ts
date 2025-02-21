import {createApi} from "@reduxjs/toolkit/query/react";
import {Method} from "./types/Method.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {ResUserDetail} from "./types/IUserApi.ts";
import {ReqHeaderOnlyBaseUrl} from "../ReqHeader.tsx";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: ReqHeaderOnlyBaseUrl('/'),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation<{access:string,refresh:string}, {email:string,password:string}>({
      query: (body) => ({
        url: "/token/",
        method: Method.POST,
        body,
      }),
    }),
    /** Get access_token / refresh_token by refresh_token */
    refreshToken: builder.mutation<any, { refresh: string }>({
      query: (body) => ({
        url: "/token/refresh/",
        method: Method.POST,
        body,
      }),
    }),
    /** Get user by ID **/
    getUserDetail: builder.query<ResUserDetail, object>({
      query: () => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/users/info/",
        method: Method.GET,

      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserDetailQuery,
  useRefreshTokenMutation,
    useLazyGetUserDetailQuery,
} = userApi;

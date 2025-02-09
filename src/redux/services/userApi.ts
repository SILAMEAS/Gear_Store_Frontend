import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Method} from "./types/Method.ts";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_BASE_URL }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation<any, {username:string,password:string}>({
      query: (body) => ({
        url: "/api/token/",
        method: Method.POST,
        body,
      }),
    }),
    /** Get access_token / refresh_token by refresh_token */
    refreshToken: builder.mutation<any, { refreshToken: string }>({
      query: (body) => ({
        url: "/api/token/refresh/",
        method: Method.POST,
        body,
      }),
    }),
    /** Get user by ID **/
    getUserDetail: builder.query<any, any>({
      query: () => ({
        url: `/user-detail/`,
        method: Method.GET,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserDetailQuery,
  useRefreshTokenMutation,
} = userApi;

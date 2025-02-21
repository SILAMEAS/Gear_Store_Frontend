import {createApi} from "@reduxjs/toolkit/query/react";
import {ReqHeader} from "../ReqHeader.tsx";
import {ReqDashboard, ResDashboard} from "./types/IAdminApi.ts";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: ReqHeader("/admin"),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    /** Get dashboard */
    getDashboard: builder.query<ResDashboard, ReqDashboard>({
      query: (params) => ({
        url: "/dashboard",
        method: "GET",
        params
      }),
    }),
  }),
});

export const {
  useGetDashboardQuery,
} = adminApi;

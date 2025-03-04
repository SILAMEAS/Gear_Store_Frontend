import {createApi} from "@reduxjs/toolkit/query/react";
import {ReqHeader} from "../ReqHeader.tsx";
import {ReqDashboard, ResDashboard, ResOrders, ResPayments} from "./types/IAdminApi.ts";
import {ResUser, ResUsers} from "./types/IUserApi.ts";
import {ReqPage} from "./types/IPagination.ts";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {Method} from "./types/Method.ts";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: ReqHeader("/"),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    /** Get dashboard */
    getDashboard: builder.query<ResDashboard, ReqDashboard>({
      query: (params) => ({
        url: "/dashboard",
        method: "GET",
        params
      }),
    }),
    /** =======================================================================  **/
    /**                                User                                      **/
    /** =======================================================================  **/
    /** ==================================== **/
    /**             Get Users                **/
    /** ==================================== **/
    getUsers: builder.query<ResUsers, ReqPage>({
      query: ({pageSize,page}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/users/staffs",
        method: Method.GET,
        params:{pageSize,page},

      }),
      providesTags:["users"]
    }),
    /** ==================================== **/
    /**             Add User                 **/
    /** ==================================== **/
    addUser: builder.mutation<ResUser, FormData>({
      query: (body) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/users/",
        method: Method.POST,
        body

      }),
      invalidatesTags:["users"]
    }),
    /** ==================================== **/
    /**             Delete User                 **/
    /** ==================================== **/
    deleteUser: builder.mutation<ResUser, {id:string}>({
      query: ({id}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url:`/users/${id}/`,
        method: Method.DELETE

      }),
      invalidatesTags:()=>["users"]
    }),
    /** =======================================================================  **/
    /**                            Customer                                      **/
    /** =======================================================================  **/
    /** ==================================== **/
    /**             Get Customers                **/
    /** ==================================== **/
    getCustomer: builder.query<ResUsers, ReqPage>({
      query: ({pageSize,page}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/users/customers",
        method: Method.GET,
        params:{pageSize,page}

      }),
      providesTags:["users"]
    }),
    /** =======================================================================  **/
    /**                            Order                                         **/
    /** =======================================================================  **/
    getOrders: builder.query<ResOrders, ReqPage>({
      query: ({pageSize,page}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/orders/",
        method: Method.GET,
        params:{pageSize,page}

      }),
    }),
    /** =======================================================================  **/
    /**                            Payment                                       **/
    /** =======================================================================  **/
    getPayments: builder.query<ResPayments, ReqPage>({
      query: ({pageSize,page}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/payments/",
        method: Method.GET,
        params:{pageSize,page}

      }),
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetUsersQuery,
  useGetCustomerQuery,
    useGetOrdersQuery,
    useGetPaymentsQuery,
    useAddUserMutation,
    useDeleteUserMutation
} = adminApi;

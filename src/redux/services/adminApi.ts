import {createApi} from "@reduxjs/toolkit/query/react";
import {ReqHeader} from "@redux/ReqHeader.tsx";
import {ReqDashboard, ResCategories, ResDashboard, ResOrders, ResPayments} from "@redux/services/types/IAdminApi.ts";
import {ResUser, ResUsers} from "@redux/services/types/IUserApi.ts";
import {ReqPage} from "@redux/services/types/IPagination.ts";
import getToken from "@utils/local-storage/token/useGetToken.ts";
import {Method} from "@redux/services/types/Method.ts";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: ReqHeader("/"),
  tagTypes: ["users","setting","categories"],
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
    /**             Update User                 **/
    /** ==================================== **/
    updateUser: builder.mutation<ResUser, {body:FormData,userId:string}>({
      query: ({body,userId}) => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/users/"+userId+"/",
        method: Method.PUT,
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
    /** ==================================== **/
    /**             Get Users                **/
    /** ==================================== **/
    getSetting: builder.query<any, object>({
      query: () => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/settings/",
        method: Method.GET

      }),
      providesTags:["setting"]
    }),
    /** ==================================== **/
    /**             Get Users                **/
    /** ==================================== **/
    getCategories: builder.query<ResCategories, object>({
      query: () => ({
        headers: {
          ["Authorization"]: `Bearer ${getToken()?.access}`,
        },
        url: "/categories/",
        method: Method.GET

      }),
      providesTags:["categories"]
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
    useDeleteUserMutation,
    useUpdateUserMutation,
    useGetCategoriesQuery
} = adminApi;

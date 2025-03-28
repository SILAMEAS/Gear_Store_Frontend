import {createApi} from "@reduxjs/toolkit/query/react";
import getToken from "@utils/local-storage/token/useGetToken.ts";
import {ReqHeader, ReqHeaderOnlyBaseUrl} from "@redux/ReqHeader.tsx";
import {ResProduct, ResProducts} from "@redux/services/types/ProductInterface.tsx";
import {ReqPage} from "@redux/services/types/IPagination.ts";
import {IDType} from "@redux/services/types/IAdminApi.ts";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery:getToken().access? ReqHeader("/products"):ReqHeaderOnlyBaseUrl("/products"),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    /** Get all products */
    getAllProducts: builder.query<ResProducts,ReqPage>({
      query: ({ pageSize = 10, page = 1,ordering,search }) => ({
        url: "/",
        method: "GET",
        params: { pageSize, page,ordering ,search},
      }),
      providesTags:["Product"]
    }),
    /** Get products By Id */
    getProductsById: builder.query<ResProduct, {id:IDType}>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET"
      }),
    }),
    /** Create products */
    createProducts: builder.mutation<ResProduct,{body:FormData}>({
      query: ({body}) => ({
        url: "/",
        method: "POST",
       body
      }),
      invalidatesTags:["Product"]
    }),
  }),
});

export const {
  useGetAllProductsQuery,
    useGetProductsByIdQuery,
    useCreateProductsMutation
} = productApi;

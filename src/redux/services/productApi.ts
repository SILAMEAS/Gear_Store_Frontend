import {createApi} from "@reduxjs/toolkit/query/react";
import {ResProduct, ResProducts} from "./types/ProductInterface.tsx";
import {ReqPage} from "./types/IPagination.ts";
import {ReqHeader, ReqHeaderOnlyBaseUrl} from "../ReqHeader.tsx";
import getToken from "../../utils/local-storage/token/useGetToken.ts";

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
    getProductsById: builder.query<ResProduct, {id:number}>({
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

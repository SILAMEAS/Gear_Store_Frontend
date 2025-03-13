import {createApi} from "@reduxjs/toolkit/query/react";
import {ProductFormData, ResProduct, ResProducts} from "./types/ProductInterface.tsx";
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
      query: ({ pageSize = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { pageSize, page },
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
    createProducts: builder.query<ResProduct,{body:ProductFormData}>({
      query: ({body}) => ({
        url: "/",
        method: "",
       body
      }),
      providesTags:["Product"]
    }),
  }),
});

export const {
  useGetAllProductsQuery,
    useGetProductsByIdQuery
} = productApi;

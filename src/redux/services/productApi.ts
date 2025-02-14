import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct, IProductResponse} from "./types/ProductInterface.tsx";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_BASE_URL +"/products" ,
    prepareHeaders: (headers) => {
      const token =localStorage.getItem("access");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },}),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    /** Get all products */
    getAllProducts: builder.query<IProduct, {limit:number,page:number}>({
      query: ({ limit = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { limit, page },
      }),
      providesTags:['Product']
    }),
    /** Get products By Id */
    getProductsById: builder.query<IProductResponse, {id:number}>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET"
      }),
      // providesTags: (result) =>
      //   result ? result.data.map(({ id }) => ({ type: "Product", id })) : [],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
    useGetProductsByIdQuery
} = productApi;

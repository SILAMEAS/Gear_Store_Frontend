import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "./types/ProductInterface.tsx";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_BASE_URL +"/products" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    /** Get all products */
    getAllProducts: builder.query<IProduct, {limit:number,page:number}>({
      query: ({ limit = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { limit, page },
      }),
      // providesTags: (result) =>
      //   result ? result.data.map(({ id }) => ({ type: "Product", id })) : [],
    }),
  }),
});

export const {
  useGetAllProductsQuery
} = productApi;

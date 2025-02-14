import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Pagination} from "./types/ProductInterface.tsx";
import {productApi} from "./productApi.ts";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL +"/cart",
      prepareHeaders: (headers) => {
          const token =localStorage.getItem("access");
          if (token) {
              headers.set("Authorization", `Bearer ${token}`);
          }
          return headers;
      },
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    /** Get all carts */
    getAllCarts: builder.query<Pagination<{id:string,product:number,quantity:number,image:string,name:string,price:number,total_price:number}>, any>({
      query: ({ limit = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { limit, page },
      }),
      providesTags: ["Cart"]
    }),
    /** Add carts */
   addCart: builder.mutation<any, {product:number}>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
        onQueryStarted: (_, api) => {
            api.queryFulfilled.then(() => {
                api.dispatch(
                    productApi.util.invalidateTags([
                       "Product"
                    ]),
                );
            });
        },
      invalidatesTags: ["Cart"],
    }),
      /** delete carts */
      deleteCart: builder.mutation<any, {cartId:number|string}>({
          query: ({cartId}) => ({
              url: `/${cartId}/`,
              method: "DELETE",
          }),
          invalidatesTags: ["Cart"]
      }),
  }),
});

export const { useGetAllCartsQuery ,useAddCartMutation,useDeleteCartMutation} = cartApi;

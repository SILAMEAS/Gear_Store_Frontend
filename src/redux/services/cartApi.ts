import {createApi} from "@reduxjs/toolkit/query/react";
import {productApi} from "./productApi.ts";
import {ReqHeader} from "../ReqHeader.tsx";
import {Pagination} from "./types/IPagination.ts";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: ReqHeader("/cart"),
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

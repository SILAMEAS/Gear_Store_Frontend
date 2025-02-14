import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Pagination} from "./types/ProductInterface.tsx";
import {productApi} from "./productApi.ts";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL +"/wishlist",
      prepareHeaders: (headers) => {
          const token =localStorage.getItem("access");
          if (token) {
              headers.set("Authorization", `Bearer ${token}`);
          }
          return headers;
      },
  }),
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    /** Get all carts */
    getAllWishlists: builder.query<Pagination<{id:string,product:number,quantity:number}>, any>({
      query: ({ limit = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { limit, page },
      }),
      providesTags: ["Wishlist"]
    }),
    /** Add carts */
   addWishlist: builder.mutation<any, {product:number}>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Wishlist"],
        onQueryStarted: (_, api) => {
            api.queryFulfilled.then(() => {
                api.dispatch(
                    productApi.util.invalidateTags([
                        "Product"
                    ]),
                );
            });
        },
    }),
      /** Add carts */
      deleteWishlist: builder.mutation<any, {product:number}>({
          query: ({product}) => ({
              url: `${product}/remove_wishlist/`,
              method: "DELETE"
          }),
          invalidatesTags: ["Wishlist"],
          onQueryStarted: (_, api) => {
              api.queryFulfilled.then(() => {
                  api.dispatch(
                      productApi.util.invalidateTags([
                          "Product"
                      ]),
                  );
              });
          },
      }),
  }),
});

export const { useGetAllWishlistsQuery ,useAddWishlistMutation,useDeleteWishlistMutation} = wishlistApi;

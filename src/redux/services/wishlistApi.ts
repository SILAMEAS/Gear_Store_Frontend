import {createApi} from "@reduxjs/toolkit/query/react";
import {productApi} from "./productApi.ts";
import {ResWishlists} from "./types/IWishlistApi.tsx";
import {ReqHeader} from "../ReqHeader.tsx";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery:ReqHeader("/wishlist") ,
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    /** Get all carts */
    getAllWishlists: builder.query<ResWishlists, any>({
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

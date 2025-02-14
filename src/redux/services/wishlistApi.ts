import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Pagination} from "./types/ProductInterface.tsx";

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
      invalidatesTags: ["Wishlist"]
    }),
  }),
});

export const { useGetAllWishlistsQuery ,useAddWishlistMutation} = wishlistApi;

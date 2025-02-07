import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4002/carts" }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    /** Get all carts */
    getAllCarts: builder.query<any, any>({
      query: ({ limit = 10, page = 1 }) => ({
        url: "/",
        method: "GET",
        params: { limit, page },
      }),
      providesTags: (result) =>
        result
          ? result.data.map(({ cartId }) => ({ type: "Cart", cartId }))
          : [],
    }),
  }),
});

export const { useGetAllCartsQuery } = cartApi;

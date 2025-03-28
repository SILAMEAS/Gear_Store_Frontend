import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {useDispatch, useSelector} from "react-redux";
import {userApi} from "@redux/services/userApi.ts";
import {productApi} from "@redux/services/productApi.ts";
import {cartApi} from "@redux/services/cartApi.ts";
import {adminApi} from "@redux/services/adminApi.ts";
import {wishlistApi} from "@redux/services/wishlistApi.ts";
import {applicationSlice} from "@redux/store/application.ts";


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    application: applicationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productApi.middleware,
      cartApi.middleware,
      adminApi.middleware,
        wishlistApi.middleware

    ),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

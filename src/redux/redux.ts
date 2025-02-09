import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {useDispatch, useSelector} from "react-redux";
import {applicationSlice} from "./store/application.ts";
import {adminApi} from "./services/adminApi.ts";
import {cartApi} from "./services/cartApi.ts";
import {productApi} from "./services/productApi.ts";
import {userApi} from "./services/userApi.ts";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    application: applicationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productApi.middleware,
      cartApi.middleware,
      adminApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

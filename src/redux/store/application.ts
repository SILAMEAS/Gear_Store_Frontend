import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EnumRole, IApplication, ISnackbarStatus} from "./type.ts";
import {ResUserDetail} from "../services/types/IUserApi.tsx";

const initialState: IApplication = {
  productCurrentPage: 1,
  snackbarMessage: null,
  snackbarStatus: "error",
  deleteProductId: null,
  deleteUserId: null,
  userDetail:null,
  role: EnumRole.PUBLIC

  // user: null,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    dispatchSnackbar: (
      state,
      {
        payload,
      }: { payload: { message: string | null; status: ISnackbarStatus } },
    ) => {
      state.snackbarMessage = payload.message;
      state.snackbarStatus = payload.status;
    },
    // dispatchUserInfo: (
    //   state,
    //   { payload }: { payload: IUserInfoRedux | null },
    // ) => {
    //   state.user = payload;
    // },
    dispatchDeleteUserId: (state, { payload }: { payload: number }) => {
      state.deleteUserId = payload;
    },
    dispatchDeleteProductId: (state, { payload }: { payload: number }) => {
      state.deleteProductId = payload;
    },
    dispatchProductCurrentPage: (state, { payload }: { payload: number }) => {
      state.productCurrentPage = payload;
    },
    clearDeleteProductId: (state) => {
      state.deleteProductId = null;
    },
    clearDeleteUserId: (state) => {
      state.deleteUserId = null;
    },
    setUserDetail: (state, { payload }: { payload: ResUserDetail }) => {
      state.userDetail = payload;
    },
    setRole: (state, action: PayloadAction<EnumRole>) => {
      state.role = action.payload;
    },
    resetRole: (state) => {
      state.role = EnumRole.PUBLIC; // Reset to default
    },
  },
});

export const {
  dispatchSnackbar,
  setUserDetail,
    setRole,
    resetRole
} = applicationSlice.actions;

export default applicationSlice.reducer;

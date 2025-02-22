import {createSlice} from "@reduxjs/toolkit";
import {IApplication, ISnackbarStatus} from "./type.ts";
import {ResUserDetail} from "../services/types/IUserApi.ts";

const initialState: IApplication = {
  productCurrentPage: 1,
  snackbarMessage: null,
  snackbarStatus: "error",
  deleteProductId: null,
  deleteUserId: null,
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
    setUserDetail: (state, { payload }: { payload: ResUserDetail }) => {
      state.userDetail = payload;
    }
  },
});

export const {
  dispatchSnackbar,
  setUserDetail
} = applicationSlice.actions;

export default applicationSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import {IApplication, IDialogRTK, ISnackbarStatus, SettingsResponse} from "./type.ts";
import {ResUser} from "../services/types/IUserApi.ts";
import Colors from "../../theme/mode/Colors.ts";
import {ResProduct} from "../services/types/ProductInterface.tsx";

const defaultDailogRTK={
  adminCreateProduct:false,
  adminEditProduct:false
}
const initialState: IApplication = {
  productCurrentPage: 1,
  snackbarMessage: null,
  snackbarStatus: "error",
  deleteProductId: null,
  deleteUserId: null,
  settingsResponse:{
    Danger:Colors._ffffff,
    Info:Colors._ffffff,
    Primary:Colors._ffffff,
    Success:Colors._ffffff,
    Warning:Colors._ffffff,
    Secondary:Colors._ffffff,
    logo:""
  },
  dialogRTK:defaultDailogRTK
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
    setUserDetail: (state, { payload }: { payload: ResUser }) => {
      state.userDetail = payload;
    },
    setUserSelected: (state, { payload }: { payload: ResUser }) => {
      state.userSelected = payload;
    },
    setSetting: (state, { payload }: { payload: SettingsResponse }) => {
      state.settingsResponse = payload;
    },
    setDialogRTK: (state, { payload }: { payload: IDialogRTK }) => {
      state.dialogRTK = payload;
    },
    setProductSelected: (state, { payload }: { payload: ResProduct }) => {
      state.productSelected = payload;
    },
  },
});

export const {
  dispatchSnackbar,
  setUserDetail,
  setUserSelected,
  setProductSelected,
    setDialogRTK
} = applicationSlice.actions;

export default applicationSlice.reducer;

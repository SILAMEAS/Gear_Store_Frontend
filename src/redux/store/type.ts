import {ResUser} from "@redux/services/types/IUserApi.ts";
import {ResProduct} from "@redux/services/types/ProductInterface.tsx";


export interface IApplication {
  deleteProductId: number | null;
  deleteUserId: number | null;
  productCurrentPage: number;
  snackbarMessage: string | null;
  snackbarStatus: ISnackbarStatus;
  userDetail?:ResUser;
  userSelected?:ResUser;
  settingsResponse:SettingsResponse;
  dialogRTK:IDialogRTK;
  productSelected?:ResProduct
}

export type ISnackbarStatus = "error" | "success" | "info" | "warning";

export interface IErrorConnection {
  error: string;
  status: "FETCH_ERROR";
}

export interface IErrorType {
  data: any;
  status: number;
}
export interface SettingsResponse {
  Danger:    string;
  Info:      string;
  Primary:   string;
  Secondary: string;
  Success:   string;
  Warning:   string;
  logo:      string;
}
export interface IDialogRTK{
  adminCreateProduct?:boolean;
  adminEditProduct?:boolean;
  adminCreateUser?:boolean;
  adminEditUser?:boolean;
}
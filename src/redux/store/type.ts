import {ResUserDetail} from "../services/types/IUserApi.ts";

export interface IApplication {
  deleteProductId: number | null;
  deleteUserId: number | null;
  productCurrentPage: number;
  snackbarMessage: string | null;
  snackbarStatus: ISnackbarStatus;
  userDetail:ResUserDetail|null;
  role: EnumRole;
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
export enum EnumRole{
  USER="user",
  ADMIN="admin",
  PUBLIC="public"
}
import {store} from "../../redux/redux.ts";
import {dispatchSnackbar} from "../../redux/store/application.ts";
import {IErrorConnection, IErrorType} from "../../redux/store/type.ts";

export const substring100 = (str: string) => {
  if (str.length > 100) {
    str = str.substring(0, 100);
  }
  return str;
};

export const strGreater100 = (str: string) => str.length > 100;

export const dateShortFormat = (d: string) => {
  const date = new Date(d);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};


export const snackbarError = (error: IErrorConnection | IErrorType) => {
  if ("error" in error && error.status === "FETCH_ERROR") {
    store.dispatch(dispatchSnackbar({message: error.error, status: "error"}))
  } else {
    store.dispatch(dispatchSnackbar({message: error.data.message, status: "error"}))
  }
};

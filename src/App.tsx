import {Alert, Snackbar, Stack} from "@mui/material";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./redux/redux.ts";
import {dispatchSnackbar} from "./redux/store/application.ts";
import AppRouter from "./router";
import {useRefreshTokenMutation} from "./redux/services/userApi.ts";
import getToken from "./utils/local-storage/token/useGetToken.ts";
import {storeToken} from "./utils/local-storage/token/storeToken.ts";

function App() {
  const dispatch = useAppDispatch();
  const [getRefreshToken, { isLoading }] = useRefreshTokenMutation();
  const { snackbarMessage, snackbarStatus } = useAppSelector((state) => state.application);

  useEffect(() => {
    const refreshToken = getToken()?.refresh;
    if (refreshToken) {
      getRefreshToken({ refresh:refreshToken })
        .unwrap()
        .then((res) => {
          if (res) {
            storeToken(res)
          }
        });
    }
  }, [getRefreshToken]);

  if (isLoading) {
    return <>loading ...</>;
  }

  return (
    <Stack>
      <AppRouter />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(snackbarMessage)}
        onClose={() => dispatch(dispatchSnackbar({ message: null, status: 'error' }))}
        autoHideDuration={3000}
        key={"top-right"}
      >
        <Alert severity={snackbarStatus}>
          {snackbarMessage ? snackbarMessage : ""}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default App;

import {useEffect} from "react";
import {useRefreshTokenMutation} from "./redux/services/userApi.ts";
import getToken from "./utils/local-storage/token/useGetToken.ts";
import {storeToken} from "./utils/local-storage/token/storeToken.ts";
import {Outlet} from 'react-router-dom';
import AppProvider from "./theme/AppProvider.tsx";

function App() {
  const [getRefreshToken, { isLoading }] = useRefreshTokenMutation();

  useEffect(() => {
    const refreshToken = getToken()?.refresh;
    if (refreshToken) {
      getRefreshToken({ refresh:refreshToken })
        .unwrap()
        .then((res) => {
          if (res) {
            storeToken(res);

          }
        });
    }
  }, [getRefreshToken]);
  if (isLoading) {
    return <>loading ...</>;
  }

  return (
      <AppProvider>
          <Outlet />
      </AppProvider>
  );
}

export default App;

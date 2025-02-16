import {Outlet} from 'react-router-dom';
import AppProvider from "./theme/AppProvider.tsx";
import {useProtectedRoute} from "./utils/hooks/useProtectedRoute.tsx";

function App() {
const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
  if (resultRefreshToken.isLoading||resultUserDetail.isLoading) {
    return <>loading ...</>;
  }

  return (
      <AppProvider>
          <Outlet />
      </AppProvider>
  );
}

export default App;

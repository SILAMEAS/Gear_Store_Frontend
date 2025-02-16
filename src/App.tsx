import {Outlet} from 'react-router-dom';
import AppProvider from "./theme/AppProvider.tsx";
import {useProtectedRoute} from "./utils/hooks/useProtectedRoute.tsx";

function App() {
 useProtectedRoute();

  return (
      <AppProvider>
          <Outlet />
      </AppProvider>
  );
}

export default App;

import {Outlet} from "react-router-dom";
import {AppProvider} from "./routerLazy.ts";

function App() {
  return (
      <AppProvider>
        <Outlet />
      </AppProvider>
  );
}

export default App;

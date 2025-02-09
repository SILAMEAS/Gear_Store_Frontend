import {Route, Routes} from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AdminLayout from "./pages/admin/layout/AdminLayout.tsx";
import AppLogin from "./pages/form/AppLogin.tsx";
import AppLayout from "./pages/layout/authentication/Layout.tsx";
import AppPublicLayout from "./pages/public/Layout.tsx";
import Products from "./pages/public/products/Products.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {/**================================= User ======================================================== */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Products />} />
      </Route>

        {/**================================= Admin ======================================================== */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      </Route>

      <Route path="/" element={<AppPublicLayout />}>
        <Route path="/login" element={<AppLogin />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

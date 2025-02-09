import {Route, Routes} from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AppLogin from "./pages/form/AppLogin.tsx";
import AppLayout from "./pages/authentication/Layout.tsx";
import AppPublicLayout from "./pages/public/Layout.tsx";
import Products from "./pages/public/products/Products.tsx";
import UserHome from "./pages/UserHome.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {/**================================= User ======================================================== */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<UserHome />} />
      </Route>

        {/**================================= Admin ======================================================== */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      </Route>
        {/**================================= Public ======================================================== */}
      <Route path="/" element={<AppPublicLayout />}>
        <Route path="/login" element={<AppLogin />} />
          <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

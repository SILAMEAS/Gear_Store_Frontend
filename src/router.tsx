import {Route, Routes} from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AppLogin from "./pages/form/AppLogin.tsx";
import AppLayout from "./pages/authentication/Layout.tsx";
import AppPublicLayout from "./pages/public/Layout.tsx";
import Products from "./pages/public/products/Products.tsx";
import ProductDetail from "./pages/public/products/detail/ProductDetail.tsx";
import HomeUser from "./pages/user/HomeUser.tsx";
import {RouteConstant} from "./constants/Route.ts";

const AppRouter = () => {
  return (
    <Routes>
      {/**================================= User ======================================================== */}
      <Route path={RouteConstant.HOME} element={<AppLayout />}>
        <Route index element={<HomeUser />} />
      </Route>

        {/**================================= Admin ======================================================== */}
      <Route path={RouteConstant.ADMIN} element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
      </Route>
        {/**================================= Public ======================================================== */}
      <Route path={RouteConstant.HOME} element={<AppPublicLayout />}>
        <Route path={RouteConstant.LOGIN} element={<AppLogin />} />
          <Route path={RouteConstant.PRODUCT} element={<Products />} />
          <Route path={RouteConstant.PRODUCT_ID} element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

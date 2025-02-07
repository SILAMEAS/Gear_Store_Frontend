import {Route, Routes} from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AdminLayout from "./pages/admin/layout/AdminLayout.tsx";
import AppLogin from "./pages/authentication/AppLogin.tsx";
import AppLayout from "./pages/layout/authentication/Layout.tsx";
import AppPublicLayout from "./pages/layout/public/Layout.tsx";
import Products from "./pages/products/Products.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* user pages */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Products />} />
        {/*<Route path="/item/:skuCode/:id" element={<ViewItemPage />} />*/}
      </Route>

      {/* admin pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="/admin/home" element={<AdminHome />} />
        {/*<Route path="/admin/carts" element={<CartMainGrid />} />*/}
        {/*<Route path="/admin/items" element={<ItemMainGrid />} />*/}

        {/* route people */}
        {/*<Route path="/admin/people" element={<UserMainGrid />} />*/}
        {/*<Route path="/admin/people/create" element={<UserCreate />} />*/}
        {/*<Route path="/admin/people/update/:id" element={<UserCreate />} />*/}
        {/* route product */}
        {/*<Route path="/admin/products" element={<ProductMainGrid />} />*/}
        {/*<Route path="/admin/products/create" element={<ProductCreate />} />*/}
        {/*<Route path="/admin/products/update/:id" element={<ProductCreate />} />*/}
        {/* route settings */}
        {/*<Route path="/admin/settings" element={<Settings />}>*/}
        {/*  <Route index path="/admin/settings/general" element={<General />} />*/}
        {/*  <Route*/}
        {/*    index*/}
        {/*    path="/admin/settings/notifications"*/}
        {/*    element={<Notifications />}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    index*/}
        {/*    path="/admin/settings/preference"*/}
        {/*    element={<Preference />}*/}
        {/*  />*/}
        {/*</Route>*/}
        {/* route order */}
        {/*<Route path="/admin/orders" element={<OrderMainGrid />} />*/}
        {/*<Route path="/admin/orders/create" element={<OrderCreate />} />*/}
      </Route>

      <Route path="/" element={<AppPublicLayout />}>
        <Route path="/login" element={<AppLogin />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

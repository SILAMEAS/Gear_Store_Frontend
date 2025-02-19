import {lazy} from "react";

const Products= lazy(()=>import("./pages/public/product/Products.tsx"));
const Login = lazy(()=>import("./pages/form/Login.tsx"));
const UserHome= lazy(()=>import( "./pages/user/UserHome.tsx"))
const AdminHome=lazy(()=>import( "./pages/admin/sidebar/AdminDashboard.tsx"))
const UserLayout=lazy(()=>import( "./pages/user/UserLayout.tsx"))
const AdminLayout=lazy(()=>import( "./pages/admin/AdminLayout.tsx"))
const SignUp=lazy(()=>import( "./pages/form/SignUp.tsx"))
const ProductDetail=lazy(()=>import( "./pages/public/product/product-detail/components/ProductDetail.tsx"))
const AdminCartPage=lazy(()=>import( "./pages/admin/sidebar/AdminCartPage.tsx"))
const AdminCategoryPage=lazy(()=>import("./pages/admin/sidebar/AdminCategoryPage.tsx"))
const AdminOrdersPage=lazy(()=>import( "./pages/admin/sidebar/AdminOrdersPage.tsx"))
const AdminRatingPage=lazy(()=>import( "./pages/admin/sidebar/AdminRatingPage.tsx"))
const HomePublic=lazy(()=>import("./pages/public/home/HomePublic.tsx"))
const LayoutProducts =lazy(()=>import("./pages/public/product/LayoutProduct.tsx"))
const PublicLayout=lazy(()=>import("./pages/public/PublicLayout.tsx"))
const NotFound404=lazy(()=>import("./NotFound404.tsx"))
const AppProvider = lazy(()=>import("./theme/AppProvider.tsx"))
const LayoutProduct = lazy(()=>import("./pages/public/product/LayoutProduct.tsx"))
const PublicRoute=lazy(()=>import("./pages/protect-route/PublicRoute.tsx"))
const EndUserRoute=lazy(()=>import("./pages/protect-route/EndUserRoute.tsx"))
const AdminRoute=lazy(()=>import("./pages/protect-route/AdminRoute.tsx"))
const AdminUserPage=lazy(()=>import("./pages/admin/sidebar/AdminUserPage.tsx"))
const AdminPaymentPage =lazy(()=>import('./pages/admin/sidebar/AdminPaymentPage.tsx'))
const AdminHelpPage=lazy(()=>import("./pages/admin/sidebar/AdminHelpPage.tsx"))
const AdminSettingPage=lazy(()=>import("./pages/admin/sidebar/AdminSettingPage.tsx"))
const AdminAddUserPage=lazy(()=>import("./pages/admin/sidebar/AdminAddUserPage.tsx"))
const AdminProductsPage=lazy(()=>import("./pages/admin/sidebar/AdminProductsPage.tsx"))
export {
    AdminProductsPage,
    AdminHelpPage,
    AdminSettingPage,
    AdminAddUserPage,
    LayoutProduct,
    AdminUserPage,
    PublicRoute,
    EndUserRoute,
    AdminRoute,
    AppProvider,
    NotFound404,
    PublicLayout,
    LayoutProducts,
    Products,
    Login,
    UserHome,
    ProductDetail,
    HomePublic,
    AdminHome,
    AdminLayout,
    UserLayout,
    AdminRatingPage,
    AdminOrdersPage,
    AdminCartPage,
    AdminCategoryPage,
    SignUp,
    AdminPaymentPage
}
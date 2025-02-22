import {lazy} from "react";

const Products= lazy(()=>import("./utils/ui/public/table/GridListProducts.tsx"));
const Login = lazy(()=>import("./pages/form/Login.tsx"));
const UserHome= lazy(()=>import( "./pages/user/sidebar/UserHomePage.tsx"))
const AdminHome=lazy(()=>import( "./pages/admin/sidebar/AdminDashboard.tsx"))
const UserLayout=lazy(()=>import( "./pages/user/UserLayout.tsx"))
const AdminLayout=lazy(()=>import( "./pages/admin/AdminLayout.tsx"))
const SignUp=lazy(()=>import( "./pages/form/SignUp.tsx"))
const ProductDetail=lazy(()=>import( "./utils/ui/public/table/product-detail/components/ProductDetail.tsx"))
const AdminCartPage=lazy(()=>import( "./pages/admin/sidebar/AdminCartPage.tsx"))
const AdminCategoryPage=lazy(()=>import("./pages/admin/sidebar/AdminCategoryPage.tsx"))
const AdminOrdersPage=lazy(()=>import( "./pages/admin/sidebar/AdminOrdersPage.tsx"))
const AdminReviewPage=lazy(()=>import( "./pages/admin/sidebar/AdminReviewPage.tsx"))
const HomePublic=lazy(()=>import("./pages/public/sidebar/PublicHomePage.tsx"))
const LayoutProducts =lazy(()=>import("./pages/public/sidebar/PublicProductPage.tsx"))
const PublicLayout=lazy(()=>import("./pages/public/PublicLayout.tsx"))
const NotFound404=lazy(()=>import("./NotFound404.tsx"))
const AppProvider = lazy(()=>import("./theme/provider/AppProvider.tsx"))
const LayoutProduct = lazy(()=>import("./pages/public/sidebar/PublicProductPage.tsx"))
const PublicRoute=lazy(()=>import("./pages/protect-route/PublicRoute.tsx"))
const EndUserRoute=lazy(()=>import("./pages/protect-route/EndUserRoute.tsx"))
const AdminRoute=lazy(()=>import("./pages/protect-route/AdminRoute.tsx"))
const AdminUserPage=lazy(()=>import("./pages/admin/sidebar/AdminUserPage.tsx"))
const AdminPaymentPage =lazy(()=>import("./pages/admin/sidebar/AdminPaymentPage.tsx"))
const AdminHelpPage=lazy(()=>import("./pages/admin/sidebar/AdminHelpPage.tsx"))
const AdminSettingPage=lazy(()=>import("./pages/admin/sidebar/AdminSettingPage.tsx"))
const AdminCustomerPage=lazy(()=>import("./pages/admin/sidebar/AdminCustomerPage.tsx"))
const AdminProductsPage=lazy(()=>import("./pages/admin/sidebar/AdminProductsPage.tsx"))
const PublicAboutPage=lazy(()=>import("./pages/public/sidebar/PublicAboutPage.tsx"))
export {
    PublicAboutPage,
    AdminProductsPage,
    AdminHelpPage,
    AdminSettingPage,
    AdminCustomerPage,
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
    AdminReviewPage,
    AdminOrdersPage,
    AdminCartPage,
    AdminCategoryPage,
    SignUp,
    AdminPaymentPage
}
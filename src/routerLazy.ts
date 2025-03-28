import {lazy} from "react";

const Products= lazy(()=>import("@utils/ui/public/table/GridListProducts.tsx"));
const Login = lazy(()=>import("@pages/form/public/Login.tsx"));
const UserHome= lazy(()=>import( "@pages/user/sidebar/UserHomePage.tsx"))
const AdminHome=lazy(()=>import( "@pages/admin/sidebar/AdminDashboard.tsx"))
const UserLayout=lazy(()=>import( "@pages/user/UserLayout.tsx"))
const AdminLayout=lazy(()=>import( "@pages/admin/AdminLayout.tsx"))
const SignUp=lazy(()=>import( "@pages/form/public/SignUp.tsx"))
const ProductDetail=lazy(()=>import( "@/utils/ui/public/table/product-detail/components/ProductDetail.tsx"))
const AdminCartPage=lazy(()=>import( "@pages/admin/sidebar/AdminCartPage.tsx"))
const AdminCategoryPage=lazy(()=>import("@pages/admin/sidebar/AdminCategoryPage.tsx"))
const AdminOrdersPage=lazy(()=>import( "@pages/admin/sidebar/AdminOrdersPage.tsx"))
const AdminReviewPage=lazy(()=>import( "@pages/admin/sidebar/AdminReviewPage.tsx"))
const HomePublic=lazy(()=>import("@pages/public/sidebar/PublicHomePage.tsx"))
const LayoutProducts =lazy(()=>import("@pages/public/sidebar/PublicProductPage.tsx"))
const PublicLayout=lazy(()=>import("@pages/public/PublicLayout.tsx"))
const NotFound404=lazy(()=>import("@/NotFound404.tsx"))
const AppProvider = lazy(()=>import("@theme/provider/AppProvider.tsx"))
const LayoutProduct = lazy(()=>import("@pages/public/sidebar/PublicProductPage.tsx"))
const PublicRoute=lazy(()=>import("@pages/protect-route/PublicRoute.tsx"))
const EndUserRoute=lazy(()=>import("@pages/protect-route/EndUserRoute.tsx"))
const AdminRoute=lazy(()=>import("@pages/protect-route/AdminRoute.tsx"))
const AdminUserPage=lazy(()=>import("@pages/admin/sidebar/AdminUserPage.tsx"))
const AdminPaymentPage =lazy(()=>import("@pages/admin/sidebar/AdminPaymentPage.tsx"))
const AdminHelpPage=lazy(()=>import("@pages/admin/sidebar/AdminHelpPage.tsx"))
const AdminSettingPage=lazy(()=>import("@pages/admin/sidebar/AdminSettingPage.tsx"))
const AdminCustomerPage=lazy(()=>import("@pages/admin/sidebar/AdminCustomerPage.tsx"))
const AdminProductsPage=lazy(()=>import("@pages/admin/sidebar/AdminProductsPage.tsx"))
const PublicAboutPage=lazy(()=>import("@pages/public/sidebar/PublicAboutPage.tsx"))
const AppearanceSettings=lazy(()=>import("@pages/admin/sidebar/settings/sidebar/AppearanceSettingsPage.tsx"))
const ApiSettings=lazy(()=>import("@pages/admin/sidebar/settings/sidebar/ApiSettingsPage.tsx"))
/** detail page by role admin */
const PageProductDetail = lazy(()=>import("@pages/admin/sidebar/detail/AdminProductDetail.tsx"))
const PageCustomerDetail = lazy(()=>import("@pages/admin/sidebar/detail/AdminCustomerDetail.tsx"))
const PageUserDetail = lazy(()=>import("@pages/admin/sidebar/detail/AdminUserDetail.tsx"))
export {
    /** app provider */
    AppProvider,
    /** public */
    LayoutProducts,
    PublicLayout,
    PublicRoute,
    PublicAboutPage,
    SignUp,
    NotFound404,
    Login,
    HomePublic,
    /** user */
    LayoutProduct,
    EndUserRoute,
    UserHome,
    ProductDetail,
    Products,
    UserLayout,
    /** admin */
    AdminUserPage,
    AdminRoute,
    AdminHome,
    AdminLayout,
    AdminReviewPage,
    AdminOrdersPage,
    AdminCartPage,
    AdminCategoryPage,
    AdminPaymentPage,
    AdminProductsPage,
    AdminHelpPage,
    AdminSettingPage,
    AdminCustomerPage,
    /** sidebar of admin */
    AppearanceSettings,
    ApiSettings,
    /** page detail by admin role */
    PageProductDetail,
    PageUserDetail,
    PageCustomerDetail
}
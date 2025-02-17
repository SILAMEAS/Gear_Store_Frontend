import {lazy} from "react";

const Products= lazy(()=>import("./pages/public/product/Products.tsx"));
const Login = lazy(()=>import("./pages/form/Login.tsx"));
const UserHome= lazy(()=>import( "./pages/user/UserHome.tsx"))
const ProtectedRoute =lazy(()=>import( "./pages/protect-route/ProtectedRoute.tsx"))
const AdminHome=lazy(()=>import( "./pages/admin/AdminHome.tsx"))
const UserLayout=lazy(()=>import( "./pages/user/UserLayout.tsx"))
const AdminLayout=lazy(()=>import( "./pages/admin/AdminLayout.tsx"))
const SignUp=lazy(()=>import( "./pages/form/SignUp.tsx"))
const ProductDetail=lazy(()=>import( "./pages/public/product/product-detail/components/ProductDetail.tsx"))
const AdminCartPage=lazy(()=>import( "./pages/admin/admin-page/AdminCartPage.tsx"))
const AdminCategoryPage=lazy(()=>import("./pages/admin/admin-page/AdminCategoryPage.tsx"))
const AdminOrdersPage=lazy(()=>import( "./pages/admin/admin-page/AdminOrdersPage.tsx"))
const AdminRatingPage=lazy(()=>import( "./pages/admin/admin-page/AdminRatingPage.tsx"))
const HomePublic=lazy(()=>import("./pages/public/home/HomePublic.tsx"))


export {Products,Login,UserHome,ProductDetail,HomePublic,AdminHome, AdminLayout, UserLayout, AdminRatingPage, AdminOrdersPage, AdminCartPage, AdminCategoryPage, SignUp, ProtectedRoute}
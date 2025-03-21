import {Route} from "./constants/Route.ts";
import NotFound404 from "./NotFound404.tsx";
import App from "./App.tsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {Navigator} from "./utils/common/Navigator.tsx";
import AdminProductDetail from "./pages/admin/sidebar/detail/AdminProductDetail.tsx";
import AdminCustomerDetail from "./pages/admin/sidebar/detail/AdminCustomerDetail.tsx";
import AdminUserDetail from "./pages/admin/sidebar/detail/AdminUserDetail.tsx";
import PublicRoute from "./pages/protect-route/PublicRoute.tsx";
import Login from "./pages/form/public/Login.tsx";
import {AdminHome, HomePublic, LayoutProduct, UserHome} from "./routerLazy.ts";
import ProductDetail from "./utils/ui/public/table/product-detail/components/ProductDetail.tsx";
import SignUp from "./pages/form/public/SignUp.tsx";
import PublicAboutPage from "./pages/public/sidebar/PublicAboutPage.tsx";
import EndUserRoute from "./pages/protect-route/EndUserRoute.tsx";
import AdminRoute from "./pages/protect-route/AdminRoute.tsx";
import AdminProductsPage from "./pages/admin/sidebar/AdminProductsPage.tsx";
import AdminCartPage from "./pages/admin/sidebar/AdminCartPage.tsx";
import AdminOrdersPage from "./pages/admin/sidebar/AdminOrdersPage.tsx";
import AdminCategoryPage from "./pages/admin/sidebar/AdminCategoryPage.tsx";
import AdminReviewPage from "./pages/admin/sidebar/AdminReviewPage.tsx";
import AdminUserPage from "./pages/admin/sidebar/AdminUserPage.tsx";
import AdminPaymentPage from "./pages/admin/sidebar/AdminPaymentPage.tsx";
import AdminHelpPage from "./pages/admin/sidebar/AdminHelpPage.tsx";
import AdminSettingPage from "./pages/admin/sidebar/AdminSettingPage.tsx";
import AppearanceSettings from "./pages/admin/sidebar/settings/sidebar/AppearanceSettings.tsx";
import ApiSettings from "./pages/admin/sidebar/settings/sidebar/ApiSettings.tsx";
import AdminCustomerPage from "./pages/admin/sidebar/AdminCustomerPage.tsx";


export const routesConfig = [
    {
        element: <PublicRoute/>,
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to={`${Navigator(Route.public.PRODUCT).pathname}`}
                        replace
                    />
                ),
            },
            {
                path: Route.public.LOGIN,
                element: <Login />,
            },
            {
                path: Route.public.PRODUCT,
                element:<LayoutProduct/>,
            },
            {
                path: Route.public.PRODUCT_ID,
                element: <ProductDetail/>,
            },
            {
                path: Route.public.SIGN_UP,
                element: <SignUp/>,
            },
            {
                path: Route.public.HOME,
                element: <HomePublic/>,
            },
            {
                path: Route.public.ABOUT,
                element: <PublicAboutPage/>,
            },
            ]
    },
    {
        path: "*",
        element: <NotFound404 />,
    },
    {
        path: Route.ROOT,
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            /** End user-Route */
            {
                path: "/",
                element: <EndUserRoute/>,
                children: [
                    {
                        index: true,
                        element: (
                            <Navigate
                                to={`${Navigator(Route.endUser.HOME).pathname}`}
                                replace
                            />
                        ),
                    },
                    {
                        path: Route.endUser.HOME,
                        element:  <UserHome />,
                    },
                    {
                        path: Route.endUser.PRODUCT,
                        element: <LayoutProduct />,
                    },
                    {
                        path: Route.endUser.PRODUCT_ID,
                        element: <ProductDetail />,
                    },
                ],
            },
            /** Admin-Route */
            {
                path: "/",
                element: <AdminRoute/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={`${Navigator(Route.admin.HOME).pathname}`} replace />,
                    },
                    {
                        path: Route.admin.HOME,
                        element: <AdminHome />,
                    },
                    {
                        path: Route.admin.PRODUCT,
                        element: <AdminProductsPage />,
                    },
                    {
                        path: Route.admin.PRODUCT_ID,
                        element: <AdminProductDetail />,
                    },
                    {
                        path: Route.admin.CART,
                        element: <AdminCartPage/>
                    },
                    {
                        path: Route.admin.ORDER,
                        element: <AdminOrdersPage/>
                    },
                    {
                        path: Route.admin.CATEGORY,
                        element: <AdminCategoryPage/>
                    },
                    {
                        path: Route.admin.REVIEW,
                        element: <AdminReviewPage/>
                    },
                    {
                        path: Route.admin.USER,
                        element: <AdminUserPage/>
                    },
                    {
                        path: Route.admin.USER_ID,
                        element: <AdminUserDetail/>
                    },
                    {
                        path: Route.admin.PAYMENT,
                        element: <AdminPaymentPage/>
                    },
                    {
                        path: Route.admin.HELP,
                        element: <AdminHelpPage/>
                    },
                    /** settings page */
                    {
                        path: Route.admin.SETTING,
                        element: <AdminSettingPage/>,
                        children:[
                            {
                                index: true,
                                element: <Navigate to={`${Navigator(Route.admin.settings.appearance).pathname}`} replace />,
                            },
                            {
                                path: Route.admin.settings.appearance,
                                element: <AppearanceSettings />,
                            },
                            {
                                path: Route.admin.settings.api,
                                element: <ApiSettings />,
                            },
                        ]
                    },
                    {
                        path: Route.admin.CUSTOMER,
                        element: <AdminCustomerPage/>
                    },
                    {
                        path: Route.admin.CUSTOMER_ID,
                        element: <AdminCustomerDetail/>
                    }

                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routesConfig);
import {Route} from "./constants/Route.ts";
import NotFound404 from "./NotFound404.tsx";
import App from "./App.tsx";
import Login from "./pages/form/Login.tsx";
import {EndUserRoute} from "./pages/protect-route/EndUserRoute.tsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {Navigator} from "./utils/common/Navigator.tsx";
import UserHome from "./pages/user/UserHome.tsx";
import {AdminRoute} from "./pages/protect-route/AdminRoute.tsx";
import AdminHome from "./pages/admin/AdminHome.tsx";
import {PublicRoute} from "./pages/protect-route/PublicRoute.tsx";
import SignUp from "./pages/form/SignUp.tsx";
import Products from "./pages/page-share/products/Products.tsx";
import ProductDetail from "./pages/page-share/products/detail/components/ProductDetail.tsx";
import AdminCartPage from "./pages/admin/admin-page/AdminCartPage.tsx";
import AdminCategoryPage from "./pages/admin/admin-page/AdminCategoryPage.tsx";
import AdminOrdersPage from "./pages/admin/admin-page/AdminOrdersPage.tsx";
import AdminRatingPage from "./pages/admin/admin-page/AdminRatingPage.tsx";


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
                element: <Login/>,
            },
            {
                path: Route.public.PRODUCT,
                element: <Products/>,
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
                element: <>HOME PUBLIC</>,
            },
            {
                path: Route.public.ABOUT,
                element: <>ABOUT PUBLIC</>,
            },
            ]
    },
    {
        path: '*',
        element: <NotFound404 />,
    },
    {
        path: Route.ROOT,
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            /** End user-Route */
            {
                path: '/',
                element: <EndUserRoute />,
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
                        element: <UserHome />,
                    },
                    {
                        path: Route.endUser.PRODUCT,
                        element: <Products />,
                    },
                    {
                        path: Route.endUser.PRODUCT_ID,
                        element: <ProductDetail />,
                    },
                ],
            },
            /** Admin-Route */
            {
                path: '/',
                element: <AdminRoute />,
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
                        element: <Products />,
                    },
                    {
                        path: Route.admin.PRODUCT_ID,
                        element: <ProductDetail />,
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
                        path: Route.admin.RATE,
                        element: <AdminRatingPage/>
                    },
                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routesConfig);
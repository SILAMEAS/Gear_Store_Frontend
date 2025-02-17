import {Route} from "./constants/Route.ts";
import NotFound404 from "./NotFound404.tsx";
import App from "./App.tsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {Navigator} from "./utils/common/Navigator.tsx";
import {EnumRole} from "./redux/store/type.ts";
import {
    AdminCartPage,
    AdminCategoryPage,
    AdminHome,
    AdminLayout,
    AdminOrdersPage,
    AdminRatingPage,
    HomePublic,
    Login,
    ProductDetail,
    Products,
    ProtectedRoute,
    SignUp,
    UserHome,
    UserLayout
} from "./routerLazy.ts"


export const routesConfig = [
    {
        element: <ProtectedRoute/>,
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
                element:<Products/>,
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
                element: <>ABOUT PUBLIC</>,
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
                element: <ProtectedRoute protectedUrlWithRole={EnumRole.USER} render={<UserLayout/>}/>,
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
                path: "/",
                element: <ProtectedRoute protectedUrlWithRole={EnumRole.ADMIN} render={<AdminLayout/>}/>,
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
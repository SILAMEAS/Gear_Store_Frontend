### Admin Interface
#### Dashbaord
![image](https://github.com/user-attachments/assets/a2b77b75-fb36-4651-a5c8-9e26ba8666cb)
#### Product
![image](https://github.com/user-attachments/assets/e467c707-908a-42c8-9960-530ef0219b83)
#### Product> Advance Filter
![image](https://github.com/user-attachments/assets/5766ee29-582a-4722-bc1e-f02f0f0b4c5b)
#### Product> Creation
![image](https://github.com/user-attachments/assets/af9c1790-e54d-4938-b719-e1de15f47c35)

#### User 

---
#### User > List
![image](https://github.com/user-attachments/assets/79474de9-ea89-43a2-a0ae-340bab477b38)
#### User > Creation
![image](https://github.com/user-attachments/assets/cc315638-5855-4e47-9d1a-2e72f441aa1a)
![image](https://github.com/user-attachments/assets/329d1f46-8b0b-40fd-bf1e-79dcbeadea68)


#### Setting> Appearance
#### Setting> Ligth mode
![image](https://github.com/user-attachments/assets/8fda65bd-8974-4ac0-9fc7-3f2b6feda8ca)
#### Setting> Dark mode
![image](https://github.com/user-attachments/assets/d02d474a-9ec7-4282-ac3f-1f1bd8904fe4)
#### Setting> Api
![image](https://github.com/user-attachments/assets/e9f04911-52c6-423c-859f-daf66653d121)



### User Interface
#### HOME
![image](https://github.com/user-attachments/assets/592edac2-0343-4414-b0e4-98916e77e94a)
### PRODUCT
![image](https://github.com/user-attachments/assets/3ad9fe3d-f5e7-477b-9970-b89e63f4a7cc)
### WISHLIST
![image](https://github.com/user-attachments/assets/0bf2d1be-9f58-4828-9560-3d314e9b80cd)






### Accessories_Gaming_Store

---
- Reinstall Dependencies from Scratch

        rm -rf node_modules package-lock.json
        npm cache clean --force
        npm install


  
### Config vite router in vercel

---
- <vite.config.ts>
          export default defineConfig({
          plugins: [react()],
          server:{
            port:3003
          },
          base:"/"
        })

- create file <vercel.json>
          {
          "rewrites": [
            {
              "source": "/(.*)",
              "destination": "/index.html"
            }
          ]
        }
### Best Configuration Protected Route
---
        const PublicRoute = () => {
        const role=useAppSelector(state=>state.application.role)
        const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
        /** When refresh token and user detail is loading or fetching it will log in main loading **/
        if(resultRefreshToken.isLoading||resultUserDetail.isLoading||resultUserDetail.isFetching){
            return <MainLoading/>
        }
        /** if data of refresh token and get user detail is finish it will check depend on role of user login **/
        if(resultUserDetail.currentData){
            /** if you are public it will show public layout */
            if(role===EnumRole.PUBLIC)
                return <AppProvider> <PublicLayout/></AppProvider>
            /** else if user is not public it will redirect to url of role that user login
                example : if you log in as user  it will redirect to /user  routes
                          if you log in as admin it will redirect to /admin routes
             */
            else
                /** navigate to url user log in  **/
                return <Navigate to={RedirectUrlByRole[role as EnumRole]} replace/>
        }else {
            /** if your user detail is null or undefined it will return route of public */
            return <AppProvider> <PublicLayout/></AppProvider>
        }
    };

    export default PublicRoute;

---

## Router Configuration
---
### * router

    import {Route} from "./constants/Route.ts";
    import NotFound404 from "./NotFound404.tsx";
    import App from "./App.tsx";
    import {createBrowserRouter, Navigate} from "react-router-dom";
    import {Navigator} from "./utils/common/Navigator.tsx";
    import {
    AdminCartPage,
    AdminCategoryPage,
    AdminDashboard,
    AdminOrdersPage,
    AdminReviewPage,
    PublicHomePage,
    Login,
    ProductDetail,
    SignUp,
    UserHomePage,
    LayoutProduct,
    PublicRoute,
    EndUserRoute,
    AdminRoute
    } from "./routerLazy.ts"
    
    
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
                        element: <PublicHomePage/>,
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
                            element:  <UserHomePage />,
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
                            element: <AdminDashboard />,
                        },
                        {
                            path: Route.admin.PRODUCT,
                            element: <LayoutProduct />,
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
                            element: <AdminReviewPage/>
                        },
                ],
            },
            ],
        },
    ];
    
    export const router = createBrowserRouter(routesConfig);
---

### * EndUserRoute
    import {useAppSelector} from "../../redux/redux.ts";
    import {EnumRole} from "../../redux/store/type.ts";
    import { UserLayout} from "../../routerLazy.ts";
    import {Navigate} from "react-router-dom";
    import {Route} from "../../constants/Route.ts";
    
    const EndUserRoute = () => {
    const role=useAppSelector(state=>state.application.role)
    return role===EnumRole.USER ? <UserLayout/>:<Navigate to={Route.ROOT} replace/>
    };
    
    export default EndUserRoute;
### * AdminRoute
    const AdminRoute = () => {
    const {role}=useAppSelector(state=>state.application);
    return role === EnumRole.ADMIN ? <AdminLayout/>:<Navigate to={Route.ROOT} replace/>
    };
    
    
    export default AdminRoute;

### * PublicRoute
        const PublicRoute = () => {
        const role=useAppSelector(state=>state.application.role)
        const {resultRefreshToken,resultUserDetail}=useProtectedRoute();
        /** When refresh token and user detail is loading or fetching it will log in main loading **/
        if(resultRefreshToken.isLoading||resultUserDetail.isLoading||resultUserDetail.isFetching){
            return <MainLoading/>
        }
        /** if data of refresh token and get user detail is finish it will check depend on role of user login **/
        if(resultUserDetail.currentData){
            /** if you are public it will show public layout */
            if(role===EnumRole.PUBLIC)
                return <AppProvider> <PublicLayout/></AppProvider>
            /** else if user is not public it will redirect to url of role that user login
                example : if you log in as user  it will redirect to /user  routes
                          if you log in as admin it will redirect to /admin routes
             */
            else
                /** navigate to url user log in  **/
                return <Navigate to={RedirectUrlByRole[role as EnumRole]} replace/>
        }else {
            /** if your user detail is null or undefined it will return route of public */
            return <AppProvider> <PublicLayout/></AppProvider>
        }
    };

    export default PublicRoute;

### * Animation Switching Page
1️⃣ Install Framer Motion

    npm install framer-motion

2️⃣ Create PageTransition.tsx

This component will handle smooth page transitions.

    import { motion, AnimatePresence } from "framer-motion";
    import { useLocation } from "react-router-dom";
    import { ReactNode } from "react";
    
    interface PageTransitionProps {
    children: ReactNode;
    }
    
    const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    
    return (
    <AnimatePresence mode="wait">
    <motion.div
    key={location.pathname}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    >
    {children}
    </motion.div>
    </AnimatePresence>
    );
    };
    
    export default PageTransition;

3️⃣ Create LoadingIndicator.tsx

This will show the MUI LinearProgress bar when changing pages.

    import { LinearProgress } from "@mui/material";
    import { useNavigation } from "react-router-dom";
    
    const LoadingIndicator = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    
    return isLoading ? (
    <LinearProgress sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100 }} />
    ) : null;
    };
    
    export default LoadingIndicator;

4️⃣ Use PageTransition in App.tsx

Modify your App.tsx to wrap routes with the transition.

    import { RouterProvider } from "react-router-dom";
    import { router } from "./routesConfig";
    import PageTransition from "./components/PageTransition";
    import LoadingIndicator from "./components/LoadingIndicator";
    
    const App = () => {
    return (
    <>
    <LoadingIndicator />
    <PageTransition>
    <RouterProvider router={router} />
    </PageTransition>
    </>
    );
    };
    
    export default App;

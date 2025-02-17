import {EnumRole} from "../redux/store/type.ts";

export const Route={
    ROOT:"/",
    admin:{
        HOME: "/admin",
        CART:"/admin/carts",
        PRODUCT:"/admin/products",
        PRODUCT_ID:"/admin/products/:id",
        ORDER:"/admin/orders",
        CATEGORY:"/admin/categories",
        RATE:"/admin/rating"
    },
    public:{
        HOME:"/home",
        PRODUCT:"/products",
        PRODUCT_ID:"/products/:id",
        SIGN_UP:"/sign-up",
        LOGIN:"/login",
        ABOUT:"/about"
    },
    endUser:{
        HOME:"/user",
        PRODUCT:"/user/products",
        PRODUCT_ID:"/user/products/:id",
    }
}
export const RedirectUrlByRole = {
    [EnumRole.ADMIN]: Route.admin.HOME,
    [EnumRole.USER]: Route.endUser.HOME,
    [EnumRole.PUBLIC]: Route.public.HOME,
};
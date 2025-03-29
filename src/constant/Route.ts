import {EnumRole} from "@redux/services/types/IUserApi.ts";

export const Route={
    ROOT:"/",
    admin:{
        HOME: "/admin",
        DASHBOARD:"/admin/dashboard",
        CART:"/admin/carts",
        PRODUCT:"/admin/products",
        PRODUCT_ID:"/admin/products/:productId",
        ORDER:"/admin/orders",
        CATEGORY:"/admin/categories",
        REVIEW:"/admin/reviews",
        CUSTOMER:"/admin/customers",
        CUSTOMER_ID:"/admin/customers/:id",
        USER:"/admin/users",
        USER_ID:"/admin/users/:id",
        PAYMENT:"/admin/payment",
        HELP:"/admin/help",
        SETTING:"/admin/settings",
        settings:{
            appearance:"/admin/settings/appearance",
            api:"/admin/settings/api",
            color:"/admin/settings/color"
        }
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
    [EnumRole.MODERATOR]: Route.admin.HOME,
    ["undefined"]:Route.public.HOME
};
export const ObjectUrlByRole = {
    [EnumRole.ADMIN]: Route.admin,
    [EnumRole.USER]: Route.endUser,
    [EnumRole.MODERATOR]: Route.admin,
    ["undefined"]:Route.public
};
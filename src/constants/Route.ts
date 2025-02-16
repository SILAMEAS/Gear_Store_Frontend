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
        PRODUCT:"/products",
        PRODUCT_ID:"/products/:id",
        SIGN_UP:"/sign-up",
        LOGIN:"/login",
    },
    endUser:{
        HOME:'/end-user',
        PRODUCT:"/end-user/products",
        PRODUCT_ID:"/end-user/products/:id",
    }
}
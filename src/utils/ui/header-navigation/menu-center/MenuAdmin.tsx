import {Route} from "../../../../constants/Route.ts";
import {ReactNode} from "react";
import {Help, Inventory, Payment, People, PersonAdd, RateReview, Settings, ShoppingCart} from '@mui/icons-material';

export const MenuAdmin:Array<{Title:string,route:string,Icon:ReactNode}>=[
    {
        Title:"Dashboard",
        Icon:<ShoppingCart />,
        route:Route.admin.HOME
    },
    {
        Title:"Product",
        Icon:<Inventory />,
        route:Route.admin.PRODUCT
    },
    {
        Title:"Customers",
        Icon:<People />,
        route:Route.admin.USER
    },
    {
        Title:"RateReview",
        Icon:<RateReview />,
        route:Route.admin.RATE
    },
    {
        Title:"Payment",
        Icon:<Payment />,
        route:Route.admin.PAYMENT
    },
    {
        Title:"Settings",
        Icon:<Settings />,
        route:Route.admin.SETTING
    },
    {
        Title:"Help",
        Icon:<Help />,
        route:Route.admin.HELP
    },
    {
        Title:"PersonAdd",
        Icon:<PersonAdd />,
        route:Route.admin.ADD_USER
    },

]
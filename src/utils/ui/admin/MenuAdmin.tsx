import {Route} from "../../../constants/Route.ts";
import {ReactNode} from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export const MenuAdmin:Array<{Title:string,route:string,Icon:ReactNode}>=[
    {
        Title:"Dashboard",
        Icon:<GridViewIcon/>,
        route:Route.admin.HOME
    },
    {
        Title:"Products",
        Icon:<ProductionQuantityLimitsIcon />,
        route:Route.admin.PRODUCT
    },
    {
        Title:"Category",
        Icon:<CategoryOutlinedIcon />,
        route:Route.admin.CATEGORY
    },
    {
        Title:"Orders",
        Icon:<PendingActionsOutlinedIcon />,
        route:Route.admin.ORDER
    },
    {
        Title:"Reviews",
        Icon:<StarBorderOutlinedIcon />,
        route:Route.admin.REVIEW
    },
    {
        Title:"Payments",
        Icon:<PaymentsOutlinedIcon />,
        route:Route.admin.PAYMENT
    },
    {
        Title:"Customers",
        Icon:<PeopleOutlineIcon />,
        route:Route.admin.CUSTOMER
    },
    {
        Title:"Users",
        Icon:<AdminPanelSettingsOutlinedIcon />,
        route:Route.admin.USER
    },
    {
        Title:"Helps",
        Icon:<SupportAgentIcon />,
        route:Route.admin.HELP
    },
    {
        Title:"Settings",
        Icon:<SettingsOutlinedIcon />,
        route:Route.admin.SETTING
    },

]

import {ReactNode} from "react";
import {Route} from "@/constant/Route.ts";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";

export const MenuSettings:Array<{Title:string,route:string,Icon:ReactNode}>=[
    {
        Title:"Appearance",
        Icon:<AutoAwesomeOutlinedIcon fontSize={"small"}/>,
        route:Route.admin.settings.appearance
    },
    {
        Title:"API",
        Icon:<ApiOutlinedIcon fontSize={"small"}/>,
        route:Route.admin.settings.api
    },
    // {
    //     Title:"Colors",
    //     Icon:<ColorLensOutlinedIcon fontSize={"small"}/>,
    //     route:Route.admin.settings.color
    // },
]

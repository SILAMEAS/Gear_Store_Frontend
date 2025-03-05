import {EnumICard} from "../../../redux/services/types/IAdminApi.ts";
import {AttachMoney, Category, LocalShipping, People, ShoppingCart} from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PaymentsIcon from "@mui/icons-material/Payments";
export const RenderIcon=({id}:{id:EnumICard})=>{
    switch (id){
        case EnumICard.total_sales:{
            return <AttachMoney/>
        }
        case EnumICard.total_customers:{
            return <People/>
        }
        case EnumICard.total_categories:{
            return <Category/>
        }
        case EnumICard.total_payment:{
            return <PaymentsIcon/>
        }
        case EnumICard.total_orders:{
            return <BookmarkBorderIcon/>
        }
        case EnumICard.total_products:{
            return <ShoppingCart/>
        }
        case EnumICard.total_users:{
            return <People/>
        }
        case EnumICard.total_shipping:{
            return <LocalShipping/>
        }
        default:{
            return <>No Icon</>
        }
    }
}
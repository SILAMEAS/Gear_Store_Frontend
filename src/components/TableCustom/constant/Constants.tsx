import {EnumICard} from "../../../redux/services/types/IAdminApi.ts";
import {AttachMoney, Category, LocalShipping, People, ShoppingCart} from "@mui/icons-material";
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
            return <LocalShipping/>
        }
        case EnumICard.total_products:{
            return <ShoppingCart/>
        }
        default:{
            return <>No Icon</>
        }
    }
}
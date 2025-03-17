import {EnumICard} from "../../../redux/services/types/IAdminApi.ts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export const RenderIcon=({id}:{id:EnumICard})=>{
    switch (id){
        case EnumICard.total_sales:{
            return <LocalAtmOutlinedIcon/>
        }
        case EnumICard.total_customers:{
            return <PeopleOutlineIcon/>
        }
        case EnumICard.total_categories:{
            return <CategoryOutlinedIcon/>
        }
        case EnumICard.total_payment:{
            return <PaymentsOutlinedIcon/>
        }
        case EnumICard.total_orders:{
            return <BookmarkBorderIcon/>
        }
        case EnumICard.total_products:{
            return <ProductionQuantityLimitsIcon/>
        }
        case EnumICard.total_users:{
            return <AdminPanelSettingsOutlinedIcon/>
        }
        case EnumICard.total_shipping:{
            return <LocalShippingOutlinedIcon/>
        }

        default:{
            return <>No Icon</>
        }
    }
}
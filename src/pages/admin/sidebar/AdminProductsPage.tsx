import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Stack} from "@mui/material";
import HeroSections from "../../../utils/ui/shares/HeroSections.tsx";

const AdminProductsPage = () => {

    return <Stack  height={"100%"} width={"100%"}>
        <HeroSections padding={false}/>
        <CTableProducts/>
    </Stack>
};

export default AdminProductsPage;

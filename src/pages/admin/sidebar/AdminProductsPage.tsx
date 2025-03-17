import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Stack} from "@mui/material";

const AdminProductsPage = () => {
    return <Stack  height={"100vh"} width={"100%"}>
        <Stack width={"100%"} p={"50px"}>
            <CTableProducts/>
        </Stack>
    </Stack>
};

export default AdminProductsPage;

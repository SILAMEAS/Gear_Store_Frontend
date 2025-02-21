import CTableProducts from "../../../components/TableCustom/CTable/CTableProducts.tsx";
import {Stack} from "@mui/material";

const AdminProductsPage = () => {
    return <Stack  height={"100vh"} width={"100%"}>
        <Stack width={"100%"} p={"20px"}>
            <CTableProducts/>
        </Stack>
    </Stack>
};

export default AdminProductsPage;

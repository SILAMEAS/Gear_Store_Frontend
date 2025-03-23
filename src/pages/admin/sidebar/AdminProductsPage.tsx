import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Button, Stack} from "@mui/material";
import DrawerCustom from "../../../components/drawer/DrawerCustom.tsx";
import {StyleCustom} from "../../../styles/StyleCustom.tsx";
import Text from "../../../components/text/Text.tsx";
import CreateProductForm from "../../form/admin/create-product/CreateProductForm.tsx";

const AdminProductsPage = () => {
    return <Stack  height={"100%"} width={"100%"}>
        {/** Create Product **/}
        <DrawerCustom renderButton={<Button variant="text">Text</Button>}
                      anchor={"top"}
                      overflow={"auto"}
                      sx={{...StyleCustom.scrollNormal}}
        >
            <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
                <Text> Create Product</Text>
                <CreateProductForm/>
            </Stack>

        </DrawerCustom>
        <CTableProducts/>
    </Stack>
};

export default AdminProductsPage;

import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Stack} from "@mui/material";
import HeroSections from "../../../utils/ui/shares/HeroSections.tsx";

const AdminProductsPage = () => {
    return <Stack  height={"100%"} width={"100%"}>
        {/*/!** Create Product **!/*/}
        {/*<DrawerCustom renderButton={<Button variant="text">Text</Button>}*/}
        {/*              anchor={"top"}*/}
        {/*              overflow={"auto"}*/}
        {/*              sx={{...StyleCustom.scrollNormal}}*/}
        {/*>*/}
        {/*    <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>*/}
        {/*        <Text> Create Product</Text>*/}
        {/*        <CreateProductForm/>*/}
        {/*    </Stack>*/}

        {/*</DrawerCustom>*/}
        <HeroSections/>
        <CTableProducts/>
    </Stack>
};

export default AdminProductsPage;

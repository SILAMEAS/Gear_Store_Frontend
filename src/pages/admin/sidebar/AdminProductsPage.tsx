import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Stack} from "@mui/material";
import HeroSections from "../../../utils/ui/shares/HeroSections.tsx";
import ButtonCustom from "../../../components/button/ButtonCustom.tsx";
import Text from "../../../components/text/Text.tsx";
import {useAppDispatch} from "../../../redux/redux.ts";
import {setDialogRTK} from "../../../redux/store/application.ts";

const AdminProductsPage = () => {
    const dispatch=useAppDispatch()
    return <Stack  height={"100%"} width={"100%"}>
        <HeroSections padding={false}>
            <Stack direction={"row"} gap={"20px"}>
                {/** Create Product **/}
                <ButtonCustom variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))}>
                    <Text color={"primary.main"} variant={"subtitle2"}>Create Product</Text>
                </ButtonCustom>
            </Stack>
        </HeroSections>
        <CTableProducts/>
    </Stack>
};

export default AdminProductsPage;

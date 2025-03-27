import CTableProducts from "../../../components/TableCustom/CTable/table-products/CTableProducts.tsx";
import {Stack} from "@mui/material";
import HeroSections from "../../../utils/ui/shares/HeroSections.tsx";
import DialogProduct from "../../form/admin/dialog/dialog-product/DialogProduct.tsx";
import {EnumAction} from "../../../constants/GlobalConstants.tsx";
import useRKTFromStore from "../../../utils/hooks/useRTKFromStore.tsx";
import useGlobalHook from "../../../utils/hooks/useGlobalHook.tsx";
import {useEffect} from "react";
import {setDialogRTK} from "../../../redux/store/application.ts";

const AdminProductsPage = () => {
    const {dialogRTK:{adminCreateProduct,adminEditProduct}}=useRKTFromStore();
    const {dispatch,param}=useGlobalHook();
    const {productId}=param;
    useEffect(() => {
        dispatch(setDialogRTK({adminEditProduct:Boolean(productId)}))
    }, [productId]);
    return <Stack  height={"100%"} width={"100%"}>
        <HeroSections padding={false}/>
        <CTableProducts/>
        {/** Dialog Product Creation */}
        {Boolean(adminCreateProduct)&&<DialogProduct action={EnumAction.create}/>}
        {/** Dialog Product Edition */}
        {Boolean(adminEditProduct)&&<DialogProduct action={EnumAction.update}/>}
    </Stack>
};

export default AdminProductsPage;

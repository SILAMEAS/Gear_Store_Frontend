import {IconButton, Stack} from "@mui/material";
import DialogCustom from "@components/dailog/DialogCustom.tsx";
import Text from "@components/text/Text.tsx";
import {useAppDispatch} from "@redux/redux.ts";
import {ChevronLeft, CircleX} from "lucide-react";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {Route} from "@constant/Route.ts";
import {setDialogRTK} from "@redux/store/application.ts";
import TopNav from "@pages/form/admin/dialog/share/TopNav.tsx";
import CreateProductForm from "@pages/form/admin/drawer/create-product/CreateProductForm.tsx";
import ActionCreateUpdateProduct from "@pages/form/admin/dialog/dialog-product/action/ActionCreateUpdateProduct.tsx";
import {useGetProductsByIdQuery} from "@redux/services/productApi.ts";
import {IDType} from "@redux/services/types/IAdminApi.ts";

const DialogProduct = ({productId}:{productId?:IDType}) => {
    const {navigate}=useGlobalHook();
    const dispatch=useAppDispatch();
    const handleClickClose=()=>{
        if(!productId){
            dispatch(setDialogRTK({adminCreateProduct:false}))
        }
        else{
            dispatch(setDialogRTK({adminCreateProduct:false}))
            navigate(Route.admin.PRODUCT)
        }
    }
const {currentData,isFetching}=useGetProductsByIdQuery({id:productId!},{skip:!productId,refetchOnMountOrArgChange:true});

    return <DialogCustom
        isFetching={isFetching}
        open={true}

        sxProp={{
            titleSx: {
                p: 0
            },
            contentsSx: {
                p: 0,
            },
        }}
        titleDialog={
           <TopNav
               leftSide={ <Stack width="fit-content" direction="row" alignItems="center">
                           <Stack width="60px" alignItems="center">
                               <IconButton onClick={handleClickClose}>
                                   <ChevronLeft />
                               </IconButton>

                           </Stack>
                           <Text
                             variant={"overline"}>
                               {!productId? "Create Product":"Edit Product"}
                           </Text>
                       </Stack>}
               rightSide={
                   <IconButton onClick={handleClickClose}>
                       <CircleX />
                   </IconButton>
           }
           />

        }
        contentDialog={<Stack p={10}><CreateProductForm data={currentData}/></Stack>}
        actionDialog={
            <ActionCreateUpdateProduct productId={productId}/>
        }
    >
    </DialogCustom>
};

export default DialogProduct;

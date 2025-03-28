import {Backdrop, CircularProgress, IconButton, Stack} from "@mui/material";
import DialogCustom from "@components/dailog/DialogCustom.tsx";
import {useTheme} from "@theme/provider/ThemeProvider.tsx";
import TopNav from "../share/TopNav.tsx";
import CreateProductForm from "../../drawer/create-product/CreateProductForm.tsx";
import Text from "@components/text/Text.tsx";
import {useAppDispatch} from "@/redux/redux.ts";
import {ChevronLeft, CircleX} from "lucide-react";
import {EnumAction} from "@/constants/GlobalConstants.tsx";
import ActionCreateProduct from "./action/ActionCreateProduct.tsx";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {Route} from "@/constants/Route.ts";
import {setDialogRTK} from "@/redux/store/application.ts";

const DialogProduct = ({action}:{action:EnumAction}) => {
    const {colorBackWhite}=useTheme();
    const {navigate}=useGlobalHook();
    const dispatch=useAppDispatch();
    const handleClickClose=()=>{
        if(action===EnumAction.create){
            dispatch(setDialogRTK({adminCreateProduct:false}))
        }
        else{
            dispatch(setDialogRTK({adminCreateProduct:false}))
            navigate(Route.admin.PRODUCT)
        }
    }

    return <DialogCustom
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
                               {action===EnumAction.create? "Create Product":"Edit Product"}
                           </Text>
                       </Stack>}
               rightSide={
                   <IconButton onClick={handleClickClose}>
                       <CircleX />
                   </IconButton>
           }
           />

        }
        contentDialog={<Stack p={10}><CreateProductForm/></Stack>}
        actionDialog={
            action===EnumAction.create?<ActionCreateProduct/>:<>update</>
        }
    >
        <Backdrop
            sx={{
                color:colorBackWhite,
                zIndex: theme => theme.zIndex.drawer + 1,
            }}
            open={false}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </DialogCustom>
};

export default DialogProduct;

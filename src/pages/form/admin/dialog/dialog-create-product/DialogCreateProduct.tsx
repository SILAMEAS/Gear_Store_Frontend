import {Backdrop, CircularProgress, IconButton, Stack} from "@mui/material";
import DialogCustom from "../../../../../components/dailog/DialogCustom.tsx";
import {useTheme} from "../../../../../theme/provider/ThemeProvider.tsx";
import TopNav from "./TopNav.tsx";
import CreateProductForm from "../../drawer/create-product/CreateProductForm.tsx";
import Text from "../../../../../components/text/Text.tsx";
import ButtonCustom from "../../../../../components/button/ButtonCustom.tsx";
import {useAppDispatch} from "../../../../../redux/redux.ts";
import {FormID} from "../../../FormID.tsx";
import {ChevronLeft, CircleX} from "lucide-react";
import {setDialogRTK} from "../../../../../redux/store/application.ts";

const DialogCreateProduct = () => {
    const {colorBackWhite}=useTheme();
    const dispatch=useAppDispatch()
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
                               <IconButton onClick={()=>   dispatch(setDialogRTK({adminCreateProduct:false}))}>
                                   <ChevronLeft />
                               </IconButton>

                           </Stack>
                           <Text
                             variant={"overline"}>
                               Create Product
                           </Text>
                       </Stack>}
               rightSide={
                   <IconButton onClick={()=>   dispatch(setDialogRTK({adminCreateProduct:false}))}>
                       <CircleX />
                   </IconButton>
           }
           />

        }
        contentDialog={<Stack p={10}><CreateProductForm/></Stack>}
        actionDialog={<Stack width={"100%"} height={"auto"} pt={"20px"} borderTop={1} direction={"row"}  alignItems={"center"} justifyContent={"flex-end"}>
            <ButtonCustom type={"submit"} form={FormID["#create-product"]} >
                <Text>Create Product</Text>
            </ButtonCustom>
        </Stack>}
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

export default DialogCreateProduct;

import {Backdrop, CircularProgress, Stack} from "@mui/material";
import DialogCustom from "../../../../../components/dailog/DialogCustom.tsx";
import {useTheme} from "../../../../../theme/provider/ThemeProvider.tsx";
import TopNav from "./TopNav.tsx";
import CreateProductForm from "../../drawer/create-product/CreateProductForm.tsx";
import Text from "../../../../../components/text/Text.tsx";

const DialogCreateProduct = () => {
    const {colorBackWhite}=useTheme();
    return <DialogCustom
        fullScreen
        open={true}
        sxProp={{
            titleSx: {
                p: 0,
            },
            contentsSx: {
                p: 0,
            },
        }}
        titleDialog={
           <TopNav/>
        }
        contentDialog={<Stack p={10}>
            <Text>Create new Product</Text>
            <CreateProductForm/>
    </Stack>}>
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

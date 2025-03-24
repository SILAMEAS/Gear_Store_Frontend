import {Backdrop, CircularProgress} from "@mui/material";
import DialogCustom from "../../../../../components/dailog/DialogCustom.tsx";
import {useTheme} from "../../../../../theme/provider/ThemeProvider.tsx";
import TopNav from "./TopNav.tsx";

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
        contentDialog={<>Content</>}>
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

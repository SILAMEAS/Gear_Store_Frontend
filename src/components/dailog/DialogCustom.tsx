import {
    Backdrop,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    SxProps,
} from "@mui/material";
import {PropsWithChildren, ReactNode} from "react";
import {useTheme} from "@theme/provider/ThemeProvider.tsx";

type INGDialog = {
    isFetching?:boolean;
    open: boolean;
    handleClose?: () => void;
    titleDialog?: ReactNode;
    contentDialog?: ReactNode;
    actionDialog?: ReactNode;
    sxProp?: {
        titleSx?: SxProps;
        contentsSx?: SxProps;
        actionSx?: SxProps;
    };
};

const DialogCustom = ({
                     isFetching=false,
                      open,
                      handleClose,
                      titleDialog,
                      contentDialog,
                      actionDialog,
                      sxProp,
                      ...props
                  }: INGDialog & DialogProps & PropsWithChildren) => {
    const {colorBackWhite}=useTheme();
    return (
        <Dialog
            maxWidth='hd'
            fullWidth
            {...props} open={open} onClose={handleClose}>
            {titleDialog && (
                <DialogTitle sx={{...sxProp?.titleSx}}>{titleDialog}</DialogTitle>
            )}
            {contentDialog && (
                <DialogContent sx={{...sxProp?.contentsSx}}>
                    {contentDialog}
                </DialogContent>
            )}
            {actionDialog && (
                <DialogActions sx={{...sxProp?.actionSx}}>{actionDialog}</DialogActions>
            )}
            {props.children}
            <Backdrop
                sx={{
                    color:colorBackWhite,
                    zIndex: theme => theme.zIndex.drawer + 1,
                }}
                open={isFetching}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Dialog>
    );
};

export default DialogCustom;

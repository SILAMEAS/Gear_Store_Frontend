import {Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, SxProps,} from "@mui/material";
import {PropsWithChildren, ReactNode} from "react";

type INGDialog = {
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
                      open,
                      handleClose,
                      titleDialog,
                      contentDialog,
                      actionDialog,
                      sxProp,
                      ...props
                  }: INGDialog & DialogProps & PropsWithChildren) => {
    return (
        <Dialog
            maxWidth='lg'
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
        </Dialog>
    );
};

export default DialogCustom;

import type React from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"

interface DeleteConfirmationDialogProps {
    open: boolean
    title?: string
    content?: string
    confirmButtonText?: string
    cancelButtonText?: string
    onConfirm: () => void
    onCancel: () => void
}

export const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
                                                                                      open,
                                                                                      title = "Confirm Deletion",
                                                                                      content = "Are you sure you want to delete this item? This action cannot be undone.",
                                                                                      confirmButtonText = "Delete",
                                                                                      cancelButtonText = "Cancel",
                                                                                      onConfirm,
                                                                                      onCancel,
                                                                                  }) => {
    return (
        <Dialog
            open={open}
            onClose={onCancel}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
        >
            <DialogTitle id="delete-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="delete-dialog-description">{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    {cancelButtonText}
                </Button>
                <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
                    {confirmButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}


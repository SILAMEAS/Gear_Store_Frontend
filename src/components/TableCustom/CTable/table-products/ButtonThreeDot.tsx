import {MenuItem, MenuList} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, {useState} from "react";
import {DeleteConfirmationDialog} from "@components/dailog/DeleteConfirmationDialog.tsx";
import Text from "@components/text/Text.tsx";
import {EnumButtonThreeDot} from "@constant/GlobalConstants.tsx";

interface IButtonThreeDot<T extends Record<string, any>>{
    data:T,
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
    handleConfirmDeleteOuter?:()=>void,
    handleEditOuter?:()=>void,
    route:EnumButtonThreeDot
}

function ButtonThreeDot<T extends Record<string, any>>({data,setPopUp,route,
                                                           handleConfirmDeleteOuter=()=>{console.log("handleConfirmDeleteOuter")},
                                                           handleEditOuter=()=>{console.log("handleEditOuter")}
}:Readonly<IButtonThreeDot<T>>) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false)
    const handleEdit=()=>{
        handleEditOuter()
    }
    const handleClose=()=>{
        setPopUp(false)
    }
    const handleDeleteDialog=()=>{
        setDeleteDialogOpen(true)
    }
    const handleConfirmDelete = () => {
        handleConfirmDeleteOuter()
        setDeleteDialogOpen(false);
    }
    const handleCancelDelete = () => {
        setDeleteDialogOpen(false);
        handleClose();
    }
    const Render=()=>{
        switch (route) {
            case EnumButtonThreeDot.product: {
                return <React.Fragment>
                    <MenuItem onClick={handleEdit}>
                        <EditNoteIcon style={{marginRight: 8}} fontSize={"small"}/>
                        <Text> Edit Product</Text>
                    </MenuItem>
                    <MenuItem onClick={handleDeleteDialog} sx={{color: "error.main"}}>
                        <DeleteOutlineIcon style={{marginRight: 8}} fontSize={"small"}/>
                        <Text> Delete Product</Text>
                    </MenuItem>
                    <DeleteConfirmationDialog
                        open={deleteDialogOpen}
                        title="Confirm Delete"
                        content={`Are you sure you want to delete ${data?.name}? This action cannot be undone.`}
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
                </React.Fragment>
            }
            default: {
                return <React.Fragment></React.Fragment>
            }
        }
    }
    return <MenuList sx={{width: "200px"}}>
        {
            Render()
        }
    </MenuList>
}

export default ButtonThreeDot;

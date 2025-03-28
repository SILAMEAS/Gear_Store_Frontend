import {MenuItem, MenuList} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, {useState} from "react";
import {Route} from "@/constant/Route.ts";
import {DeleteConfirmationDialog} from "@components/dailog/DeleteConfirmationDialog.tsx";
import Text from "@components/text/Text.tsx";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";

interface IButtonThreeDot<T extends Record<string, any>>{
    data:T,
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
    handleConfirmDeleteOuter?:()=>void
}

function ButtonThreeDot<T extends Record<string, any>>({data,setPopUp,handleConfirmDeleteOuter=()=>{
    console.log("handleConfirmDeleteOuter")
}}:Readonly<IButtonThreeDot<T>>) {
    const {navigate}=useGlobalHook();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false)
    const handleEditProduct=()=>{
        navigate(`${Route.admin.PRODUCT}/${data.id}`)
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
    return (
        <MenuList sx={{width:"200px"}}>
            <MenuItem onClick={handleEditProduct}>
                <EditNoteIcon style={{ marginRight: 8 }} fontSize={"small"} />
               <Text> Edit Product</Text>
            </MenuItem>
            <MenuItem onClick={handleDeleteDialog} sx={{ color: "error.main" }}>
                <DeleteOutlineIcon  style={{ marginRight: 8 }}  fontSize={"small"}/>
                <Text>  Delete Product</Text>
            </MenuItem>
            <DeleteConfirmationDialog
                open={deleteDialogOpen}
                title="Confirm Delete"
                content={`Are you sure you want to delete ${data?.name}? This action cannot be undone.`}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </MenuList>
    );
}

export default ButtonThreeDot;

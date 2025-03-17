import {MenuItem, MenuList} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

interface IButtonThreeDot<T extends Record<string, any>>{
    data:T,
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function ButtonThreeDot<T extends Record<string, any>>({data,setPopUp}:Readonly<IButtonThreeDot<T>>) {
    const handleActionMenuClose=()=>{
        setPopUp(false)
    }
    const handleActionMenuDelete=()=>{
        setPopUp(false)
    }
    console.log("data",data)

    return (
        <MenuList sx={{width:"200px"}}>
            <MenuItem onClick={handleActionMenuClose}>
                <EditNoteIcon style={{ marginRight: 8 }} />
                Edit Product
            </MenuItem>
            <MenuItem onClick={handleActionMenuDelete} sx={{ color: "error.main" }}>
                <DeleteOutlineIcon  style={{ marginRight: 8 }} />
                Delete Product
            </MenuItem>
        </MenuList>

    );
}

export default ButtonThreeDot;

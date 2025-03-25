import {MenuItem, MenuList} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import Text from "../../../text/Text.tsx";

interface IButtonThreeDot<T extends Record<string, any>>{
    data:T,
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function ButtonThreeDot<T extends Record<string, any>>({data,setPopUp}:Readonly<IButtonThreeDot<T>>) {
    const handleActionMenuClose=()=>{
        console.log("ButtonThreeDot",data)
        setPopUp(false)
    }
    const handleActionMenuDelete=()=>{
        setPopUp(false)
    }

    return (
        <MenuList sx={{width:"200px"}}>
            <MenuItem onClick={handleActionMenuClose}>
                <EditNoteIcon style={{ marginRight: 8 }} fontSize={"small"} />
               <Text variant={"body2"}> Edit Product</Text>
            </MenuItem>
            <MenuItem onClick={handleActionMenuDelete} sx={{ color: "error.main" }}>
                <DeleteOutlineIcon  style={{ marginRight: 8 }}  fontSize={"small"}/>
                <Text variant={"body2"}>  Delete Product</Text>
            </MenuItem>
        </MenuList>

    );
}

export default ButtonThreeDot;

import {MenuItem, MenuList} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import Text from "../../../text/Text.tsx";
import useGlobalHook from "../../../../utils/hooks/useGlobalHook.tsx";
import {Route} from "../../../../constants/Route.ts";

interface IButtonThreeDot<T extends Record<string, any>>{
    data:T,
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function ButtonThreeDot<T extends Record<string, any>>({data,setPopUp}:Readonly<IButtonThreeDot<T>>) {
    const {navigate}=useGlobalHook();
    const handleEditProduct=()=>{
        navigate(`${Route.admin.PRODUCT}/${data.id}`)
    }
    const handleActionMenuDelete=()=>{
        setPopUp(false)
    }

    return (
        <MenuList sx={{width:"200px"}}>
            <MenuItem onClick={handleEditProduct}>
                <EditNoteIcon style={{ marginRight: 8 }} fontSize={"small"} />
               <Text> Edit Product</Text>
            </MenuItem>
            <MenuItem onClick={handleActionMenuDelete} sx={{ color: "error.main" }}>
                <DeleteOutlineIcon  style={{ marginRight: 8 }}  fontSize={"small"}/>
                <Text>  Delete Product</Text>
            </MenuItem>
        </MenuList>

    );
}

export default ButtonThreeDot;

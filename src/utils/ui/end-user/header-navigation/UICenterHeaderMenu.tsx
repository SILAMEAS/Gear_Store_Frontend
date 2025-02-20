import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";
import {useAppSelector} from "../../../../redux/redux.ts";
import {EnumRole} from "../../../../redux/store/type.ts";
import {MenuUser} from "../MenuUser.ts";
import {MenuPublic} from "../../public/MenuPublic.ts";

export const UICenterHeaderMenu=()=>{
    const navigate = useNavigate();
    const [menu,setMenu]=React.useState<Array<{name:string,url:string}>>(MenuPublic);
    const {role}=useAppSelector(state => state.application);
    React.useLayoutEffect(()=>{
        if(role===EnumRole.USER){
            setMenu(MenuUser)
        }else {
            setMenu(MenuPublic)
        }

    },[role])

    return <>
        {menu.map((item) => (
            <Button key={item.name} sx={{ color: "white", textTransform: "none" }} onClick={()=>{
                navigate(item.url)
            }}>
                {item.name}
            </Button>
        ))}
    </>
}
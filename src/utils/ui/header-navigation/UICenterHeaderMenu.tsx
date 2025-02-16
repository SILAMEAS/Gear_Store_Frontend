import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {Route} from "../../../constants/Route.ts";
import React from "react";
import {useAppSelector} from "../../../redux/redux.ts";

export const UICenterHeaderMenu=()=>{
    const navigate = useNavigate();
    const MenuPublic=[{name:"Home",url:Route.public.HOME},{name:"Product",url:Route.public.PRODUCT},{name:"About",url:Route.public.ABOUT}];
    const MenuUser=[{name:"Home User",url:Route.endUser.HOME},{name:"Product",url:Route.endUser.PRODUCT}];
    const MenuAdmin=[{name:"Home Admin",url:Route.admin.HOME},{name:"Product",url:Route.admin.PRODUCT},{name:"Cart",url:Route.admin.CART}];
    const [menu,setMenu]=React.useState<Array<{name:string,url:string}>>(MenuPublic);
    const {role}=useAppSelector(state => state.application);
    React.useLayoutEffect(()=>{
        if(role==='admin'){
            setMenu(MenuAdmin)
        }else if(role==='user'){
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
import React from "react";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {useAppSelector} from "@redux/redux.ts";
import {EnumRole} from "@redux/services/types/IUserApi.ts";
import {MenuUser} from "@utils/ui/end-user/MenuUser.ts";
import {MenuPublic} from "@utils/ui/public/MenuPublic.ts";
import Text from "@components/text/Text.tsx";

export const UICenterHeaderMenu=()=>{
    const {navigate,pathname}=useGlobalHook();
    const [menu,setMenu]=React.useState<Array<{name:string,url:string}>>(MenuPublic);
    const {userDetail}=useAppSelector(state=>state.application);
    React.useLayoutEffect(()=>{
        if(userDetail?.role===EnumRole.USER){
            setMenu(MenuUser)
        }else {
            setMenu(MenuPublic)
        }

    },[userDetail?.role])

    return <>
        {menu.map((item) => (
            <Text key={item.name} onClick={()=> navigate(item.url)} sx={{color:item.url===pathname?"primary.main":"inherit",cursor:"pointer"}}>{item.name}</Text>
        ))}
    </>
}
import React, {PropsWithChildren, useState} from "react";
import Text from "../../../components/text/Text.tsx";
import {Stack} from "@mui/material";
import useCheckUrl from "../../hooks/useCheckUrl.tsx";
import {useTheme} from "../../../theme/provider/ThemeProvider.tsx";

interface IHeroSections{Slash?:number,padding?:boolean}
const HeroSections = ({Slash=2,padding=true,children}:IHeroSections&PropsWithChildren) => {
    const [label,setLabel]=useState<string>("Dashboard");
    const {pathname}=useCheckUrl();
    const {colorBackWhite}=useTheme();
    React.useEffect(()=>{
        if(location?.pathname?.split("/")[Slash]){
            setLabel(location?.pathname?.split("/")[Slash])
        }else {
            setLabel("Dashboard")
        }
    },[pathname,Slash]);
    return (
        <Stack borderBottom={"2px solid"}
               borderColor={"Grey.light"}
               height={padding?"50px":"100px"}
               justifyContent={"space-between"}
               alignItems={"center"}
               px={padding?"20px":0}
               direction={"row"}
               width={"100%"}
               mb={padding?0:"20px"}
        >
            <Text variant="subtitle1" component="div" sx={{ color:colorBackWhite}}>
                {label.toLocaleUpperCase()}
            </Text>
            {children}
        </Stack>
    );
};

export default HeroSections;

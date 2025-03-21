import React, {useState} from "react";
import Text from "../../../components/text/Text.tsx";
import {Stack} from "@mui/material";
import useCheckUrl from "../../hooks/useCheckUrl.tsx";

const HeroSections = ({Slash=2}:{Slash?:number}) => {
    const [label,setLabel]=useState<string>("Dashboard");
    const {pathname}=useCheckUrl();
    React.useEffect(()=>{
        if(location?.pathname?.split("/")[Slash]){
            setLabel(location?.pathname?.split("/")[Slash])
        }else {
            setLabel("Dashboard")
        }
    },[pathname,Slash])
    return (
        <Stack borderBottom={"2px solid"} borderColor={"Grey.main"} height={"50px"} justifyContent={"center"} px={"20px"}>
            <Text variant="subtitle1" component="div" sx={{ color:"black.main"}}>
                {label.toLocaleUpperCase()}
            </Text>
        </Stack>
    );
};

export default HeroSections;

import React, {useState} from "react";
import Text from "../../../components/text/Text.tsx";
import {Stack} from "@mui/material";

const HeroSections = ({Slash=2}:{Slash?:number}) => {
    const [label,setLabel]=useState<string>("Dashboard")
    React.useEffect(()=>{
        if(location?.pathname?.split("/")[Slash]){
            setLabel(location?.pathname?.split("/")[Slash])
        }else {
            setLabel("Dashboard")
        }
    },[Slash])
    return (
        <Stack borderBottom={"2px solid"} borderColor={"Blue.main"} height={"50px"} justifyContent={"center"} px={"20px"}>
            <Text variant="subtitle1" component="div" sx={{ color:"Black.main"}}>
                {label.toLocaleUpperCase()}
            </Text>
        </Stack>
    );
};

export default HeroSections;

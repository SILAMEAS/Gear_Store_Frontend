import React, {useState} from "react";
import Text from "../../../components/text/Text.tsx";

const HeroSections = () => {
    const [label,setLabel]=useState<string>("Dashboard")
    React.useEffect(()=>{
        if(location?.pathname?.split("/")[2]){
            setLabel(location?.pathname?.split("/")[2])
        }else {
            setLabel("Dashboard")
        }
    },[])
    return (
        <div>
            <Text variant="h6" component="div" sx={{ flexGrow: 1 ,color:"primary.main"}}>
                {label.toLocaleUpperCase()}
            </Text>
        </div>
    );
};

export default HeroSections;

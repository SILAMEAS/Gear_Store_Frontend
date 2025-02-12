import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export const UIMenu=()=>{
    const navigate = useNavigate()
    return <>
        {[{name:"Home",url:"/"},{name:"About",url:"/"}].map((item) => (
            <Button key={item.name} sx={{ color: "white", textTransform: "none" }} onClick={()=>{
                navigate(item.url)
            }}>
                {item.name}
            </Button>
        ))}
    </>
}
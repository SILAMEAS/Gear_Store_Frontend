import {ListItem, ListItemIcon, ListItemProps} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import {useTheme} from "@theme/provider/ThemeProvider.tsx";

const ThemeToggle = ({...props}:{label?:string}&ListItemProps) => {
    const { toggleTheme, isDarkMode } = useTheme()
    return <ListItem onClick={()=>toggleTheme()}  {...props}>
        <ListItemIcon>
            {isDarkMode ? <WbSunnyOutlinedIcon sx={{cursor:"pointer"}}/> : <BedtimeOutlinedIcon sx={{cursor:"pointer"}}/>}
        </ListItemIcon>
    </ListItem>
};

export default ThemeToggle;

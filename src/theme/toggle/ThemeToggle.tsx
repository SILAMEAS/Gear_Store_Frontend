import {useTheme} from "../provider/ThemeProvider.tsx";
import {ListItem, ListItemIcon, ListItemProps, ListItemText} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const ThemeToggle = ({label,...props}:{label?:string}&ListItemProps) => {
    const { toggleTheme, isDarkMode } = useTheme()
    return <ListItem onClick={toggleTheme}  {...props}>
        <ListItemIcon>
            {isDarkMode ? <WbSunnyOutlinedIcon sx={{cursor:"pointer"}}/> : <BedtimeOutlinedIcon sx={{cursor:"pointer"}}/>}
        </ListItemIcon>
        {
            label&&<ListItemText primary={label} />
        }
    </ListItem>
};

export default ThemeToggle;

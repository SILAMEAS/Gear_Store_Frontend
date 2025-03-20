import {useTheme} from "../provider/ThemeProvider.tsx";
import {ListItem, ListItemIcon, ListItemProps} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const ThemeToggle = ({...props}:{label?:string}&ListItemProps) => {
    const { toggleTheme, isDarkMode } = useTheme()
    return <ListItem onClick={toggleTheme}  {...props}>
        <ListItemIcon>
            {isDarkMode ? <WbSunnyOutlinedIcon sx={{cursor:"pointer"}}/> : <BedtimeOutlinedIcon sx={{cursor:"pointer"}}/>}
        </ListItemIcon>
    {/** use later
     {
     label&&<ListItemText primary={label} />
     }
     */}
    </ListItem>
};

export default ThemeToggle;

import {useTheme} from "../provider/ThemeProvider.tsx";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {ListItem, ListItemIcon, ListItemProps, ListItemText} from "@mui/material";

const ThemeToggle = ({label,...props}:{label?:string}&ListItemProps) => {
    const { toggleTheme, isDarkMode } = useTheme()
    return <ListItem onClick={toggleTheme}  {...props}>
        <ListItemIcon>
            {isDarkMode ? <LightModeIcon sx={{cursor:"pointer"}}/> : <DarkModeIcon sx={{cursor:"pointer"}}/>}
        </ListItemIcon>
        {
            label&&<ListItemText primary={label} />
        }
    </ListItem>
};

export default ThemeToggle;

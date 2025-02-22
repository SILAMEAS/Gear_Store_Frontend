import {useTheme} from "../provider/ThemeProvider.tsx";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {ListItem, ListItemIcon, ListItemProps, ListItemText} from "@mui/material";

const ThemeToggle = ({label,...props}:{label?:string}&ListItemProps) => {
    const { toggleTheme, isDarkMode } = useTheme()
    return <ListItem onClick={toggleTheme} sx={{cursor:"pointer"}} {...props}>
        <ListItemIcon>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ListItemIcon>
        {
            label&&<ListItemText primary={label} />
        }
    </ListItem>
    // <IconButton onClick={toggleTheme} {...IconButtonProps}>
    //     {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    // </IconButton>
};

export default ThemeToggle;

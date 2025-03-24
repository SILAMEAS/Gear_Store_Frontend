import {useState} from "react";
import {Box, Typography} from "@mui/material";
import {ThemePreview} from "./ThemePreview.tsx";
import ThemeToggle from "../../../../../../../theme/toggle/ThemeToggle.tsx";

const InterfaceTheme = () => {
    const [theme, setTheme] = useState("Light")
    return  <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="500" gutterBottom>
            Interface theme
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            Select or customize your UI theme.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <ThemePreview theme="Light" selected={theme === "Light"} onClick={() => setTheme("Light")} />
            <ThemePreview theme="Dark" selected={theme === "Dark"} onClick={() => setTheme("Dark")} />
            <ThemeToggle/>
        </Box>
    </Box>
};

export default InterfaceTheme;

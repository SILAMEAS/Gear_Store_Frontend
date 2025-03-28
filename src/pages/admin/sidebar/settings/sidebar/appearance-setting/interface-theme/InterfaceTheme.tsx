import {Box, Typography} from "@mui/material";
import {useTheme} from "@theme/provider/ThemeProvider.tsx";
import {ThemePreview} from "@pages/admin/sidebar/settings/sidebar/appearance-setting/interface-theme/ThemePreview.tsx";

const InterfaceTheme = () => {
    const { toggleTheme, isDarkMode } = useTheme()
    return  <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="500" gutterBottom>
            Interface theme
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            Select or customize your UI theme.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <ThemePreview theme="Light" selected={!isDarkMode} onClick={() => toggleTheme("light")} />
            <ThemePreview theme="Dark" selected={isDarkMode} onClick={() => toggleTheme("dark")} />
        </Box>
    </Box>
};

export default InterfaceTheme;

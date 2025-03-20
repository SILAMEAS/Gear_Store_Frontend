import {useState} from "react"
import {Box, Button, InputAdornment, Paper, TextField, Typography,} from "@mui/material"
import {LoadingSpinner} from "../../../../../components/loading/LoadingSpinner.tsx";
import EnumTableFooterType from "../../../../../components/TableCustom/constant/enum/EnumTableFooterType.ts";
import {TableViewPreview} from "./appearance-setting/TableViewPreview.tsx";
import {ColorOption} from "./appearance-setting/ColorOption.tsx";
import {ThemePreview} from "./appearance-setting/ThemePreview.tsx";
import ThemeToggle from "../../../../../theme/toggle/ThemeToggle.tsx";


function AppearanceSettings() {
    // State for all settings
    // const [logo, setLogo] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState("#2C68F6")
    const [customColor, setCustomColor] = useState("#2C68F6")
    const [theme, setTheme] = useState("System preference")
    const [tableView, setTableView] = useState<EnumTableFooterType>(EnumTableFooterType.pagination)

    // Color options
    const colorOptions = [
        "#000000", // Black
        "#6E41E2", // Purple
        "#2C68F6", // Blue
        "#4A9BFF", // Light blue
        "#1A9CB0", // Teal
        "#2E8B57", // Green
    ]

    return (
        <Box sx={{width:"100%", mx: "auto", p: 3 ,overflow:"auto"}}>
            {/** ========================= Company Logo ========================== */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                    Company logo
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Update your company logo.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            width: 80,
                            height: 80,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2,
                            border: "1px solid #e0e0e0",
                            mr: 2,
                            bgcolor: "#f5f5f5",
                        }}
                    >
                        <LoadingSpinner />
                    </Paper>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: 1,
                            textTransform: "none",
                            mr: 2,
                            color: "text.primary",
                            borderColor: "divider",
                        }}
                    >
                        Replace logo
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            borderRadius: 1,
                            textTransform: "none",
                            color: "White.main",
                            bgcolor: "error.light",
                            "&:hover": {
                                bgcolor: "error.light",
                                opacity: 0.9,
                            },
                        }}
                    >
                        Remove
                    </Button>
                </Box>
            </Box>

            {/** ========================= Brand Color ========================= */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                    Brand color
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Select or customize your brand color.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    {colorOptions.map((color) => (
                        <ColorOption
                            key={color}
                            color={color}
                            selected={selectedColor === color}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        Custom color:
                    </Typography>
                    <TextField
                        value={customColor}
                        onChange={(e) => {
                            setCustomColor(e.target.value)
                            setSelectedColor(e.target.value)
                        }}
                        size="small"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>,
                        }}
                        sx={{ width: 120, mr: 2 }}
                    />
                    <Box
                        sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            bgcolor: customColor,
                            border: "2px solid #2C68F6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: customColor }} />
                    </Box>
                </Box>
            </Box>

            {/** ========================= Interface Theme ========================= */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                    Interface theme
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Select or customize your UI theme.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <ThemePreview
                        theme="System preference"
                        selected={theme === "System preference"}
                        onClick={() => setTheme("System preference")}
                    />
                    <ThemePreview theme="Light" selected={theme === "Light"} onClick={() => setTheme("Light")} />
                    <ThemePreview theme="Dark" selected={theme === "Dark"} onClick={() => setTheme("Dark")} />
                    <ThemeToggle/>
                </Box>
            </Box>

            {/** ========================= Tables View ========================= */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                    Tables view
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    How are tables displayed in the app.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <TableViewPreview view="Pagination" selected={tableView === EnumTableFooterType.pagination} onClick={() => setTableView(EnumTableFooterType.pagination)} />
                    <TableViewPreview view="Infinite Scroll" selected={tableView === EnumTableFooterType.infiniteScroll} onClick={() => setTableView( EnumTableFooterType.infiniteScroll)} />
                </Box>
            </Box>

            {/** ========================= Action Buttons ========================= */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                <Button
                    variant="outlined"
                    sx={{
                        mr: 2,
                        borderRadius: 1,
                        textTransform: "none",
                        color: "text.primary",
                        borderColor: "divider",
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        bgcolor: "#2C68F6",
                        "&:hover": {
                            bgcolor: "#1a54d9",
                        },
                    }}
                >
                    Save changes
                </Button>
            </Box>
        </Box>
    )
}


export default AppearanceSettings;

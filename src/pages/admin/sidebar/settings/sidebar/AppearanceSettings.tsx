import {useState} from "react"
import {Box, Button, Card, InputAdornment, Paper, TextField, Typography,} from "@mui/material"
import {Check} from "lucide-react"
import {LoadingSpinner} from "../../../../../components/loading/LoadingSpinner.tsx";
import EnumTableFooterType from "../../../../../components/TableCustom/constant/enum/EnumTableFooterType.ts";


// Theme preview component
const ThemePreview = ({
                          theme,
                          selected,
                          onClick,
                      }: {
    theme: string
    selected: boolean
    onClick: () => void
}) => {
    const isDark = theme === "Dark"
    const isSystem = theme === "System preference"

    return (
        <Box sx={{ textAlign: "center" }}>
            <Card
                onClick={onClick}
                sx={{
                    width: 190,
                    height: 120,
                    cursor: "pointer",
                    position: "relative",
                    border: selected ? "2px solid #2C68F6" : "1px solid #e0e0e0",
                    borderRadius: "8px",
                    overflow: "hidden",
                    mb: 1,
                }}
            >
                {selected && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: 8,
                            bgcolor: "#2C68F6",
                            borderRadius: "50%",
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Check size={16} />
                    </Box>
                )}
                <Box sx={{ display: "flex", height: "100%" }}>
                    <Box
                        sx={{
                            width: "30%",
                            bgcolor: isSystem ? "#f5f5f5" : isDark ? "#333" : "#f5f5f5",
                            borderRight: "1px solid #e0e0e0",
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: 3,
                                bgcolor: isSystem || !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                        <Box
                            sx={{
                                width: "80%",
                                height: 3,
                                bgcolor: isSystem || !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                        <Box
                            sx={{
                                width: "60%",
                                height: 3,
                                bgcolor: isSystem || !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "70%",
                            bgcolor: isSystem ? "#333" : isDark ? "#222" : "#fff",
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: 10,
                                bgcolor: isSystem || isDark ? "#444" : "#eee",
                                mb: 1,
                            }}
                        />
                        <Box
                            sx={{
                                width: "100%",
                                height: 60,
                                bgcolor: isSystem || isDark ? "#444" : "#eee",
                            }}
                        />
                    </Box>
                </Box>
            </Card>
            <Typography variant="body2">{theme}</Typography>
        </Box>
    )
}

// Table view preview component
const TableViewPreview = ({
                              view,
                              selected,
                              onClick,
                          }: {
    view: string
    selected: boolean
    onClick: () => void
}) => {
    const isCompact = view === "Compact"

    return (
        <Box sx={{ textAlign: "center" }}>
            <Card
                onClick={onClick}
                sx={{
                    width: 180,
                    height: 120,
                    cursor: "pointer",
                    position: "relative",
                    border: selected ? "2px solid #2C68F6" : "1px solid #e0e0e0",
                    borderRadius: "8px",
                    overflow: "hidden",
                    mb: 1,
                }}
            >
                {selected && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: 8,
                            bgcolor: "#2C68F6",
                            borderRadius: "50%",
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Check size={16} />
                    </Box>
                )}
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                            Customer
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ width: 30, height: 8, bgcolor: "#eee", borderRadius: 1 }} />
                    </Box>

                    {[1, 2, 3, 4].map((row) => (
                        <Box
                            key={row}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: isCompact ? 0.5 : 1,
                                py: isCompact ? 0.25 : 0.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    bgcolor: "#ddd",
                                    mr: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "70%",
                                    height: 6,
                                    bgcolor: "#eee",
                                    borderRadius: 1,
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Card>
            <Typography variant="body2">{view}</Typography>
        </Box>
    )
}

// Color option component
const ColorOption = ({
                         color,
                         selected,
                         onClick,
                     }: {
    color: string
    selected: boolean
    onClick: () => void
}) => (
    <Box
        onClick={onClick}
        sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: color,
            cursor: "pointer",
            border: selected ? "2px solid #2C68F6" : "none",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
        }}
    >
        {selected && <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: color }} />}
    </Box>
)

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
            {/** Company Logo */}
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

            {/** Brand Color */}
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

            {/* Interface Theme */}
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
                </Box>
            </Box>



            {/* Tables View */}
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

            {/* Action Buttons */}
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

import {useState} from "react"
import {Box, Button, Paper, Typography,} from "@mui/material"
import {LoadingSpinner} from "../../../../../components/loading/LoadingSpinner.tsx";
import EnumTableFooterType from "../../../../../components/TableCustom/constant/enum/EnumTableFooterType.ts";
import {TableViewPreview} from "./appearance-setting/TableViewPreview.tsx";
import {ThemePreview} from "./appearance-setting/ThemePreview.tsx";
import ThemeToggle from "../../../../../theme/toggle/ThemeToggle.tsx";


function AppearanceSettingsPage() {
    // State for all settings
    const [logo, _] = useState<string | null>("http://localhost:4000/media/logo/image_2023_08_18T06_22_30_931Z.png")
    const [theme, setTheme] = useState("Light")
    const [tableView, setTableView] = useState<EnumTableFooterType>(EnumTableFooterType.pagination)

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
                        }}
                    >
                        <LoadingSpinner />
                        {
                            logo && <img src={logo} alt={"logo"} width={"100%"}/>
                        }
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
                            color: "white",
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


            {/** ========================= Interface Theme ========================= */}
            <Box sx={{ mb: 4 }}>
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

        </Box>
    )
}


export default AppearanceSettingsPage;

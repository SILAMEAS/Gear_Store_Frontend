import {useState} from "react";
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import {
    Add,
    Api,
    BrandingWatermark,
    Delete,
    History,
    Image,
    Link,
    Lock,
    People,
    Search,
    Settings,
    Storage,
} from "@mui/icons-material";

// Sample logo component
const SampleLogo = () => (
    <Box sx={{ textAlign: "center", color: "#4285f4" }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="25" fill="none" stroke="#4285f4" strokeWidth="2" />
            <path d="M30,40 Q40,25 50,40" fill="none" stroke="#4285f4" strokeWidth="2" />
        </svg>
        <Typography variant="caption" sx={{ display: "block", color: "#4285f4" }}>
            COMPANY
        </Typography>
    </Box>
);

// Color options for theme selection
const colorOptions = [
    "#5c6bc0", // purple
    "#8d6e63", // brown
    "#e57373", // red
    "#ec407a", // pink
    "#d81b60", // dark pink
    "#5c6bc0", // indigo
    "#42a5f5", // blue
    "#26a69a", // teal (selected)
    "#66bb6a", // green
    "#8d6e63", // brown
    "#757575", // gray
    "#212121", // black
];

const BrandSettingsPage = () => {
    const theme = useTheme();
    const [selectedColor, setSelectedColor] = useState("#26a69a");

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
            {/* App Bar */}
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "64px",
                bgcolor: "white",
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                px: 2,
                zIndex: 1100
            }}>
                <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <Box sx={{ position: "relative", width: "70%", maxWidth: 800 }}>
                        <Search sx={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "text.secondary" }} />
                        <TextField
                            placeholder="Rechercher un document, un signataire, un projet"
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    pl: 5,
                                    borderRadius: 1,
                                    bgcolor: "#f5f5f5",
                                    "&:hover fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.23)",
                                    },
                                }
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton>
                        <Image />
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #e0e0e0", borderRadius: 1, px: 1 }}>
                        <img src="https://flagcdn.com/w20/fr.png" alt="French flag" style={{ marginRight: 8 }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold", mr: 1 }}>FR</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", ml: 1 }}>SM</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Sidebar */}
            <Paper
                elevation={0}
                sx={{
                    width: 240,
                    borderRight: "1px solid #e0e0e0",
                    position: "fixed",
                    top: 64,
                    left: 0,
                    bottom: 0,
                    bgcolor: "white",
                    overflowY: "auto",
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Entreprise
                    </Typography>
                </Box>
                <List>
                    <ListItem
                        sx={{
                            "&.Mui-selected": {
                                bgcolor: "rgba(25, 118, 210, 0.08)",
                                borderRadius: 1,
                                mx: 1,
                                width: "calc(100% - 16px)",
                            }
                        }}
                    >
                        <ListItemIcon>
                            <BrandingWatermark />
                        </ListItemIcon>
                        <ListItemText primary="Marque" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Département" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <Lock />
                        </ListItemIcon>
                        <ListItemText primary="Droits d'accès" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <Storage />
                        </ListItemIcon>
                        <ListItemText primary="Métadonnées" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Paramètres" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <Api />
                        </ListItemIcon>
                        <ListItemText primary="API" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <Link />
                        </ListItemIcon>
                        <ListItemText primary="Connexion externe" />
                    </ListItem>
                    <ListItem  sx={{ mx: 1, width: "calc(100% - 16px)" }}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary="Journal des opérations" />
                    </ListItem>
                </List>
            </Paper>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                    ml: "240px",
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Marque
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#2e7d73",
                                    "&:hover": { bgcolor: "#1b5e56" },
                                    textTransform: "none",
                                    borderRadius: 1
                                }}
                            >
                                Enregistrer les modifications
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Votre marque
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Personnalisez l'interface de votre organisation aux couleurs de votre marque.
                            </Typography>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                Logo
                            </Typography>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    height: 150,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mb: 1,
                                }}
                            >
                                <SampleLogo />
                            </Paper>
                            <Typography variant="caption" color="textSecondary">
                                Format accepté: .png, Dimension: entre 500x500 et 2000x2000 pixels
                            </Typography>
                            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                                <Button
                                    startIcon={<Image />}
                                    variant="text"
                                    sx={{ color: theme.palette.primary.main }}
                                >
                                    Changer le logo
                                </Button>
                                <Button
                                    startIcon={<Delete />}
                                    variant="text"
                                    sx={{ color: theme.palette.primary.main }}
                                >
                                    Retirer le logo
                                </Button>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                Votre thème de couleur
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {colorOptions.map((color) => (
                                    <Box
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: color,
                                            cursor: "pointer",
                                            border: color === selectedColor ? "2px solid white" : "none",
                                            outline: color === selectedColor ? `2px solid ${color}` : "none",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {color === selectedColor && (
                                            <Box
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: "50%",
                                                    bgcolor: "white",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 20,
                                                        height: 20,
                                                        borderRadius: "50%",
                                                        bgcolor: color,
                                                    }}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        border: "1px dashed #bdbdbd",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Add fontSize="small" sx={{ color: "#bdbdbd" }} />
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ mb: 4 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#e0e0e0",
                                    color: "text.primary",
                                    textTransform: "none",
                                    borderRadius: 1
                                }}
                            >
                                Réinitialiser par défaut
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                Prévisualisation
                            </Typography>
                            <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                                <Select
                                    value="platform"
                                    displayEmpty
                                    sx={{ borderRadius: 1 }}
                                >
                                    <MenuItem value="platform">Plateforme</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 2,
                                height: 400,
                                width: "100%",
                                bgcolor: "white",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: "50%",
                                        bgcolor: "#f5f5f5",
                                        mr: 1,
                                    }}
                                />
                                <Box
                                    sx={{
                                        height: 10,
                                        width: "70%",
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 1,
                                    }}
                                />
                                <Box
                                    sx={{
                                        ml: "auto",
                                        bgcolor: "#f5f5f5",
                                        borderRadius: 1,
                                        px: 2,
                                        py: 0.5,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: "50%",
                                            bgcolor: "#e0e0e0",
                                            mr: 1,
                                        }}
                                    />
                                    <Typography variant="caption" sx={{ color: "#9e9e9e" }}>
                                        Nouveau projet
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ mt: 4 }}>
                                <Box sx={{ display: "flex", mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            bgcolor: selectedColor,
                                            mr: 2,
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            height: 10,
                                            width: "90%",
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 1,
                                        }}
                                    />
                                </Box>

                                {[...Array(10)].map((_, index) => (
                                    <Box key={index} sx={{ display: "flex", mb: 2, alignItems: "center" }}>
                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: "50%",
                                                bgcolor: "#f5f5f5",
                                                mr: 2,
                                                visibility: index < 2 ? "visible" : "hidden",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                height: 10,
                                                width: "90%",
                                                bgcolor: "#f5f5f5",
                                                borderRadius: 1,
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default BrandSettingsPage;
import {createTheme} from "@mui/material";
import Colors from "./Colors.ts";
export const darkTheme = createTheme({
    /**  ===========================================================================  */
    /**                              Palette                                          */
    /**  ===========================================================================  */
    palette: {
        mode: "dark",
        primary: {
            main: Colors._f97316,
        },
        secondary: {
            main: "#ff00ff",
        },
        background: {
            default: Colors._000000,
            paper: Colors._000000,
        },
    },
    /**  ===========================================================================  */
    /**                              Typography                                       */
    /**  ===========================================================================  */
    typography: {
            // Global font family
            fontFamily: "'Poppins', sans-serif",

            // Headings
            h1: {
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "0.02em",
                color: "#212121",
                textTransform: "uppercase",
            },
            h2: {
                fontSize: "2.5rem",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "0.015em",
                color: "#333",
            },
            h3: {
                fontSize: "2rem",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "0.01em",
                color: "#444",
            },
            h4: {
                fontSize: "1.75rem",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#555",
            },
            h5: {
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "#666",
            },
            h6: {
                fontSize: "1.25rem",
                fontWeight: 500,
                lineHeight: 1.7,
                color: "#777",
            },

            // Body text
            body1: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#333",
            },
            body2: {
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: Colors._ffffff,
            },

            // Subtitle
            subtitle1: {
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.7,
                color: "#555",
            },
            subtitle2: {
                fontSize: "0.875rem",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "#666",
            },

            // Button text
            button: {
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
            },

            // Caption text (small labels)
            caption: {
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#888",
            },

            // Overline text (very small labels)
            overline: {
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#999",
            },
    },
    components: {
        /**  ===========================================================================  */
        /**                              MuiButton                                        */
        /**  ===========================================================================  */
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors._f97316, // Default background color for button
                    color: Colors._000000, // Text color
                    "&:hover": {
                        backgroundColor: Colors._e65c00, // Darker shade on hover
                    },
                    "&.MuiButton-contained": {
                        fontWeight: 600,
                        textTransform: "capitalize",
                    },
                    "&.MuiButton-text": {
                        fontWeight: 600,
                        textTransform: "capitalize",
                    },
                    "&.MuiButton-outlined": {
                        fontWeight: 600,
                        textTransform: "capitalize",
                        backgroundColor:"inherit",
                    },
                    "&.Mui-disabled": {
                        bgcolor:Colors._ffffff,
                        color: Colors._e65c00,
                    },
                },
            },
        },
        /**  ===========================================================================  */
        /**                              MuiIconButton                                    */
        /**  ===========================================================================  */
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: Colors._f97316, // Default icon color (primary orange)
                    backgroundColor: "transparent", // Transparent background
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        backgroundColor: Colors._f97316, // Orange background on hover
                        color: "#ffffff", // White icon on hover
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "rgba(0, 0, 0, 0.12)", // Light grey for disabled state
                        color: "f9731650", // Muted color for disabled icon
                        cursor:"pointer"
                    },
                },
            },
        },
        /**  ===========================================================================  */
        /**                              MuiAppBar                                        */
        /**  ===========================================================================  */
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors._000000, // Solid black
                    backgroundImage: "none", // Remove any default gradient
                    opacity: 1, // Ensure full opacity for the AppBar itself
                    color: "#ffffff", // White text/icons
                    boxShadow: "none", // No shadow
                    borderBottom: "2px solid #f97316", // Orange border
                    "&.MuiAppBar-positionFixed": {
                        backgroundColor: Colors._000000, // Solid black for fixed position
                        backgroundImage: "none", // Ensure no gradient
                        opacity: 1, // Full opacity
                    },
                    "&.MuiAppBar-positionSticky": {
                        backgroundColor: Colors._000000, // Solid black for sticky position
                        backgroundImage: "none", // Ensure no gradient
                        opacity: 1, // Full opacity
                    },
                },
            },
        },
        /**  ===========================================================================  */
        /**                              Input                                            */
        /**  ===========================================================================  */
        /** Base */
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    color: "#333",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                    "&:hover": {
                        backgroundColor: "#f5f5f5",
                    },
                },
                input: {
                    padding: "12px",
                    fontSize: "1rem",
                    color: "#222",
                },
            },
        },
        /** Outline */
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ccc",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#666",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px",
                    },
                },
                input: {
                    padding: "12px",
                },
            },
        },
        /** Filled */
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "inherit", // Inherit the background color from parent
                    "&:hover": {
                        backgroundColor: "inherit",
                    },
                    "&.Mui-focused": {
                        backgroundColor: "inherit",
                    },
                },
                input: {
                    color: "#fff", // Ensure text is visible on dark backgrounds
                    padding: "12px",
                },
            },
        },
        /** Input */
        MuiInput: {
            styleOverrides: {
                root: {
                    borderBottom: "2px solid #ccc",
                    "&:hover": {
                        borderBottom: "2px solid #666",
                    },
                    "&.Mui-focused": {
                        borderBottom: "2px solid #007BFF",
                    },
                },
                input: {
                    padding: "10px",
                },
            },
        },
        /** TextField */
        MuiTextField: {
            defaultProps: {
                variant: "outlined", // Default variant for all <TextField />
            },
        },

    },
})

export default darkTheme
import {createTheme} from "@mui/material";
import Colors from "./Colors.ts";

const lightTheme = createTheme({
    /**  ===========================================================================  */
    /**                              Palette                                          */
    /**  ===========================================================================  */
    palette: {
        mode: "light",
        primary: {
            main: Colors._f97316,
        },
        secondary: {
            main: Colors._800080,
        },
        background: {
            default: Colors._f8fafc,
            paper: Colors._ffffff,
        },
    },
    /**  ===========================================================================  */
    /**                              Typography Dark                                  */
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
            color: Colors._212121,
            textTransform: "uppercase",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: "0.015em",
            color: Colors._333,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "0.01em",
            color: Colors._444,
        },
        h4: {
            fontSize: "1.75rem",
            fontWeight: 500,
            lineHeight: 1.5,
            color: Colors._555,
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.6,
            color: Colors._666,
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.7,
            color: Colors._777,
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
            color: "#444",
        },

        // Subtitle
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.7,
            color: Colors._555,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.6,
            color: Colors._666,
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
            color: Colors._888,
        },

        // Overline text (very small labels)
        overline: {
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: Colors._999,
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
                    color:Colors._ffffff, // Text color
                    "&:hover": {
                        backgroundColor: Colors._555, // Darker shade on hover
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
                        color: Colors._555,
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
                        // backgroundColor: Colors._f97316, // Orange background on hover
                        border:"2px solid #f97316",
                        color: Colors._f97316, // White icon on hover
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "rgba(0, 0, 0, 0.12)", // Light grey for disabled state
                        color: "rgba(0, 0, 0, 0.26)", // Muted color for disabled icon
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
                    backgroundColor: Colors._ffffff, // Solid black
                    backgroundImage: "none", // Remove any default gradient
                    opacity: 1, // Ensure full opacity for the AppBar itself
                    color: Colors._000000, // White text/icons
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
                        borderColor: "#007BFF",
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
                    backgroundColor: "#f0f0f0",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                    "&.Mui-focused": {
                        backgroundColor: "#fff",
                    },
                },
                input: {
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
export default lightTheme
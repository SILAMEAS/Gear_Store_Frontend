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
        black:{
            main:Colors._ffffff,
            light:Colors._000000,
        }
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
                // color: "#212121",
                textTransform: "uppercase",
            },
            h2: {
                fontSize: "2.5rem",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "0.015em",
                // color: Colors._333,
            },
            h3: {
                fontSize: "2rem",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "0.01em",
                // color: "#444",
            },
            h4: {
                fontSize: "1.75rem",
                fontWeight: 500,
                lineHeight: 1.5,
                // color: "#555",
            },
            h5: {
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: 1.6,
                // color: Colors._666,
            },
            h6: {
                fontSize: "1.25rem",
                fontWeight: 500,
                lineHeight: 1.7,
                // color: "#777",
            },

            // Body text
            body1: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.6,
                color: Colors._ffffff,
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
                        textTransform: "capitalize"
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
                        padding:"10px"
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
                    color: "#fff",
                    backgroundColor: "inherit",
                    borderRadius: "8px",
                    padding: "10px",
                    "&:hover": {
                        backgroundColor: "inherit",
                    },
                },
                input: {
                    padding: "12px",
                    fontSize: "1rem",
                    color: "#fff",
                },
            },
        },
        /** Outline */
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "inherit",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: Colors._ccc,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: Colors._666,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px",
                    },
                },
                input: {
                    padding: "2px",
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
                fullWidth:true
            },
        },
        /**  ===========================================================================  */
        /**                              Menu Item                                        */
        /**  ===========================================================================  */
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#fff", // Text color
                    backgroundColor: "inherit", // Inherit from parent
                    borderRadius: "8px", // Rounded corners
                    padding: "10px 16px", // Adjust padding
                    transition: "all 0.3s ease",

                    "&:hover": {
                        backgroundColor: "#FF6B00", // Custom hover color
                        color: "#fff", // Ensure text stays visible
                    },

                    "&.Mui-selected": {
                        backgroundColor: "#FF6B00", // Selected item background
                        color: "#fff", // Selected item text
                        "&:hover": {
                            backgroundColor: "#E65C00", // Darker hover effect on selected
                        },
                    },
                },
            },
        },

        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: Colors._222, // Dark background for the menu
                    borderRadius: "10px",
                    padding: "5px",
                },
            },
        },
        /**  ===========================================================================  */
        /**                              Icon                                             */
        /**  ===========================================================================  */
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "1.8rem", // Default icon size
                    // color: "in", // Default icon color (white)
                    transition: "all 0.3s ease", // Smooth transition for hover effects

                    // "&:hover": {
                    //     color: "#FF6B00", // Change color on hover
                    //     transform: "scale(1.1)", // Slightly enlarge on hover
                    // },
                    //
                    // "&.Mui-disabled": {
                    //     color: Colors._f97316+"10", // Greyed-out icons when disabled
                    //     opacity: 0.5,
                    // },
                },
                fontSizeSmall: {
                    fontSize: "1.2rem", // Custom size for small icons
                },
                fontSizeLarge: {
                    fontSize: "2.5rem", // Custom size for large icons
                },
            },
        },

    },
})

export default darkTheme
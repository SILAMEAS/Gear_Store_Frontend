import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#f97316",
        },
        secondary: {
            main: "#800080",
        },
        background: {
            default: "#f8fafc",
            paper: "#ffffff",
        },
    },
    components: {
        /**  ===========================================================================  */
        /**                              MuiButton                                        */
        /**  ===========================================================================  */
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f97316", // Default background color for button
                    color: "#000000", // Text color
                    "&:hover": {
                        backgroundColor: "#e65c00", // Darker shade on hover
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
                    color: "#f97316", // Default icon color (primary orange)
                    backgroundColor: "transparent", // Transparent background
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        // backgroundColor: "#f97316", // Orange background on hover
                        border:"2px solid #f97316",
                        color: "#f97316", // White icon on hover
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
                    backgroundColor: "#ffffff", // Solid black
                    backgroundImage: "none", // Remove any default gradient
                    opacity: 1, // Ensure full opacity for the AppBar itself
                    color: "#000000", // White text/icons
                    boxShadow: "none", // No shadow
                    borderBottom: "2px solid #f97316", // Orange border
                    "&.MuiAppBar-positionFixed": {
                        backgroundColor: "#000000", // Solid black for fixed position
                        backgroundImage: "none", // Ensure no gradient
                        opacity: 1, // Full opacity
                    },
                    "&.MuiAppBar-positionSticky": {
                        backgroundColor: "#000000", // Solid black for sticky position
                        backgroundImage: "none", // Ensure no gradient
                        opacity: 1, // Full opacity
                    },
                },
            },
        },
    },
})
export default lightTheme
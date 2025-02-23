import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f97316",
        },
        secondary: {
            main: "#ff00ff",
        },
        background: {
            default: "#000000",
            paper: "#000000",
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
                        backgroundColor: "#f97316", // Orange background on hover
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
                    backgroundColor: "#000000", // Solid black
                    backgroundImage: "none", // Remove any default gradient
                    opacity: 1, // Ensure full opacity for the AppBar itself
                    color: "#ffffff", // White text/icons
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

export default darkTheme
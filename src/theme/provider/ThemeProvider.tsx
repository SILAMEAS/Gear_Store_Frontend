import {createContext, type ReactNode, useContext, useState} from "react"
import {ThemeProvider as MUIThemeProvider} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../mode/darkTheme.tsx";
import lightTheme from "../mode/lightTheme.tsx";

type ThemeContextType = {
    toggleTheme: () => void
    isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    isDarkMode: false,
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
            <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}


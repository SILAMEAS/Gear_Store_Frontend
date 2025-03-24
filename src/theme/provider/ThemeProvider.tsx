import {createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {ThemeProvider as MUIThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "../mode/darkTheme.tsx";
import lightTheme from "../mode/lightTheme.tsx";

type ThemeContextType = {
    toggleTheme: (mode?:"light"|"dark") => void;
    isDarkMode: boolean;
    colorBackWhite:string
};

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    isDarkMode: false,
    colorBackWhite:""
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [colorBackWhite,setColorBackWhite]=useState("")

    // ✅ useCallback ensures the function reference remains stable
    const toggleTheme = useCallback((mode?:"light"|"dark") => {
        if(mode){
            setIsDarkMode(mode==="dark");
            setColorBackWhite("white")
        }else
        setIsDarkMode((prev) => !prev);
    }, []);
    useEffect(() => {
        setColorBackWhite(isDarkMode?"white":"black")
    }, [isDarkMode]);
    // ✅ Now `useMemo` will only update when `isDarkMode` changes
    const contextValue = useMemo(() => ({ isDarkMode, toggleTheme ,colorBackWhite}), [isDarkMode,toggleTheme,colorBackWhite]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}

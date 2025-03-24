import {createContext, type ReactNode, useCallback, useContext, useMemo, useState} from "react";
import {ThemeProvider as MUIThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "../mode/darkTheme.tsx";
import lightTheme from "../mode/lightTheme.tsx";

type ThemeContextType = {
    toggleTheme: ({mode}:{mode?:"light"|"dark"}) => void;
    isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    isDarkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // ✅ useCallback ensures the function reference remains stable
    const toggleTheme = useCallback(({mode}:{mode?:"light"|"dark"}) => {
        if(mode){
            setIsDarkMode(mode==="dark");
        }else
        setIsDarkMode((prev) => !prev);
    }, []);

    // ✅ Now `useMemo` will only update when `isDarkMode` changes
    const contextValue = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}

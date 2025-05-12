import {useContext} from "react";
import {Theme, THEME_KEY, ThemeContext} from "./ThemeProvider";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const UseTheme = ():UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}
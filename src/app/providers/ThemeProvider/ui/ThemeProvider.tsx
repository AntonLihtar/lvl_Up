import {FC, useMemo, useState} from "react";
import {createContext} from "react";

export const THEME_KEY = 'theme';

export enum Theme {
    NORMAL= 'normal',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.NORMAL

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
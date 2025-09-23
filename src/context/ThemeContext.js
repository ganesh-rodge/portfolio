import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const ThemeContext = createContext(null);
function getInitialTheme() {
    if (typeof window === 'undefined')
        return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark')
        return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}
export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(getInitialTheme);
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark')
            root.classList.add('dark');
        else
            root.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            const stored = localStorage.getItem('theme');
            if (!stored)
                setThemeState(media.matches ? 'dark' : 'light');
        };
        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, []);
    const value = useMemo(() => ({
        theme,
        toggleTheme: () => setThemeState(t => (t === 'dark' ? 'light' : 'dark')),
        setTheme: (t) => setThemeState(t),
    }), [theme]);
    return (_jsx(ThemeContext.Provider, { value: value, children: children }));
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
}

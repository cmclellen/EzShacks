'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../_hooks/useLocaleStorage";

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({children}: {readonly children: React.ReactNode}) {

    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(() => {
        if (typeof window !== 'undefined') {
            const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return dark;
        }
        return false;
    }, 'is-dark-mode');

    function toggleDarkMode() {
        setIsDarkMode((prev) => !prev);
    }

    const initialState: DarkModeContextType = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return <DarkModeContext.Provider value={initialState}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}
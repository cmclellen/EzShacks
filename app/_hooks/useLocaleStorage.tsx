'use client'

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(initialState: T | (() => T), key: string) {
    const [value, setValue] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue === null) {
            if (typeof initialState === "function") {
                return (initialState as () => T)();
            } else {
                return initialState;
            }
        } else {
            return JSON.parse(storedValue);
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined')
            localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
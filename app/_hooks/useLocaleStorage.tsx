"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  initialState: T | (() => T),
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialState;
    const currStoredValue = localStorage.getItem(key);
    if (currStoredValue === null) {
      if (typeof initialState === "function") {
        return (initialState as () => T)();
      } else {
        return initialState;
      }
    } else {
      return JSON.parse(currStoredValue);
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined")
        localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

import { useEffect } from "react";

export default function useClickAnywhere(callback: () => void) {
  useEffect(() => {
    const handleClick = (_event: MouseEvent) => {
      callback();
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
}

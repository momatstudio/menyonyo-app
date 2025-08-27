import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // get value item from localstorage or return value that we passed in
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parsel(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue;
    }
  });

  // set the value in localstorage to the new value whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

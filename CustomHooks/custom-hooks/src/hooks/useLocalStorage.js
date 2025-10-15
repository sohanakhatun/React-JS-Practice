import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // May be the key is already present in the localstorage or we are creating a new key for the first time.

  // we want to update the UI as the value in localstorag gets updated.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("Error reading local storage key:", error);
      return initialValue;
    }
  });

  // if key or storedValue gets updated(eg. on click of a button) then we should update the localstorage also.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log("Error writting local storage key:", error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}

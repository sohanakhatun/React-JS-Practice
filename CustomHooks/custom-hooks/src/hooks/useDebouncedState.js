import { useEffect, useState } from "react";

export default function useDebouncedState(initialValue, delay) {
  const [state, setState] = useState(initialValue);

  const [debouncedState, setDebouncedState] = useState(initialValue);

  useEffect(() => {
    // whenever state changes or delay is changed (user types something or for some reason delay gets changed) we need to start a brand new timer for the given delay.

    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    // before starting the new timer we need to clear the previous timer.
    // react always clears the previous call's cleanup function before starting to execute a new effect.

    return () => {
      clearTimeout(handler);
    };

  }, [state, delay]);
  return [debouncedState, setState];
}
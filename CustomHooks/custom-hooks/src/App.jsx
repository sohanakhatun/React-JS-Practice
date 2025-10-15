import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import useDebouncedState from "./hooks/useDebouncedState";

function App() {
  const [count, setCount] = useLocalStorage("count", 0);
  const [search, setSearch] = useDebouncedState("", 3000);

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h1>Debouncing</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </>
  );
}

export default App;

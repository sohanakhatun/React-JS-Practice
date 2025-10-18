import React from "react";

import "./App.css";
import Hello from "./components/Hello";

function App({ url }) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <h1>Vite + React SSR — Simple Demo</h1>
      <p>
        Requested URL: <code>{url}</code>
      </p>
     <Hello/>
    </div>
  );
}

export default App;

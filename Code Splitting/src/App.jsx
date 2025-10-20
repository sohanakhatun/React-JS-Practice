import { useState } from "react";
import "./App.css";

function App() {
  // code splitting is used to lazily load any module when required. 
  const [result, setResult] = useState(null);
  const [ChartComponent, setChartComponent] = useState(null);

  const handleProcessData = async () => {
    const { default: processData } = await import("./utils/dataProcessor");
    const res = processData();
    setResult(res);
  };

  const handleLoadChart = async () => {
    const { default: HeavyChart } = await import("./components/HeavyChart");
    setChartComponent(() => HeavyChart); // store component in state.
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚡ Code Splitting Demo</h1>

      <button onClick={handleProcessData}>Run Heavy Computation</button>
      {result && <p>Result: {result}</p>}

      <hr />

      <button onClick={handleLoadChart}>Load Heavy Chart</button>
      {ChartComponent && <ChartComponent />}
    </div>
  );
}

export default App;

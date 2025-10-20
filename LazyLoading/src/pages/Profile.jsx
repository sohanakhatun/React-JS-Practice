import { Suspense, useState } from "react";
import React from 'react'
const Chart = React.lazy(() => import("../Components/Chart")); // lazy load chart

export default function Profile() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h2>👤 Profile Page</h2>
      <button onClick={() => setShowChart(true)}>Load Chart</button>
      <Suspense fallback={<p>Loading Chart...</p>}>
        {showChart && <Chart />}
      </Suspense>
    </div>
  );
}

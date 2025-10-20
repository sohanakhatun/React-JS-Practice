import React from "react";
import MouseTracker from "./MouseTracker";

function DisplayCoordinates() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <h2>
          Mouse position: ({x}, {y})
        </h2>
      )}
    </MouseTracker>
  );
}

export default DisplayCoordinates;

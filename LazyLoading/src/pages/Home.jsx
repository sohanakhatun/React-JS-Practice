import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <nav>
        <Link to="/about">Go to About</Link> |{" "}
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}

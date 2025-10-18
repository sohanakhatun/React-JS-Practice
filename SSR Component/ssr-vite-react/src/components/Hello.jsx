import React from "react";

export default function Hello() {
  const now = new Date().toISOString();
  return <p>Hello from SSR — server time: {now}</p>;
}

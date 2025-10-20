// src/App.jsx
import React, { useEffect, useState } from "react";
import api from "./api/axiosInstance";

export default function HandlingMultipleAPIs() {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data.slice(0, 5)));
  }, []);

  useEffect(() => {
    api.get("/albums").then((res) => setAlbums(res.data.slice(0, 10)));
  }, []);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <h1>Top 5 Posts</h1>
        {posts.map((p) => (
          <div key={p.id} style={{ marginBottom: 10 }}>
            <strong>{p.title}</strong>
          </div>
        ))}
      </div>

      <div style={{ padding: 20 }}>
        <h1>Top 5 Albums</h1>
        {albums.map((p) => (
          <div key={p.id} style={{ marginBottom: 10 }}>
            <strong>{p.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

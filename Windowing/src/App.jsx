import React, { useState, useRef, useEffect } from "react";

export default function InfiniteScrollObserver() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => i + 1)
  );
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 20 },
        (_, i) => items.length + i + 1
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { root: null, rootMargin: "20px", threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loading, items]);

  return (
    <div>
      <h1>Infinite Scroll with Intersection Observer</h1>
      {items.map((item) => (
        <div key={item} style={{ padding: 20, border: "1px solid #ccc" }}>
          Item {item}
        </div>
      ))}
      <div ref={loader} style={{ height: 50 }}>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

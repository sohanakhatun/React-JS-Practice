import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from 'axios'
const App = () => {
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5000, // data is considered fresh for 5s
    cacheTime: 1000 * 60 * 0.5, // cached for 2 minutes even if unused
    refetchOnWindowFocus: true, // refetch if window regains focus
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

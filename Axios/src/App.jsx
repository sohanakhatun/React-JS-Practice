import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddUser from "./AddUser";
import HandlingMultipleAPIs from "./HandlingMultipleAPIs";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Users List</h1>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: 10,
            borderBottom: "1px solid #ccc",
            paddingBottom: 5,
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* Post Request using axios */}
      <AddUser users={users} setUsers={setUsers} setLoading={setLoading} />

      {/* Handling multiple apis with same base url */}
      <HandlingMultipleAPIs />
    </div>
  );
}

export default App;

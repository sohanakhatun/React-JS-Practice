import React, { useState } from "react";
import axios from "axios";

export default function AddUser({ users, setUsers, setLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email,
        }
      );
      console.log("User added:", res.data);
      setUsers([...users, res.data]);
      setName("");
      setEmail("");
      setLoading(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

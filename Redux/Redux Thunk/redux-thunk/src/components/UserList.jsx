import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducers/usersReducer";

const UserList = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const { list, loading, error } = usersState || {
    list: [],
    loading: false,
    error: null,
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <p>Loading User Data ....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {list.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;

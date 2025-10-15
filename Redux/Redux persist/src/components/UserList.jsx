import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/usersSlice";
import "../App.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    // Fetch only if not already persisted 
    // Redux Persist rehydrates the store from localStorage before rendering.
    // The list now already has data → the if (list.length === 0) condition prevents API call.
    if (list.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, list.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-container">
      <p className="heading">Using Redux Saga</p>
      <div className="user-list-wrapper">
        {list.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>
              {user.name} ({user.username})
            </h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {user.website}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {user.address.suite},{" "}
              {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
              <em>"{user.company.catchPhrase}"</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

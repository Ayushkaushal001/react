import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Users function
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/users/all");
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {!loading && !error && users.length > 0 && (
        <ul className="list-unstyled">
          {users.map((user) => (
            <li key={user._id} className="card text-center border mb-3 p-3">
              <strong className="card-title">{user.name}</strong>
              <h4 className="card-subtitle text-muted">{user.email}</h4>
              <h5 className="card-text">{user.phone}</h5>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Adduser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "", // ✅ Added password field
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/users/all");
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]); // ✅ Prevents `users.map is not a function` error
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5001/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("User Created Successfully");
      setFormData({ name: "", email: "", phone: "", password: "" }); // ✅ Clear form after submission
      fetchUsers();
    } else {
      console.error("Error creating user");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:5001/users/${id}`, { method: "DELETE" }); // ✅ Fixed delete API endpoint
      if (!res.ok) throw new Error("Error deleting user");
      console.log("User Deleted Successfully");
      fetchUsers();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /> {/* ✅ Added password input */}
        <button type="submit">Submit</button>
      </form>

      <h1>All Users</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user._id} className="mt-3">
              {user.name} - {user.email} - {user.phone} -{user.password}
              <Link to={`/updateuser/${user._id}`} className="bg-outline-primary border border-rounded ps-2 pe-2 me-3 text-decoration-none">
                Update
              </Link>
              <button onClick={() => deleteUser(user._id)} style={{ background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default Adduser;

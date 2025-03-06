import React from "react";

const Dashboard = () => {
    const handleLogout = () => {
      localStorage.removeItem("userId"); // Remove user session
      window.location.href = "/login"; // Redirect to login page
    };
  
    return (
      <div>
        <h2>Welcome to the Dashboard 🎉</h2>
        <p>You are logged in!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Dashboard;
  
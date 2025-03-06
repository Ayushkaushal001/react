import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/login/login", formData);
      localStorage.setItem("userId", res.data.user._id);
      alert("Login successful!");
      console.log(userId)
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.error || "Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;


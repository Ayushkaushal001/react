import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./components/context/NoteState";
import Login from "./components/login";
import Register from "./components/Register";
import Users from "./components/Users";
import Updateuser from "./components/Updateuser";
import Demo from "./components/Demo";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Adduser from "./components/Adduser";
import Search from "./components/Search";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard"; // ✅ Import Dashboard
import Test from "./components/test";

const App = () => {
  return (
    <NoteState>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test/>} />
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard />       </ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/updateuser/:id" element={<ProtectedRoute><Updateuser /></ProtectedRoute>} />
        <Route path="/demo" element={<ProtectedRoute><Demo /></ProtectedRoute>} />
        <Route path="/adduser" element={<ProtectedRoute><Adduser /></ProtectedRoute>} />
        <Route path="/search/:query" element={<ProtectedRoute><Search /></ProtectedRoute>} />
      </Routes>
    </NoteState>
  );
};

export default App;
zz
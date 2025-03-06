import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        setIsAuthenticated(!!localStorage.getItem("userId"));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setIsAuthenticated(false);
        navigate("/login"); // Redirect to login
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-3 fixed" style={{ zIndex: 1000 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">mysite</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-flex gap-3">
                        <Link className="nav-link text-white" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/demo">Demo</Link>

                        <form onSubmit={handleSearch}>
                            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                            <button type="submit" className="bg-primary ms-2 pe-2 ps-2">Search</button>
                        </form>

                    
                        {isAuthenticated ? (
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link className="btn btn-primary" to="/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

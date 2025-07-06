import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.color = "#1E40AF"; // Blue on hover
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = "black"; // Reset on mouse out
  };

  return (
    <header
      className="fixed-top shadow-sm bg-white"
      style={{ zIndex: 1000 }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Brand */}
        <Link to="/" className="text-decoration-none">
          <h1
            className="fw-bold fs-3 mb-0"
            style={{ color: "#1E40AF", cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#22C55E")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#1E40AF")}
          >
            UpStrives
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="d-none d-md-flex align-items-center gap-4 fs-5">
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Home
          </Link>
          <Link
            to="/internships"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Apply
          </Link>
          <Link
            to="/be-expert"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            BeExpert
          </Link>
          <Link
            to="/contactus"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Support
          </Link>

          {/* Sign In Button */}
          <Link to="/login" className="text-decoration-none">
            <button
              className="btn fw-semibold shadow-sm"
              style={{
                backgroundColor: "#1E40AF",
                color: "#ffffff",
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3B82F6";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#1E40AF";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Sign In
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

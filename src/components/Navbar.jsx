import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css"; 

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu toggle

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.color = "#22C55E";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = "#ffffff";
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      navigate(0); // Force refresh if already on home
    } else {
      navigate("/");
      window.location.reload();
    }
  };

  // Helper to navigate and reload
  const navigateAndReload = (path) => {
    navigate(path);
    window.location.reload();
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Sign In form state & handlers (local to Navbar)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isExpert, setIsExpert] = React.useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(
      `Login as ${isExpert ? "Expert" : "User"}\nEmail: ${email}\nPassword: ${password}`
    );
    setShowModal(false);
  };

  const handleOAuth = (provider) => {
    alert(`Redirecting to ${provider} OAuth login...`);
    // window.location.href = `http://localhost:8080/oauth2/authorize/${provider}`;
  };

  return (
    <>
      <header
        className="fixed-top shadow-sm"
        style={{ zIndex: 1000, backgroundColor: "#8636a8" }}
      >
        <div className="container d-flex justify-content-between align-items-center py-3">
          {/* Brand */}
          <span
            className="text-decoration-none"
            onClick={handleHomeClick}
            style={{ cursor: "pointer" }}
          >
            <h1
              className="fw-bold fs-3 mb-0"
              style={{
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#22C55E")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              UpStrives
            </h1>
          </span>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-md-flex align-items-center gap-4 fs-5">
            <a
              href="/internships"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/internships");
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Internships
            </a>
            <a
              href="/resume-help"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/resume-help");
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Resume Help
            </a>
            <a
              href="/career-guide"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/career-guide");
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Career Guide
            </a>
            <a
              href="/be-expert"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/be-expert");
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Mentors
            </a>

            {location.pathname === "/" && (
              <a
                href="/contactus"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/contactus");
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Support
              </a>
            )}

            {location.pathname === "/internships" && (
              <a
                href="/my-internships"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-internships");
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                My Internships
              </a>
            )}

            {location.pathname === "/resume-help" && (
              <a
                href="/my-resume"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-resume");
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                My Resume
              </a>
            )}

            {location.pathname === "/career-guide" && (
              <a
                href="/my-guide"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-guide");
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                My Guide
              </a>
            )}

            <button
              className="btn fw-semibold shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                color: "#8636a8",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#22C55E";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#8636a8";
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => setShowModal(true)}
            >
              Sign In
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="d-md-none btn btn-outline-light"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "1.5rem" }}
          >
            {/* Simple hamburger icon */}
            <span style={{ userSelect: "none" }}>{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu Sliding from Right */}
        <div
          className={`mobile-menu d-md-none ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation menu"
          >
            <a
              href="/internships"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/internships");
                setMenuOpen(false);
              }}
            >
              Internships
            </a>
            <a
              href="/resume-help"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/resume-help");
                setMenuOpen(false);
              }}
            >
              Resume Help
            </a>
            <a
              href="/career-guide"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/career-guide");
                setMenuOpen(false);
              }}
            >
              Career Guide
            </a>
            <a
              href="/be-expert"
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigateAndReload("/be-expert");
                setMenuOpen(false);
              }}
            >
              Mentors
            </a>

            {location.pathname === "/" && (
              <a
                href="/contactus"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/contactus");
                  setMenuOpen(false);
                }}
              >
                Support
              </a>
            )}

            {location.pathname === "/internships" && (
              <a
                href="/my-internships"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-internships");
                  setMenuOpen(false);
                }}
              >
                My Internships
              </a>
            )}

            {location.pathname === "/resume-help" && (
              <a
                href="/my-resume"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-resume");
                  setMenuOpen(false);
                }}
              >
                My Resume
              </a>
            )}

            {location.pathname === "/career-guide" && (
              <a
                href="/my-guide"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndReload("/my-guide");
                  setMenuOpen(false);
                }}
              >
                My Guide
              </a>
            )}

            <button
              className="btn fw-semibold mt-3 w-100"
              style={{
                backgroundColor: "#ffffff",
                color: "#8636a8",
                transition: "all 0.3s ease",
              }}
              onClick={() => {
                setShowModal(true);
                setMenuOpen(false);
              }}
            >
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Modal Overlay & content */}
      {showModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => setShowModal(false)}
              style={{ position: "absolute", top: "15px", right: "15px" }}
            ></button>

            <h3
              id="modalTitle"
              className="text-center fw-bold mb-4 text-primary"
            >
              Sign In
            </h3>

            <form onSubmit={handleSignIn}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="expert"
                  className="form-check-input"
                  checked={isExpert}
                  onChange={(e) => setIsExpert(e.target.checked)}
                />
                <label htmlFor="expert" className="form-check-label">
                  Login as Expert
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold">
                Sign In
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                className="btn btn-outline-danger me-3"
                onClick={() => handleOAuth("google")}
              >
                Google
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOAuth("github")}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          max-width: 300px;
          background-color: #8636a8;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1100;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content a,
        .mobile-menu-content button {
          color: #ffffff;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 600;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: color 0.3s ease;
        }

        .mobile-menu-content a:hover,
        .mobile-menu-content button:hover {
          color: #22c55e;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1200;
          padding: 1rem;
        }

        .modal-content {
          background-color: #fff;
          border-radius: 8px;
          max-width: 400px;
          width: 100%;
          padding: 2rem 2rem 3rem;
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .btn-close {
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

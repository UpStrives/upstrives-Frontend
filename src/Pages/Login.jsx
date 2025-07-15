import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isExpert, setIsExpert] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(
      `Login as ${isExpert ? "Expert" : "User"}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  const handleOAuth = (provider) => {
    alert(`Redirecting to ${provider} OAuth login...`);
    // Example:
    // window.location.href = `http://localhost:8080/oauth2/authorize/${provider}`;
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow p-4" style={{ maxWidth: "420px", width: "100%", borderRadius: "1rem" }}>
          <h3 className="text-center fw-bold mb-4 text-primary">Sign In</h3>

          <form onSubmit={handleSignIn} noValidate>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-end mt-1">
                <Link to="/forgot-password" className="text-decoration-none small text-primary">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="expertSwitch"
                checked={isExpert}
                onChange={() => setIsExpert(!isExpert)}
              />
              <label className="form-check-label" htmlFor="expertSwitch">
                Login as Expert
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-muted">
            Not registered yet?{" "}
            <Link to="/register" className="text-decoration-none text-primary fw-semibold">
              Create an account
            </Link>
          </p>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">OR</span>
            <hr className="flex-grow-1" />
          </div>

          {/* OAuth buttons at bottom */}
          <div className="d-grid gap-2">
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2"
              onClick={() => handleOAuth("google")}
            >
              <i className="bi bi-google"></i> Continue with Google
            </button>
            <button className="btn btn-dark d-flex align-items-center justify-content-center gap-2"
              onClick={() => handleOAuth("github")}
            >
              <i className="bi bi-github"></i> Continue with GitHub
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

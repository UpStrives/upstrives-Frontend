import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    alert(`Sign in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "70px" }}></div>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div
          className="card shadow-sm p-5"
          style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}
        >
          <h2 className="mb-4 text-center fw-bold" style={{ color: "#1E40AF" }}>
            Sign In
          </h2>

          <form onSubmit={handleSignIn} noValidate>
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold fs-5"
              style={{ borderRadius: "8px" }}
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-muted fs-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-primary fw-semibold text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

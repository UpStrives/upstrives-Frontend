import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-5 pb-3 mt-0" style={{ backgroundColor: "#1F2937", color: "#E5E7EB" }}>
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Brand & Mission */}
          <div className="col-12 col-md-3 mb-4">
            <h4 className="fw-bold text-light mb-2">UpStrives</h4>
            <p className="text-muted">
              Your trusted platform for launching a successful tech career through real-world internships, expert guidance, and tailored job support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold text-light mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/internships" className="text-light text-decoration-none d-block mb-1">Internships</Link></li>
              <li><Link to="/jobs" className="text-light text-decoration-none d-block mb-1">Jobs</Link></li>
              <li><Link to="/coaching" className="text-light text-decoration-none d-block mb-1">Career Coaching</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none d-block mb-1">Career Blog</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold text-light mb-3">Follow Us</h6>
            {["Facebook", "Twitter", "YouTube", "LinkedIn", "Instagram"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform.toLowerCase()}.com/UpStrives`}
                className="d-block mb-1 text-decoration-none text-light"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.85 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#22C55E";
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.opacity = 0.85;
                }}
              >
                {platform}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3 mb-4 d-flex flex-column justify-content-between">
            <div>
              <h6 className="fw-bold text-light mb-2">Stay Updated</h6>
              <input
                type="email"
                placeholder="Your email"
                className="form-control mb-2"
                style={{ maxWidth: "100%" }}
              />
              <button
                className="btn w-100"
                style={{ backgroundColor: "#22C55E", color: "white" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16A34A")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22C55E")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#374151" }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <small style={{ color: "#9CA3AF" }}>
            © 2025 UpStrives. All rights reserved.
          </small>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-link p-0 mt-2 mt-md-0 text-decoration-none text-light fw-semibold"
            style={{ opacity: 0.85 }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#22C55E";
              e.currentTarget.style.opacity = 1;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.opacity = 0.85;
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

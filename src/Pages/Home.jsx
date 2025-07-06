import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import aboutImage from "../assets/Home.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

import {
  LearnIcon,
  ApplyIcon,
  PaidInternshipsIcon,
  ResumeIcon,
  CareerCoachingIcon,
  CommunityIcon,
} from "../Icons";

export default function Home() {
  const offeringsRef = useRef(null);

  const scrollToOfferings = () => {
    offeringsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const howItWorksItems = [
    {
      title: "Internships",
      desc: "Apply for paid internship opportunities",
      Icon: PaidInternshipsIcon,
      path: "/internships",
    },
    {
      title: "Jobs",
      desc: "Get access to exclusive job listings",
      Icon: ApplyIcon,
      path: "/apply",
    },
    {
      title: "Career Guidance",
      desc: "One-on-one sessions with industry mentors",
      Icon: CareerCoachingIcon,
      path: "/community",
    },
    {
      title: "Resume Support",
      desc: "Build and evaluate your resume professionally",
      Icon: ResumeIcon,
      path: "/resume-help",
    },
    {
      title: "Career Blog",
      desc: "Tips, articles & resources for interviews and more",
      Icon: CommunityIcon,
      path: "/blog",
    },
  ];

  return (
    <main style={{ backgroundColor: "#EFF6FF", minHeight: "100vh" }}>
      <ScrollTop />
      <Navbar />
      <div style={{ height: "70px" }}></div>

      {/* Hero Section */}
      <section className="text-white py-5" style={{ backgroundColor: "#1E40AF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">Launch Your Career with UpStrives</h1>
              <p className="fs-4 text-success fw-semibold mb-2">
                Internships, Jobs, Resume Help & Mentorship
              </p>
              <p className="lead text-light mb-4">
                Your all-in-one platform for building a successful career with guidance from top industry experts.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
                <button className="btn btn-lg btn-success">Get Started</button>
                <button className="btn btn-outline-light btn-lg" onClick={scrollToOfferings}>
                  Explore Services
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={aboutImage}
                alt="UpStrives Career Solutions"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div ref={offeringsRef} className="container bg-white rounded shadow-sm my-5 p-4">
        <section className="mb-4">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#1F2937" }}>
            Our Core Offerings
          </h2>
          <div className="row g-4 justify-content-center">
            {howItWorksItems.map(({ title, desc, Icon, path }) => (
              <div key={title} className="col-12 col-md-6 col-lg-4 text-center">
                <Link
                  to={path}
                  className="card h-100 border-0 shadow-sm text-decoration-none"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="card-body d-flex flex-column align-items-center">
                    <Icon />
                    <h4 className="fw-semibold mt-3 text-dark">{title}</h4>
                    <p className="text-muted text-center">{desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="text-center">
                <h2 className="fw-bold mb-4">About UpStrives</h2>
                <p className="fs-5 text-muted">
                  At <strong>UpStrives</strong>, we're redefining career development for students and graduates.
                  From resume building to job placement, we guide you every step of the way.
                </p>
                <p className="fs-5 text-muted">
                  Our platform connects you with mentors, internships, and resources designed to prepare you
                  for real-world challenges and interview success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4" style={{ backgroundColor: "#22C55E", color: "#fff" }}>
        <div className="container text-center">
          <h4 className="fw-bold mb-2">Ready to level up your career?</h4>
          <Link to="/register" className="btn btn-light fw-semibold px-4 py-2">
            Get Started
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-5 pb-0 bg-dark text-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What Our Users Say</h2>
          <div className="row">
            {[
              { name: "Aman S.", text: "UpStrives helped me land my first remote internship!" },
              { name: "Priya T.", text: "The coaching sessions gave me clarity and confidence for interviews." },
              { name: "Rahul M.", text: "I loved the project-based learning approach!" },
            ].map((t, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div
                  className="p-4 rounded"
                  style={{
                    backgroundColor: "#1F2937",
                    borderLeft: "4px solid #22C55E",
                  }}
                >
                  <p className="mb-2">“{t.text}”</p>
                  <p className="fw-semibold mb-0">– {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

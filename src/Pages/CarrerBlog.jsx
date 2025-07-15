// CareerBlog.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";

export default function CareerBlog() {
  const sections = [
    {
      title: "RoadMap",
      description: "Step-by-step learning paths for Frontend, Backend, DevOps, and more.",
      icon: "bi bi-map",
      link: "/career/roadmap",
    },
    {
      title: "Project Ideas",
      description: "Real-world project ideas to sharpen your development skills and build your portfolio.",
      icon: "bi bi-lightbulb",
      link: "/career/projects",
    },
    {
      title: "Interview Questions",
      description: "Commonly asked technical and behavioral interview questions with answers.",
      icon: "bi bi-question-circle",
      link: "/career/interview",
    },
    {
      title: "Advanced Topics",
      description: "Deep dive into system design, microservices, architecture, and scaling.",
      icon: "bi bi-graph-up",
      link: "/career/advanced",
    },
  ];

  return (
    <>
    <ScrollTop/>
    <Navbar/>
    <div style={{ paddingTop: "70px" }}></div>
    
    <div className="container py-5" style={{ paddingTop: "100px" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Career Blog</h1>
        <p className="text-muted fs-5">
          Explore curated learning resources, coding ideas, and interview prep materials to elevate your tech career.
        </p>
      </div>

      <div className="row g-4">
        {sections.map((section, index) => (
          <div className="col-12 col-md-6" key={index}>
            <Link
              to={section.link}
              className="text-decoration-none"
            >
              <div
                className="card h-100 shadow-sm border-0 hover-card"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="mb-3 text-primary fs-1">
                    <i className={section.icon}></i>
                  </div>
                  <h5 className="card-title fw-bold">{section.title}</h5>
                  <p className="card-text text-muted">{section.description}</p>
                  <span className="mt-auto text-primary fw-semibold">
                    Explore <i className="bi bi-arrow-right ms-1"></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

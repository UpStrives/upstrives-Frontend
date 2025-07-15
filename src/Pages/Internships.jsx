import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Internship.css";
import webImg from "../assets/web-development.jpg";
import aimlImg from "../assets/Aiml.jpg";
import blockchainImg from "../assets/Blockchain.jpeg";
import androidImg from "../assets/Andoiddev.jpeg";
import dataScienceImg from "../assets/Data Science.jpg";

export default function Internships() {
  const internshipTracks = [
  {
    title: "Web Development",
    icon: "bi-code-slash",
    description:
      "Build modern websites and web apps using HTML, CSS, JavaScript, and frameworks like React.",
    image: webImg,
    featured:
      "Master front-end and back-end web development by working on real-world projects. Gain expertise in popular frameworks like React and Node.js, and learn how to build responsive, user-friendly websites and scalable web applications that meet industry standards.",
  },
  {
    title: "AI/ML",
    icon: "bi-cpu",
    description:
      "Dive into machine learning, deep learning, and AI model development with real datasets.",
    image: aimlImg,
    featured:
      "Develop practical skills in artificial intelligence and machine learning by engaging with real datasets and projects. Learn to preprocess data, build predictive models, and deploy AI solutions, preparing you for careers in data science, AI research, and advanced analytics.",
  },
  {
    title: "Blockchain",
    icon: "bi-link-45deg",
    description:
      "Understand decentralized apps, smart contracts, and blockchain infrastructure.",
    image: blockchainImg,
    featured:
      "Explore the revolutionary world of blockchain technology, learning to create secure smart contracts and decentralized applications (DApps). Gain hands-on experience with blockchain platforms like Ethereum and understand how distributed ledgers transform industries such as finance, supply chain, and more.",
  },
  {
    title: "Android Development",
    icon: "bi-phone",
    description:
      "Create Android mobile apps using Java or Kotlin with hands-on projects.",
    image: androidImg,
    featured:
      "Build and deploy Android applications from scratch using Java or Kotlin. This track teaches you industry best practices, UI/UX design principles, and integration of APIs to create robust, user-centric mobile apps that perform smoothly across diverse Android devices.",
  },
  {
    title: "Data Science",
    icon: "bi-bar-chart",
    description:
      "Learn data analysis, visualization, and predictive modeling using Python and tools like Pandas.",
    image: dataScienceImg,
    featured:
      "Gain expertise in data science techniques including data cleaning, exploratory analysis, and advanced visualization. Learn to use Python libraries such as Pandas and Matplotlib to build predictive models that drive business decisions and generate actionable insights.",
  },
];


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: internshipTracks[0].title,
    duration: "",
    resume: null,
  });

  const formRef = useRef(null);

  const handleCardClick = (trackTitle) => {
    setFormData((prev) => ({ ...prev, program: trackTitle }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
  };

  // Removed form submission logic and form itself as per your instruction

  return (
    <>
     
      <Navbar />
      <div style={{ paddingTop: "50px" }}></div>

      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #8636a8, #a768c5)",
          position: "relative",
          overflow: "hidden",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 animate-heading">
            Launch Your Tech Career <span className="wave">🚀</span>
          </h1>
          <p className="lead fs-5 animate-text">
            <span className="text-warning">Earn certificates</span>, gain{" "}
            <span className="text-info">real-world experience</span>, and access{" "}
            <span className="text-warning">internship opportunities</span> that
            help you stand out.
          </p>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Explore Internship Domains</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {internshipTracks.map((track, index) => (
              <div
                className="col"
                key={index}
                onClick={() => handleCardClick(track.title)}
                style={{ cursor: "pointer" }}
              >
                <div className="card h-100 shadow border-0 hover-shadow">
                  <div className="card-body text-center">
                    <i
                      className={`bi ${track.icon} fs-2 text-primary mb-2`}
                    ></i>
                    <h5 className="card-title">{track.title}</h5>
                    <p className="card-text small text-muted">{track.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration Section */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Choose Your Duration</h2>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {["2 Weeks", "4 Weeks", "8 Weeks", "12 Weeks", "16 Weeks"].map(
              (duration, i) => (
                <div
                  key={i}
                  className="rounded-pill bg-primary text-white px-4 py-3 fw-semibold"
                  style={{ cursor: "pointer", transition: "0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#198754")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0d6efd")
                  }
                >
                  {duration}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f8f9fa" }}
        aria-label="How It Works"
      >
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div
            className="d-flex justify-content-center align-items-center flex-wrap"
            style={{ gap: "2rem" }}
          >
            {/* Step 1 */}
            <div
              className="card text-center p-3 shadow-sm"
              style={{ maxWidth: "250px", flex: "1" }}
            >
              <i className="bi bi-person-plus-fill fs-1 text-primary mb-3"></i>
              <h5>Register & Select Course</h5>
              <p className="text-muted">
                Sign up and pick your desired internship track to get started.
              </p>
            </div>

            {/* Arrow */}
            <div
              className="d-none d-md-block"
              style={{ fontSize: "2rem", color: "#6c757d" }}
            >
              →
            </div>

            {/* Step 2 */}
            <div
              className="card text-center p-3 shadow-sm"
              style={{ maxWidth: "250px", flex: "1" }}
            >
              <i className="bi bi-briefcase-fill fs-1 text-success mb-3"></i>
              <h5>Work on Real Projects</h5>
              <p className="text-muted">
                Gain practical experience by working on industry-relevant projects.
              </p>
            </div>

            {/* Arrow */}
            <div
              className="d-none d-md-block"
              style={{ fontSize: "2rem", color: "#6c757d" }}
            >
              →
            </div>

            {/* Step 3 */}
            <div
              className="card text-center p-3 shadow-sm"
              style={{ maxWidth: "250px", flex: "1" }}
            >
              <i className="bi bi-award-fill fs-1 text-warning mb-3"></i>
              <h5>Earn Certificate</h5>
              <p className="text-muted">
                Complete your internship and receive a verified certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Programs</h2>
          <div className="d-flex flex-column gap-4">
            {internshipTracks.map((track, idx) => (
              <div
                key={idx}
                className="card flex-row align-items-center shadow-sm p-3 featured-card animate__animated animate__fadeInUp"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  cursor: "default",
                  gap: "1.5rem",
                }}
              >
                <img
                  src={track.image}
                  alt={track.title}
                  style={{ width: "180px", borderRadius: "8px" }}
                  loading="lazy"
                />
                <div>
                  <h4>{track.title}</h4>
                  <p className="text-muted" style={{ maxWidth: "600px" }}>
                    {track.featured}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-5" style={{ background: "#f0f4ff" }}>
        <div className="container d-flex justify-content-center align-items-center gap-4">
          {/* Placeholder for the 3 certificate images as horizontal lines */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="certificate-line"
              style={{
                width: "150px",
                height: "20px",
                background:
                  "linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb)",
                borderRadius: "10px",
                animation: "certificateAnim 3s ease-in-out infinite alternate",
              }}
            ></div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Inline style for animation */}
      <style>
        {`
          @keyframes certificateAnim {
            0% {
              filter: brightness(1);
              transform: scaleX(1);
            }
            50% {
              filter: brightness(1.4);
              transform: scaleX(1.1);
            }
            100% {
              filter: brightness(1);
              transform: scaleX(1);
            }
          }
          .featured-card {
            transition: transform 0.3s ease;
          }
          .featured-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
        `}
      </style>
    </>
  );
}

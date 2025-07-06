import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Internships() {
  const internshipTracks = [
    {
      title: "Web Development",
      icon: "bi-code-slash",
      description:
        "Build modern websites and web apps using HTML, CSS, JavaScript, and frameworks like React.",
      image: "https://source.unsplash.com/400x250/?web,code",
    },
    {
      title: "AI/ML",
      icon: "bi-cpu",
      description:
        "Dive into machine learning, deep learning, and AI model development with real datasets.",
      image: "https://source.unsplash.com/400x250/?ai,machinelearning",
    },
    {
      title: "Blockchain",
      icon: "bi-link-45deg",
      description:
        "Understand decentralized apps, smart contracts, and blockchain infrastructure.",
      image: "https://source.unsplash.com/400x250/?blockchain,crypto",
    },
    {
      title: "Android Development",
      icon: "bi-phone",
      description:
        "Create Android mobile apps using Java or Kotlin with hands-on projects.",
      image: "https://source.unsplash.com/400x250/?android,mobileapp",
    },
    {
      title: "Data Science",
      icon: "bi-bar-chart",
      description:
        "Learn data analysis, visualization, and predictive modeling using Python and tools like Pandas.",
      image: "https://source.unsplash.com/400x250/?data,science",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: internshipTracks[0].title,
    duration:"",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      program: internshipTracks[0].title,
      resume: null,
    });
    e.target.reset();
  };

  return (
    <>
      <ScrollTop />
      <Navbar />
      <div style={{ paddingTop: "20px" }}></div>

      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-7f62c31656c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.65)",
            padding: "100px 20px",
          }}
        >
          <h1 className="display-4 fw-bold mb-3">
            Launch Your Tech Career 🚀
          </h1>
          <p className="lead">
            Earn certificates, gain real-world experience, and get internship opportunities that stand out.
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
                    <i className={`bi ${track.icon} fs-2 text-primary mb-2`}></i>
                    <h5 className="card-title">{track.title}</h5>
                    <p className="card-text small text-muted">
                      {track.description}
                    </p>
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

      {/* Certificate Section */}
      <section className="py-5" style={{ background: "#f0f4ff" }}>
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
          <div className="text-center text-lg-start">
            <h2 className="fw-bold mb-3">📜 Verified Certificate</h2>
            <p className="mb-4">
              Every successful participant receives an official certificate of completion.
              Show it off on LinkedIn, your portfolio, or resume to make an impact.
            </p>
            <button className="btn btn-dark btn-lg">View Sample Certificate</button>
          </div>
     
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-award fs-1 text-primary"></i>
              <h5 className="mt-3">Certified Programs</h5>
              <p>Receive recognized certificates that validate your skills and learning.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-briefcase fs-1 text-success"></i>
              <h5 className="mt-3">Real-World Projects</h5>
              <p>Collaborate on live industry projects and gain practical experience.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-cash-stack fs-1 text-warning"></i>
              <h5 className="mt-3">Paid Internship Chances</h5>
              <p>Top performers get shortlisted for paid internship opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-5 bg-light" ref={formRef}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 className="text-center mb-4">Apply Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="program" className="form-label">Internship Track</label>
              <select className="form-select" name="program" value={formData.program} onChange={handleChange} required>
                {internshipTracks.map((track, i) => (
                  <option key={i} value={track.title}>{track.title}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Duration</label>
              <input type="number" className="form-control" name="duration" value={formData.duration} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="resume" className="form-label">Upload Resume</label>
              <input className="form-control" type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Submit Application</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

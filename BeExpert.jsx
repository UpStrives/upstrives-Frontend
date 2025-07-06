import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function BeExpert() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    company: "",
    domain: "",
    resume: null,
    payslip: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:8080/api/expertform/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.text();

      if (response.ok) {
        alert("Application submitted successfully: " + result);
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          degree: "",
          company: "",
          domain: "",
          resume: null,
          payslip: null,
        });
      } else {
        alert("Submission failed: " + result);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  const processSteps = [
    { icon: "bi-file-earmark-person", title: "Apply", desc: "Submit your details & docs." },
    { icon: "bi-chat-quote", title: "Review Call", desc: "Short call to verify fit." },
    { icon: "bi-award", title: "Get Verified", desc: "Start mentoring & earning." },
  ];

  return (
    <>
      <ScrollTop />
      <Navbar />
      <div style={{ paddingTop: "70px" }}></div>
      <div className="be-expert-page">
        {/* Hero Section */}
        <section className="bg-dark text-white text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">Join as a Verified Expert</h1>
            <p className="lead mt-3">Share your corporate experience, mentor students, build your brand—and earn!</p>
            <a href="#applyForm" className="btn btn-outline-light btn-lg mt-4">Get Started</a>
          </div>
        </section>

        {/* Benefit Cards */}
        <section className="container py-5">
          <h2 className="text-center fw-bold mb-4">Why Join?</h2>
          <div className="row g-4">
            {[
              { icon: "bi-cash-stack text-primary", text: "Monetize your expertise." },
              { icon: "bi-people text-success", text: "Guide the next-gen talent." },
              { icon: "bi-briefcase text-info", text: "Enhance your profile." },
              { icon: "bi-clock-history text-warning", text: "Flexible mentoring hours." },
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="card h-100 text-center shadow-sm border-0">
                  <div className="card-body">
                    <div className="fs-1 mb-3"><i className={item.icon}></i></div>
                    <p className="fw-semibold">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Journey */}
        <section className="bg-light py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Your Journey</h2>
            <div className="row justify-content-center g-4">
              {processSteps.map((step, i) => (
                <div className="col-md-4 text-center" key={i}>
                  <div className="p-4">
                    <div className="fs-1 text-primary mb-3"><i className={`bi ${step.icon}`}></i></div>
                    <h5 className="fw-bold">{step.title}</h5>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="applyForm" className="container py-5">
          <h2 className="text-center fw-bold mb-4">Apply to Become an Expert</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit} className="row g-3">
                    {[
                      { label: "Full Name", name: "name" },
                      { label: "Email", name: "email", type: "email" },
                      { label: "Phone", name: "phone", type: "tel" },
                      { label: "University", name: "university" },
                      { label: "Degree", name: "degree" },
                      { label: "Company", name: "company" },
                      { label: "Domain", name: "domain" },
                    ].map(({ label, name, type = "text" }, i) => (
                      <div className="col-md-6" key={i}>
                        <label className="form-label text-dark">{label}</label>
                        <input
                          type={type}
                          name={name}
                          className="form-control"
                          value={formData[name]}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    ))}

                    <div className="col-md-6">
                      <label className="form-label text-dark">Resume (PDF)</label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark">Latest Payslip (PDF)</label>
                      <input
                        type="file"
                        name="payslip"
                        accept=".pdf"
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button type="submit" className="btn btn-primary btn-lg">Submit Application</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

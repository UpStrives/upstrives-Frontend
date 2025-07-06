// src/Pages/ContactUs.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("subject", formData.subject);
  formDataToSend.append("message", formData.message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
    const response = await fetch("http://localhost:8080/api/contactus/submit", {
      method: "POST",
      body: formDataToSend,
    });

      
      const result = await response.text();

    if (response.ok) {
      alert("Form submitted successfully: " + result);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Submission failed: " + result);
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};
  return (
    <>
      <ScrollTop />
      <Navbar />

      <div style={{ paddingTop: "80px" }}></div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5" style={{ paddingTop: "80px" }}>
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Get in Touch</h1>
          <p className="lead">
            We'd love to hear from you. Reach out with questions, feedback, or partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 className="text-center mb-4">Contact Us</h2>
          {status && (
            <div className={`alert ${status.includes("successfully") ? "alert-success" : "alert-danger"}`}>
              {status}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="contactFaq">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1-heading">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  How can I become a mentor or guide?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#contactFaq">
                <div className="accordion-body">
                  You can register as an expert through the "Register as Guide" option in the navigation bar.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2-heading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Where do I apply for internships?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#contactFaq">
                <div className="accordion-body">
                  Visit the Internship page from the navigation menu and fill out the application form.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3-heading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Will I receive a certificate?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#contactFaq">
                <div className="accordion-body">
                  Yes! All students who complete their internship receive a verified certificate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

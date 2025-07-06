import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Learn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Submitted:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      University: ${formData.university}
      Degree: ${formData.degree}
      Resume: ${formData.resume ? formData.resume.name : "No file uploaded"}
      Cover Letter: ${formData.coverLetter ? formData.coverLetter : "None"}
    `);

    setFormData({
      name: "",
      email: "",
      phone: "",
      university: "",
      degree: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "120px", maxWidth: "600px" }}>
        <h1 className="mb-4">Application Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="university" className="form-label">University Name:</label>
            <input
              type="text"
              className="form-control"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="degree" className="form-label">Degree:</label>
            <input
              type="text"
              className="form-control"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="resume" className="form-label">Upload Resume:</label>
            <input
              className="form-control"
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="coverLetter" className="form-label">Cover Letter (optional):</label>
            <textarea
              className="form-control"
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <div style={{ paddingTop: "10px" }}></div>
      <Footer/>
    </>
  );
}

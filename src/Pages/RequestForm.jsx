import React, { useState } from "react";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    assistanceType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate API logic here
    setSubmitted(true);
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Connect with Us & Transform Your Career</h2>
        <p className="text-muted fs-5">
          Whether you need resume guidance, project feedback, or mock interviews —
          we’re here to help you become job-ready. Submit your request below.
        </p>
      </div>

      {/* Form Section */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="+1 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="assistanceType" className="form-label fw-semibold">
              How can we assist you?
            </label>
            <select
              className="form-select"
              id="assistanceType"
              name="assistanceType"
              value={formData.assistanceType}
              onChange={handleChange}
              required
            >
              <option value="">Choose an option</option>
              <option value="resume">Resume Assistance</option>
              <option value="project">Project Review</option>
              <option value="interview">Schedule Interview</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
            Submit Request
          </button>
        </form>
      ) : (
        <div className="alert alert-success text-center mx-auto mt-4" style={{ maxWidth: "600px" }}>
          <h4 className="alert-heading">Thank you for reaching out!</h4>
          <p className="mb-0">
            Your request has been received. You will receive an email shortly with further details.
          </p>
        </div>
      )}
    </div>
  );
}

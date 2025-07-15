import React, { useState } from 'react';
import "../css/Register.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    branch: '',
    passoutYear: '',
    dob: '',
    currentCompany: '',
    yearsExperience: '',
    resume: null,
    payslips: null,
    panNumber: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData({
      name: '',
      email: '',
      phone: '',
      university: '',
      branch: '',
      passoutYear: '',
      dob: '',
      currentCompany: '',
      yearsExperience: '',
      resume: null,
      payslips: null,
      panNumber: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${role.toUpperCase()} successfully!`);
  };

  return (
    <div className="main">
      <Navbar />
    
    <div className="register-page">
        <div Style={{ padding: '70px' }}> </div>
      <div className="register-container">
        
        <h2>Register as</h2>
        <div className="tabs">
          <button
            className={role === 'student' ? 'activeTab tab' : 'tab'}
            onClick={() => handleRoleChange('student')}
            type="button"
          >
            Student
          </button>
          <button
            className={role === 'mentor' ? 'activeTab tab' : 'tab'}
            onClick={() => handleRoleChange('mentor')}
            type="button"
          >
            Mentor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          {/* Common Fields */}
          <div className="form-row">
            <label className="label">
              Name <span className="required">*</span>
            </label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-row">
            <label className="label">
              Email <span className="required">*</span>
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@domain.com"
            />
          </div>

          <div className="form-row">
            <label className="label">
              Phone <span className="required">*</span>
            </label>
            <input
              className="input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
            />
          </div>

          {/* Student Fields */}
          {role === 'student' && (
            <>
              <div className="form-row">
                <label className="label">
                  University <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  placeholder="Your university name"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Branch <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  placeholder="Your branch/department"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Passout Year <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="number"
                  name="passoutYear"
                  value={formData.passoutYear}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2025"
                  min="1950"
                  max={new Date().getFullYear() + 10}
                />
              </div>
            </>
          )}

          {/* Mentor Fields */}
          {role === 'mentor' && (
            <>
              <div className="form-row">
                <label className="label">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label className="label">
                  University <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  placeholder="Your university name"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Branch <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  placeholder="Your branch/department"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Passout Year <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="number"
                  name="passoutYear"
                  value={formData.passoutYear}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2018"
                  min="1950"
                  max={new Date().getFullYear()}
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Current Company <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  required
                  placeholder="Your current company"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Years of Experience <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="number"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5"
                  min="0"
                  max="50"
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Upload Resume <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <div className="form-row">
                <label className="label">
                  Upload Latest Payslips <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="file"
                  name="payslips"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.png"
                  required
                />
              </div>

              <div className="form-row">
                <label className="label">
                  PAN Number <span className="required">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  required
                  placeholder="ABCDE1234F"
                  maxLength={10}
                />
              </div>
            </>
          )}

          <button type="submit" className="submitButton">
            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
    <div Style={{ padding: '400px' }}></div>
    <Footer />
    </div>
  );
}

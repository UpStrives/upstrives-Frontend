import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "../components/ScrollTop";
// Make sure you have Bootstrap Icons CSS imported in your project's index.html
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

export default function ResumeHelp() {
  const [resumeFile, setResumeFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [atsMessage, setAtsMessage] = useState("");
  const [expertReviewMessage, setExpertReviewMessage] = useState("");

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
    setAtsScore(null); // Reset score when a new file is selected
    setAtsMessage(""); // Reset message
    setExpertReviewMessage(""); // Reset expert review message
  };

  const checkAtsScore = () => {
    if (!resumeFile) {
      setAtsMessage("Please upload a resume file first.");
      setAtsScore(null);
      return;
    }

    setAtsMessage("Analyzing your resume...");
    setAtsScore(null); // Clear previous score
    setExpertReviewMessage(""); // Clear previous expert message

    // Simulate API call or complex ATS logic here.
    // In a real application, you would send 'resumeFile' to a backend
    // server that has the actual ATS parsing and scoring logic.
    // For this example, we'll do a simple client-side simulation.

    setTimeout(() => {
      // Simulate network delay
      const fileName = resumeFile.name.toLowerCase();
      let score = 0;
      let feedback = "Initial analysis complete.";

      if (fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
        score += 20; // Base score for correct file type
        feedback += " File format is good.";
      } else {
        feedback += " Recommended file formats are PDF or DOCX.";
      }

      // Simulate a random score for demonstration
      const simulatedScore = Math.floor(Math.random() * (95 - 60 + 1)) + 60; // Score between 60 and 95
      setAtsScore(simulatedScore);

      if (simulatedScore > 80) {
        setAtsMessage(
          "Great! Your resume looks strong for ATS. Consider expert review for perfection."
        );
      } else if (simulatedScore > 70) {
        setAtsMessage(
          "Good start! Your resume is likely ATS-friendly. Focus on optimizing keywords and action verbs."
        );
      } else {
        setAtsMessage(
          "Your resume might need optimization for ATS. Consider using our AI builder and expert session."
        );
      }
    }, 2000); // 2 second delay for simulation
  };

  const sendForExpertReview = () => {
    if (!resumeFile) {
      setExpertReviewMessage("Please upload a resume file before sending for expert review.");
      return;
    }
    setExpertReviewMessage("Sending your resume to our experts for review...");

    // In a real application, you would send 'resumeFile' to a backend
    // service that handles expert review requests. This might involve:
    // 1. Uploading the file to secure storage.
    // 2. Notifying an expert/team.
    // 3. Potentially creating a user account or linking to an existing one.
    // 4. Redirecting to a booking or payment page.

    setTimeout(() => { // Simulate API call
      setExpertReviewMessage(
        "Your resume has been successfully sent for expert review! We'll be in touch shortly to discuss the next steps."
      );
      // Optionally, you might redirect the user or show a success modal here.
      // window.location.href = "/expert-review-confirmation";
    }, 2500);
  };


  return (
    <>
      <ScrollTop />
      <Navbar />

      {/* Adjust padding for fixed navbar */}
      <div style={{ paddingTop: "80px" }}></div>

      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5 py-lg-6">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
            Build a Winning Resume
          </h1>
          <p className="lead mt-3 mb-4 animate__animated animate__fadeInUp">
            Leverage **AI tools** and **expert guidance** to create a job-winning resume that stands out.
          </p>
          <div className="mt-4 animate__animated animate__fadeInUp animate__delay-1s">
            <a href="/resume-builder" className="btn btn-primary btn-lg me-3 shadow-sm">
              <i className="bi bi-robot me-2"></i> Create Your Own
            </a>
            <a href="/book-expert" className="btn btn-outline-light btn-lg shadow-sm">
              <i className="bi bi-person-check me-2"></i> Book Expert Session
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary">How It Works</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 border rounded-3 shadow-sm h-100 bg-white hover-zoom">
                <i className="bi bi-cpu fs-1 text-primary mb-3"></i>
                <h5 className="mt-3 fw-bold">AI-Powered Resume Builder</h5>
                <p className="text-muted">
                  Use intelligent templates that adapt to your skills and job role, ensuring relevance and ATS compliance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-3 shadow-sm h-100 bg-white hover-zoom">
                <i className="bi bi-person-lines-fill fs-1 text-success mb-3"></i>
                <h5 className="mt-3 fw-bold">Expert Advisory</h5>
                <p className="text-muted">
                  Get personalized tips from industry professionals to enhance clarity, structure, and impact.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-3 shadow-sm h-100 bg-white hover-zoom">
                <i className="bi bi-check2-circle fs-1 text-warning mb-3"></i>
                <h5 className="mt-3 fw-bold">Final Review & Export</h5>
                <p className="text-muted">
                  Receive feedback, polish the final version, and export your resume in PDF or DOC format instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS Score Checker Section */}
      <section className="py-5 py-lg-6">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-primary">Check Your ATS Score</h2>
          <p className="lead mb-4 text-muted">
            See how well your resume performs against Applicant Tracking Systems.
            Upload your resume to get an instant **compatibility score**.
          </p>
          <div className="card p-4 mx-auto border-0 rounded-3 shadow-lg" style={{ maxWidth: '700px', backgroundColor: '#fff' }}>
            <div className="mb-4">
              <label htmlFor="resumeUpload" className="form-label fs-5 fw-bold text-dark mb-3">
                <i className="bi bi-upload me-2 text-secondary"></i> Upload Your Resume
              </label>
              <input
                type="file"
                className="form-control form-control-lg border-primary rounded-pill py-3 px-4"
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <small className="form-text text-muted mt-2 d-block">Accepted formats: PDF, DOC, DOCX. Max file size: 5MB.</small>
            </div>
            <button
              className="btn btn-primary btn-lg mt-3 w-100 rounded-pill shadow"
              onClick={checkAtsScore}
              disabled={!resumeFile}
            >
              <i className="bi bi-search me-2"></i> Check ATS Score
            </button>

            {atsMessage && (
              <p className={`mt-3 mb-0 fw-bold ${atsScore === null ? 'text-info' : 'text-success'}`}>
                {atsMessage}
              </p>
            )}

            {atsScore !== null && (
              <div className="mt-4 p-3 bg-light rounded-3 border">
                <h4 className="text-success mb-2 fw-bold">Your ATS Score:</h4>
                <p className="display-3 fw-bolder text-primary mb-2 animate__animated animate__pulse">
                  {atsScore}%
                </p>
                <p className="lead text-dark">
                  This score indicates your resume's compatibility with typical ATS software.
                </p>
                {atsScore < 75 && (
                    <p className="text-danger fw-bold">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        Your resume might need optimization for ATS. Consider using our **AI builder** or booking an **expert session** to improve your score!
                    </p>
                )}
                {atsScore >= 75 && atsScore < 90 && (
                    <p className="text-warning fw-bold">
                        <i className="bi bi-star-fill me-2"></i>
                        Good job! Your resume is largely ATS-friendly. A quick review could make it perfect.
                    </p>
                )}
                {atsScore >= 90 && (
                    <p className="text-success fw-bold">
                        <i className="bi bi-hand-thumbs-up-fill me-2"></i>
                        Excellent! Your resume is highly optimized for ATS. You're ready to impress.
                    </p>
                )}
              </div>
            )}

            {/* Expert Review Section - New! */}
            <div className="mt-5 pt-4 border-top">
                <h4 className="mb-3 fw-bold text-dark">
                    <i className="bi bi-person-badge-fill me-2 text-info"></i> Need Deeper Insights?
                </h4>
                <p className="text-muted mb-4">
                    Get a personalized, in-depth evaluation of your resume from our career experts. They'll provide actionable feedback on content, design, and overall impact.
                </p>
                <button
                    className="btn btn-info btn-lg w-100 rounded-pill shadow"
                    onClick={sendForExpertReview}
                    disabled={!resumeFile}
                >
                    <i className="bi bi-send-fill me-2"></i> Send to Expert for Review
                </button>
                {expertReviewMessage && (
                    <p className="mt-3 mb-0 fw-bold text-success">
                        {expertReviewMessage}
                    </p>
                )}
            </div>
            {/* End Expert Review Section */}

          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-5 py-lg-6 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Why Use ResumeHelp?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <i className="bi bi-lightbulb fs-1 text-warning mb-3"></i>
              <h6 className="mt-2 fw-bold">Smart Suggestions</h6>
              <p className="small opacity-75">Tailored to your role, goals & skills.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-clock fs-1 text-info mb-3"></i>
              <h6 className="mt-2 fw-bold">Save Time</h6>
              <p className="small opacity-75">Skip the guesswork with instant feedback.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-briefcase fs-1 text-success mb-3"></i>
              <h6 className="mt-2 fw-bold">Career-Ready</h6>
              <p className="small opacity-75">Match your resume to job descriptions.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-chat-left-text fs-1 text-danger mb-3"></i>
              <h6 className="mt-2 fw-bold">1-on-1 Feedback</h6>
              <p className="small opacity-75">Consult with HRs & hiring managers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 py-lg-6 text-center bg-dark text-white">
        <div className="container">
          <h3 className="mb-4 fw-bold">Ready to craft a resume that gets interviews?</h3>
          <p className="lead mb-4 opacity-75">
            Don't just apply, stand out! Take the first step towards your dream job.
          </p>
          <a href="/resume-builder" className="btn btn-lg btn-warning me-3 shadow animate__animated animate__heartBeat animate__delay-2s animate__infinite">
            <i className="bi bi-arrow-right-circle-fill me-2"></i> Start Building Now!
          </a>
          <a href="/book-expert" className="btn btn-lg btn-outline-light shadow">
            <i className="bi bi-calendar-check me-2"></i> Talk to an Expert
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
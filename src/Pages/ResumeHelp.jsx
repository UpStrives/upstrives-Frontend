import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "../components/ScrollTop";

export default function ResumeHelp() {
  const [resumeFile, setResumeFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [atsMessage, setAtsMessage] = useState("");
  const [expertReviewMessage, setExpertReviewMessage] = useState("");

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
    setAtsScore(null);
    setAtsMessage("");
    setExpertReviewMessage("");
  };

  const checkAtsScore = (resumeText) => {
  if (!resumeText || resumeText.trim() === "") {
    setAtsMessage("Please enter or upload your resume text.");
    setAtsScore(null);
    return;
  }

  const text = resumeText.toLowerCase();

  let score = 0;
  let feedbackParts = [];

  // Check important sections
  if (text.includes("experience")) {
    score += 20;
    feedbackParts.push("Experience section found.");
  } else {
    feedbackParts.push("Add an Experience section.");
  }

  if (text.includes("skills")) {
    score += 20;
    feedbackParts.push("Skills section found.");
  } else {
    feedbackParts.push("Include a Skills section.");
  }

  if (text.includes("summary") || text.includes("objective")) {
    score += 10;
    feedbackParts.push("Professional summary/objective found.");
  } else {
    feedbackParts.push("Add a professional summary or objective.");
  }

  // Check contact info (basic email or phone)
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /(\+?\d{1,4}[\s-])?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}/;

  if (emailRegex.test(text) || phoneRegex.test(text)) {
    score += 10;
    feedbackParts.push("Contact info detected.");
  } else {
    feedbackParts.push("Include your contact information.");
  }

  // Keyword check (example tech keywords)
  const keywords = ["java", "react", "spring", "docker", "aws", "sql"];
  const matchedKeywords = keywords.filter((kw) => text.includes(kw));
  score += Math.min(matchedKeywords.length * 5, 20); // max 20 points

  if (matchedKeywords.length > 0) {
    feedbackParts.push(`Found keywords: ${matchedKeywords.join(", ")}`);
  } else {
    feedbackParts.push("Add relevant technical keywords.");
  }

  // Formatting hint - just a dummy check if text length is decent
  if (text.length > 500) {
    score += 10;
    feedbackParts.push("Resume length looks good.");
  } else {
    feedbackParts.push("Your resume looks too short.");
  }

  // Cap score at 100
  if (score > 100) score = 100;

  // Generate feedback message
  let feedback = feedbackParts.join(" ");

  setAtsScore(score);
  if (score > 85) {
    setAtsMessage("Excellent! " + feedback);
  } else if (score > 70) {
    setAtsMessage("Good! " + feedback);
  } else {
    setAtsMessage("Needs improvement. " + feedback);
  }
};


  const sendForExpertReview = () => {
    if (!resumeFile) {
      setExpertReviewMessage("Please upload a resume file before sending for expert review.");
      return;
    }
    setExpertReviewMessage("Sending your resume to our experts for review...");

    setTimeout(() => {
      setExpertReviewMessage(
        "Your resume has been successfully sent for expert review! We'll be in touch shortly to discuss the next steps."
      );
    }, 2500);
  };

  return (
    <>
      <ScrollTop />
      <Navbar />

      {/* Padding for fixed navbar */}
      <div style={{ paddingTop: "70.5px" }}></div>

      {/* Hero Section */}
      <section
        className="text-white text-center py-5 py-lg-6 animate__animated animate__fadeInDown"
        style={{ backgroundColor: "#8636a8" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Build a Winning Resume
          </h1>
          <p className="lead mt-3 mb-4">
            Leverage <strong>AI tools</strong> and <strong>expert guidance</strong> to create a job-winning resume that stands out.
          </p>
          <div className="mt-4">
            <a
              href="/resume-builder"
              className="btn btn-light btn-lg me-3 shadow-sm fw-semibold text-purple"
              style={{ color: "#8636a8" }}
            >
              <i className="bi bi-robot me-2"></i> Create Your Own
            </a>
            <a
              href="/book-expert"
              className="btn btn-outline-light btn-lg shadow-sm fw-semibold"
            >
              <i className="bi bi-person-check me-2"></i> Book Expert Session
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#8636a8" }}>
            How It Works
          </h2>
          <div className="row g-4 text-center">
            {[
              {
                icon: "bi-cpu",
                color: "#8636a8",
                title: "AI-Powered Resume Builder",
                text:
                  "Use intelligent templates that adapt to your skills and job role, ensuring relevance and ATS compliance.",
              },
              {
                icon: "bi-person-lines-fill",
                color: "#198754", // bootstrap success green
                title: "Expert Advisory",
                text:
                  "Get personalized tips from industry professionals to enhance clarity, structure, and impact.",
              },
              {
                icon: "bi-check2-circle",
                color: "#ffc107", // bootstrap warning yellow
                title: "Final Review & Export",
                text:
                  "Receive feedback, polish the final version, and export your resume in PDF or DOC format instantly.",
              },
            ].map(({ icon, color, title, text }, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 border rounded-3 shadow-sm h-100 bg-white hover-zoom animate__animated animate__zoomIn animate__delay-0-5s">
                  <i
                    className={`${icon} fs-1 mb-3`}
                    style={{ color }}
                  ></i>
                  <h5 className="mt-3 fw-bold" style={{ color: "#444" }}>
                    {title}
                  </h5>
                  <p className="text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS Score Checker Section */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#8636a8" }}>
            Check Your ATS Score
          </h2>
          <p className="lead mb-4 text-muted">
            See how well your resume performs against Applicant Tracking Systems.
            Upload your resume to get an instant <strong>compatibility score</strong>.
          </p>
          <div
            className="card p-4 mx-auto border-0 rounded-3 shadow-lg"
            style={{ maxWidth: "700px", backgroundColor: "#fff" }}
          >
            <div className="mb-4 text-start">
              <label
                htmlFor="resumeUpload"
                className="form-label fs-5 fw-bold text-dark mb-3"
              >
                <i className="bi bi-upload me-2 text-secondary"></i> Upload Your Resume
              </label>
              <input
                type="file"
                className="form-control form-control-lg border-purple rounded-pill py-3 px-4"
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                style={{ borderColor: "#8636a8" }}
              />
              <small className="form-text text-muted mt-2 d-block">
                Accepted formats: PDF, DOC, DOCX. Max file size: 5MB.
              </small>
            </div>
            <button
              className="btn btn-purple btn-lg mt-3 w-100 rounded-pill shadow fw-semibold"
              onClick={checkAtsScore}
              disabled={!resumeFile}
              style={{
                backgroundColor: "#8636a8",
                borderColor: "#8636a8",
                color: "white",
              }}
            >
              <i className="bi bi-search me-2"></i> Check ATS Score
            </button>

            {atsMessage && (
              <p
                className={`mt-3 mb-0 fw-bold ${
                  atsScore === null ? "text-info" : "text-success"
                }`}
              >
                {atsMessage}
              </p>
            )}

            {atsScore !== null && (
              <div className="mt-4 p-3 bg-light rounded-3 border animate__animated animate__fadeIn">
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
                    Your resume might need optimization for ATS. Consider using our{" "}
                    <strong>AI builder</strong> or booking an <strong>expert session</strong> to improve your score!
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

            {/* Expert Review Section */}
            <div className="mt-5 pt-4 border-top text-start">
              <h4 className="mb-3 fw-bold text-dark">
                <i className="bi bi-person-badge-fill me-2 text-info"></i> Need Deeper Insights?
              </h4>
              <p className="text-muted mb-4">
                Get a personalized, in-depth evaluation of your resume from our career experts. They'll provide actionable feedback on content, design, and overall impact.
              </p>
              <button
                className="btn btn-info btn-lg w-100 rounded-pill shadow fw-semibold"
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 py-lg-6" style={{ backgroundColor: "#f9f6fb" }}>
        <div className="container text-center">
          <h2 className="mb-5 fw-bold" style={{ color: "#8636a8" }}>
            Why Use ResumeHelp?
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "bi-lightbulb",
                color: "#ffc107",
                title: "Smart Suggestions",
                text: "Tailored to your role, goals & skills.",
              },
              {
                icon: "bi-clock",
                color: "#198754",
                title: "Save Time",
                text: "Skip the guesswork with instant feedback.",
              },
              {
                icon: "bi-briefcase",
                color: "#8636a8",
                title: "Career-Ready",
                text: "Match your resume to job descriptions.",
              },
              {
                icon: "bi-chat-left-text",
                color: "#dc3545",
                title: "1-on-1 Feedback",
                text: "Consult with HRs & hiring managers.",
              },
            ].map(({ icon, color, title, text }, i) => (
              <div className="col-md-3" key={i}>
                <i className={`${icon} fs-1 mb-3`} style={{ color }}></i>
                <h6 className="mt-2 fw-bold" style={{ color: "#333" }}>{title}</h6>
                <p className="small opacity-75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-5 py-lg-6 text-center text-white"
        style={{ backgroundColor: "#5a2877" }}
      >
        <div className="container">
          <h3 className="mb-4 fw-bold animate__animated animate__fadeInDown">
            Ready to craft a resume that gets interviews?
          </h3>
          <p className="lead mb-4 opacity-75 animate__animated animate__fadeInUp">
            Don't just apply, stand out! Take the first step towards your dream job.
          </p>
          <a
            href="/resume-builder"
            className="btn btn-lg btn-warning me-3 shadow"
          >
            <i className="bi bi-arrow-right-circle-fill me-2"></i> Start Building Now!
          </a>
          <a
            href="/book-expert"
            className="btn btn-outline-light btn-lg shadow"
          >
            <i className="bi bi-person-badge me-2"></i> Book Expert Session
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

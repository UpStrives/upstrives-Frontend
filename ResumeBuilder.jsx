import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import Navbar from "../components/Navbar"; // Assuming you have this component

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h5
        style={{
          borderBottom: "1px solid #ccc",
          paddingBottom: "5px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#333",
        }}
      >
        {title}
      </h5>
      <div>{children}</div>
    </div>
  );
}

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "Ravi Kumar",
    email: "ravi@example.com",
    phone: "+91 1234567890",
    linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/ravi" },
    github: { label: "GitHub", url: "https://github.com/ravi" },
    others: [], // You can add more social links here if needed
    summary:
      "Highly motivated and detail-oriented software developer with 5 years of experience in building scalable web applications. Proficient in full-stack development, with a strong focus on creating robust and user-friendly solutions. Eager to contribute to innovative projects and collaborate with a dynamic team.",
    education: [
      {
        institution: "ABC University",
        location: "City, Country",
        duration: "2016 - 2020",
        degree: "B.Tech Computer Science",
        cgpa: "8.5",
      },
    ],
    experience: [
      {
        title: "Software Developer",
        company: "XYZ Corp",
        location: "City, Country",
        duration: "Jan 2021 - Present",
        description:
          "- Developed and maintained robust web applications using React and Node.js.\n- Collaborated with cross-functional teams to define, design, and ship new features.\n- Optimized application performance, leading to a 20% reduction in load times.",
      },
      {
        title: "Junior Developer",
        company: "Innovate Tech",
        location: "City, Country",
        duration: "Jul 2020 - Dec 2020",
        description:
          "- Assisted in the development of front-end components using HTML, CSS, and JavaScript.\n- Participated in code reviews and learned best practices in software development.",
      },
    ],
    projects: [
      {
        name: "Project Alpha (A Project Management Tool)",
        duration: "2022",
        link: "https://github.com/ravi/project-alpha",
        description:
          "Developed a full-stack project management tool with features like task assignment, progress tracking, and user authentication.",
        technologies: "React, Node.js, Express, MongoDB",
      },
    ],
    skills: {
      programmingLanguages: "Java, Python, JavaScript, C++",
      frameworksLibraries: "React, Spring Boot, Node.js, Express, Django",
      cloudPlatforms: "AWS (EC2, S3, Lambda), Azure",
      databases: "MySQL, PostgreSQL, MongoDB",
      toolsDevOps: "Docker, Kubernetes, Git, Jenkins, Jira",
      others: "RESTful APIs, Microservices, Agile Methodologies",
    },
    certifications: [
      {
        name: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "March 2023",
      },
    ],
    interests: "Reading, Hiking, Photography, Machine Learning",
  });

  const [sectionsOrder, setSectionsOrder] = useState([
    "summary",
    "experience",
    "projects",
    "education",
    "skills",
    "certifications",
    "interests",
  ]);

  // Helper to move section up or down
  function moveSection(index, direction) {
    const newOrder = [...sectionsOrder];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= newOrder.length) return;
    [newOrder[index], newOrder[swapIndex]] = [newOrder[swapIndex], newOrder[index]];
    setSectionsOrder(newOrder);
  }

  // PDF generation
  

async function generatePDF() {
  try {
    const input = document.getElementById("resume-preview");
    if (!input) return;

    const wasDark = document.body.classList.contains("dark");
    if (wasDark) document.body.classList.remove("dark");

    const originalStyle = input.style.cssText;
    input.style.padding = "40px";
    input.style.fontSize = "11.5px";
    input.style.color = "#000";
    input.style.lineHeight = "1.4";

    const options = {
      margin: [20, 20, 20, 20],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0
      },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(options).from(input).save();

    input.style.cssText = originalStyle;
    if (wasDark) document.body.classList.add("dark");

  } catch (err) {
    console.error("PDF generation failed:", err);
  }
}



  // Render contact info as clickable links with label
  function renderContactLink(item) {
    if (!item.url) return null;
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007bff", textDecoration: "none" }}
      >
        {item.label || item.url}
      </a>
    );
  }

  // Section titles map to display names
  const sectionTitles = {
    summary: "Professional Summary",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Technologies & Skills",
    certifications: "Certifications & Achievements",
    interests: "Interests",
  };

  return (
    <div
      className="container my-4"
      style={{ fontFamily: "'Roboto', sans-serif", color: "#333" }}
    >
      <Navbar />
      <h1 className="mb-4 text-center text-primary">Resume Builder</h1>
      <div className="row">
        {/* Left Form */}
        <div className="col-md-6">
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Contact Information</h4>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Phone</label>
              <input
                type="text"
                className="form-control"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            {/* LinkedIn */}
            <div className="mb-3">
              <label className="form-label fw-bold">LinkedIn Label</label>
              <input
                type="text"
                className="form-control"
                value={formData.linkedin.label}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    linkedin: { ...formData.linkedin, label: e.target.value },
                  })
                }
              />
              <label className="form-label fw-bold mt-2">LinkedIn URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.linkedin.url}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    linkedin: { ...formData.linkedin, url: e.target.value },
                  })
                }
              />
            </div>
            {/* GitHub */}
            <div className="mb-3">
              <label className="form-label fw-bold">GitHub Label</label>
              <input
                type="text"
                className="form-control"
                value={formData.github.label}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    github: { ...formData.github, label: e.target.value },
                  })
                }
              />
              <label className="form-label fw-bold mt-2">GitHub URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.github.url}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    github: { ...formData.github, url: e.target.value },
                  })
                }
              />
            </div>
          </div>

          {/* Summary */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Professional Summary</h4>
            <div className="mb-3">
              <textarea
                rows={5}
                className="form-control"
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
              />
            </div>
          </div>

          {/* Education */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Education</h4>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="border rounded p-3 mb-3 bg-light">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[idx].institution = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Location"
                  value={edu.location}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[idx].location = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Duration (e.g., 2016 - 2020)"
                  value={edu.duration}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[idx].duration = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[idx].degree = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="CGPA/Score (optional)"
                  value={edu.cgpa}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[idx].cgpa = e.target.value;
                    setFormData({ ...formData, education: newEdu });
                  }}
                />
              </div>
            ))}
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                setFormData({
                  ...formData,
                  education: [
                    ...formData.education,
                    {
                      institution: "",
                      location: "",
                      duration: "",
                      degree: "",
                      cgpa: "",
                    },
                  ],
                })
              }
            >
              Add Education
            </button>
          </div>

          {/* Experience */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Experience</h4>
            {formData.experience.map((exp, idx) => (
              <div key={idx} className="border rounded p-3 mb-3 bg-light">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].title = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].company = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Location"
                  value={exp.location}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].location = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].duration = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Description (use - for bullet points)"
                  value={exp.description}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].description = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
              </div>
            ))}
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                setFormData({
                  ...formData,
                  experience: [
                    ...formData.experience,
                    {
                      title: "",
                      company: "",
                      location: "",
                      duration: "",
                      description: "",
                    },
                  ],
                })
              }
            >
              Add Experience
            </button>
          </div>

          {/* Projects */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Projects</h4>
            {formData.projects.map((proj, idx) => (
              <div key={idx} className="border rounded p-3 mb-3 bg-light">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Project Name"
                  value={proj.name}
                  onChange={(e) => {
                    const newProj = [...formData.projects];
                    newProj[idx].name = e.target.value;
                    setFormData({ ...formData, projects: newProj });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Duration (e.g., 2022 or Jan - Mar 2022)"
                  value={proj.duration}
                  onChange={(e) => {
                    const newProj = [...formData.projects];
                    newProj[idx].duration = e.target.value;
                    setFormData({ ...formData, projects: newProj });
                  }}
                />
                <input
                  type="url"
                  className="form-control mb-2"
                  placeholder="Link URL (optional)"
                  value={proj.link}
                  onChange={(e) => {
                    const newProj = [...formData.projects];
                    newProj[idx].link = e.target.value;
                    setFormData({ ...formData, projects: newProj });
                  }}
                />
                <textarea
                  rows={3}
                  className="form-control mb-2"
                  placeholder="Description"
                  value={proj.description}
                  onChange={(e) => {
                    const newProj = [...formData.projects];
                    newProj[idx].description = e.target.value;
                    setFormData({ ...formData, projects: newProj });
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Technologies (e.g., React, Node.js, MongoDB)"
                  value={proj.technologies}
                  onChange={(e) => {
                    const newProj = [...formData.projects];
                    newProj[idx].technologies = e.target.value;
                    setFormData({ ...formData, projects: newProj });
                  }}
                />
              </div>
            ))}
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                setFormData({
                  ...formData,
                  projects: [
                    ...formData.projects,
                    {
                      name: "",
                      duration: "",
                      link: "",
                      description: "",
                      technologies: "",
                    },
                  ],
                })
              }
            >
              Add Project
            </button>
          </div>

          {/* Skills */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Technologies & Skills</h4>
            <div className="mb-3">
              <label className="form-label">Programming Languages</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="e.g., Java, Python, JavaScript"
                value={formData.skills.programmingLanguages}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: {
                      ...formData.skills,
                      programmingLanguages: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Frameworks / Libraries</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="e.g., React, Spring Boot, Node.js"
                value={formData.skills.frameworksLibraries}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: {
                      ...formData.skills,
                      frameworksLibraries: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cloud Platforms</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="e.g., AWS, Azure, Google Cloud"
                value={formData.skills.cloudPlatforms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: { ...formData.skills, cloudPlatforms: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Databases</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="e.g., MySQL, PostgreSQL, MongoDB"
                value={formData.skills.databases}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: { ...formData.skills, databases: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tools / DevOps</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="e.g., Docker, Kubernetes, Git, Jenkins"
                value={formData.skills.toolsDevOps}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: { ...formData.skills, toolsDevOps: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Other Skills</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., RESTful APIs, Microservices"
                value={formData.skills.others}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: { ...formData.skills, others: e.target.value },
                  })
                }
              />
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Certifications & Achievements</h4>
            {formData.certifications.map((cert, idx) => (
              <div key={idx} className="border rounded p-3 mb-3 bg-light">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Certification Name"
                  value={cert.name}
                  onChange={(e) => {
                    const newCerts = [...formData.certifications];
                    newCerts[idx].name = e.target.value;
                    setFormData({ ...formData, certifications: newCerts });
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Issuing Organization"
                  value={cert.issuer}
                  onChange={(e) => {
                    const newCerts = [...formData.certifications];
                    newCerts[idx].issuer = e.target.value;
                    setFormData({ ...formData, certifications: newCerts });
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Date (e.g., March 2023)"
                  value={cert.date}
                  onChange={(e) => {
                    const newCerts = [...formData.certifications];
                    newCerts[idx].date = e.target.value;
                    setFormData({ ...formData, certifications: newCerts });
                  }}
                />
              </div>
            ))}
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                setFormData({
                  ...formData,
                  certifications: [
                    ...formData.certifications,
                    { name: "", issuer: "", date: "" },
                  ],
                })
              }
            >
              Add Certification
            </button>
          </div>

          {/* Interests */}
          <div className="card p-3 mb-3 shadow-sm">
            <h4 className="mb-3 text-info">Interests</h4>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="e.g., Reading, Hiking, Photography"
                value={formData.interests}
                onChange={(e) =>
                  setFormData({ ...formData, interests: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="col-md-6">
          <div className="card p-3 mb-3 shadow-sm">
            <h5 className="mb-3">Rearrange Sections</h5>
            <ul className="list-group mb-3">
              {sectionsOrder.map((sec, idx) => (
                <li
                  key={sec}
                  className="list-group-item d-flex justify-content-between align-items-center py-2"
                  style={{ cursor: "grab" }}
                >
                  <span>{sectionTitles[sec]}</span>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-secondary me-1"
                      disabled={idx === 0}
                      onClick={() => moveSection(idx, "up")}
                    >
                      ↑
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      disabled={idx === sectionsOrder.length - 1}
                      onClick={() => moveSection(idx, "down")}
                    >
                      ↓
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="resume-preview"
            style={{
              border: "1px solid #eee",
              padding: "25px", // Slightly more padding
              fontSize: "13.5px", // Slightly smaller font for compactness
              backgroundColor: "white",
              color: "#333",
              maxHeight: "200vh", // Adjusted max height for scrollable preview
              overflowY: "auto",
              boxShadow: "0 0 15px rgba(0,0,0,0.05)",
              lineHeight: "1.5", // Adjusted line height for readability
            }}
          >
            {/* Header */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "700",
                fontSize: "30px",
                color: "#1a237e", // A darker blue for the name
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {formData.name || "Your Name"}
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#555",
                marginBottom: "25px",
                display: "flex",
                justifyContent: "center",
                gap: "10px", // Reduced gap for contact details
                flexWrap: "wrap",
                lineHeight: "1.2", // Tighter line height for contact info
              }}
            >
              <span>{formData.email}</span>
              <span style={{ margin: "0 5px" }}>•</span> {/* Separator */}
              <span>{formData.phone}</span>
              {formData.linkedin.url && (
                <>
                  <span style={{ margin: "0 5px" }}>•</span>
                  {renderContactLink(formData.linkedin)}
                </>
              )}
              {formData.github.url && (
                <>
                  <span style={{ margin: "0 5px" }}>•</span>
                  {renderContactLink(formData.github)}
                </>
              )}
              {formData.others.map((item, i) => (
                <React.Fragment key={i}>
                  <span style={{ margin: "0 5px" }}>•</span>
                  {renderContactLink(item)}
                </React.Fragment>
              ))}
            </div>

            {/* Render Sections Dynamically */}
            {sectionsOrder.map((sectionKey) => {
              if (sectionKey === "summary" && formData.summary.trim()) {
                return (
                  <Section key="summary" title="Professional Summary">
                    <p style={{ margin: "0 0 5px 0", lineHeight: "1.6" }}>
                      {formData.summary}
                    </p>
                  </Section>
                );
              }
              if (sectionKey === "experience" && formData.experience.length > 0) {
                return (
                  <Section key="experience" title="Experience">
                    {formData.experience.map((exp, i) => (
                      <div
                        key={i}
                        style={{
                          marginBottom: "15px", // Adjusted for more compactness
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "600",
                            fontSize: "14.5px",
                            marginBottom: "2px",
                            color: "#000",
                          }}
                        >
                          <span>
                            {exp.title || "Job Title"}{" "}
                            {exp.company && (
                              <span style={{ color: "#555" }}>
                                @ {exp.company}
                              </span>
                            )}
                          </span>
                          <span style={{ fontSize: "12.5px", color: "#555" }}>
                            {exp.duration}
                          </span>
                        </div>
                        {exp.location && (
                          <div
                            style={{
                              fontSize: "12.5px",
                              marginBottom: "5px",
                              color: "#777",
                            }}
                          >
                            {exp.location}
                          </div>
                        )}
                        <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.5" }}>
                          {exp.description.split('\n').map((line, index) => (
                            line.trim() ? <li key={index} style={{ marginBottom: "3px" }}>{line.replace(/^-/, '').trim()}</li> : null
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Section>
                );
              }
              if (sectionKey === "projects" && formData.projects.length > 0) {
                return (
                  <Section key="projects" title="Projects">
                    {formData.projects.map((proj, i) => (
                      <div
                        key={i}
                        style={{
                          marginBottom: "15px", // Adjusted for more compactness
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "600",
                            fontSize: "14.5px",
                            marginBottom: "2px",
                            color: "#000",
                          }}
                        >
                          <span>{proj.name || "Project Name"}</span>
                          <span style={{ fontSize: "12.5px", color: "#555" }}>
                            {proj.duration}
                          </span>
                        </div>
                        {proj.link && (
                          <div
                            style={{
                              marginBottom: "5px",
                              fontSize: "12.5px",
                            }}
                          >
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#007bff", textDecoration: "underline" }}
                              aria-label={`Project link for ${proj.name}`}
                            >
                              🔗 Project Link
                            </a>
                          </div>
                        )}
                        <p style={{ margin: "0 0 5px 0", lineHeight: "1.5" }}>
                          {proj.description}
                        </p>
                        {proj.technologies && (
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#777",
                              fontStyle: "italic",
                            }}
                          >
                            Technologies: {proj.technologies}
                          </div>
                        )}
                      </div>
                    ))}
                  </Section>
                );
              }
              if (sectionKey === "education" && formData.education.length > 0) {
                return (
                  <Section key="education" title="Education">
                    {formData.education.map((edu, i) => (
                      <div
                        key={i}
                        style={{
                          marginBottom: "15px", // Adjusted for more compactness
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "600",
                            fontSize: "14.5px",
                            marginBottom: "2px",
                            color: "#000",
                          }}
                        >
                          <span>{edu.institution || "Institution"}</span>
                          <span style={{ fontSize: "12.5px", color: "#555" }}>
                            {edu.duration}
                          </span>
                        </div>
                        {edu.location && (
                          <div
                            style={{
                              fontSize: "12.5px",
                              marginBottom: "2px",
                              color: "#777",
                            }}
                          >
                            {edu.location}
                          </div>
                        )}
                        <div style={{ fontSize: "13.5px", lineHeight: "1.5" }}>
                          {edu.degree} {edu.cgpa ? `| CGPA: ${edu.cgpa}` : ""}
                        </div>
                      </div>
                    ))}
                  </Section>
                );
              }
              if (sectionKey === "skills") {
                return (
                  <Section key="skills" title="Technologies & Skills">
                    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                      {formData.skills.programmingLanguages && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Programming Languages:</strong>{" "}
                          {formData.skills.programmingLanguages}
                        </li>
                      )}
                      {formData.skills.frameworksLibraries && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Frameworks / Libraries:</strong>{" "}
                          {formData.skills.frameworksLibraries}
                        </li>
                      )}
                      {formData.skills.cloudPlatforms && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Cloud Platforms:</strong>{" "}
                          {formData.skills.cloudPlatforms}
                        </li>
                      )}
                      {formData.skills.databases && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Databases:</strong> {formData.skills.databases}
                        </li>
                      )}
                      {formData.skills.toolsDevOps && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Tools / DevOps:</strong>{" "}
                          {formData.skills.toolsDevOps}
                        </li>
                      )}
                      {formData.skills.others && (
                        <li style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>Other Skills:</strong> {formData.skills.others}
                        </li>
                      )}
                    </ul>
                  </Section>
                );
              }
              if (
                sectionKey === "certifications" &&
                formData.certifications.length > 0
              ) {
                return (
                  <Section key="certifications" title="Certifications & Achievements">
                    <ul style={{ paddingLeft: "20px", margin: 0 }}>
                      {formData.certifications.map((cert, i) => (
                        <li key={i} style={{ marginBottom: "5px", lineHeight: "1.5" }}>
                          <strong>{cert.name}</strong> - {cert.issuer} (
                          {cert.date})
                        </li>
                      ))}
                    </ul>
                  </Section>
                );
              }
              if (sectionKey === "interests" && formData.interests.trim()) {
                return (
                  <Section key="interests" title="Interests">
                    <p style={{ margin: "0 0 5px 0", lineHeight: "1.5" }}>
                      {formData.interests}
                    </p>
                  </Section>
                );
              }
              return null;
            })}
          </div>

          <button
            className="btn btn-success w-100 mt-3 btn-lg"
            onClick={generatePDF}
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}
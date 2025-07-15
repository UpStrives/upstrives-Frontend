import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "UpStrives",
    location: "Remote",
    description:
      "We are looking for a talented Frontend Developer with experience in React to build and enhance user interfaces. You will collaborate with designers and backend developers to deliver responsive and high-performance web applications.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "UpStrives",
    location: "Remote",
    description:
      "Join our backend team to design, build, and maintain APIs and microservices. Proficiency in Java and experience with relational and NoSQL databases is required.",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "UpStrives",
    location: "Remote",
    description:
      "Seeking a creative Marketing Specialist with strong communication skills. Responsibilities include managing campaigns, content creation, and enhancing brand presence.",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "UpStrives",
    location: "Remote",
    description:
      "We’re hiring a Product Manager to oversee the product lifecycle, from ideation to launch. You will coordinate with cross-functional teams and ensure product-market fit.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "UpStrives",
    location: "Remote",
    description:
      "Looking for a DevOps Engineer to manage our CI/CD pipelines, automate deployments, and maintain cloud infrastructure for scalable applications.",
  },
];

export default function Apply() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setAlertMessage("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filtered = jobs.filter((job) =>
      [job.title, job.company, job.location, job.description].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (filtered.length === 0) {
      setAlertMessage(`No jobs found matching: "${searchTerm}"`);
      setFilteredJobs([]);
    } else {
      setFilteredJobs(filtered);
      setAlertMessage("");
    }
  };

  const handleApply = (jobId) => {
    navigate(`/application-form/${jobId}`);
  };

  const openJDModal = (job) => {
    setSelectedJob(job);
    const jdModal = new bootstrap.Modal(document.getElementById("jdModal"));
    jdModal.show();
  };

  return (
    <>
    <ScrollTop />
      <Navbar />

      <div className="container my-5" style={{ paddingTop: "100px" }}>
        <form onSubmit={handleSearchSubmit} className="d-flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Search jobs by title, company, or keyword"
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control"
            aria-label="Job search"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setFilteredJobs(jobs);
              setSearchTerm("");
              setAlertMessage("");
            }}
          >
            Reset
          </button>
        </form>

        {alertMessage && (
          <div className="alert alert-warning" role="alert">
            {alertMessage}
          </div>
        )}

        <h2 className="mb-4">Available Jobs</h2>

        <div className="row gy-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{job.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {job.company} - {job.location}
                  </h6>
                  <p className="card-text flex-grow-1">
                    {job.description.substring(0, 100)}...
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-outline-info me-2"
                      onClick={() => openJDModal(job)}
                    >
                      JD
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleApply(job.id)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && !alertMessage && (
            <p>No jobs available at the moment.</p>
          )}
        </div>
      </div>

      {/* JD Modal */}
      <div
        className="modal fade"
        id="jdModal"
        tabIndex="-1"
        aria-labelledby="jdModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jdModalLabel">
                {selectedJob?.title} - {selectedJob?.company}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p><strong>Location:</strong> {selectedJob?.location}</p>
              <p><strong>Description:</strong></p>
              <p>{selectedJob?.description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

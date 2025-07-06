import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [headline, setHeadline] = useState("Connect with Expert Career Guides");
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const hasSeenOverlay = sessionStorage.getItem("seenOverlay");
    if (hasSeenOverlay) {
      setShowOverlay(false);
    }
  }, []);

  const handleOverlayClose = () => {
    setShowOverlay(false);
    sessionStorage.setItem("seenOverlay", "true");
  };

  useEffect(() => {
    const messages = [
      "Connect with Expert Career Guides",
      "Schedule Interviews & Mock Sessions",
      "Get Your Projects Reviewed by Professionals",
      "Upskill with Mentor-Led Trainings",
      "Build Meaningful Industry Connections",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setHeadline(messages[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const guides = [
    {
      name: "Alice Johnson",
      college: "IIT Bombay",
      company: "Google",
      expertise: "Machine Learning",
    },
    {
      name: "Raj Patel",
      college: "BITS Pilani",
      company: "Microsoft",
      expertise: "Web Development",
    },
    {
      name: "Sita Sharma",
      college: "IIT Delhi",
      company: "Amazon",
      expertise: "Cloud Computing",
    },
    {
      name: "Mohammed Yusuf",
      college: "NIT Trichy",
      company: "Infosys",
      expertise: "Data Science",
    },
  ];

  const filteredGuides = guides.filter((guide) =>
    guide[filterBy].toLowerCase().includes(search.toLowerCase())
  );

  const handleRegisterClick = () => {
    alert("We are working on it. Will get back soon!");
  };

  return (
    <>
      {/* Overlay Screen */}
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2 className="mb-3">🚧 Site Maintenance Notice</h2>
          <p className="mb-4" style={{ maxWidth: "500px" }}>
            We're currently undergoing some updates. A few features might not work temporarily.
            You can still explore the community with limited functionality.
          </p>
          <button className="btn btn-light fw-bold" onClick={handleOverlayClose}>
            Okay, Continue Anyway
          </button>
        </div>
      )}

      {/* Page Content with Blur if overlay active */}
      <div style={{ filter: showOverlay ? "blur(5px)" : "none" }}>
        <Navbar />

        {/* Hero Section */}
        <div style={{ paddingTop: "100px" }} className="bg-white py-5">
          <div className="container text-center">
            <img
              src="https://source.unsplash.com/800x300/?mentorship,community"
              alt="Mentorship Community"
              className="img-fluid rounded mb-4 shadow-sm"
            />
            <h2 className="fw-bold">{headline}</h2>
            <p className="text-muted lead">
              Connect with professionals from top colleges and companies.
              Whether you're preparing for interviews, seeking project feedback, or looking to grow your network — we've got the right mentors for you.
            </p>
            <button className="btn btn-success mt-3 px-4 py-2 fw-semibold" onClick={handleRegisterClick}>
              Become a Guide
            </button>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-light py-4 border-top border-bottom">
          <div className="container text-center">
            <h4 className="fw-bold mb-3">Why Join Our Community?</h4>
            <div className="row">
              <div className="col-md-4 mb-2">
                <p>✅ Get professional feedback on your projects</p>
              </div>
              <div className="col-md-4 mb-2">
                <p>✅ Prepare for interviews with mock sessions</p>
              </div>
              <div className="col-md-4 mb-2">
                <p>✅ Upskill through real mentor-led training</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-light py-5">
          <div className="container">
            <h3 className="text-center mb-4">Search for a Mentor That Fits Your Goals</h3>
            <p className="text-center text-muted mb-4">
              Find mentors by name, college, or company. Start building your dream career with the right support.
            </p>

            <div className="row justify-content-center mb-4">
              <div className="col-md-5 mb-2">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder={`Search by ${filterBy}`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-2">
                <select
                  className="form-select shadow-sm"
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="college">College</option>
                  <option value="company">Company</option>
                </select>
              </div>
            </div>

            {search.trim() !== "" && (
              <div className="row">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map((guide, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title text-primary fw-bold">{guide.name}</h5>
                          <ul className="list-unstyled small mb-3">
                            <li>🎓 <strong>College:</strong> {guide.college}</li>
                            <li>💼 <strong>Company:</strong> {guide.company}</li>
                            <li>📚 <strong>Expertise:</strong> {guide.expertise}</li>
                          </ul>
                          <button
                            className="btn btn-outline-success w-100"
                            onClick={() =>
                              alert("This feature is coming soon! Meanwhile, drop your resume to get connected.")
                            }
                          >
                            Connect Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">
                    <p className="text-muted">No mentors found for your search. Try a different keyword.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

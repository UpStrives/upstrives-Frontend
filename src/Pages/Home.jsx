import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import "../css/Hero.css";
import "../css/Main.css";

import {
  ApplyIcon,
  PaidInternshipsIcon,
  ResumeIcon,
  CareerCoachingIcon,
  CommunityIcon,
} from "../Icons";

export default function Home() {
  const offeringsRef = useRef(null);
  const [showServices, setShowServices] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aman S.",
      text: "UpStrives helped me land my first remote internship through real project experience!",
    },
    {
      name: "Priya T.",
      text: "The expert sessions gave me clarity and confidence before interviews.",
    },
    {
      name: "Rahul M.",
      text: "I loved the resume tools and hands-on mentorship support. It actually works!",
    },
    {
      name: "Sneha D.",
      text: "The community platform connected me with like-minded learners and mentors.",
    },
    {
      name: "Vikram R.",
      text: "Great experience — practical resume feedback and strong mentor support!",
    },
  ];

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServices(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getTestimonialIndex = (offset) =>
    (currentTestimonial + offset + testimonials.length) % testimonials.length;

  const howItWorksItems = [
    {
      title: "Internships",
      desc: "Apply now. Learn more. Achieve faster.",
      Icon: PaidInternshipsIcon,
      hoverText: "Explore hands-on roles and accelerate your career with expert-led internships.",
      path: "/internships",
    },
    {
      title: "Resume Support",
      desc: "Craft a standout resume with expert guidance",
      Icon: ResumeIcon,
      hoverText: "Get personalized tips and expert feedback to make your resume stand out.",
      path: "/resume-help",
    },
    
    {
      title: "Career Guidance",
      desc: "Personalized career coaching from industry experts",
      Icon: CareerCoachingIcon,
      hoverText: "Empower your future with personalized insights and guidance from industry leaders.",
      path: "/community",
    },
    {
      title: "Jobs",
      desc: "Get access to exclusive job listings.",
      Icon: ApplyIcon,
      hoverText: "Land your dream job by applying to top tech opportunities.",
      path: "/apply",
    },
    {
      title: "Career Blog",
      desc: "Expert advice and strategies to boost your career.",
      Icon: CommunityIcon,
      hoverText: "Unlock career secrets and stay ahead in your field.",
      path: "/blog",
    },
  ];

  const featuredItems = [
    {
      title: "Internships",
      desc: "Our certified internship programs provide hands-on experience with real-world projects, enabling you to develop industry-relevant skills. Earn verified certificates while gaining practical knowledge that prepares you for a successful career.",
      image: "/images/internship.jpeg",
      path: "/internships",
    },
    {
      title: "Resume Support",
      desc: "Get professional assistance to create and polish your resume, tailored to showcase your strengths clearly and align with industry expectations—helping you make a strong impression on recruiters.",
      image: "/images/res.png",
      path: "/resume-help",
    },
    {
      title: "Career Guidance",
      desc: "Benefit from personalized mentorship and expert advice to navigate your career path, develop key skills, and make informed decisions that align with your professional goals.",
      image: "/images/carrer.png",
      path: "/community",
    },
  ];

  return (
    <main className="home-page">
      
      <Navbar />
      <div style={{ height: "100px" }}></div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <h1 className="banner">Empower. Transform. Deliver.</h1>
        <h3 className="slogan">
          From vision to reality — we’re the team that brings your ideas to life.
        </h3>
        <button onClick={scrollToFeatures} className="btn-cta">
          Explore Programs
        </button>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </section>

      {/* Core Offerings Section */}
      <div
        ref={offeringsRef}
        className={`services-wrapper ${showServices ? "show" : ""}`}
      >
        <section className="services-card container bg-white rounded shadow-sm p-5">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#1F2937" }}>
            Featured Programs
          </h2>
          <div className="row g-4 justify-content-center">
            {howItWorksItems.map(({ title, desc, hoverText, Icon, path }) => (
              <div key={title} className="col-12 col-md-6 col-lg-4 text-center">
                <Link
                  to={path}
                  className="card h-100 border-0 shadow-sm text-decoration-none core-offering-card"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="card-body d-flex flex-column align-items-center position-relative">
                    <Icon />
                    <h4 className="fw-semibold mt-3 text-dark">{title}</h4>
                    <p className="text-muted text-center">{desc}</p>
                    <p className="hover-text text-center px-3">{hoverText}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Featured Section */}
     {/* Featured Section - UPDATED for images */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Explore Our Top Features</h2>
          {featuredItems.map(({ title, desc, image, path }, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={title}
                className={`d-flex flex-column flex-md-row align-items-center mb-5 featured-card ${
                  isLeft ? "slide-in-left" : "slide-in-right"
                }`}
                style={{
                  flexDirection: isLeft ? "row" : "row-reverse",
                  gap: "2rem",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <div
                  className="icon-circle"
                  style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 style={{ color: "#4B0082" }}>{title}</h3>
                  <p className="text-muted fs-5">{desc}</p>
                  <Link to={path} className="btn btn-outline-primary mt-2">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#1E40AF" }}>
            Our Vision
          </h2>
          <p className="fs-5 text-muted mb-4">
            Empowering the next generation of tech talent through mentorship,
            opportunity, and community.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="fs-5 text-dark">
                At <span style={{ color: "#8636a8" }}>UpStrives</span>, we believe in
                leveling the playing field for every student and graduate
                looking to break into tech. Our mission is simple — provide
                real-world exposure through internships, personalized career
                guidance from experts, and powerful resume-building tools.
              </p>
              <p className="fs-5 text-dark">
                Whether you're exploring your path or ready to launch, UpStrives
                connects you to opportunities, mentorship, and resources
                designed to shape future-ready professionals.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/register"
              className="btn btn-outline-primary fw-semibold px-4 py-2"
            >
              Join the Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #8636a8, #4b0082)",
          color: "#fff",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Your Future Begins Here</h2>
          <p className="fs-5 mb-4">
            Join a platform where real-world skills meet real career growth.
          </p>
          <Link
            to="/register"
            className="btn btn-light px-5 py-3 fs-5 fw-semibold rounded-pill shadow"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-5" style={{ backgroundColor: "#0f172a", color: "#fff", overflow: "hidden" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What Our Learners Say</h2>
          <div className="testimonial-marquee-wrapper">
            <div className="testimonial-marquee-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card-horizontal"
                >
                  <div
                    className="testimonial-inner p-4 rounded-4 shadow text-center"
                    style={{
                      background: "linear-gradient(145deg, #1f2937, #111827)",
                      border: "2px solid transparent",
                      borderImage: "linear-gradient(to right, #8636a8, #4b0082) 1",
                    }}
                  >
                    <div className="mb-3" style={{ fontSize: "2rem", color: "#8636a8" }}>
                      <i className="bi bi-quote" />
                    </div>
                    <p className="fs-6 fst-italic text-light mb-2">“{testimonial.text}”</p>
                    <p className="fw-semibold mb-0" style={{ color: "#cbd5e1" }}>
                      – {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

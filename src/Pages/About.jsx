// src/Pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }} className="container py-5">
        <h1>This is the About page</h1>
        <p>Welcome to UpStrives. Learn more about what we do here.</p>
      </div>
    </>
  );
}

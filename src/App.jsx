import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Learn from "./Pages/learn";
// Import other page components as you create them
// import Grow from "./Pages/Grow";
import Internships from "./Pages/Internships";
import Apply from "./Pages/Apply";
import ResumeHelp from "./Pages/ResumeHelp";
// import Coaching from "./Pages/Coaching";
import Community from "./Pages/Community";
import ApplicationForm from "./Pages/ApplicationForm";
import InternshipForm from "./Pages/InternshipForm";
import Login from "./Pages/Login";
import ResumeBuilder from "./Pages/ResumeBuilder";
import CareerBlog from "./Pages/CarrerBlog";
import BeExpert from "./Pages/BeExpert";
import RequestForm from "./Pages/RequestForm";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/learn" element={<Learn />} />

      {/* Add your other routes here */}
      {/* <Route path="/grow" element={<Grow />} /> */}
      <Route path="/internships" element={<Internships />} /> 
      <Route path="/apply" element={<Apply />} />
      <Route path="/resume-help" element={<ResumeHelp />} />
      {/* <Route path="/coaching" element={<Coaching />} /> */}
      <Route path="/community" element={<Community />} /> 
      <Route path="/application-form/:jobId" element={<ApplicationForm />} />
      <Route path="/internship-form" element={<InternshipForm />} />
       <Route path="/resume-builder" element={<ResumeBuilder />} />
       <Route path="/blog" element={<CareerBlog />} />
      <Route path="/be-expert" element={<BeExpert />} />
      
      
    </Routes>
  );
}

export default App;

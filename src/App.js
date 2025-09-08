import React from 'react';
import {BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Internships from './components/Internships';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: For components like navbar toggle
import ContactForm1 from './components/ContactForm1';
import SyllabusPage from "./pages/SyllabusPage";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <div className="content">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/courses" element={<Courses /> } />
    //       <Route path="/internships" element={<Internships />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </Router>
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Courses />
              <Internships />
              <ContactForm />
              <ContactForm1 />
            </>
          } />
          <Route path="/syllabus/:courseId" element={<SyllabusPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

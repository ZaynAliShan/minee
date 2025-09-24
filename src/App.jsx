import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">   {/* prevent left gutter from skewed bg */}
      {/* Navbar can stay constrained */}
      <div className="container mx-auto max-w-7xl">
        <Navbar />
      </div>
      <Hero />

      <div className="container mx-auto max-w-7xl">
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

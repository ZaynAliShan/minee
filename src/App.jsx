import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Certifications from "./sections/Certifications";
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
        <Certifications
          maxWidth="max-w-5xl"                // 5xl, 6xl, 7xl… or your container class
          height="h-[420px] md:h-[520px] lg:h-[620px]"  // per breakpoint
        />  
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

import About from "../Pages/About";
import { useRef } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PortfolioHero = () => {
  // Create references for different sections
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll to section
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-['Inter'] min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-full">
        {/* <nav className="pt-6 md:pt-8 flex justify-between items-center container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              CI
            </div>
            <span className="text-slate-800 font-semibold text-lg md:text-xl">
              ClickInnovate
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => handleScroll(aboutRef)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleScroll(servicesRef)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleScroll(contactRef)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav> */}


        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-120px)] py-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-slate-600 text-sm">Currently available for projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Digital Innovation
              <span className="text-blue-600 block mt-3">Made Simple</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              Transforming complex ideas into intuitive digital solutions through modern design 
              and cutting-edge development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
              to={'/contact'}
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl
                         flex items-center justify-center gap-2"
              >
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
              to={'/work'}
                href="#work"
                className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold
                         border border-slate-200 hover:border-blue-200 hover:bg-slate-50
                         transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                View Work
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link >
            </div>
          </div>

          {/* Image/Graphic Section */}
          <div className="md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <img 
                  src="/logo.png" 
                  alt="Digital Solution" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <button className="bg-white p-3 rounded-full shadow-lg border border-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Pass ref to About component */}
      {/* <About ref={aboutRef} /> */}
    </div>
  );
};

export default PortfolioHero;

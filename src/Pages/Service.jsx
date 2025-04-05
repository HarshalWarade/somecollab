import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaBullhorn,
  FaServer,
  FaCogs,
} from "react-icons/fa";

const ServiceRadial = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const radius = 280;

  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      tech: ["React", "Next.js", "Node.js"],
      description: "Build modern, high-performance web applications",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      tech: ["Flutter", "React Native", "Swift", "Kotlin"],
      description:
        "Developing high-quality mobile applications for iOS & Android.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      tech: ["SEO", "Google Ads", "Social Media", "Email Marketing"],
      description:
        "Boosting online presence with data-driven marketing strategies.",
    },
    {
      icon: <FaServer />,
      title: "Web Hosting Services",
      tech: ["AWS", "VPS", "Cloudflare", "cPanel"],
      description:
        "Reliable and high-speed hosting solutions for businesses.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software Services",
      tech: ["Python", "Java", "Node.js", "AI/ML"],
      description:
        "Tailor-made software solutions to automate and enhance business operations.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const calculatePosition = (index, total) => {
    if (isMobile) return { x: 0, y: 0 };
    const angle = ((index * 360) / total - 90) * (Math.PI / 180);
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative">
      {/* Radial Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50 to-blue-100/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Digital Solutions
            <span className="text-blue-600 block mt-3">360° Expertise</span>
          </h2>
          <div className="w-48 h-1 bg-blue-600 rounded-full mx-auto" />
        </motion.div>

        {/* Service Cards Container */}
        <div
          className={`${
            isMobile
              ? "flex flex-col items-center gap-6"
              : "relative h-[600px] flex items-center justify-center"
          }`}
        >
          {/* Service Cards */}
          {services.map((service, index) => {
            const position = calculatePosition(index, services.length);
            return (
              <motion.div
                key={index}
                className={`${
                  isMobile ? "relative w-full" : "absolute"
                } bg-white p-6 rounded-2xl border border-slate-200 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "ring-2 ring-blue-600" : ""
                }`}
                style={{
                  width: isMobile ? "100%" : "240px",
                }}
                animate={{
                  x: isMobile ? 0 : position.x,
                  y: isMobile ? 0 : position.y,
                  scale: activeIndex === index ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600 text-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Central Logo & Text */}
          <motion.div
            className={`${
              isMobile ? "mt-10" : "absolute"
            } text-center flex flex-col items-center`}
            animate={{ scale: activeIndex !== null ? 0.95 : 1 }}
          >
            <div className="w-40 h-40 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
              <img src="logo.png" alt="Logo" className="h-16 w-16" />
            </div>
            <p className="text-slate-600 max-w-xs text-base">
              {activeIndex === null
                ? "Explore our services"
                : services[activeIndex]?.features?.join(" • ") || ""}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRadial;

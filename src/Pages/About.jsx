import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const About = forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-50 justify-center items-center"
      aria-label="About ClickInnovate"
    >
      <div className="relative z-10 w-full max-w-7xl px-4 xs:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Text Content Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeInLeft}>
              <span className="text-blue-600 font-medium tracking-wide mb-2 md:mb-4 inline-block text-sm md:text-base">
                INNOVATION MEETS EXECUTION
              </span>
              <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                Building Digital 
                <span className="block text-blue-600 mt-2">Excellence</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                At <span className="text-blue-600 font-semibold">ClickInnovate</span>, we combine technical expertise with creative solutions to deliver exceptional digital experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              {/* Stats Items */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-slate-700 text-base">
                  <span className="font-semibold text-slate-900">5+</span> successful projects delivered
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-slate-700 text-base">
                  <span className="font-semibold text-slate-900">99.9%</span> system reliability rate
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-slate-700 text-base">
                  <span className="font-semibold text-slate-900">Secure</span> by design architecture
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Preview Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="relative group mt-8 md:mt-0"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 max-w-[90vw] md:max-w-none">
              {/* Window Header */}
              <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-slate-600 text-sm font-medium">tech-stack.js</span>
              </div>

              {/* Content */}
              <div className="p-6 font-mono text-sm md:text-base bg-white">
                <div className="text-blue-600">const</div>
                <div className="text-slate-900 ml-4">technologies = {'{'}<br />
                  <span className="ml-6 text-purple-600">frontend</span>: [<br />
                  <span className="ml-8 text-slate-600">'React', 'Next.js', 'TypeScript'</span><br />
                  <span className="ml-6">],</span><br />
                  <span className="ml-6 text-purple-600">backend</span>: [<br />
                  <span className="ml-8 text-slate-600">'Node.js', 'GraphQL', 'PostgreSQL'</span><br />
                  <span className="ml-6">],</span><br />
                  <span className="ml-6 text-purple-600">devops</span>: [<br />
                  <span className="ml-8 text-slate-600">'AWS', 'Docker', 'Kubernetes'</span><br />
                  <span className="ml-6">]</span><br />
                {'}'};
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
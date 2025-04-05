import { NavLink } from "react-router-dom";
import { FaNodeJs, FaWind, FaJs, FaBullhorn, FaMobileAlt, FaRocket, FaCode, FaServer, FaTerminal, FaCloud, FaPaperPlane, FaGlobe, FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';

function Vision() {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-['Inter'] py-16 px-4 md:px-6 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center mb-6 bg-blue-100 px-6 py-2 rounded-full border border-blue-200">
              <span className="text-xl font-semibold text-blue-600">ClickInnovate</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Vision & Mission
              <span className="text-blue-600 block mt-3">Future-Ready Solutions</span>
            </h1>
            <motion.div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
              Architecting tomorrow's digital infrastructure today
            </p>
          </motion.div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all p-8 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 rounded-lg border border-blue-200 mr-4">
                  <FaRocket className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Vision</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Revolutionizing digital infrastructure through innovative engineering and scalable architectures.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Web Development",
                    description: "Crafting high-performance, responsive, and SEO-friendly websites.",
                    icon: <FaGlobe className="text-blue-600 text-xl" />
                  },
                  {
                    title: "App Development",
                    description: "Building seamless, user-centric mobile and web applications.",
                    icon: <FaMobileAlt className="text-blue-600 text-xl" />
                  },
                  {
                    title: "Digital Marketing",
                    description: "Boosting brand visibility through SEO, PPC, and social media strategies.",
                    icon: <FaBullhorn className="text-blue-600 text-xl" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-100 rounded border border-blue-200">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all p-8 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 rounded-lg border border-blue-200 mr-4">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Mission</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Empowering enterprises with cutting-edge solutions that combine technical excellence with business acumen.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Full Lifecycle Dev",
                    description: "From concept to deployment and beyond",
                    icon: <FaServer className="text-blue-600 text-xl" />
                  },
                  {
                    title: "Performance Engineering",
                    description: "Optimizing for scale and efficiency",
                    icon: <FaCloud className="text-blue-600 text-xl" />
                  },
                  {
                    title: "Security First",
                    description: "Zero-trust architectures by default",
                    icon: <FaTerminal className="text-blue-600 text-xl" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-100 rounded border border-blue-200">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div 
            className="bg-white rounded-xl border border-slate-200 mb-16 p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Core Values
                <span className="text-blue-600 block mt-3">Our Foundation</span>
              </h2>
              <motion.div 
                className="mx-auto w-48 h-1 bg-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Code Quality',
                  description: 'TypeScript-first approach with strict linting',
                  icon: <FaCode className="text-blue-600 text-2xl" />
                },
                {
                  name: 'Infra Resilience',
                  description: 'Multi-cloud deployments with auto-failover',
                  icon: <FaServer className="text-blue-600 text-2xl" />
                },
                {
                  name: 'DevOps Excellence',
                  description: 'GitOps workflows with ArgoCD',
                  icon: <FaTerminal className="text-blue-600 text-2xl" />
                }
              ].map((value) => (
                <div key={value.name} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{value.name}</h3>
                  </div>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technology Focus */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Technology Stack
                <span className="text-blue-600 block mt-3">Modern Tools</span>
              </h2>
              <motion.div 
                className="mx-auto w-48 h-1 bg-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "React.js",
                  description: "Building dynamic and interactive web applications.",
                  icon: <FaReact className="text-blue-600 text-2xl" />
                },
                {
                  name: "Next.js",
                  description: "Optimized performance with server-side rendering and SEO.",
                  icon: <FaJs className="text-blue-600 text-2xl" />
                },
                {
                  name: "Tailwind CSS",
                  description: "Modern, utility-first CSS framework for responsive designs.",
                  icon: <FaWind className="text-blue-600 text-2xl" />
                },
                {
                  name: "Node.js",
                  description: "Scalable and high-performance backend solutions.",
                  icon: <FaNodeJs className="text-blue-600 text-2xl" />
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{tech.name}</h3>
                  </div>
                  <p className="text-slate-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Start Your Digital Transformation
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ready to architect your digital future with modern solutions?
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <FaPaperPlane className="mr-2" />
              Begin Your Journey
            </NavLink>
          </motion.div>
        </div>
      </div>
    );
}

export default Vision;
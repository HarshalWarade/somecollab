import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

const PortfolioShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Add your projects here
  const projects = [
    {
      title: "Consultancy Web",
      description: "Static website for Thanosphere Consultancy",
      techStack: ["React", "JavaScript",],
      liveUrl: "https://consaltancy.onrender.com/",
      codeUrl: "https://github.com/Om-Rathod/Consultancy-web",
      imageUrl: "/project3.jpg",
      category: "web"
    },
    {
        title: "Consultancy Web1",
        description: "Static website for Thanosphere Consultancy",
        techStack: ["React", "JavaScript",],
        liveUrl: "https://consultancy-web-six.vercel.app/",
        codeUrl: "https://github.com/Om-Rathod/Consultancy-web",
        imageUrl: "/project2.jpeg",
        category: "web"
      },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      techStack: ["React Native", "Firebase", "Expo"],
      liveUrl: "https://playstore.com/example",
      codeUrl: "https://github.com/example",
      imageUrl: "/project4.jpg",
      category: "mobile"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js and Node.js",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example",
      imageUrl: "/project1.jpg",
      category: "web"
    },
  ];
  
  const filters = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = selectedFilter === 'all' 
  ? projects 
    : projects.filter(project => project.category === selectedFilter);
    
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          >
            Our Creations
            <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  selectedFilter === filter 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <FiExternalLink className="w-6 h-6 text-blue-600" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <FiGithub className="w-6 h-6 text-blue-600" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-slate-600">
                  <div className="flex items-center gap-1">
                    <FiCode className="w-5 h-5" />
                    <span className="text-sm">{project.category}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-2xl mt-10 text-slate-500 italic">
          ...More projects are in deploying phase
        </p>      </div>
    </section>
  );
};

export default PortfolioShowcase;
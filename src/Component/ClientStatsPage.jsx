import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGitAlt, FaCloud, FaDatabase, FaServer } from "react-icons/fa";
import useIsMobile from "./UseIsMobile";

const stats = [
  { id: 1, label: "Projects Deployed", value: 10, icon: <FaCloud />, color: "blue-600" },
  // { id: 2, label: "Code Commits", value: 1586, icon: <FaGitAlt />, color: "blue-400" },
  { id: 3, label: "APIs Integrated", value: 89, icon: <FaCode />, color: "blue-600" },
  { id: 4, label: "Database Clusters", value: 23, icon: <FaDatabase />, color: "blue-400" },
  { id: 5, label: "Server Nodes", value: 15, icon: <FaServer />, color: "blue-600" }
];

const Counter = ({ value, color }) => {
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const duration = Math.min(isMobile ? 1000 : 1500, value * (isMobile ? 15 : 20));
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, isMobile]);

  return (
    <motion.span
      className={`text-3xl md:text-4xl font-bold text-${color}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {count}
      <span className="text-sm md:text-lg ml-1 text-slate-600">//+</span>
    </motion.span>
  );
};

export default function TechMetrics() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 font-['Inter'] py-16 px-4 md:px-6">
      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
      </div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Tech Metrics
              <span className="text-blue-600 block mt-3">By the Numbers</span>
            </h2>
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-1 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Quantifying our digital development journey
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center contain-content justify-center gap-4 ">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true, margin: isMobile ? "0px" : "100px" }}
                className="p-6  rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                whileHover={!isMobile ? {
                  y: -5,
                  borderColor: "#3B82F6",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)"
                } : {}}
                whileTap={isMobile ? { scale: 0.98 } : {}}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-200"
                >
                  <motion.span
                    className={`text-2xl text-${stat.color}`}
                    animate={{
                      y: isMobile ? 0 : [-2, 2, -2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.icon}
                  </motion.span>
                </div>
                <Counter value={stat.value} color={stat.color} />
                <p className="mt-3 font-medium text-slate-800 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
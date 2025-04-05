import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';

function TechTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [{
    name: "Ayush Khakare",
    role: "Full Stack Engineer",
    specialty: "Web Designing",
    image: "/ayush.jpeg",
    bio: "10x engineer specializing in distributed systems and cloud-native solutions. Leads our core platform development.",
    stats: [
      { label: "Microservices", value: "50+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Stack", value: "React/Express" }
    ],
    code: `package main

import "fmt"

func main() {
  fmt.Println("Engineering Excellence")
}`
  },
  {
    name: "Harshal Warade",
    role: "Full Stack Engineer",
    specialty: "Full Stack Developer",
    image: "/Harshal.jpg",
    bio: "Harshal Warade is a Full-Stack Web Developer specializing in the MERN stack, with strong skills in Redux, C++, and scalable application development. He has worked with major Indian industries as a freelance developer and explores SQL, Python, machine learning, and Blender for innovative solutions.",
    stats: [
      { label: "stack", value: "Mern" },
      { label: "Throughput", value: "10k RPM" },
      { label: "Tools", value: "K8s/Argo" }
    ],
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
name: high-availability
spec:
replicas: 3
template:
  spec:
    containers:
    - name: mission-critical`
  },
  {
    name: "Om Rathod",
    role: "Full Stack Engineer",
    specialty: "Full Stack Developer",
    image: "/om.jpeg",
    bio: "Expert in backend scaling and infrastructure resilience. Focuses on deployment automation and system reliability.",
    stats: [
      { label: "Systems Deployed", value: "30+" },
      { label: "Downtime", value: "< 0.1%" },
      { label: "Tech Stack", value: "HTML , CSS , React , Node Js " }
    ],
    code: `resource "aws_instance" "web" {
ami           = "ami-0c55b159cbfafe1f0"
instance_type = "t2.micro"
}`
  },
  {
    name: "Vivek Rathod",
    role: "Business Analyst",
    specialty: "Strategic Growth & Client Relations",
    image: "/vivek.jpeg",
    bio: "Drives business growth through strategic partnerships, high-impact sales strategies, and client relationship management.",
    stats: [
      { label: "Clients Acquired", value: "15+" },
      { label: "Partnerships", value: "30+" }
    ],
    code: `export function closeDeal(prospect) {
return new BusinessStrategy(prospect).execute()
}`
  },{
    name: "Pranal Dhurat",
    role: "Web Developer",
    specialty: "Full-Stack Development",
    image: "/pranal.jpeg",
    bio: "Passionate about crafting seamless user experiences with modern web technologies.",
    stats: [
      { label: "Projects Delivered", value: "50+" },
      { label: "Tech Stack", value: "React, Next.js, Node.js" },
      { label: "Performance Optimizations", value: "99% Lighthouse Score" }
    ],
    code: `function buildWebsite() {
return createFullStackApp({
  frontend: "Next.js + Tailwind",
  backend: "Node.js + Express",
  database: "MongoDB"
});
}`
}, 
  {
    name: "Prasad Gomase",
    role: "Digital Marketing Lead",
    specialty: "SEO & Growth Strategies",
    image: "/prasad.jpg",
    bio: "Drives brand visibility and customer engagement through data-driven marketing strategies.",
    stats: [
      { label: "Campaigns Managed", value: "10+" },
      { label: "Lead Conversion Rate", value: "75%" },
      { label: "SEO Ranking Boost", value: "Top 1%" }
    ],
    code: `function launchCampaign() {
return optimizeMarketing({
  platform: ["Google Ads", "Meta Ads", "LinkedIn"],
  strategy: "SEO + PPC",
  budget: "ROI-focused"
});
}`
  },
  {
    name: "Atharva Khawale",
    role: "Cloud and DevOps Engineer",
    specialty: "AWS | Docker | CI/CD",
    image: "/Athrva.jpeg",
    bio: "Cloud enthusiast focused on building scalable infrastructure and automating deployment pipelines.",
    stats: [
      { label: "Deployments Automated", value: "100+" },
      { label: "Cloud Platforms", value: "AWS, GCP, Azure" },
      { label: "CI/CD Success Rate", value: "99.9% uptime" }
    ],
    code: `function deployApp() {
    return setupPipeline({
      cloud: "AWS",
      container: "Docker",
      ci: "GitHub Actions",
      cd: "Terraform + Helm"
    });
  }`
  }
];

  return (
    <section
      id="team"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 font-['Inter'] py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
      </div>

      <AnimatePresence>
        {selectedMember ? (
          <motion.div
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setSelectedMember(null)}
          >
            <div className="relative max-w-[95%] md:max-w-4xl w-full bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-200">
              {/* Close Buttons */}
              <button
                onClick={() => setSelectedMember(null)}
                className="hidden md:block absolute top-4 right-4 p-2 text-slate-600 hover:text-blue-600 transition-colors z-50 bg-white rounded-full shadow-md"
                aria-label="Close profile"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="md:hidden fixed bottom-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all z-50"
                aria-label="Close profile"
              >
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Panel - Image */}
              <div className="md:w-1/3 flex items-center justify-center bg-blue-50 min-h-[250px] md:min-h-[400px] border-b md:border-b-0 md:border-r border-slate-200 p-4 md:p-6">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-200 overflow-hidden shadow-lg">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Panel - Details */}
              <div className="md:w-2/3 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 bg-white">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">{selectedMember.role}</h3>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">{selectedMember.name}</h2>
                  <p className="text-sm md:text-base text-slate-600 mt-2 md:mt-3">{selectedMember.bio}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                  {selectedMember.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-2 md:p-4 rounded-xl flex flex-col items-center border border-blue-200"
                    >
                      <span className="text-blue-600 font-bold text-lg md:text-xl lg:text-2xl">{stat.value}</span>
                      <span className="text-slate-600 text-xs md:text-sm mt-1 text-center">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-100 px-3 py-2 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-slate-600 text-xs md:text-sm">
                      {selectedMember.name.split(' ')[0].toLowerCase()}.stack
                    </span>
                  </div>
                  <pre className="p-3 md:p-4 text-[10px] md:text-xs lg:text-sm text-slate-800 font-mono bg-white overflow-x-auto whitespace-pre-wrap">
                    {selectedMember.code}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="relative z-10 w-full max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Tech Team <span className="text-blue-600 block mt-1 md:mt-2">Core Innovators</span>
              </h2>
              <div className="w-16 md:w-24 lg:w-48 h-1 bg-blue-600 mx-auto rounded-full mt-3 md:mt-4" />
              <p className="text-slate-600 text-sm md:text-base lg:text-lg mt-3 md:mt-4 max-w-2xl mx-auto">
                The creative minds behind our technical solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-blue-200 overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900">{member.name}</h3>
                    <div className="inline-flex items-center bg-blue-100 px-3 py-1 md:px-4 md:py-2 rounded-full text-blue-600 text-xs md:text-sm lg:text-base">
                      {member.role}
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <FaCloud className="text-blue-600 text-sm md:text-base" />
                      <span>{member.specialty}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TechTeam;

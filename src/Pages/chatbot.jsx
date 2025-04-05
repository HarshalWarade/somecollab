import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaComment, FaUserTie, FaChevronDown } from 'react-icons/fa';


  const Chatbot = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [messages, setMessages] = useState([
  //     { text: "Hello! I'm ClickBot. How can I help you with ClickInnovate services today?", sender: 'bot' }
  //   ]);
  //   const [input, setInput] = useState('');
  //   const [awaitingResponse, setAwaitingResponse] = useState(false);
  //   const [chatDimensions, setChatDimensions] = useState({ width: 320, height: 480 });
  //   const messagesEndRef = useRef(null);
  
  //   // Comprehensive FAQ structure with 100+ questions
  //   const faqCategories = [
  //     {
  //       name: "Pricing",
  //       questions: [
  //         { text: "What are your pricing plans?", answer: "We offer multiple pricing plans based on your need.", followups: ["Do you have a free plan?", "Can I get a discount?"] },
  //         { text: "Do you have a free plan?", answer: "Yes, we have a free plan with limited features.", followups: [] },
  //         { text: "Can I get a discount?", answer: "We offer discounts for annual subscriptions.", followups: [] },
  //         { text: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and bank transfers.", followups: [] },
  //         { text: "Do you offer refunds?", answer: "We have a 14-day refund policy for new users.", followups: [] },
  //         { text: "Is there a setup fee?", answer: "No, we do not charge any setup fees.", followups: [] },
  //         { text: "Can I switch plans later?", answer: "Yes, you can upgrade or downgrade your plan anytime.", followups: [] },
  //         { text: "Are there any hidden fees?", answer: "No, our pricing is transparent with no hidden fees.", followups: [] },
  //         { text: "Can I get a trial before purchase?", answer: "Yes, we offer a 7-day free trial.", followups: [] },
  //         { text: "Do you offer enterprise pricing?", answer: "Yes, we have custom pricing for enterprises.", followups: [] }
  //       ]
  //     },
  //     {
  //       name: "Features",
  //       questions: [
  //         { text: "What features are included?", answer: "Our platform includes analytics, integrations, and 24/7 support.", followups: ["Do you offer API access?", "Can I integrate with other tools?"] },
  //         { text: "Do you offer API access?", answer: "Yes, we provide API access for Pro and Enterprise users.", followups: [] },
  //         { text: "Can I integrate with other tools?", answer: "Yes, we support integrations with various third-party tools like Zapier and Slack.", followups: [] },
  //         { text: "Do you have a mobile app?", answer: "Yes, we have an iOS and Android app.", followups: [] },
  //         { text: "Can I customize the dashboard?", answer: "Yes, you can customize the dashboard with widgets.", followups: [] },
  //         { text: "Is there an offline mode?", answer: "No, our service requires an internet connection.", followups: [] },
  //         { text: "Do you support multi-language?", answer: "Yes, we support English, Spanish, French, and more.", followups: [] },
  //         { text: "How many users can I add?", answer: "It depends on your plan; Pro allows up to 10 users.", followups: [] },
  //         { text: "Do you provide analytics reports?", answer: "Yes, you can generate detailed analytics reports.", followups: [] },
  //         { text: "Can I export my data?", answer: "Yes, you can export data in CSV or PDF format.", followups: [] }
  //       ]
  //     },
  //     {
  //       name: "Support",
  //       questions: [
  //         { text: "How can I contact support?", answer: "You can reach our support team via email or live chat.", followups: ["What are your support hours?", "Do you offer phone support?"] },
  //         { text: "What are your support hours?", answer: "Our support team is available 24/7.", followups: [] },
  //         { text: "Do you offer phone support?", answer: "Currently, we only provide support via email and live chat.", followups: [] },
  //         { text: "Where can I find documentation?", answer: "You can access our knowledge base on our website.", followups: [] },
  //         { text: "Do you have a community forum?", answer: "Yes, we have a forum for user discussions.", followups: [] },
  //         { text: "Can I request a feature?", answer: "Yes, you can submit feature requests via our support page.", followups: [] },
  //         { text: "Do you offer onboarding support?", answer: "Yes, we provide onboarding sessions for new users.", followups: [] },
  //         { text: "What is the response time for tickets?", answer: "We respond to tickets within 24 hours.", followups: [] },
  //         { text: "Can I get priority support?", answer: "Priority support is available for Pro and Enterprise users.", followups: [] },
  //         { text: "Do you provide training materials?", answer: "Yes, we offer video tutorials and documentation.", followups: [] }
  //       ]
  //     },
  //     {
  //       name: "Account & Billing",
  //       questions: [
  //         { text: "How do I reset my password?", answer: "You can reset your password from the login page.", followups: [] },
  //         { text: "Can I change my email address?", answer: "Yes, you can update your email in account settings.", followups: [] },
  //         { text: "How do I cancel my subscription?", answer: "You can cancel your subscription from the billing page.", followups: [] },
  //         { text: "Will I be charged after the free trial?", answer: "Yes, unless you cancel before the trial ends.", followups: [] },
  //         { text: "Can I get an invoice for my purchase?", answer: "Yes, invoices are available in the billing section.", followups: [] },
  //         { text: "How do I update my billing information?", answer: "You can update your billing details in account settings.", followups: [] },
  //         { text: "Can I pause my subscription?", answer: "No, we do not support pausing subscriptions at the moment.", followups: [] },
  //         { text: "What happens if my payment fails?", answer: "We will notify you and retry the payment after 3 days.", followups: [] },
  //         { text: "Do you charge VAT?", answer: "Yes, VAT is applied based on your location.", followups: [] },
  //         { text: "How do I reactivate my account?", answer: "You can reactivate from the account settings.", followups: [] }
  //       ]
  //     },
  //     {
  //       name: "Security & Privacy",
  //       questions: [
  //         { text: "Is my data secure?", answer: "Yes, we use encryption and regular security audits.", followups: [] },
  //         { text: "Do you store my payment details?", answer: "No, we use a secure third-party payment processor.", followups: [] },
  //         { text: "Can I delete my account permanently?", answer: "Yes, you can request account deletion from settings.", followups: [] },
  //         { text: "Do you comply with GDPR?", answer: "Yes, we are fully GDPR compliant.", followups: [] },
  //         { text: "Can I control who sees my data?", answer: "Yes, we have privacy settings to control data visibility.", followups: [] },
  //         { text: "What happens to my data if I cancel?", answer: "Your data will be deleted after 30 days of cancellation.", followups: [] },
  //         { text: "Do you track user activity?", answer: "We collect minimal data for performance and security.", followups: [] },
  //         { text: "Do you offer two-factor authentication?", answer: "Yes, you can enable 2FA in account settings.", followups: [] },
  //         { text: "Where are your servers located?", answer: "Our servers are located in the US and Europe.", followups: [] },
  //         { text: "How do I report a security issue?", answer: "You can report security issues via our support page.", followups: [] }
  //       ]
  //     }
  //   ];
    
  
  //   // Additional questions (total 100+)
  //   const additionalQuestions = [
  //     {
  //       text: "Do you work with startups?",
  //       answer: "Yes, we enjoy working with startups and can tailor our approach to your budget and timeline. We've helped many startups build their MVPs and scale their technology.",
  //       category: "Company"
  //     },
  //     {
  //       text: "What's your experience with healthcare IT?",
  //       answer: "We have extensive experience building HIPAA-compliant solutions including EHR systems, telemedicine platforms, and healthcare analytics. We understand the unique security and compliance requirements.",
  //       category: "Company"
  //     },
  //     {
  //       text: "Can you integrate with our legacy systems?",
  //       answer: "Yes, we specialize in modernizing legacy systems through careful integration. We can build APIs, data pipelines, or middleware to connect new solutions with your existing infrastructure.",
  //       category: "Technical",
  //       technical: true
  //     },
  //     {
  //       text: "Do you offer UI/UX design services?",
  //       answer: "Absolutely. Our design team creates user-centered interfaces with wireframes, prototypes, and design systems. We focus on usability testing to ensure intuitive experiences.",
  //       category: "Services"
  //     },
  //     {
  //       text: "What's your experience with e-commerce?",
  //       answer: "We've built numerous e-commerce platforms including custom solutions and integrations with Shopify, Magento, and WooCommerce. We can handle complex product configurators, payment gateways, and inventory systems.",
  //       category: "Services"
  //     },
  //     {
  //       text: "Can you help with digital transformation?",
  //       answer: "Yes, we provide full digital transformation consulting - assessing your current state, identifying opportunities, and implementing technology solutions to modernize your business processes.",
  //       category: "Services"
  //     },
  //     {
  //       text: "Do you use agile methodology?",
  //       answer: "Yes, we're strong believers in agile principles. We use Scrum with 2-week sprints, daily standups, sprint planning/review meetings, and continuous delivery of working software.",
  //       category: "Process"
  //     },
  //     {
  //       text: "How do you handle project documentation?",
  //       answer: "We maintain comprehensive but lean documentation including: technical specs, API docs, deployment guides, and system architecture diagrams. Documentation is kept in sync with the actual system.",
  //       category: "Process"
  //     },
  //     {
  //       text: "What version control do you use?",
  //       answer: "We primarily use Git with GitHub or Bitbucket. We follow Git Flow for branching strategy and require pull requests with code reviews for all changes.",
  //       category: "Technical",
  //       technical: true
  //     },
  //     {
  //       text: "How do you handle testing?",
  //       answer: "We implement a robust testing strategy including: unit tests (Jest, pytest), integration tests, E2E tests (Cypress), performance testing, and security scanning. Our QA team performs manual testing for UX.",
  //       category: "Process"
  //     },
  //     {
  //       text: "Can you help with cloud migration?",
  //       answer: "Yes, we have extensive experience migrating applications to AWS, Azure, and GCP. We follow a phased approach to minimize risk and ensure compatibility with cloud-native services.",
  //       category: "Services"
  //     },
  //     {
  //       text: "Do you offer dedicated development teams?",
  //       answer: "Yes, we can provide dedicated teams that integrate with your company. These teams work exclusively on your projects with predictable costs and deep knowledge of your systems.",
  //       category: "Pricing"
  //     },
  //     {
  //       text: "What's your experience with AI/ML?",
  //       answer: "We've implemented AI solutions including chatbots, recommendation engines, computer vision, and predictive analytics. We can help identify where AI can benefit your business.",
  //       category: "Technical",
  //       technical: true
  //     },
  //     {
  //       text: "How do you ensure data privacy?",
  //       answer: "We implement data privacy by design - minimizing data collection, encrypting sensitive data, implementing proper access controls, and complying with regulations like GDPR and CCPA.",
  //       category: "Technical",
  //       technical: true
  //     },
  //     {
  //       text: "Can you sign an NDA?",
  //       answer: "Yes, we're happy to sign NDAs to protect your confidential information. We have standard NDAs available or can review yours.",
  //       category: "Company"
  //     },
  //     {
  //       text: "Do you provide project management?",
  //       answer: "Yes, each project has a dedicated project manager who coordinates the team, tracks progress, manages risks, and serves as your single point of contact.",
  //       category: "Process"
  //     },
  //     {
  //       text: "What industries have you worked with?",
  //       answer: "We've served clients in healthcare, finance, education, e-commerce, logistics, manufacturing, media, and non-profits. Our solutions are adaptable to any industry.",
  //       category: "Company"
  //     },
  //     {
  //       text: "Can you work with our in-house team?",
  //       answer: "Absolutely. We often augment existing teams, providing specialized skills or additional capacity. We're experienced at integrating with client teams and processes.",
  //       category: "Process"
  //     },
  //     {
  //       text: "Do you offer hosting services?",
  //       answer: "While we don't provide hosting directly, we can recommend and manage solutions with AWS, Azure, or other cloud providers that best fit your needs and budget.",
  //       category: "Services"
  //     },
  //     {
  //       text: "What's your experience with IoT?",
  //       answer: "We've built IoT solutions including device connectivity, data pipelines, and dashboards. We can help with sensor integration, edge computing, and IoT platform development.",
  //       category: "Technical",
  //       technical: true
  //     }
  //   ];
  
  //   // Add additional questions to categories
  //   additionalQuestions.forEach(q => {
  //     const category = faqCategories.find(c => c.name === q.category);
  //     if (category) {
  //       category.questions.push({
  //         text: q.text,
  //         answer: q.answer,
  //         technical: q.technical || false
  //       });
  //     }
  //   });
  
  //   // ... (keep all your existing additionalQuestions and the code that adds them to categories)
  
  //   const handleSend = () => {
  //     if (input.trim() === '' || awaitingResponse) return;
      
  //     const userMessage = { text: input, sender: 'user' };
  //     setMessages(prev => [...prev, userMessage]);
  //     setInput('');
  //     setAwaitingResponse(true);
      
  //     const categoryNames = faqCategories.map(c => c.name.toLowerCase());
  //     if (categoryNames.includes(input.trim().toLowerCase())) {
  //       const categoryName = input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
  //       const category = faqCategories.find(c => c.name.toLowerCase() === input.trim().toLowerCase());
        
  //       setTimeout(() => {
  //         if (category) {
  //           setMessages(prev => [...prev, { 
  //             text: `Here are some common questions about ${categoryName}:`,
  //             sender: 'bot',
  //             followups: category.questions.map(q => q.text)
  //           }]);
  //           setChatDimensions(prev => ({ 
  //             width: Math.min(prev.width + 100, 600),
  //             height: Math.min(prev.height + 200, 700)
  //           }));
  //         }
  //         setAwaitingResponse(false);
  //       }, 1000);
  //       return;
  //     }
    
  //     let matchedQuestion = null;
  //     let isTechnical = false;
  //     let categoryName = '';
      
  //     for (const category of faqCategories) {
  //       for (const q of category.questions) {
  //         if (input.toLowerCase().includes(q.text.toLowerCase().split('?')[0])) {
  //           matchedQuestion = q;
  //           isTechnical = q.technical || false;
  //           categoryName = category.name;
  //           break;
  //         }
  //       }
  //       if (matchedQuestion) break;
  //     }
    
  //     setTimeout(() => {
  //       if (matchedQuestion) {
  //         setMessages(prev => [...prev, { 
  //           text: matchedQuestion.answer, 
  //           sender: 'bot',
  //           followups: matchedQuestion.followups || []
  //         }]);
  //         setAwaitingResponse(false);
  //       } else {
  //         setMessages(prev => [...prev, { text: "I'm not sure I understand. Could you rephrase your question?", sender: 'bot' }]);
  //         setAwaitingResponse(false);
  //       }
  //     }, 1000);
  //   };
  
  //   const handleFollowup = (question) => {
  //     setInput(question);
  //     setTimeout(() => handleSend(), 100);
  //   };
  
  //   const handleKeyPress = (e) => {
  //     if (e.key === 'Enter' && !awaitingResponse) handleSend();
  //   };
  
  //   useEffect(() => {
  //     if (messages.length === 1 && isOpen) {
  //       setTimeout(() => {
  //         setMessages(prev => [...prev, { 
  //           text: "Please select a category to get started:", 
  //           sender: 'bot',
  //           followups: faqCategories.map(c => c.name)
  //         }]);
  //         setChatDimensions(prev => ({ 
  //           width: Math.min(prev.width + 80, 500),
  //           height: Math.min(prev.height + 100, 600)
  //         }));
  //       }, 1500);
  //     }
  //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   }, [messages, isOpen]);
  // return (
  //   <>
  //     {/* Floating Chat Button */}
  //     <div 
  //       className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
  //       onClick={() => setIsOpen(true)}
  //     >
  //       <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 rounded-full shadow-xl hover:bg-gradient-to-l cursor-pointer transform hover:scale-110 transition-transform group">
  //         <FaComment className="text-2xl" />
  //         <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-green-400/30 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity" />
  //       </div>
  //     </div>

  //     {/* Chat Window */}
  //     {isOpen && (
  //       <div 
  //         className="fixed bottom-8 right-8 bg-gray-950 rounded-lg shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-800 transition-all duration-300"
  //         style={{ 
  //           width: `${chatDimensions.width}px`, 
  //           height: `${chatDimensions.height}px`,
  //           maxWidth: '90vw',
  //           maxHeight: '90vh'
  //         }}
  //       >
  //         {/* Header with circuit pattern */}
  //         <div onClick={()=>{
  //           setIsOpen(false)
  //           setChatDimensions({ width: 320, height: 480 })
  //         }} className=" bg-gradient-to-r from-blue-900/80 to-gray-900 text-white p-3 flex justify-between items-center relative overflow-hidden">
  //           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDQwaDEwME0xMCAwaDBNNDAgMjBoNjBNODAgMGgyME0wIDYwaDEwME0yMCA4MGg2ME0wIDEwMGgxMDAiIHN0cm9rZT0iIzJiMzY0MSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-20" />
  //           <div className="flex items-center space-x-2 relative z-10">
  //             <FaRobot className="text-xl text-green-400" />
  //             <h3 className="font-semibold font-mono">ClickBot CLI</h3>
  //             <span className="text-blue-400 animate-pulse">_</span>
  //           </div>
  //           <button 
  //             onClick={() => {
  //               setIsOpen(false);
  //               // Reset size when closing
  //               setChatDimensions({ width: 320, height: 480 });
  //             }}
  //             className="text-white hover:text-gray-200"
  //           >
  //             <FaTimes />
  //           </button>
  //         </div>

  //         {/* Messages Container with Code Pattern */}
  //         <div className="flex-1 p-4 overflow-y-auto bg-gray-900/50 backdrop-blur-sm relative">
  //           <div className="absolute inset-0 bg-[length:40px_40px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48dGV4dCB4PSI1JSIgeT0iMTUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjM2I0YmQ4Ij4mZ3Q7IGNvbnN0IGRldkFnZW5jeSA9ICdDbGlja0lubm92YXRlJzwvdGV4dD48L3N2Zz4=')] opacity-5 animate-code-scroll" />
            
  //           {messages.map((msg, index) => (
  //             <div key={index} className="mb-4 relative z-10">
  //               <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
  //                 <div 
  //                   className={`max-w-[85%] rounded-lg p-3 backdrop-blur-sm border ${
  //                     msg.sender === 'user' 
  //                       ? 'bg-blue-900/30 border-blue-800 text-blue-200' 
  //                       : 'bg-gray-800/30 border-gray-700 text-gray-300'
  //                   }`}
  //                 >
  //                   <div className="flex items-center">
  //                     {msg.icon || (msg.sender === 'bot' && <span className="mr-2 text-green-400">$</span>)}
  //                     <p className="text-sm font-mono">{msg.text}</p>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               {/* Followup Questions */}
  //               {msg.followups && msg.followups.length > 0 && (
  //                 <div className={`mt-2 ${msg.sender === 'user' ? 'pr-4 text-right' : 'pl-4'}`}>
  //                   <p className="text-xs text-gray-500 mb-1">// Suggested follow-ups</p>
  //                   <div className="flex flex-wrap gap-2 justify-start">
  //                     {msg.followups.map((followup, i) => (
  //                       <button
  //                         key={i}
  //                         onClick={() => handleFollowup(followup)}
  //                         className="text-xs bg-gray-800 hover:bg-gray-700 text-green-400 px-3 py-1 rounded border border-gray-700 hover:border-green-400 transition-all font-mono"
  //                       >
  //                         {followup}
  //                       </button>
  //                     ))}
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           ))}
            
  //           {awaitingResponse && (
  //             <div className="flex justify-start mb-4">
  //               <div className="bg-gray-800/30 border border-gray-700 text-gray-400 rounded-lg p-3 max-w-[85%] backdrop-blur-sm">
  //                 <div className="flex items-center font-mono">
  //                   <span className="text-green-400 mr-2"></span>
  //                   <div className="flex space-x-1">
  //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
  //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
  //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           )}
  //           <div ref={messagesEndRef} />
  //         </div>

  //         {/* Input Area */}
  //         <div className="border-t border-gray-800 p-3 bg-gray-900/50 backdrop-blur-sm">
  //           <div className="flex">
  //             <input
  //               type="text"
  //               value={input}
  //               onChange={(e) => setInput(e.target.value)}
  //               onKeyPress={handleKeyPress}
  //               placeholder={awaitingResponse ? "// Awaiting response..." : "// Type your query..."}
  //               disabled={awaitingResponse}
  //               className="flex-grow bg-gray-800/30 border border-gray-700 rounded-l-lg py-2 px-3 focus:outline-none focus:border-green-400 text-sm text-gray-300 font-mono disabled:opacity-50"
  //             />
  //             <button
  //               onClick={handleSend}
  //               disabled={awaitingResponse || input.trim() === ''}
  //               className={`py-2 px-4 rounded-r-lg border border-l-0 ${
  //                 awaitingResponse || input.trim() === '' 
  //                   ? 'border-gray-700 text-gray-600 cursor-not-allowed' 
  //                   : 'border-green-400 bg-green-400/10 hover:bg-green-400/20 text-green-400'
  //               } transition-colors`}
  //             >
  //               <FaPaperPlane className="transform -rotate-45" />
  //             </button>
  //           </div>
  //           <p className="text-xs text-gray-500 mt-2 font-mono">
  //             // Available categories: Company, Services, Process, Technical, Pricing, Support
  //           </p>
  //         </div>
  //       </div>
  //     )}

  //     <style jsx global>{`
  //       @keyframes code-scroll {
  //         0% { background-position: 0 0; }
  //         100% { background-position: 0 40px; }
  //       }
  //       .animate-code-scroll {
  //         animation: code-scroll 20s linear infinite;
  //       }
  //     `}</style>
  //   </>
  // );
};
  export default Chatbot
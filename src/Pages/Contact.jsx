import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("ERROR: Please fill all required fields");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_lybir0q",
        "template_i8m53sg",
        formRef.current,
        "JjFdam8n9OsboOEqK"
      );

      console.log("Email sent:", result.text);
      setStatus("SUCCESS: Message transmitted successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error.text);
      setStatus("ERROR: Transmission failed - please retry");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50 font-['Inter']">
      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <RiCustomerService2Fill className="text-5xl text-blue-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
            <span className="text-blue-600 block mt-3">Let's Collaborate</span>
          </h2>
          <motion.div 
            className="mx-auto w-48 h-1 bg-blue-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
          <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
            Start a conversation about your next digital solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {[
              {
                icon: <FaPhone className="text-xl text-blue-600" />,
                title: "Phone Support",
                info: "+91 9096706978",
                meta: "Mon-Fri, 9:00 AM - 6:00 PM IST"
              },
              {
                icon: <FaEnvelope className="text-xl text-blue-600" />,
                title: "Email Support",
                info: "clickinnovateinfo@gmail.com",
                meta: "Typically responds within 24 hours"
              },
              {
                icon: <FaMapMarkerAlt className="text-xl text-blue-600" />,
                title: "Office Location",
                info: "Amravati, Maharashtra",
                meta: "Schedule a visit"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-blue-600">{item.info}</p>
                    <p className="text-slate-500 text-sm mt-2">{item.meta}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Testimonial Module */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-slate-600 italic">
                "ClickInnovate transformed our digital presence with their technical expertise. Their solutions are both innovative and reliable."
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-px flex-1 bg-blue-200"></div>
                <span className="text-blue-600 text-sm">CTO @ TechCorp</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            <div className="space-y-6">
              {[
                { 
                  label: "Your Name", 
                  name: "name",
                  type: "text",
                  placeholder: "Enter your name"
                },
                { 
                  label: "Email Address", 
                  name: "email",
                  type: "email",
                  placeholder: "your@email.com"
                },
                { 
                  label: "Your Message", 
                  name: "message",
                  type: "textarea",
                  placeholder: "Describe your project..."
                }
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-slate-600 mb-2 text-sm">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-600 placeholder-slate-400"
                      rows="4"
                      placeholder={field.placeholder}
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-600 placeholder-slate-400"
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </motion.button>
            </div>

            {status && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                status.startsWith("SUCCESS") ? 
                "bg-green-100 text-green-700" : 
                "bg-red-100 text-red-700"
              }`}>
                {status}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
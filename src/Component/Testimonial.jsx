import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Prasad Gomase",
    role: "Owner, Magic Touch Beauty Parlor",
    image: "/prasad2.jpg",
    description:
      "ClickInnovate and their team developed a seamless and scalable platform for my business. Their expertise and attention to detail were outstanding!",
    rating: 5
  },
  {
    name: "Gopal Pawar",
    role: "Founder, Pawar Graphic Studio",
    image: "/gopal.jpeg",
    description:
      "The digital marketing strategies provided by ClickInnovate have transformed our online presence. Our engagement and visibility have significantly increased!",
    rating: 4
  },
  {
    name: "Akash Rathod",
    role: "Founder, BDS Dance Academy",
    image: "/Akash.jpeg",
    description:
      "The e-commerce platform designed by clickinnovate’s team is smooth and user-friendly. Our bookings have increased dramatically! Highly recommended.",
    rating: 5
  }
];

function Testimonial() {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-blue-50 font-['Inter'] overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Testimonials
            <span className="text-blue-600 block mt-3">Success Stories</span>
          </h2>
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1  rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            What our clients say about our digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl p-6 md:p-8 border border-slate-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-200 overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2  px-3 py-1 rounded-full text-xs text-black font-semibold">
                    {client.rating}.0/5.0
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <FaQuoteLeft className="text-blue-100 text-2xl absolute -left-1 -top-4" />
                    <p className="text-slate-600 text-base md:text-lg italic pl-6">
                      "{client.description}"
                    </p>
                    <FaQuoteRight className="text-blue-100 text-2xl absolute -right-1 -bottom-4" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900">{client.name}</h3>
                    <p className="text-blue-600 text-sm mt-1">{client.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
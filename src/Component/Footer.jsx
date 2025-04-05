  import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

  export default function EnhancedFooter() {
    const socialLinks = {
      // github: "",
      // linkedin: "",
      // instagram: "",
      whatsapp: "https://wa.me/9096706978",
      email: "mailto:clickinnovateinfo@gmail.com",
      phone: "tel:+91 9096706978",
      map: "https://www.google.co.in/maps/place/Madhusudan+colony,sainagar,+Amravati+Maharashtra/@20.8974208,77.7455155,20.75z/data=!4m15!1m8!3m7!1s0x3bd6bb2b898fe3d1:0xf953b51392c19e74!2sSai+Nagar,+Amravati,+Maharashtra!3b1!8m2!3d20.8952593!4d77.7293797!16s%2Fg%2F1tgplh8n!3m5!1s0x3bd6a577f66ba6eb:0x72c3d61dfde3a140!8m2!3d20.8974688!4d77.7456505!16s%2Fg%2F11v56k0hx4?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
    };

    return (
      <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 text-slate-600 py-16 px-4 md:px-6 overflow-hidden border-t border-slate-200 font-['Inter']">
        {/* Geometric background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-100/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#00d4ff10_0%,transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <img 
              src="/logo.png" 
              alt="ClickInnovate Logo" 
              className="h-24 md:h-32 mb-8 transition-transform hover:scale-105" 
            />
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Connect With Us
              <span className="text-blue-600 block mt-3">Let's Collaborate</span>
            </h2>
            
            <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-slate-600">
              Digital transformation starts with a conversation
            </p>
            
            {/* Social links */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-12 justify-center">
              {[
                { icon: <FaGithub />, href: socialLinks.github },
                { icon: <FaLinkedinIn />, href: socialLinks.linkedin },
                { icon: <FaInstagram />, href: socialLinks.instagram },
                { icon: <FaWhatsapp />, href: socialLinks.whatsapp }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 border-2 border-slate-200 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={item.icon.type.name}
                >
                  <div className="text-xl md:text-2xl">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Contact section */}
            <div className="space-y-6 w-full">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <a 
                  href={socialLinks.email} 
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto text-base border border-slate-200 shadow-sm"
                >
                  <FaEnvelope className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-900">clickinnovateinfo@gmail.com</span>
                </a>
                
                <a 
                  href={socialLinks.phone} 
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto text-base border border-slate-200 shadow-sm"
                >
                  <FaPhone className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-900">+91 9096706978</span>
                </a>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={socialLinks.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300 text-base border border-slate-200 shadow-sm"
                >
                  <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-900">Our Location</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-200 pt-8 pb-4 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-600 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} ClickInnovate</span>
              <span className="text-blue-600 ml-2">All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
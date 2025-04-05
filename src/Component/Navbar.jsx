import React, { useRef } from 'react'

const Navbar = () => {

    const aboutRef = useRef(null)
    return (
        <nav className="pt-6 md:pt-8 flex justify-between items-center container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            CI
          </div>
          <span className="text-slate-800 font-semibold text-lg md:text-xl">
            ClickInnovate
          </span>
        </div>
        {/* <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleScroll(aboutRef)}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleScroll(servicesRef)}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll(contactRef)}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </div> */}
      </nav>
  )
}

export default Navbar
'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-gray-200 transition-all">
      <div className="sm:hidden flex items-center justify-between h-14 px-4">
        <div className="text-4xl font-bold tracking-wide text-gray-800">
          LOGO
        </div>

        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-start justify-start px-4 bg-black text-white">
          <a href="#" className="py-2">
            Home
          </a>
          <a href="#" className="py-2">
            Contact
          </a>
          <a href="#" className="py-2">
            About
          </a>
        </div>
      )}
      <div className="hidden sm:flex h-14 items-center justify-between xl:px-0">
        <div className=" h-14 px-4 py-2 flex justify-center items-center text-4xl font-bold tracking-wide text-gray-800">
          LOGO
        </div>
        <div className="flex items-center justify-end">
          <a href="#" className="px-4 py-2">
            Home
          </a>
          <a href="#" className="px-4 py-2">
            Contact
          </a>
          <a href="#" className="px-4 py-2">
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'

const NavBar = () => {
  return (
    <div>

         {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-600 cursor-pointer"><a href="">Skin Scan</a></h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-cyan-600 hover:text-gray-600">Home</a></li>
            <li><a href="#history" className="text-cyan-600 hover:text-gray-600">History</a></li>
            <li><a href="#faqs" className="text-cyan-600 hover:text-gray-600">FAQs</a></li>
            <li><a href="#contact" className="text-cyan-600 hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white
 px-6 py-4  sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto  flex justify-between items-center ">
        <Link to="/" className="text-xl font-bold">
          EduSite
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
                <Link to="/" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">Home</Link>
                <Link to="/about" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">About</Link>
                <Link to="/courses" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">Courses</Link>
                <Link to="/contact" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">Contact</Link>
                <Link to="/login" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">Login/SignUp</Link>
                <Link to="/dashboard" className="block md:inline-block px-2 py-1 hover:text-green-300 transition-colors">DashBoard</Link>
                

        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 mt-2 space-y-2">
          <Link to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/courses" className="block hover:underline" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="block hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="block hover:underline" onClick={() => setIsOpen(false)}>Signup</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

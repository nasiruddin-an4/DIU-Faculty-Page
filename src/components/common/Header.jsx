import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/diulogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="DIU Logo"
            className="w-64  object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className={`font-semibold text-sm ${isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              } hover:text-primary-600 transition-colors duration-200`}
          >
            Home
          </Link>
          <a
            href="https://forum.daffodilvarsity.edu.bd/" target='_blank'
            className={`font-semibold text-sm ${isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              } hover:text-primary-600 transition-colors duration-200`}
          >
            Forum
          </a>
          <a
            href="#"
            className={`font-semibold text-sm ${isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              } hover:text-primary-600 transition-colors duration-200`}
          >
            Contact Us
          </a>
          <a
            href="#"
            className="bg-primary-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 hover:text-primary-600 focus:outline-none transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="font-semibold text-sm text-neutral-800 py-2 hover:text-primary-600 transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="https://forum.daffodilvarsity.edu.bd/" target='_blank'
            className="font-semibold text-sm text-neutral-800 py-2 hover:text-primary-600 transition-colors duration-200"
          >
            Forum
          </a>
          <a
            href="#"
            className="font-semibold text-sm text-neutral-800 py-2 hover:text-primary-600 transition-colors duration-200"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="bg-primary-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-center"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
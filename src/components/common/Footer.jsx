import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About DIU</h3>
            <p className="text-neutral-300 mb-4">Daffodil International University is one of the leading private universities in Bangladesh committed to academic excellence and innovation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition">Home</Link></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Admissions</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Academic Programs</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Research</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Faculties</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Faculty of Science & Information Technology</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Faculty of Business & Entrepreneurship</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Faculty of Engineering</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition">Faculty of Humanities & Social Sciences</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-300">
              <p>102/1, Sukrabad, Mirpur Road</p>
              <p>Dhanmondi, Dhaka-1207, Bangladesh</p>
              <p className="mt-2">Phone: +880 2-9138234-5</p>
              <p>Email: info@diu.edu.bd</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6 text-center text-neutral-400">
          <p>&copy; {currentYear} Daffodil International University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-diuBlue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            {/* Subscribe Section */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-2 rounded bg-white text-gray-800"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Social Links</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaYoutube size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaPinterest size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-8 justify-end">
              {/* Branding Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Branding</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      DIU Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Career Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Bangladesh Corner
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      DIU Press
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Photo Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Employability 360
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      skill.jobs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Internship Portal
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Convocation
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      DIU Annual Report
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Brochure
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Prospectus
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      DIU News
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Student
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Parents
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Teacher
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-200">
                      Administration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between gap-4">
          <p>Copyright © {currentYear} Daffodil International University.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

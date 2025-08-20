import {
  FaEnvelope,
  FaPhone,
  FaMobile,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";

const ProfileHeader = ({ faculty }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center justify-content-center">
        {/* Profile Image */}
        <div className="w-40 h-48 md:w-48 md:h-56">
          <img
            src={faculty.imageUrl}
            alt={faculty.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Profile Info */}
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            {faculty.name}
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-2">
            Dean, {faculty.department.name}
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-2">
            {faculty.department.faculty.name}
          </p>
          <div className="border-t border-gray-300 my-4"></div>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            E-mail:{" "}
            <a
              href={`mailto:${faculty.email}`}
              className="text-blue-600 hover:underline"
            >
              {faculty.email}
            </a>
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Cell-Phone: {faculty.cellPhone}
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Phone: {faculty.phone}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center md:justify-start space-x-4 mt-6">
        {faculty.socialLinks.linkedin && (
          <a
            href={faculty.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.391-1.848-2.391-1.809 0-2.152 1.377-2.152 2.8v5.195h-3v-11h2.874v1.524h.039c.401-.761 1.38-1.848 3.164-1.848 3.388 0 4.016 2.229 4.016 5.13v5.194z" />
            </svg>
          </a>
        )}
        {faculty.socialLinks.youtube && (
          <a
            href={faculty.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        )}
        {/* Add other social icons as needed */}
      </div>
    </div>
  );
};

export default ProfileHeader;

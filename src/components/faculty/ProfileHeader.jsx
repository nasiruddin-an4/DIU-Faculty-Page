import { FaEnvelope, FaPhone, FaMobile, FaLinkedin, FaYoutube, FaGlobe, FaTwitter } from 'react-icons/fa'

const ProfileHeader = ({ faculty }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 h-32 md:h-48"></div>
      
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-24 mb-6">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={faculty.imageUrl} 
              alt={faculty.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:ml-6 mt-4 md:mt-0 md:mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">
              {faculty.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-600 font-medium">
              {faculty.title}
            </p>
            <p className="text-neutral-600 mt-1">
              {faculty.department.name}, {faculty.department.faculty.name}
            </p>
            <p className="text-neutral-500 text-sm">
              Employee ID: {faculty.employeeId}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <FaEnvelope className="text-neutral-500 mr-2" />
              <a href={`mailto:${faculty.email}`} className="text-primary-600 hover:underline">
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-neutral-500 mr-2" />
              <a href={`tel:${faculty.phone}`} className="text-neutral-600">
                {faculty.phone}
              </a>
            </div>
            <div className="flex items-center">
              <FaMobile className="text-neutral-500 mr-2" />
              <a href={`tel:${faculty.cellPhone}`} className="text-neutral-600">
                {faculty.cellPhone}
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {faculty.socialLinks.linkedin && (
              <a href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
            )}
            
            {faculty.socialLinks.youtube && (
              <a href={faculty.socialLinks.youtube} target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaYoutube size={20} />
              </a>
            )}
            
            {faculty.socialLinks.website && (
              <a href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaGlobe size={20} />
              </a>
            )}
            
            {faculty.socialLinks.twitter && (
              <a href={faculty.socialLinks.twitter} target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center text-white transition-transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
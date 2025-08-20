import {
  FaEnvelope,
  FaPhone,
  FaMobile,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
  FaTwitter,
  FaIdCard,
  FaUniversity,
  FaMapMarkerAlt,
  FaStar,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

const ProfileHeader = ({ faculty }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Hero Section with Background Pattern */}
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Department Info Overlay */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FaUniversity className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">{faculty?.departmentData?.faculty}</p>
                <p className="text-xs opacity-75">Faculty</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium opacity-90">{faculty?.departmentData?.name}</p>
                <p className="text-xs opacity-75">Department</p>
              </div>
            </div>
          </div>

          {/* Floating Profile Image */}
          <div className="absolute -bottom-16 left-8 md:left-12">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={faculty.imageUrl}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Faculty+Photo';
                  }}
                />
              </div>
              {/* Status Badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 border-3 border-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Role Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {faculty.title.includes('Professor') ? 'PROF' : 'FACULTY'}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information Section */}
        <div className="pt-20 pb-8 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Name and Title */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                    {faculty.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <FaAward className="text-yellow-500 text-xl" />
                      <span className="text-xl text-gray-700 font-semibold">{faculty.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaIdCard className="text-gray-400" />
                      <span className="text-gray-500 font-medium">{faculty.employeeId}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-blue-700 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-green-700 font-medium">Publications</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-purple-700 font-medium">Courses</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">4.9</div>
                    <div className="text-sm text-orange-700 font-medium">Rating</div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-emerald-600 font-medium">Email</p>
                        <a
                          href={`mailto:${faculty.email}`}
                          className="text-gray-800 font-semibold hover:text-emerald-600 transition-colors duration-300"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-600 font-medium">Office Phone</p>
                        <a
                          href={`tel:${faculty.phone}`}
                          className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300"
                        >
                          {faculty.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaMobile className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-purple-600 font-medium">Mobile</p>
                        <a
                          href={`tel:${faculty.cellPhone}`}
                          className="text-gray-800 font-semibold hover:text-purple-600 transition-colors duration-300"
                        >
                          {faculty.cellPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaGraduationCap className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-orange-600 font-medium">Department</p>
                        <p className="text-gray-800 font-semibold">
                          {faculty?.departmentData?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links & Actions */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Social Links */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">🌐</span>
                    Connect With Me
                  </h3>
                  
                  <div className="space-y-3">
                    {faculty.socialLinks.linkedin && (
                      <a
                        href={faculty.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center mr-3">
                          <FaLinkedin className="text-white text-lg" />
                        </div>
                        <span className="text-gray-700 font-medium">LinkedIn Profile</span>
                      </a>
                    )}

                    {faculty.socialLinks.youtube && (
                      <a
                        href={faculty.socialLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center mr-3">
                          <FaYoutube className="text-white text-lg" />
                        </div>
                        <span className="text-gray-700 font-medium">YouTube Channel</span>
                      </a>
                    )}

                    {faculty.socialLinks.website && (
                      <a
                        href={faculty.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                          <FaGlobe className="text-white text-lg" />
                        </div>
                        <span className="text-gray-700 font-medium">Personal Website</span>
                      </a>
                    )}

                    {faculty.socialLinks.twitter && (
                      <a
                        href={faculty.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-[#1da1f2] rounded-lg flex items-center justify-center mr-3">
                          <FaTwitter className="text-white text-lg" />
                        </div>
                        <span className="text-gray-700 font-medium">Twitter</span>
                      </a>
                    )}

                    {!faculty.socialLinks.linkedin && 
                     !faculty.socialLinks.youtube && 
                     !faculty.socialLinks.website && 
                     !faculty.socialLinks.twitter && (
                      <div className="text-center py-8">
                        <div className="text-gray-400 text-4xl mb-3">🔗</div>
                        <p className="text-gray-500 text-sm">No social links available</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <FaEnvelope className="mr-3 text-xl" />
                    Send Email
                  </button>
                  
                  <button className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <FaPhone className="mr-3 text-xl" />
                    Call Now
                  </button>
                  
                  <button className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <FaIdCard className="mr-3 text-xl" />
                    View Full Profile
                  </button>
                </div>

                {/* Rating */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">4.9/5.0</div>
                  <div className="text-sm text-gray-600">Student Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

import {
  Mail,
  Phone,
  Smartphone,
  Linkedin,
  Youtube,
  Globe,
  Twitter,
  Car as IdCard,
  GraduationCap,
  MapPin,
  Star,
  Award,
  Users,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";

const ProfileHeader = ({ faculty }) => {
  const handleEmailClick = () => {
    window.open(`mailto:${faculty.email}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${faculty.phone}`, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${faculty.name} - Faculty Profile`,
          text: `Check out ${faculty.name}'s profile`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Profile link copied to clipboard!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Profile Card */}
      <div className=" overflow-hidden">
        {/* Profile Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Profile Header with Image and Name */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            {/* Profile Image Container */}
            <div className="relative w-40 h-56 lg:w-64 lg:h-72 rounded-md overflow-hidden border-4 border-white  ">
              <img
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Faculty+Photo";
                }}
              />
            </div>

            {/* Name and Details Section */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              {/* Name and Title */}
              <div className="space-y-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                  {faculty.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <p className="text-sm sm:text-base font-medium">
                      {faculty.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                    <p className="text-sm sm:text-base font-medium">
                      {faculty?.departmentData?.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 border-t pt-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Email:{" "}
                    <a
                      href={`mailto:${faculty.email}`}
                      onClick={handleEmailClick}
                      className="text-gray-800 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {faculty.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Office Phone:{" "}
                    <a
                      href={`tel:${faculty.phone}`}
                      onClick={handlePhoneClick}
                      className="text-gray-800 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {faculty.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">
                    Mobile:{" "}
                    <a
                      href={`tel:${faculty.cellPhone}`}
                      className="text-gray-800 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      {faculty.cellPhone}
                    </a>
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mt-4">
                {faculty.socialLinks?.linkedin && (
                  <a
                    href={faculty.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#0077b5] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                )}
                {faculty.socialLinks?.youtube && (
                  <a
                    href={faculty.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#ff0000] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                )}
                {faculty.socialLinks?.website && (
                  <a
                    href={faculty.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Globe className="w-4 h-4 text-white" />
                  </a>
                )}
                {faculty.socialLinks?.twitter && (
                  <a
                    href={faculty.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#1da1f2] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                )}
                {!faculty.socialLinks?.linkedin &&
                  !faculty.socialLinks?.youtube &&
                  !faculty.socialLinks?.website &&
                  !faculty.socialLinks?.twitter && (
                    <div className="text-center py-2 text-gray-500 bg-gray-50 rounded-lg w-full">
                      <p className="text-sm font-medium">
                        No social links available
                      </p>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEmailClick}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" /> Email
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" /> Call
            </button>
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Share2 className="w-5 h-5 mr-2" /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

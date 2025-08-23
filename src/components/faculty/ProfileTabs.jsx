import { useState, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaBook,
  FaFlask,
  FaFileAlt,
} from "react-icons/fa";

const ProfileTabs = ({ faculty }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const scrollContainerRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200; // Adjust scroll amount as needed

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const tabConfig = [
    {
      id: "overview",
      label: "Overview",
      icon: <FaUser />,
      description: "Biography & Education",
    },
    {
      id: "courses",
      label: "Courses",
      icon: <FaBook />,
      description: "Teaching & Curriculum",
    },
    {
      id: "research",
      label: "Research",
      icon: <FaFlask />,
      description: "Projects & Interests",
    },
    {
      id: "publications",
      label: "Publications",
      icon: <FaFileAlt />,
      description: "Papers & Articles",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/*  Tab Navigation */}
      <div className="bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 relative">
        {/* Left Arrow - Mobile Only */}
        <button
          onClick={() => scrollTabs("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 md:hidden backdrop-blur-sm"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Right Arrow - Mobile Only */}
        <button
          onClick={() => scrollTabs("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 md:hidden backdrop-blur-sm"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Tab Container with Padding for Arrows */}
        <div
          className="flex overflow-x-auto scrollbar-hide px-12 md:px-0"
          ref={scrollContainerRef}
        >
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col items-center px-4 py-4 min-w-[120px] md:min-w-[140px] focus:outline-none transition-all duration-300 ease-in-out relative group ${
                activeTab === tab.id
                  ? "bg-white shadow-sm border-b-2 border-primary-500"
                  : "hover:bg-white/50"
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              <div className="flex gap-2">
                <span className="text-lg md:text-xl mb-1 text-green-700">
                  {tab.icon}
                </span>
                <span
                  className={`font-semibold text-xs md:text-sm transition-colors ${
                    activeTab === tab.id
                      ? "text-primary-600"
                      : "text-gray-600 group-hover:text-primary-500"
                  }`}
                >
                  {tab.label}
                </span>
              </div>
              <span className="text-xs text-gray-400 hidden md:block mt-1">
                {tab.description}
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Tab Content with Better Spacing and Animations */}
      <div className="p-4 md:p-6 lg:p-8">
        <div className="animate-fadeIn">
          {activeTab === "overview" && (
            <div className="gap-4 md:gap-8">
              {/* Biography Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📖</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Biography
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {faculty.bio}
                </p>
              </div>

              {/* Education Section */}
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🎓</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  Education
                </h3>
              </div>

              <div className="">
                <div className="space-y-4">
                  {Array.from({
                    length: Math.ceil(faculty.education.length / 2),
                  }).map((_, rowIndex) => (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      key={rowIndex}
                    >
                      {faculty.education
                        .slice(rowIndex * 2, rowIndex * 2 + 2)
                        .map((edu, index) => (
                          <div
                            className="bg-white rounded-lg p-4 border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow duration-300"
                            key={index}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 text-sm">
                                  {edu.degree}
                                </p>
                                <p className="text-gray-600 text-sm mt-1">
                                  {edu.institution}
                                </p>
                              </div>
                              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                                {edu.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      {faculty.education.length % 2 !== 0 &&
                        rowIndex ===
                          Math.floor(faculty.education.length / 2) && (
                          <div className="bg-transparent"></div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise Section - Full Width */}
              <div className="md:col-span-2 mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">💡</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Areas of Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {faculty.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Courses */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📚</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Current Courses
                  </h2>
                </div>
                <div className="space-y-4">
                  {faculty.courses.current.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-green-600 mr-2">🟢</span>
                            <p className="font-semibold text-gray-800 text-sm md:text-base">
                              {course.code}
                            </p>
                          </div>
                          <p className="text-gray-700 text-sm md:text-base font-medium">
                            {course.name}
                          </p>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-3 flex items-center">
                        <span className="mr-2">📅</span>
                        {course.semester}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous Courses */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📖</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Previous Courses
                  </h2>
                </div>
                <div className="space-y-4">
                  {faculty.courses.previous.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-gray-500 mr-2">⚪</span>
                            <p className="font-semibold text-gray-700 text-sm md:text-base">
                              {course.code}
                            </p>
                          </div>
                          <p className="text-gray-600 text-sm md:text-base font-medium">
                            {course.name}
                          </p>
                        </div>
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          Completed
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-3 flex items-center">
                        <span className="mr-2">📅</span>
                        {course.semester}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="">
              {/* Research Interests */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 mb-4">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔬</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Research Interests
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {faculty.research.interests}
                </p>
              </div>

              {/* Current Projects */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🚀</span>
                  <h3 className="text-lg font-bold text-gray-800">
                    Current Projects
                  </h3>
                </div>
                <div className="space-y-6">
                  {Array.from({
                    length: Math.ceil(faculty.research.projects.length / 2),
                  }).map((_, rowIndex) => (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      key={rowIndex}
                    >
                      {faculty.research.projects
                        .slice(rowIndex * 2, rowIndex * 2 + 2)
                        .map((project, index) => (
                          <div
                            className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all duration-300"
                            key={index}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-bold text-gray-800 text-sm">
                                {project.title}
                              </h4>
                              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                                Active
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm mb-3">
                              {project.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="mr-2">💰</span>
                              {project.funded
                                ? `Funded by: ${project.funded}`
                                : "Self-funded project"}
                            </div>
                          </div>
                        ))}
                      {faculty.research.projects.length % 2 !== 0 &&
                        rowIndex ===
                          Math.floor(faculty.research.projects.length / 2) && (
                          <div className="bg-transparent"></div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborations - Full Width */}
              <div className="md:col-span-2 mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🤝</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Collaborations
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <ul className="space-y-3">
                    {faculty.research.collaborations.map((collab, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {collab}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "publications" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📄</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Publications
                  </h2>
                </div>
              </div>

              {faculty.publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base leading-relaxed">
                      {pub.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium ml-4">
                      {pub.year}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 italic text-sm md:text-base">
                      {pub.authors.join(", ")}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base font-medium">
                      {pub.journal}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">🔗</span>
                      View Publication
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;

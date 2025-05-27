import { useState } from 'react'

const ProfileTabs = ({ faculty }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-slide-in">
      {/* Tabs */}
      <div className="border-b">
        <div className="flex overflow-x-auto">
          <button 
            className={`px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap focus:outline-none transition-colors ${
              activeTab === 'overview' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap focus:outline-none transition-colors ${
              activeTab === 'courses' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('courses')}
          >
            Courses
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap focus:outline-none transition-colors ${
              activeTab === 'research' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('research')}
          >
            Research
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap focus:outline-none transition-colors ${
              activeTab === 'publications' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('publications')}
          >
            Publications
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Biography</h2>
            <p className="text-neutral-700 mb-6">{faculty.bio}</p>
            
            <h3 className="text-lg font-bold mb-3">Education</h3>
            <ul className="space-y-3 mb-6">
              {faculty.education.map((edu, index) => (
                <li key={index} className="border-l-2 border-primary-500 pl-4">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-neutral-600">{edu.institution}</p>
                  <p className="text-neutral-500 text-sm">{edu.year}</p>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {faculty.expertise.map((area, index) => (
                <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Current Courses</h2>
            <div className="space-y-4 mb-8">
              {faculty.courses.current.map((course, index) => (
                <div key={index} className="border-l-2 border-secondary-500 pl-4 py-1">
                  <p className="font-medium">{course.code}: {course.name}</p>
                  <p className="text-neutral-500 text-sm">{course.semester}</p>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-bold mb-4">Previous Courses</h2>
            <div className="space-y-4">
              {faculty.courses.previous.map((course, index) => (
                <div key={index} className="border-l-2 border-neutral-400 pl-4 py-1">
                  <p className="font-medium">{course.code}: {course.name}</p>
                  <p className="text-neutral-500 text-sm">{course.semester}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'research' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Research Interests</h2>
            <p className="text-neutral-700 mb-6">{faculty.research.interests}</p>
            
            <h3 className="text-lg font-bold mb-3">Current Projects</h3>
            <div className="space-y-6 mb-8">
              {faculty.research.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-primary-500 pl-4 py-1">
                  <p className="font-bold">{project.title}</p>
                  <p className="text-neutral-700">{project.description}</p>
                  <p className="text-neutral-500 text-sm mt-1">
                    {project.funded ? `Funded by: ${project.funded}` : 'Self-funded project'}
                  </p>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-bold mb-3">Collaborations</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              {faculty.research.collaborations.map((collab, index) => (
                <li key={index}>{collab}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'publications' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Publications</h2>
            
            {faculty.publications.map((pub, index) => (
              <div key={index} className="border-b border-neutral-200 py-4 last:border-0">
                <p className="font-bold">{pub.title}</p>
                <p className="text-neutral-700 italic">{pub.authors.join(', ')}</p>
                <p className="text-neutral-600">{pub.journal}, {pub.year}</p>
                <div className="mt-2">
                  <a 
                    href={pub.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline text-sm font-medium"
                  >
                    View Publication
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileTabs
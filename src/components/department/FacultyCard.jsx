import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa'

const FacultyCard = ({ faculty }) => {
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef(null)
  const cardRef = useRef(null)
  const timeoutRef = useRef(null)
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowPopup(true)
  }

  const handleMouseLeave = (e) => {
    const popup = popupRef.current
    const card = cardRef.current
    
    // Check if moving from card to popup
    if (popup && card) {
      const rect = popup.getBoundingClientRect()
      const isMovingToPopup = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (isMovingToPopup) {
        return
      }
    }

    timeoutRef.current = setTimeout(() => {
      setShowPopup(false)
    }, 100)
  }

  const handlePopupMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handlePopupMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false)
    }, 100)
  }

  return (
    <div className="relative">
      {/* Faculty Card */}
      <div 
        ref={cardRef}
        className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-expanded={showPopup}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setShowPopup(!showPopup)
          }
        }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={faculty.imageUrl} 
            alt={faculty.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-neutral-800 group-hover:text-primary-600 transition-colors">
            {faculty.name}
          </h3>
          <p className="text-primary-600 font-medium mb-4">{faculty.title}</p>
          
          <div className="space-y-2 text-sm mb-6">
            <p className="flex items-center text-neutral-600">
              <FaEnvelope className="mr-2 text-neutral-400" />
              {faculty.email}
            </p>
            <p className="flex items-center text-neutral-600">
              <FaPhone className="mr-2 text-neutral-400" />
              {faculty.phone}
            </p>
          </div>
          
          <Link 
            to={`/faculty/${faculty.id}`}
            className="inline-block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div 
          ref={popupRef}
          className="absolute top-1/2 left-full z-50 ml-4 transform -translate-y-1/2"
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
          role="dialog"
          aria-label={`Details for ${faculty.name}`}
        >
          <div className="bg-white rounded-xl shadow-2xl p-6 w-80 animate-fade-in">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 p-2 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close popup"
            >
              <FaTimes />
            </button>
            
            <div className="flex items-start space-x-4">
              <img 
                src={faculty.imageUrl} 
                alt={faculty.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-lg text-neutral-800">{faculty.name}</h4>
                <p className="text-primary-600 font-medium">{faculty.title}</p>
                <p className="text-sm text-neutral-600 mt-1">{faculty.department.name}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <p className="font-medium text-neutral-700">Education</p>
                <p className="text-neutral-600">{faculty.education[0].degree}</p>
                <p className="text-neutral-500 text-xs">{faculty.education[0].institution}</p>
              </div>
              
              <div className="text-sm">
                <p className="font-medium text-neutral-700">Expertise</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {faculty.expertise.slice(0, 3).map((area, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-sm">
                <p className="font-medium text-neutral-700">Contact</p>
                <p className="flex items-center text-neutral-600 mt-1">
                  <FaEnvelope className="mr-2 text-neutral-400" />
                  {faculty.email}
                </p>
                <p className="flex items-center text-neutral-600">
                  <FaPhone className="mr-2 text-neutral-400" />
                  {faculty.phone}
                </p>
              </div>
            </div>
            
            <Link 
              to={`/faculty/${faculty.id}`}
              className="mt-4 inline-block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              View Full Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default FacultyCard
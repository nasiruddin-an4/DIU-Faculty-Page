import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaTimes, FaArrowRight } from "react-icons/fa";

const FacultyCard = ({ faculty }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({
    horizontal: "right",
    vertical: "middle",
  });
  const popupRef = useRef(null);
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const updatePopupPosition = () => {
      if (cardRef.current && showPopup) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const popupWidth = 320; // Approximate width of popup (w-80)
        const popupHeight = 400; // Approximate height of popup
        const spaceOnRight = viewportWidth - cardRect.right;
        const spaceBelow = viewportHeight - cardRect.bottom;
        const spaceAbove = cardRect.top;

        // Determine horizontal position
        const horizontal = spaceOnRight < popupWidth ? "left" : "right";

        // Determine vertical position
        let vertical = "middle";
        if (spaceBelow < popupHeight / 2 + 20) {
          vertical = "above";
        } else if (spaceAbove < popupHeight / 2 + 20) {
          vertical = "below";
        }

        setPopupPosition({ horizontal, vertical });
      }
    };

    updatePopupPosition();
    window.addEventListener("resize", updatePopupPosition);

    return () => {
      window.removeEventListener("resize", updatePopupPosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showPopup]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowPopup(true);
  };

  const handleMouseLeave = (e) => {
    const popup = popupRef.current;
    const card = cardRef.current;

    if (popup && card) {
      const rect = popup.getBoundingClientRect();
      const isMovingToPopup =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isMovingToPopup) {
        return;
      }
    }

    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 100);
  };

  const handlePopupMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePopupMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 100);
  };

  return (
    <div className="relative">
      {/* Faculty Card */}
      <div
        ref={cardRef}
        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-expanded={showPopup}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setShowPopup(!showPopup);
          }
          if (e.key === "Escape") {
            setShowPopup(false);
          }
        }}
      >
        <div className="flex flex-col sm:flex-row p-3 gap-4 sm:items-start">
          <div className="w-full sm:w-2/5 flex-shrink-0">
            <div className="h-28 rounded-md overflow-hidden">
              <img
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-between min-h-[7rem]">
            <div>
              <h3 className="font-bold text-lg text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                {faculty.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1 mb-3">
                {faculty.title}
              </p>
            </div>
            <Link
              to={`/faculty/${faculty.id}`}
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center justify-end gap-2 mr-2"
            >
              View Profile
              <FaArrowRight className="text-sm text-gray-500 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          ref={popupRef}
          className={`absolute z-50 ${
            popupPosition.horizontal === "right"
              ? "left-full ml-4"
              : "right-full mr-4"
          } ${
            popupPosition.vertical === "middle"
              ? "top-1/2 -translate-y-1/2"
              : popupPosition.vertical === "above"
              ? "bottom-full mb-4"
              : "top-full mt-4"
          }`}
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
                <h4 className="font-bold text-lg text-neutral-800">
                  {faculty.name}
                </h4>
                <p className="text-primary-600 font-medium">{faculty.title}</p>
                <p className="text-sm text-neutral-600 mt-1">
                  {faculty.department.name}
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <p className="font-medium text-neutral-700">Education</p>
                <p className="text-neutral-600">
                  {faculty.education[0].degree}
                </p>
                <p className="text-neutral-500 text-xs">
                  {faculty.education[0].institution}
                </p>
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
  );
};

export default FacultyCard;

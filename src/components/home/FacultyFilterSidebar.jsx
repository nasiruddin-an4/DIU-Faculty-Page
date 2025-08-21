import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { ListFilter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FacultyFilterSidebar = ({
  faculties,
  selectedFaculty,
  onFacultyChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsExpanded(!mobile); // Expanded by default on desktop, collapsed on mobile
    };

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFacultyChange = (facultyId) => {
    onFacultyChange(facultyId);
    // Close sidebar on mobile after selection
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  // Mobile overlay when sidebar is open
  const Overlay = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={() => setIsExpanded(false)}
    />
  );

  // Mobile sidebar content
  const MobileSidebar = () => (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
            <ListFilter /> Faculty Filter
          </h3>
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
          <FilterOptions />
        </div>
      </div>
    </motion.div>
  );

  // Filter options component (reusable for mobile and desktop)
  const FilterOptions = () => (
    <>
      <div className="flex items-center group">
        <input
          type="radio"
          id="all-faculties"
          name="faculty"
          value=""
          checked={selectedFaculty === ""}
          onChange={() => handleFacultyChange("")}
          className="peer hidden"
        />
        <label
          htmlFor="all-faculties"
          className="flex items-center w-full py-3 px-3 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 peer-checked:bg-blue-100 peer-checked:text-blue-600 peer-checked:font-medium"
        >
          <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-blue-600 mr-3 flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full bg-blue-600 transition-opacity duration-200 ${
                selectedFaculty === "" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          All Faculties
        </label>
      </div>

      {faculties.map((faculty) => (
        <div key={faculty.id} className="flex items-center group">
          <input
            type="radio"
            id={faculty.id}
            name="faculty"
            value={faculty.id}
            checked={selectedFaculty === faculty.id}
            onChange={() => handleFacultyChange(faculty.id)}
            className="peer hidden"
          />
          <label
            htmlFor={faculty.id}
            className="flex items-center w-full py-3 px-3 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 peer-checked:bg-blue-100 peer-checked:text-blue-600 peer-checked:font-medium"
          >
            <div className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-blue-600 mr-3 flex items-center justify-center">
              <div
                className={`w-2 h-2 rounded-full bg-blue-600 transition-opacity duration-200 ${
                  selectedFaculty === faculty.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            {faculty.name}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <>
      {/* Mobile: Filter Card Button */}
      {isMobile ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleExpand}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer w-full"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ListFilter size={20} className="text-gray-600" />
                {selectedFaculty && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base">
                  Faculty Filter
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedFaculty
                    ? faculties.find((f) => f.id === selectedFaculty)?.name ||
                      "Selected"
                    : "All Faculties"}
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400"
            >
              <FaChevronDown size={16} />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        /* Desktop: Fixed Sidebar */
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 w-full ${
            isSticky ? "sticky top-20" : ""
          }`}
        >
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
              <ListFilter /> Faculty Filter
            </h3>
          </div>

          <div className="space-y-2">
            <FilterOptions />
          </div>
        </motion.div>
      )}

      {/* Mobile Sidebar and Overlay */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <>
            <Overlay />
            <MobileSidebar />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FacultyFilterSidebar;

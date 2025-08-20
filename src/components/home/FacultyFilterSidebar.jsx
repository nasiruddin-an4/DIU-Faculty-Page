import { useState, useEffect } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { ListFilter } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const FacultyFilterSidebar = ({
  faculties,
  selectedFaculty,
  onFacultyChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Adjust this value based on when you want the sidebar to become sticky

      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100


                  ${isSticky ? "sticky top-20" : ""}`}
    >
      <div
        className="flex justify-between items-center mb-6 cursor-pointer group border-b pb-2"
        onClick={toggleExpand}
      >
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary-600 transition-colors duration-200 flex items-center gap-2">
          <ListFilter /> Faculties
        </h3>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-gray-500 group-hover:text-primary-600 transition-colors duration-200"
        >
          <FaChevronDown size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 overflow-hidden"
          >
            <div className="flex items-center group">
              <input
                type="radio"
                id="all-faculties"
                name="faculty"
                value=""
                checked={selectedFaculty === ""}
                onChange={() => onFacultyChange("")}
                className="peer hidden"
              />

              <label
                htmlFor="all-faculties"
                className="flex items-center w-full py-2 px-2 rounded-xl cursor-pointer transition-all duration-200


                         text-gray-700 hover:text-primary-600 hover:bg-primary-50


                         peer-checked:bg-primary-100 peer-checked:text-primary-600 peer-checked:font-medium"
              >
                <div
                  className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-600 mr-3


                              flex items-center justify-center"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-primary-600 ${
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
                  onChange={() => onFacultyChange(faculty.id)}
                  className="peer hidden"
                />

                <label
                  htmlFor={faculty.id}
                  className="flex items-center w-full py-2 px-2 rounded-xl cursor-pointer transition-all duration-200


                           text-gray-700 hover:text-primary-600 hover:bg-primary-50


                           peer-checked:bg-primary-100 peer-checked:text-primary-600 peer-checked:font-medium"
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-600 mr-3


                                flex items-center justify-center"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-primary-600 ${
                        selectedFaculty === faculty.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  {faculty.name}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FacultyFilterSidebar;

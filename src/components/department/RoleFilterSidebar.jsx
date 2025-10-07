import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ListFilter } from "lucide-react";

const RoleFilterSidebar = ({
  facultyRoles,
  managementRoles,
  selectedRole,
  onRoleChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false); // Collapsed on mobile
      } else {
        setIsExpanded(true); // Expanded by default on desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRoleChange = (roleValue) => {
    onRoleChange(roleValue);
    if (isMobile) {
      setIsExpanded(false); // Auto-close on mobile after selection
    }
  };

  // Mobile overlay when sidebar is open
  const Overlay = () =>
    createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-490 md:hidden"
        onClick={() => setIsExpanded(false)}
      />,
      document.body
    );

  // Mobile sidebar content
  const MobileSidebar = () =>
    createPortal(
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-500 md:hidden"
      >
        {/* Add this new header section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-bold text-lg text-neutral-800">Filter Options</h3>
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Update the existing content div with padding top removed */}
        <div className="px-4 pb-4">
          <div className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Management Section */}
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Management
              </h4>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="all-management-roles-mobile"
                  name="role-mobile"
                  value="all-management"
                  checked={selectedRole === "all-management"}
                  onChange={() => handleRoleChange("all-management")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="all-management-roles-mobile"
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                >
                  All Management Members
                </label>
              </div>

              {managementRoles.map((role) => (
                <div key={role} className="flex items-center mb-3">
                  <input
                    type="radio"
                    id={role}
                    name="role-mobile"
                    value={role}
                    checked={selectedRole === role}
                    onChange={() => handleRoleChange(role)}
                    className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                  />
                  <label
                    htmlFor={role}
                    className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                  >
                    {role}
                  </label>
                </div>
              ))}
            </div>

            {/* Border */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Faculty Members Section */}
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Faculty Members
              </h4>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="all-roles-mobile"
                  name="role-mobile"
                  value=""
                  checked={selectedRole === ""}
                  onChange={() => handleRoleChange("")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="all-roles-mobile"
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                >
                  All Faculty Members
                </label>
              </div>

              {facultyRoles.map((role) => (
                <div key={role} className="flex items-center mb-3">
                  <input
                    type="radio"
                    id={role}
                    name="role-mobile"
                    value={role}
                    checked={selectedRole === role}
                    onChange={() => handleRoleChange(role)}
                    className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                  />
                  <label
                    htmlFor={role}
                    className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                  >
                    {role}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>,
      document.body
    );

  return (
    <div className={isMobile ? "" : "sticky top-24"}>
      {/* Mobile: Filter Card Button */}
      {isMobile ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleExpand}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-full z-480"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                {selectedRole && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full"></div>
                )}
                <ListFilter size={20} className="text-neutral-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-800">
                  {selectedRole ? selectedRole : "All Faculty"}
                </h3>
                {/* <p className="text-sm text-neutral-500">
                  {selectedRole ? selectedRole : "All Roles"}
                </p> */}
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-400"
            >
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </motion.div>
          </div>
        </motion.div>
      ) : (
        /* Desktop: Fixed (No Toggle) */
        <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
          <div className="space-y-2">
            {/* Management Section */}
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Management
              </h4>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="all-management-roles" // Changed ID
                  name="role"
                  value="all-management" // Added specific value
                  checked={selectedRole === "all-management"}
                  onChange={() => onRoleChange("all-management")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="all-management-roles" // Match the new ID
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-semibold"
                >
                  All Management Members
                </label>
              </div>

              {managementRoles.map((role) => (
                <div key={role} className="flex items-center mb-3">
                  <input
                    type="radio"
                    id={role}
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={() => onRoleChange(role)}
                    className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                  />
                  <label
                    htmlFor={role}
                    className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                  >
                    {role}
                  </label>
                </div>
              ))}
            </div>

            {/* Border */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Faculty Members Section */}
            <div>
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Faculty Members
              </h4>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="all-faculty-roles" // Changed ID
                  name="role"
                  value="all-faculty" // Added specific value
                  checked={selectedRole === ""}
                  onChange={() => onRoleChange("")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="all-faculty-roles" // Match the new ID
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-semibold"
                >
                  All Faculty Members
                </label>
              </div>

              {facultyRoles.map((role) => (
                <div key={role} className="flex items-center mb-3">
                  <input
                    type="radio"
                    id={role}
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={() => onRoleChange(role)}
                    className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                  />
                  <label
                    htmlFor={role}
                    className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                  >
                    {role}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <>
            <Overlay />
            <MobileSidebar
              managementRoles={managementRoles}
              facultyRoles={facultyRoles}
              selectedRole={selectedRole}
              handleRoleChange={handleRoleChange}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoleFilterSidebar;

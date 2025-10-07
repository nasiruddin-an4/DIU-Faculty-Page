import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ListFilter } from "lucide-react";

const RoleFilterSidebar = ({ roles, selectedRole, onRoleChange }) => {
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
        <div className="p-4">
          <div className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Management Section */}
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Management
              </h4>
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="management-mobile"
                  name="role-mobile"
                  value="Departmental Management"
                  checked={selectedRole === "Departmental Management"}
                  onChange={() => handleRoleChange("Departmental Management")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="management-mobile"
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                >
                  Departmental Management
                </label>
              </div>
            </div>

            {/* Border */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Faculty Members Section */}
            <div className="mb-4">
              <h4 className="font-semibold text-neutral-600 mb-2">
                Departmental Faculty Members
              </h4>
              <div className="flex items-center mb-3">
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

              {roles
                .filter((role) => role !== "Departmental Management")
                .map((role) => (
                  <div key={role} className="flex items-center mb-3">
                    <input
                      type="radio"
                      id={`${role}-mobile`}
                      name="role-mobile"
                      value={role}
                      checked={selectedRole === role}
                      onChange={() => handleRoleChange(role)}
                      className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                    />
                    <label
                      htmlFor={`${role}-mobile`}
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
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="management"
                  name="role"
                  value="Departmental Management"
                  checked={selectedRole === "Departmental Management"}
                  onChange={() => onRoleChange("Departmental Management")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="management"
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-bold"
                >
                  Dean
                </label>
              </div>
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
                  id="all-roles"
                  name="role"
                  value=""
                  checked={selectedRole === ""}
                  onChange={() => onRoleChange("")}
                  className="peer w-4 h-4 text-[#00337C] focus:ring-[#00337C] checked:bg-[#00337C] cursor-pointer"
                />
                <label
                  htmlFor="all-roles"
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-[#00337C] transition-colors peer-checked:text-[#00337C] peer-checked:font-semibold"
                >
                  All Faculty Members
                </label>
              </div>

              {roles
                .filter((role) => role !== "Departmental Management")
                .map((role) => (
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

      {/* Mobile Sidebar and Overlay */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <>
            <Overlay />
            <MobileSidebar />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoleFilterSidebar;

import { useState, useEffect } from "react";
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
  const Overlay = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-100 md:hidden"
      onClick={() => setIsExpanded(false)}
    />
  );

  // Mobile sidebar content
  const MobileSidebar = () => (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-200 md:hidden"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <h3 className="font-bold text-lg text-neutral-800">Faculty Roles</h3>
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <FaTimes size={18} className="text-neutral-500" />
          </button>
        </div>

        <div className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="all-roles-mobile"
              name="role-mobile"
              value=""
              checked={selectedRole === ""}
              onChange={() => handleRoleChange("")}
              classClass="w-4 h-4 text-primary-600 focus:ring-primary-500"
            />
            <label
              htmlFor="all-roles-mobile"
              className="ml-2 text-neutral-700 cursor-pointer hover:text-primary-600 transition-colors"
            >
              All Roles
            </label>
          </div>

          {roles.map((role) => (
            <div key={role} className="flex items-center">
              <input
                type="radio"
                id={`${role}-mobile`}
                name="role-mobile"
                value={role}
                checked={selectedRole === role}
                onChange={() => handleRoleChange(role)}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <label
                htmlFor={`${role}-mobile`}
                className="ml-2 text-neutral-700 cursor-pointer hover:text-primary-600 transition-colors"
              >
                {role}
              </label>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
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
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-full z-90"
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
                  Faculty Roles
                </h3>
                <p className="text-sm text-neutral-500">
                  {selectedRole ? selectedRole : "All Roles"}
                </p>
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
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h3 className="font-bold text-xl text-neutral-800 flex items-center gap-2">
              <ListFilter /> Faculty Roles
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="all-roles"
                name="role"
                value=""
                checked={selectedRole === ""}
                onChange={() => onRoleChange("")}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <label
                htmlFor="all-roles"
                className="ml-2 text-neutral-700 cursor-pointer hover:text-primary-600 transition-colors"
              >
                All Roles
              </label>
            </div>

            {roles.map((role) => (
              <div key={role} className="flex items-center">
                <input
                  type="radio"
                  id={role}
                  name="role"
                  value={role}
                  checked={selectedRole === role}
                  onChange={() => onRoleChange(role)}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <label
                  htmlFor={role}
                  className="ml-2 text-neutral-700 cursor-pointer hover:text-primary-600 transition-colors"
                >
                  {role}
                </label>
              </div>
            ))}
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
    </>
  );
};

export default RoleFilterSidebar;

import { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RoleFilterSidebar = ({ roles, selectedRole, onRoleChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={toggleExpand}
      >
        <h3 className="font-bold text-lg text-neutral-800">Faculty Roles</h3>

        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isExpanded && (
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
              className="ml-2 text-neutral-700 cursor-pointer"
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
                className="ml-2 text-neutral-700 cursor-pointer"
              >
                {role}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleFilterSidebar;

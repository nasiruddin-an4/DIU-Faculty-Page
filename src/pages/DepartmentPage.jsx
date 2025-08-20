import { useState, useEffect } from "react";

import { useParams, Link, useSearchParams } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import SearchBar from "../components/home/SearchBar";

import RoleFilterSidebar from "../components/department/RoleFilterSidebar";

import FacultyCard from "../components/department/FacultyCard";

import { facultyRoles } from "../data/facultyRoles";
import { departments } from "../data/department";
import { facultyMembers } from "../data/facultyMembers";

const DepartmentPage = () => {
  const { deptId } = useParams();
  console.log("facultyRoles", facultyRoles);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedRole, setSelectedRole] = useState(
    searchParams.get("role") || ""
  );

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const [department, setDepartment] = useState(null);

  const [facultyList, setFacultyList] = useState([]);

  const [filteredFaculty, setFilteredFaculty] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dept = departments.find((d) => d.id === deptId);

    if (dept) {
      setDepartment(dept);

      const faculty = facultyMembers.filter((f) => f.department === deptId);

      setFacultyList(faculty);

      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [deptId]);

  useEffect(() => {
    if (facultyList.length > 0) {
      const filtered = facultyList.filter((faculty) => {
        const matchesRole = selectedRole ? faculty.role === selectedRole : true;

        const matchesSearch = searchTerm
          ? faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.email.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        return matchesRole && matchesSearch;
      });

      setFilteredFaculty(filtered);

      const params = {};

      if (selectedRole) params.role = selectedRole;

      if (searchTerm) params.search = searchTerm;

      setSearchParams(params, { replace: true });
    }
  }, [selectedRole, searchTerm, facultyList, setSearchParams]);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return (
      <div className="container-custom mx-auto py-20">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-neutral-200 rounded w-1/3"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                <div className="aspect-[4/3] bg-neutral-200 rounded-lg mb-4"></div>

                <div className="space-y-3">
                  <div className="h-6 bg-neutral-200 rounded w-3/4"></div>

                  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>

                  <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="container-custom mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Department Not Found</h2>

        <p className="text-neutral-600 mb-6">
          The department you are looking for does not exist.
        </p>

        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="bg-blue-50 text-white py-16">
        <div className="container-custom mx-auto text-center justify-content-center items-center">
          <p className="text-sm md:text-xl text-gray-600 mb-2">
            {department.facultyFullName}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            {department.name}
          </h1>

          <p className="text-white/80 max-w-3xl text-lg">
            {department.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        {/* <SearchBar onSearch={handleSearch} /> */}

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0">
          <div className="w-full md:w-1/5">
            <div className="sticky top-24">
              <RoleFilterSidebar
                roles={facultyRoles}
                selectedRole={selectedRole}
                onRoleChange={handleRoleChange}
              />
            </div>
          </div>

          <div className="w-full md:w-4/5">
            {/* <h2 className="text-3xl font-bold text-neutral-800 mb-8">
              {selectedRole ? `${selectedRole}s` : "Faculty Members"}

              <span className="text-neutral-500 ml-3 text-xl font-normal">
                ({filteredFaculty.length})
              </span>
            </h2> */}

            {filteredFaculty.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full">
                {filteredFaculty.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <p className="text-xl text-neutral-600 mb-4">
                  No faculty members found matching your criteria.
                </p>

                <button
                  onClick={() => {
                    setSelectedRole("");

                    setSearchTerm("");
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;

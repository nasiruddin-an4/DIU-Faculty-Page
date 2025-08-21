import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import Hero from "../components/home/Hero";

import SearchBar from "../components/home/SearchBar";

import FacultyFilterSidebar from "../components/home/FacultyFilterSidebar";

import DepartmentCard from "../components/home/DepartmentCard";

// import { faculties } from "../data/mockData";
import { faculties } from "../data/faculties";
import { departments } from "../data/department";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFaculty, setSelectedFaculty] = useState(
    searchParams.get("faculty") || ""
  );

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const [filteredDepartments, setFilteredDepartments] = useState(departments);

  useEffect(() => {
    // Filter departments based on selected faculty and search term

    const filtered = departments.filter((dept) => {
      const matchesFaculty = selectedFaculty
        ? dept.faculty === selectedFaculty
        : true;

      const matchesSearch = searchTerm
        ? dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dept.faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesFaculty && matchesSearch;
    });

    setFilteredDepartments(filtered);

    // Update URL params

    const params = {};

    if (selectedFaculty) params.faculty = selectedFaculty;

    if (searchTerm) params.search = searchTerm;

    setSearchParams(params, { replace: true });
  }, [selectedFaculty, searchTerm, setSearchParams]);

  const handleFacultyChange = (facultyId) => {
    setSelectedFaculty(facultyId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Hero />

      <div className="container-custom mx-auto py-12">
        <SearchBar onSearch={handleSearch} />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <FacultyFilterSidebar
              faculties={faculties}
              selectedFaculty={selectedFaculty}
              onFacultyChange={handleFacultyChange}
            />
          </div>

          <div className="w-full md:w-3/4 lg:w-4/5">
            <h2 className="section-title">
              {selectedFaculty
                ? `Departments in ${
                    faculties.find((f) => f.id === selectedFaculty).name
                  }`
                : "All Departments"}
            </h2>

            {filteredDepartments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDepartments.map((department) => (
                  <DepartmentCard key={department.id} department={department} />
                ))}
              </div>
            ) : (
              <div className="bg-neutral-100 rounded-lg p-8 text-center">
                <p className="text-lg text-neutral-600">
                  No departments found.
                </p>

                <button
                  onClick={() => {
                    setSelectedFaculty("");

                    setSearchTerm("");
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
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

export default HomePage;

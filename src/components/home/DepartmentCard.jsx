import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const DepartmentCard = ({ department }) => {
  return (
    <div className="card group h-full flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={department.imageUrl}
          alt={department.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-4 text-diuBlue transition-all duration-300 ease-out group-hover:text-primary-600 group-hover:-translate-y-1">
          {department.name}
        </h3>

        <div className="mt-auto text-center border border-diuBlue rounded-lg p-2 transition-all duration-700 ease-out group-hover:bg-gradient-to-r from-[#034EA2] to-[#002652]">
          <Link
            to={`/department/${department.id}`}
            className="inline-flex items-center text-diuBlue font-bold text-sm group-hover:text-white transition-colors"
          >
            View Department Faculty
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;

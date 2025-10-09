import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const DepartmentCard = ({ department }) => {
  return (
    <motion.div
      className="card group h-full flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      viewport={{ once: true }} 
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={department.imageUrl}
          alt={department.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-4 text-diuText transition-all duration-300 ease-out group-hover:-translate-y-2">
          {department.name}
        </h3>

        <div className="mt-auto text-center border border-diuText rounded-lg p-2 transition-all duration-700 ease-out group-hover:bg-gradient-to-r from-[#034EA2] to-[#002652]">
          <Link
            to={`/department/${department.id}`}
            className="inline-flex items-center text-diuText font-bold text-sm group-hover:text-white transition-colors"
          >
            View Department Faculty
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentCard;

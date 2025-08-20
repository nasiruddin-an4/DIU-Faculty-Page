import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProfileHeader from "../components/faculty/ProfileHeader";
import ProfileTabs from "../components/faculty/ProfileTabs";
import { getFacultyMemberById } from "../utils/dataUtils";

const LoadingSkeleton = () => (
  <div className="container-custom mx-auto py-20 text-center">
    <div className="animate-pulse space-y-4">
      <div className="h-40 bg-gray-200 rounded-lg"></div>
      <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto"></div>
      <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
    </div>
  </div>
);

const NotFound = () => (
  <div className="container-custom mx-auto py-20 text-center">
    <h2 className="text-2xl font-bold mb-4">Faculty Member Not Found</h2>
    <p className="text-neutral-600 mb-6">
      The faculty member you are looking for does not exist.
    </p>
    <Link to="/" className="btn-primary">
      Return to Home
    </Link>
  </div>
);

const FacultyProfilePage = () => {
  const { facultyId } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const facultyMember = getFacultyMemberById(facultyId);
    setFaculty(facultyMember);
    setLoading(false);
  }, [facultyId]);

  if (loading) return <LoadingSkeleton />;
  if (!faculty) return <NotFound />;

  return (
    <main className="pt-20">
      <div className="container-custom mx-auto">
        {/* Back Button */}
        <div className="py-6">
          <Link
            to={`/department/${faculty.department.id}`}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <FaArrowLeft />
            Back to {faculty.department.name}
          </Link>
        </div>

        {/* Profile Content */}
        <ProfileHeader faculty={faculty} />
        <div className="py-8">
          <ProfileTabs faculty={faculty} />
        </div>
      </div>
    </main>
  );
};

export default FacultyProfilePage;

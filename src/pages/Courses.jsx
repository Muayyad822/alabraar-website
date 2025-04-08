import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBook, FaClock, FaUsers, FaUserGraduate, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      if (!response.ok) throw new Error('Failed to fetch courses');
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleSyllabus = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  if (loading) return <div className="text-center py-10">Loading courses...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Discover our comprehensive Islamic education programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course._id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <FaBook className="mr-2 text-blue-600" />
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <FaClock className="mr-2" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaUsers className="mr-2" />
                    <span>Group Price: ${course.pricing.group}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaUserGraduate className="mr-2" />
                    <span>Private Price: ${course.pricing.private}</span>
                  </div>
                </div>

                {/* Syllabus Section */}
                <div className="mt-4 border-t pt-4">
                  <button
                    onClick={() => toggleSyllabus(course._id)}
                    className="flex items-center justify-between w-full text-left text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Course Syllabus</span>
                    {expandedCourse === course._id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  
                  {expandedCourse === course._id && (
                    <div className="mt-3 space-y-2 bg-gray-50 p-4 rounded-lg animate-fadeIn">
                      {course.syllabus.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to={user ? "/admission" : "/login"}
                  state={{ selectedCourse: course }}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6"
                >
                  {user ? "Enroll Now" : "Login to Enroll"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaEdit, FaTrash, FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa';
import CourseModal from '../../components/CourseModal';

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('active');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchCourses();
  }, [user, navigate]);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        logout();
        return;
      }

      console.log('Fetching courses...'); // Debug log

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/all`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server response:', errorData); // Debug log
        throw new Error(errorData.message || 'Failed to fetch courses');
      }

      const data = await response.json();
      console.log('Courses fetched:', data); // Debug log
      setCourses(data.data || []);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError(err.message);
      if (err.message.includes('unauthorized') || err.message.includes('invalid token') || err.message.includes('User not found')) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) throw new Error('Failed to delete course');
      fetchCourses();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStatusChange = async (courseId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${courseId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update course status');
      fetchCourses();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredCourses = courses.filter(course => 
    activeTab === 'active' 
      ? course.status === 'active'
      : ['inactive', 'draft'].includes(course.status)
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-main bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Course Management</h1>
          <button 
            onClick={() => {
              setCurrentCourse(null);
              setShowModal(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaPlus /> Add New Course
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 ${activeTab === 'active' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('active')}
          >
            Active Courses
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'drafts' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts & Inactive
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses.map((course) => (
                <tr key={course._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{course.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : course.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      onClick={() => {
                        setCurrentCourse(course);
                        setShowModal(true);
                      }}
                    >
                      <FaEdit className="inline-block" />
                    </button>
                    {course.status === 'active' ? (
                      <button 
                        className="text-yellow-600 hover:text-yellow-900 mr-4"
                        onClick={() => handleStatusChange(course._id, 'draft')}
                        title="Move to Drafts"
                      >
                        <FaEyeSlash className="inline-block" />
                      </button>
                    ) : (
                      <button 
                        className="text-green-600 hover:text-green-900 mr-4"
                        onClick={() => handleStatusChange(course._id, 'active')}
                        title="Make Active"
                      >
                        <FaEye className="inline-block" />
                      </button>
                    )}
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(course._id)}
                    >
                      <FaTrash className="inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <CourseModal
            course={currentCourse}
            onClose={() => setShowModal(false)}
            onSave={() => {
              setShowModal(false);
              fetchCourses();
            }}
          />
        )}
      </div>
    </div>
  );
}











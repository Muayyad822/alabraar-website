import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBook, FaUsers, FaHome, FaCog, FaChartBar } from 'react-icons/fa';

export default function AdminDashboard() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/admin"
                className={`inline-flex items-center px-1 pt-1 ${isActive('/admin')}`}
              >
                <FaHome className="mr-2" /> Dashboard
              </Link>
              <Link
                to="/admin/courses"
                className={`inline-flex items-center px-1 pt-1 ${isActive('/admin/courses')}`}
              >
                <FaBook className="mr-2" /> Courses
              </Link>
              <Link
                to="/admin/users"
                className={`inline-flex items-center px-1 pt-1 ${isActive('/admin/users')}`}
              >
                <FaUsers className="mr-2" /> Users
              </Link>
              <Link
                to="/admin/user-stats"
                className={`inline-flex items-center px-1 pt-1 ${isActive('/admin/user-stats')}`}
              >
                <FaChartBar className="mr-2" /> User Stats
              </Link>
              <Link
                to="/admin/settings"
                className={`inline-flex items-center px-1 pt-1 ${isActive('/admin/settings')}`}
              >
                <FaCog className="mr-2" /> Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Management Card */}
            <Link
              to="/admin/courses"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <FaBook className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Course Management</h3>
                    <p className="mt-1 text-sm text-gray-500">Manage your courses and content</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* User Stats Card */}
            <Link
              to="/admin/user-stats"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <FaChartBar className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">User Statistics</h3>
                    <p className="mt-1 text-sm text-gray-500">View active/inactive user stats</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* User Management Card */}
            <Link
              to="/admin/users"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <FaUsers className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">User Management</h3>
                    <p className="mt-1 text-sm text-gray-500">Manage users and permissions</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Settings Card */}
            {/* <Link
              to="/admin/settings"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <FaCog className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Settings</h3>
                    <p className="mt-1 text-sm text-gray-500">Configure system settings</p>
                  </div>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}




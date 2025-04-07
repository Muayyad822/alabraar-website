import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaSignOutAlt } from 'react-icons/fa';

export default function Profile() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    currentCourse: user?.currentCourse || ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/users/profile', {  // Updated endpoint
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add token
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      login(updatedUser); // Update the user context
      setSuccess('Profile updated successfully');
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <FaUser className="mr-2" /> My Profile
            </h2>
            <button
              onClick={handleLogout}
              className="flex items-center text-white hover:text-red-200 transition-colors duration-200"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {error && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaUser className="inline mr-2" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-600 px-4 py-2">{formData.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-600 px-4 py-2">{formData.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-600 px-4 py-2">{formData.phone || 'Not provided'}</p>
                  )}
                </div>

                {/* Current Course Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Current Course
                  </label>
                  <p className="text-gray-600 px-4 py-2">
                    {formData.currentCourse || 'No active course'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                  {isEditing ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center"
                      >
                        <FaTimes className="mr-2" /> Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                      >
                        <FaSave className="mr-2" /> Save Changes
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      <FaEdit className="mr-2" /> Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


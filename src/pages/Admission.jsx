import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBook, FaCalendarAlt, FaVenusMars, FaInfoCircle, FaPaperPlane } from "react-icons/fa";

export default function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    age: "",
    gender: "",
    experience: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your Google Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          age: "",
          gender: "",
          experience: "",
          goals: ""
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Admission Application</span>
            <span className="block text-blue-600">AlAbraar Islamic Foundation</span>
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Begin your journey of Islamic knowledge today
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center">
              <FaBook className="mr-2" /> Student Application Form
            </h3>
            <p className="mt-1">Complete this form to enroll in our programs</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                <FaInfoCircle className="inline mr-2" />
                Thank you! Your application has been submitted successfully. We'll contact you within 2 business days.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                <FaInfoCircle className="inline mr-2" />
                There was an error submitting your application. Please try again or contact us directly.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Personal Information</h4>
              </div>

              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              {/* Age */}
              <div className="relative">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="5"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your age"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="relative">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaVenusMars className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Course Information */}
              <div className="md:col-span-2 mt-4">
                <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Course Information</h4>
              </div>

              {/* Course Selection */}
              <div className="md:col-span-2 relative">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBook className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="">Select a course...</option>
                    <option value="Quran from Scratch">Quran from Scratch</option>
                    <option value="Arabiyyah Course">Arabiyyah Course</option>
                    <option value="Idaady Programme">Idaady Programme</option>
                    <option value="Thanawy Programme">Thanawy Programme</option>
                    <option value="Not sure - Need guidance">Not sure - Need guidance</option>
                  </select>
                </div>
              </div>

              {/* Previous Experience */}
              <div className="md:col-span-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Islamic/Arabic Studies Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Briefly describe any previous Islamic or Arabic studies experience..."
                />
              </div>

              {/* Learning Goals */}
              <div className="md:col-span-2">
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Learning Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What do you hope to achieve through this course?..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-800 mb-3">Admission Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Complete this application form</li>
            <li>Our team will review your application within 2 business days</li>
            <li>We'll contact you to discuss course placement and schedule</li>
            <li>Complete registration and payment process</li>
            <li>Begin your learning journey!</li>
          </ol>
          <div className="mt-4 text-sm text-gray-600">
            <p>Need help? Contact us at <a href="mailto:admissions@alabraar.edu" className="text-blue-600 hover:underline">admissions@alabraar.edu</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
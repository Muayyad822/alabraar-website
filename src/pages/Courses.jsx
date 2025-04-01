import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaLanguage, FaGraduationCap, FaMosque, FaCheck, FaTimes, FaClock, FaUsers, FaUser } from "react-icons/fa";

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSyllabus, setSelectedSyllabus] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openSyllabusModal = (index) => {
    setSelectedSyllabus(courses[index].syllabus);
    setSelectedCourse(courses[index].title);
    setIsModalOpen(true);
  };

  const closeSyllabusModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "overlay") {
      closeSyllabusModal();
    }
  };

  const courses = [
    {
      title: "Quran from Scratch",
      icon: <FaBook className="text-blue-600" />,
      description: "A foundational course for beginners to learn Arabic letters, pronunciation, and Quranic reading with Tajweed.",
      duration: "3 Months",
      groupPrice: "$50/month",
      privatePrice: "$80/month",
      features: [
        "Personalized feedback",
        "Tajweed certification",
        "Flexible scheduling"
      ],
      syllabus: [
        "Introduction to Arabic Alphabets and Pronunciation",
        "Basic Tajweed Rules",
        "Reading Short Surahs with Guidance",
        "Understanding Quranic Phonetics",
        "Practicing Daily Recitation"
      ]
    },
    {
      title: "Arabiyyah Course",
      icon: <FaLanguage className="text-green-600" />,
      description: "Master Arabic language skills, including speaking, reading, writing, and grammar. Suitable for all levels.",
      duration: "6 Months",
      groupPrice: "$60/month",
      privatePrice: "$90/month",
      features: [
        "Modern Standard Arabic",
        "Conversational practice",
        "Cultural immersion"
      ],
      syllabus: [
        "Arabic Grammar (Nahw & Sarf)",
        "Conversational Arabic",
        "Arabic Writing and Composition",
        "Reading Classical and Modern Texts",
        "Understanding Arabic Literature & Poetry"
      ]
    },
    {
      title: "Idaady Programme",
      icon: <FaGraduationCap className="text-purple-600" />,
      description: "A preparatory course designed to build strong Arabic and Islamic foundations before higher studies.",
      duration: "4 Months",
      groupPrice: "$55/month",
      privatePrice: "$85/month",
      features: [
        "Comprehensive curriculum",
        "Islamic fundamentals",
        "Academic preparation"
      ],
      syllabus: [
        "Basic Arabic and Quran Recitation",
        "Fundamentals of Fiqh",
        "Introduction to Hadith & Seerah",
        "Islamic Manners and Ethics",
        "Memorization of Essential Duas"
      ]
    },
    {
      title: "Thanawy Programme",
      icon: <FaMosque className="text-yellow-600" />,
      description: "An advanced Islamic studies program covering Tafseer, Hadith, Fiqh, and more for dedicated students.",
      duration: "12 Months",
      groupPrice: "$70/month",
      privatePrice: "$100/month",
      features: [
        "Scholar-led classes",
        "In-depth analysis",
        "Ijazah opportunities"
      ],
      syllabus: [
        "Tafseer of Selected Surahs",
        "Hadith Studies & Authentication",
        "Islamic Jurisprudence (Fiqh)",
        "Aqeedah (Islamic Theology)",
        "Islamic History & Civilization"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Structured Islamic and Arabic programs with flexible learning options
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-6 max-w-7xl mx-auto w-full">
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              {/* Course Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white">
                <div className="flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    {course.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6">{course.description}</p>

                {/* Course Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full inline-block">
                      <FaClock className="text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full inline-block">
                      <FaUsers className="text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Group</p>
                    <p className="font-semibold">{course.groupPrice}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-full inline-block">
                      <FaUser className="text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Private</p>
                    <p className="font-semibold">{course.privatePrice}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => openSyllabusModal(index)}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition"
                  >
                    View Syllabus
                  </button>
                  <Link
                    to="/admission"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 text-center transition"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      {isModalOpen && (
        <div
          className="overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white rounded-t-xl flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedCourse} Syllabus</h3>
              <button
                onClick={closeSyllabusModal}
                className="text-white hover:text-gray-200 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {selectedSyllabus.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <FaCheck className="text-blue-600 text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Link
                  to="/admission"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Enroll in This Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Islamic Learning Journey</h2>
          <p className="text-lg mb-6">
            Join hundreds of students worldwide in mastering Quranic and Arabic studies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/admission"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Contact Advisor
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
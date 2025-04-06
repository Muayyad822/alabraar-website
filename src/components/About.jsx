import React from 'react'

const About = () => {
  return (
    <section className="py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">About Us</h2>
    
    {/* Mission & Vision Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Mission Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-200 flex items-start">
        <div className="bg-blue-100 p-4 rounded-full mr-6">
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h3>
          <p className="text-gray-700">Al Abraar Foundation is dedicated to teaching Qur’anic recitation, memorization, Arabic language, and Islamic
            sciences. We strive to nurture a love for the Qur’an, instill discipline, and uphold Islamic values. Through
            structured education, we empower individuals to apply their knowledge in daily life. Our goal is to preserve
            and spread the teachings of Islam with excellence and sincerity.</p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border border-green-200 flex items-start">
        <div className="bg-green-100 p-4 rounded-full mr-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Our Vision</h3>
          <p className="text-gray-700">We envision becoming a leading Islamic academy that produces skilled Qur’an reciters, scholars, and
            educators. Our aim is to bridge knowledge and practice, inspiring individuals to live by Islamic principles.
            Through quality education, we seek to spread the light of the Qur’an and shape future leaders who positively
            impact their communities.</p>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {/* Students */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
        <p className="text-gray-600 font-medium">Students Enrolled</p>
      </div>

      {/* Courses */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-green-600 mb-2">15+</h3>
        <p className="text-gray-600 font-medium">Courses Offered</p>
      </div>

      {/* Teachers */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
        <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-purple-600 mb-2">20+</h3>
        <p className="text-gray-600 font-medium">Qualified Teachers</p>
      </div>

      {/* Countries */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
        <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-yellow-600 mb-2">3+</h3>
        <p className="text-gray-600 font-medium">Countries Reached</p>
      </div>
    </div>

    {/* Teaching Methodology */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Teaching Approach</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Interactive Learning */}
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-blue-700">Interactive Classes</h4>
          <p className="text-gray-600">Live sessions with Q&A and discussions</p>
        </div>

        {/* Personalized */}
        <div className="text-center">
          <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-green-700">Personalized Learning Path </h4>
          <p className="text-gray-600">1-on-1 feedback and progress tracking</p>
        </div>

        {/* Structured Curriculum */}
        <div className="text-center">
          <div className="bg-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-purple-700">Structured Curriculum</h4>
          <p className="text-gray-600">Step-by-step learning path with milestones</p>
        </div>

        {/* Expert Mentorship */}
        {/* <div className="text-center">
          <div className="bg-pink-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-pink-700">Expert Mentorship</h4>
          <p className="text-gray-600">Step-by-step learning path with milestones</p>
        </div> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default About
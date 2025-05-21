
const CourseStats = () => {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact in Numbers</h2>
          <div className="mt-2 h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-lg mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Expert-Led Courses</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="inline-flex items-center justify-center p-2 bg-purple-50 rounded-lg mb-4">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <div className="text-4xl font-extrabold text-secondary mb-2">95%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-lg mb-4">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="text-4xl font-extrabold text-accent mb-2">150k+</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-lg mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <div className="text-4xl font-extrabold text-primary mb-2">85%</div>
            <div className="text-sm text-gray-600">Job Placement Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStats;

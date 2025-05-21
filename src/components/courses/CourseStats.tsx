
const CourseStats = () => {
  return (
    <section className="bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Expert-Led Courses</div>
          </div>
          <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-3xl font-bold text-accent mb-2">150k+</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </div>
          <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-gray-600">Job Placement Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStats;

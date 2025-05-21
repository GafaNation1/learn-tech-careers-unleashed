
const CourseFAQ = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Everything you need to know about our courses and learning process</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-lg">How do the online courses work?</h4>
            <p className="text-gray-600 mt-2">
              Our courses combine pre-recorded video lessons, interactive coding exercises, projects, and live sessions with instructors. You'll have access to a learning community and regular opportunities to ask questions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-lg">Do I get a certificate after completion?</h4>
            <p className="text-gray-600 mt-2">
              Yes, upon successful completion of a course, you will receive an industry-recognized certificate that you can share with employers or on your LinkedIn profile.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-lg">What if I'm not satisfied with a course?</h4>
            <p className="text-gray-600 mt-2">
              We offer a 7-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can request a full refund within the first week of starting the course.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-lg">How long do I have access to course materials?</h4>
            <p className="text-gray-600 mt-2">
              You'll have lifetime access to all course materials, including future updates. This allows you to revisit content as needed throughout your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;

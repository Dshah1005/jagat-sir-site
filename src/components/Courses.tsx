const courses = [
  {
    title: "CA Foundation",
    description:
      "Comprehensive preparation for Chartered Accountancy Foundation covering all four papers with exam-oriented teaching.",
    tags: ["Accounting", "Business Laws", "QA(Business Mathematics,Logical Reasoning, Statistics)", "Business Economics"],
    featured: true,
  },
  {
    title: "College Commerce",
    description:
      "Focused coaching for junior and senior college commerce students in core subjects.",
    tags: ["CBSE", "ISC", "STATE BOARDS","Mathematics","Accounting","Economics","OCM"],
  },
  {
    title: "College Science",
    description:
      "Specialized guidance for Junior College science students with emphasis on concepts and problem-solving.",
    tags: ["FYJC", "SYJC", "Mathematics", "Physics","Chemistry","Biology"],
  },
  {
    title: "School Mathematics",
    description:
      "Expert Coaching for 6th, 7th, 8th, 9th, 10th",
    tags: ["ICSE", "CBSE", "IGCSE", "IB"],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-28 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16 animate-fadeUp">
          <span className="inline-block mb-4 px-5 py-2 rounded-full 
            bg-orange-100 text-orange-600 font-semibold">
            Our Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0b3a5c]">
            Courses We <span className="text-orange-500">Offer</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully designed programs that build concepts, confidence, and results.
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 bg-white shadow-lg 
                transition transform hover:-translate-y-2 hover:shadow-2xl
                animate-fadeUp ${
                  course.featured
                    ? "md:col-span-2 border-2 border-orange-400"
                    : ""
                }`}
            >
              <h3
                className={`mb-4 ${
                  course.featured
                    ? "text-4xl font-extrabold text-orange-500"
                    : "text-3xl font-bold text-[#0b3a5c]"
                }`}
              >
                {course.title}
              </h3>

              <p className="text-lg text-gray-700 mb-6 max-w-3xl">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {course.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full 
                      bg-[#eef3f8] text-[#0b3a5c] 
                      font-semibold text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

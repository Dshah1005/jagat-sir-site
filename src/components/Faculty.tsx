import { Clock, BookOpen } from "lucide-react";

const faculty = [
  {
    name: "Jagat Sir(Founder & Head Faculty)",
    role: "",
    experience: "20+ Years, Masters in Mathematics",
    subjects: "CA Foundation, Mathematics",
    points: [
      "Expert in CA Foundation preparation",
      "Specialized teaching methodology",
      "Thousands of successful students",
    ],
    highlight: true,
  },
  {
    name: "Rajiv Sir(Senior Faculty)",
    role: "M.com, LLB",
    experience: "20+ Years, Specialized in Accounts and Law",
    subjects: "Mathematics, Commerce",
    points: [
      "Board exam specialist",
      "Conceptual teaching approach",
      "Individual attention to students",
    ],
  },

  {
    name: "Mili Madam(Senior Faculty) " ,
    role: "M.A Economics, B.ed",
    experience: "10+ Years, Gold Medalist in Economics",
    subjects: "Economics",
    points: [
      "Student Engagement and Motivation",
      "Focus on conceptual learning",
      "Expert in simplifying complex concepts",
    ],
  },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="py-28 bg-[#faf9f6] text-[#1f3a5f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-[#fef3c7] text-[#b45309] font-medium">
            Meet The Team
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Expert{" "}
            <span className="text-[#f59e0b]">Faculty</span>
          </h2>

          <p className="text-[#4b6b88] max-w-2xl mx-auto">
            Learn from experienced educators dedicated to student success.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {faculty.map((member, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-2xl p-10 shadow-sm ${
                member.highlight
                  ? "border-[#f59e0b]"
                  : "border-gray-200"
              }`}
            >
              {/* Highlight Badge */}
              {member.highlight && (
                <span className="absolute -top-3 left-8 px-4 py-1 text-xs rounded-full bg-[#f59e0b] text-white font-medium">
                  Lead Instructor
                </span>
              )}

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#eef2f7] flex items-center justify-center text-[#1f3a5f] text-2xl font-bold mb-6">
                {member.name.charAt(0)}
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#4b6b88] mb-6">
                {member.role}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm mb-6">
                <div className="flex items-center gap-2 text-[#1f3a5f]">
                  <Clock size={14} className="text-[#f59e0b]" />
                  {member.experience}
                </div>

                <div className="flex items-center gap-2 text-[#1f3a5f]">
                  <BookOpen size={14} className="text-[#f59e0b]" />
                  {member.subjects}
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3 text-sm text-[#4b6b88]">
                {member.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#f59e0b] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

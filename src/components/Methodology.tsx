import { useEffect } from "react";

const Methodology = () => {
  const steps = [
    {
      title: "Chapterwise Oral Test",
      marks: "20 Marks",
      description:
        "Verbal assessments to ensure concept clarity and effective communication.",
    },
    {
      title: "Chapterwise Conceptual Test",
      marks: "20 Marks",
      description:
        "Evaluation of conceptual understanding using application-based questions.",
    },
    {
      title: "Chapterwise Written Test",
      marks: "30 Marks",
      description:
        "Structured written assessments to strengthen exam readiness.",
    },
    {
      title: "Board Paper Practice",
      marks: "80 Marks",
      description:
        "Practice of complete board papers to improve speed, accuracy, and confidence.",
    },
    {
      title: "Prelims Examination",
      marks: "80 Marks",
      description:
        "Full-length preliminary exams simulating actual board exam conditions.",
    },
  ];

  /* Reveal animation on scroll */
  useEffect(() => {
    const items = document.querySelectorAll(".method-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="methodology"
      className="py-28 bg-[#faf9f6] text-[#1f3a5f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-[#f59e0b]">Assessment Methodology</span>
          </h2>
          <p className="text-[#4b6b88] max-w-2xl mx-auto">
            A structured, step-by-step evaluation system designed to track
            progress and ensure academic excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="method-card reveal bg-white border border-gray-200 rounded-2xl p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {step.title}
                </h3>

                <span className="mt-3 md:mt-0 inline-block px-5 py-1.5 text-sm rounded-full bg-[#fef3c7] text-[#b45309] font-semibold">
                  {step.marks}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 mb-5" />

              {/* Description */}
              <p className="text-[#4b6b88] max-w-3xl leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

import { useEffect } from "react";

const reviews = [
  {
    name: "Karunakar Devadiga",
    time: "a week ago",
    text:
      "Best Sir I ever saw… best way of teaching style n easy to make me understand. I scored full marks in final exams. Thank you Jagat Sir 💯",
  },
  {
    name: "Richa Mendriatta",
    time: "4 months ago",
    text:
      "Jagat sir indeed is one of the best teachers and mentor for Maths one could ever get. His unique style of teaching is unmatchable.",
  },
  {
    name: "Nikita Rajbhar",
    time: "9 months ago",
    text:
      "Jagat sir makes math so much easier to understand. He explains everything step by step.",
  },
  {
    name: "Esika Kargutkar",
    time: "11 months ago",
    text:
      "An outstanding mathematics teacher! He explains complex concepts with clarity and patience.",
  },
  {
    name: "Jay Dubey",
    time: "a year ago",
    text:
      "Jagat sir is one of the best mentors for maths. You’ll feel motivated and confident.",
  },
  {
    name: "Mamta",
    time: "8 months ago",
    text:
      "Maths never felt this easy till Jagat sir started teaching me. I ended up scoring in merit.",
  },
  {
    name: "Shraddha Raval",
    time: "3 years ago",
    text:
      "My son is enjoying learning Maths and understands concepts clearly now.",
  },
  {
    name: "Karuna Varma",
    time: "2 months ago",
    text:
      "Learning math with Jagat sir was a great experience.",
  },
  {
    name: "Anupama Bhattacharya",
    time: "3 years ago",
    text:
      "Jagat sir’s technique and simple ways to solve Maths were brilliant.",
  },
  {
    name: "Sheetal Venkat",
    time: "a year ago",
    text:
      "The world needs more teachers like you. Thanks for creating interest in Maths.",
  },
];

const Reviews = () => {
  /* Reveal animation */
  useEffect(() => {
    const cards = document.querySelectorAll(".review-animate");
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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      className="py-28 bg-[#f8fafc] text-[#0f2a44]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Parents & Students{" "}
            <span className="text-[#f59e0b]">Say</span>
          </h2>
          <p className="text-[#3f5f7a] max-w-2xl mx-auto">
            Real feedback from students and parents who have experienced our
            teaching approach.
          </p>
        </div>

        {/* Reviews */}
        <div className="review-scroll">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card review-animate reveal bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-[#0f2a44]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[#6b7280]">
                    {review.time}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-sm text-[#3f5f7a] leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Stars */}
              <div className="text-[#f59e0b] text-sm tracking-wide">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

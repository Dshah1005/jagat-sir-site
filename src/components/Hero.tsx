import { PhoneCall } from "lucide-react";

/* ================= FORMULAS ================= */
const formulas = [
  "A = P(1 + r)^n",
  "x² + y²",
  "x² − y²",
  "√x",
  "π",
  "Σ",
  "∑ n²",
  "log x",
  "ln x",
  "d/dx",
  "∫ f(x) dx",
  "∫ e^x dx",
  "lim x→∞",
  "Δx → 0",
  "a² + b² = c²",
  "sin θ",
  "cos θ",
  "tan θ",
  "e^x",
  "|x|",
  "f′(x)",
  "n!",
  "C(n,r)",
  "dy/dx",
  "μ",
  "σ²",
  "P(A ∩ B)",
  "P(A | B)",
];

/* ================= HERO ================= */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* ================= GRID BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="
            grid
            grid-cols-6
            md:grid-cols-8
            lg:grid-cols-10
            gap-y-16
            gap-x-12
            p-16
          "
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <span
              key={i}
              className="
                text-blue-600/25
                text-lg
                md:text-xl
                font-medium
                text-center
                whitespace-nowrap
              "
            >
              {formulas[i % formulas.length]}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-7 py-4 mb-10 rounded-full bg-white border border-gray-200 text-xl md:text-2xl text-gray-800 shadow">
  🎓
  <span className="font-bold tracking-wide">
    20+ Years of Excellence in Education
  </span>
</div>



        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-blue-900">
          Jagat&apos;s <span className="text-orange-500">Tutorials</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          We don&apos;t just teach, we create{" "}
          <span className="text-orange-500 font-semibold">Champions</span> 
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="tel:8097991007"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg transition"
          >
            <PhoneCall size={18} />
            Call Jagat Sir
          </a>

          <a
            href="tel:9767665591"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg transition"
          >
            <PhoneCall size={18} />
            Call Rajiv Sir
          </a>

          <a
            href="#courses"
            className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

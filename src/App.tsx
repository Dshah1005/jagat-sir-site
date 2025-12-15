import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Methodology from "./components/Methodology";
import Reviews from "./components/Reviews";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white math-grid">
      <Navbar />

      <main className="pt-20 mobile-safe-bottom">
        <div className="reveal">
          <Hero />
        </div>

        <div className="reveal">
          <Courses />
        </div>

        <div className="reveal">
          <Methodology />
        </div>

        <div className="reveal">
          <Reviews />
        </div>

        <div className="reveal">
          <Faculty />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

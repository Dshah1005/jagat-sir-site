import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-[#faf9f6] text-[#1f3a5f]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Become a{" "}
          <span className="text-[#f59e0b]">Champion?</span>
        </h2>

        <p className="text-[#4b6b88] max-w-2xl mx-auto mb-12">
          Take the first step towards academic excellence. Contact us today and
          let’s discuss how we can help you achieve your goals.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Jagat Sir */}
          <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b] flex items-center justify-center text-white">
                <Phone />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-1 text-[#1f3a5f]">
              Jagat Sir
            </h3>
            <p className="text-sm text-[#4b6b88] mb-4">
              Founder & Head Faculty
            </p>

            <a
              href="tel:8097991007"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#f59e0b] text-white font-semibold hover:bg-[#e58e06] transition"
            >
              <Phone size={16} />
              8097991007
            </a>
          </div>

          {/* Rajiv Sir */}
          <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b] flex items-center justify-center text-white">
                <Phone />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-1 text-[#1f3a5f]">
              Rajiv Sir
            </h3>
            <p className="text-sm text-[#4b6b88] mb-4">
              Senior Faculty
            </p>

            <a
              href="tel:9767665591"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#f59e0b] text-white font-semibold hover:bg-[#e58e06] transition"
            >
              <Phone size={16} />
              9767665591
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 text-sm text-[#4b6b88] flex justify-center gap-6 flex-wrap">
          <span>✔ Morning & Evening Batches</span>
          <span>✔ Free Demo Class Available</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

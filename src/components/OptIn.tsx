import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OptIn = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    mobile: "",
    consent: true,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.consent) {
      alert("Please provide consent");
      return;
    }

    console.log(form);

    alert("Submitted Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#4f46e5] text-white py-20 text-center relative">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-6 top-6 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm backdrop-blur transition"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
          Customer Opt-In Form
        </h1>

        <p className="text-sm text-white/90">
          Home : Customer Opt-In Form
        </p>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-10 space-y-6"
        >

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-5 py-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Terms */}
          <div className="text-gray-600 text-sm space-y-3 leading-relaxed">

            <p>
              By clicking Submit, you agree to our{" "}
              <a
                href="https://www.k3digitalmedia.com/terms-and-conditions"
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                Terms of Services
              </a>{" "}
              and that you have read our{" "}
              <a
                href="https://www.k3digitalmedia.com/privacy-policy"
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                Privacy Policy
              </a>
            </p>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                I hereby authorize to send notifications on
                SMS/Messages/Promotional/Informational messages
              </span>
            </label>

          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-3 rounded-lg shadow-md transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default OptIn;
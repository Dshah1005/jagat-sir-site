import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Privacy Policy
        </h1>

        <p className="text-lg text-white">
          <Link to="/" className="opacity-80 hover:opacity-100">
            Home
          </Link>
          <span className="mx-2">:</span> Privacy Policy
        </p>
      </div>


      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-[#4b5563]">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">Privacy Policy</p>
          <h2 className="text-3xl font-bold text-[#1f2937]">
            Privacy Policy
          </h2>
        </div>


        <p className="mb-6">
          This Privacy Policy explains how Jagats Tutorial ("we", "us", or "our")
          collects, uses, and discloses your personal information when you use
          our website and services.
        </p>

        <p className="mb-6">
          We respect your privacy and are committed to protecting your personal
          information. If you have any questions or concerns about our Privacy
          Policy, please contact us at jagatstutorial@gmail.com.
        </p>


        {/* 1 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          1. Information We Collect
        </h3>

        <h4 className="font-semibold mb-2">1.1 Personal Information</h4>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          phone number, and other contact details when you voluntarily provide
          them through forms or communication with us.
        </p>

        <h4 className="font-semibold mb-2">1.2 Usage Data</h4>
        <p className="mb-6">
          We may automatically collect certain information when you visit our
          website, including IP address, browser type, operating system,
          referring URLs, pages viewed, and other usage data. We may use cookies
          and similar technologies to collect this information.
        </p>


        {/* 2 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          2. Use of Information
        </h3>

        <p className="mb-4">
          We may use the information we collect for various purposes, including:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Providing and maintaining our educational services</li>
          <li>Communicating with you and responding to inquiries</li>
          <li>Sending updates, notifications, or promotional information</li>
          <li>Improving our services and website performance</li>
          <li>Detecting and preventing technical or security issues</li>
        </ul>

        <p className="mb-6">
          We will only use your personal information for the purposes for which
          it was collected unless required otherwise by law.
        </p>


        {/* 3 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          3. Disclosure of Information
        </h3>

        <p className="mb-4">
          We may share your personal information with trusted third-party
          service providers who assist us in operating our services. These
          parties are obligated to keep your information secure.
        </p>

        <p className="mb-6">
          We do not sell, rent, or trade your personal information to third
          parties without your consent unless required by law.
        </p>


        {/* 4 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          4. Data Security
        </h3>

        <p className="mb-6">
          We take reasonable precautions to protect your personal information
          from unauthorized access or disclosure. However, no internet
          transmission is completely secure.
        </p>


        {/* 5 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          5. Your Rights
        </h3>

        <p className="mb-6">
          You may request access, correction, or deletion of your personal
          information by contacting us.
        </p>


        {/* 6 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          6. Changes to This Privacy Policy
        </h3>

        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page.
        </p>


        {/* 7 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          7. Contact Us
        </h3>

        <p>
          Jagats Tutorial <br />
          3rd Floor, Mahadev Building, Krishna Society, <br />
          Sanjay Nagar, Charkop, Kandivali West, <br />
          Mumbai – 400067, Maharashtra, India <br />
          Phone: +91 80979 91007 <br />
          Email: jagatstutorial@gmail.com
        </p>

        <p className="mt-10 text-sm text-gray-500">
          By using our website, you consent to the collection and use of your
          personal information as described in this Privacy Policy.
        </p>

      </div>
    </div>
  );
};

export default Privacy;
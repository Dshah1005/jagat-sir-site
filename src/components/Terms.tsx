import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Terms & Conditions
        </h1>

        <p className="text-lg">
          <Link to="/" className="opacity-80 hover:opacity-100">
            Home
          </Link>
          <span className="mx-2">:</span> Terms & Conditions
        </p>
      </div>


      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-[#4b5563]">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">Terms & Conditions</p>
          <h2 className="text-3xl font-bold text-[#1f2937]">
            Terms & Conditions
          </h2>
        </div>


        <p className="mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions")
          carefully before using the Jagats Tutorial website (the "Site")
          operated by Jagats Tutorial ("us", "we", or "our").
        </p>

        <p className="mb-6">
          Your access to and use of the Site and our educational services is
          conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, students, parents, and others who
          access or use our services.
        </p>

        <p className="mb-6">
          By accessing or using our services, you agree to be bound by these
          Terms. If you disagree with any part of the Terms, then you may not
          access the Site or services.
        </p>


        {/* 1 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          1. Intellectual Property
        </h3>

        <p className="mb-4">
          The Site and its original content, features, materials, notes,
          videos, and functionality are owned by Jagats Tutorial and are
          protected by applicable copyright and intellectual property laws.
        </p>

        <p className="mb-6">
          You may not modify, copy, reproduce, republish, upload, post,
          transmit, or distribute any material from our institute without
          prior written permission.
        </p>


        {/* 2 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          2. Use License
        </h3>

        <p className="mb-4">
          Permission is granted to access materials for personal educational
          use only. This is the grant of a license, not a transfer of ownership.
          Under this license you may not:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to reverse engineer any content or software</li>
          <li>Remove copyright or proprietary notations</li>
          <li>Share or distribute materials without permission</li>
        </ul>

        <p className="mb-6">
          This license shall automatically terminate if you violate any of
          these restrictions and may be terminated by Jagats Tutorial at any
          time.
        </p>


        {/* 3 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          3. Disclaimer
        </h3>

        <p className="mb-6">
          The materials and services are provided on an "as is" basis. Jagats
          Tutorial makes no warranties, expressed or implied, and hereby
          disclaims all warranties including merchantability, fitness for a
          particular purpose, or non-infringement.
        </p>


        {/* 4 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          4. Limitations
        </h3>

        <p className="mb-6">
          In no event shall Jagats Tutorial be liable for any damages
          (including loss of data, academic performance issues, or business
          interruption) arising out of the use or inability to use our
          materials or services.
        </p>


        {/* 5 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          5. Governing Law
        </h3>

        <p className="mb-6">
          These Terms shall be governed and construed in accordance with the
          laws of India.
        </p>


        {/* 6 */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-[#1f2937]">
          6. Changes to Terms
        </h3>

        <p className="mb-6">
          We reserve the right to modify or replace these Terms at any time.
          Continued use of our services after changes constitutes acceptance
          of the updated Terms.
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
          By accessing or using the Site, you agree to be bound by these Terms
          and Conditions. If you do not agree, you are not authorized to use
          our services.
        </p>

      </div>
    </div>
  );
};

export default Terms;
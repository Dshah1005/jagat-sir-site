import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#faf9f6] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">

        {/* Brand */}
        <h3 className="text-2xl font-bold text-[#1f3a5f]">
          Jagats <span className="text-[#f59e0b]">Tutorial</span>
        </h3>

        {/* Address */}
        <div className="flex items-start justify-center gap-3 text-[#4b6b88] text-sm max-w-xl mx-auto">
          <MapPin size={18} className="mt-1 text-[#f59e0b]" />
          <p className="leading-relaxed">
            3rd Floor, Mahadev Bldg, Krishna Society, <br />
            Sanjay Nagar, Charkop, <br />
            Kandivali West, Mumbai – 400067
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 max-w-sm mx-auto" />

        {/* Copyright */}
        <p className="text-xs text-[#6b7280]">
          © {new Date().getFullYear()} Jagat's Tutorial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

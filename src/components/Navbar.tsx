import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { name: "Courses", href: "#courses" },
  { name: "Methodology", href: "#methodology" },
  { name: "Faculty", href: "#faculty" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 font-bold text-[#1f3a5f]">
          <span className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#f59e0b] flex items-center justify-center text-white text-sm md:text-lg shadow-sm">
            🎓
          </span>
          <span className="text-sm md:text-lg tracking-wide">
            Jagat's <span className="text-[#f59e0b]">Tutorial</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative transition ${
                active === link.name
                  ? "text-[#f59e0b]"
                  : "text-[#1f3a5f] hover:text-[#f59e0b]"
              }`}
            >
              {link.name}
              {active === link.name && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#f59e0b] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Opt-In */}
          <a
            href="/opt-in"
            className="flex items-center border border-[#f59e0b] text-[#f59e0b] px-3 md:px-5 py-2 rounded-full font-semibold hover:bg-[#f59e0b] hover:text-white transition text-sm"
          >
            Opt-In
          </a>

          {/* Call */}
          <a
            href="tel:8097991007"
            className="flex items-center gap-1 bg-[#f59e0b] text-white px-3 md:px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#e58e06] transition text-sm"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 gap-4 text-sm font-semibold text-[#1f3a5f]">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setOpen(false);
                }}
                className="hover:text-[#f59e0b]"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
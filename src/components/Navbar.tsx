import { useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { name: "Courses", href: "#courses" },
  { name: "Methodology", href: "#methodology" },
  { name: "Faculty", href: "#faculty" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-[#1f3a5f]">
          <span className="w-10 h-10 rounded-lg bg-[#f59e0b] flex items-center justify-center text-white text-lg shadow-sm">
            🎓
          </span>
          <span className="text-lg tracking-wide">
            Jagat's <span className="text-[#f59e0b]">Tutorial</span>
          </span>
        </div>

        {/* Links */}
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

              {/* Active underline */}
              {active === link.name && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#f59e0b] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Call Button */}
        <a
          href="tel:8097991007"
          className="flex items-center gap-2 bg-[#f59e0b] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-[#e58e06] hover:shadow-lg transition"
        >
          <Phone size={15} />
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

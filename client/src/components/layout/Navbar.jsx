import { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteContent } from "../../data/siteContent";
import logo from "../../assets/images/logo.png";
const navItems = [
  { label: "Home", path: "/" },
  ...siteContent.nav.filter(
    (item) => item.path !== "/" && item.path !== "/contact"
  ),
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-charcoal-950/72 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
       <NavLink to="/" onClick={() => setIsOpen(false)}>
  <img
    src={logo}
    alt="Blackmont"
    className="h-14 md:h-12 lg:h-15 object-contain"
  />
</NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] transition-all duration-300 ${
                  isActive
                    ? "bg-gold-500/10 text-gold-400"
                    : "text-white/68 hover:bg-white/5 hover:text-gold-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-gold-500/40 hover:text-gold-300 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-current transition ${
                isOpen ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-[1.5px] w-4 bg-current transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-current transition ${
                isOpen ? "top-[6px] -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>

        <NavLink
          to="/contact"
          className="gold-glint hidden rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-charcoal-950 md:inline-flex"
        >
          Contact
        </NavLink>
      </div>

      <div
        className={`overflow-hidden border-t border-white/8 bg-charcoal-950/95 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2 px-6 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.24em] transition ${
                  isActive
                    ? "border-gold-500/40 bg-gold-500/10 text-gold-300"
                    : "border-white/8 bg-white/[0.03] text-white/75 hover:border-gold-500/30 hover:text-gold-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-charcoal-950"
          >
            Private Advisory
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

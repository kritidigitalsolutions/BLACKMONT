import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    activePaths: [
      "/about-blackmont",
      "/about/mission-vision",
      "/about/leadership",
    ],
    children: [
      { label: "About Blackmont", to: "/about-blackmont" },
      { label: "Mission & Vision", to: "/about/mission-vision" },
      { label: "Leadership", to: "/about/leadership" },
    ],
  },
  { label: "Services", to: "/services" },
  {
    label: "Insights",
    activePaths: ["/insights", "/newsroom"],
    children: [
      { label: "Blog", to: "/insights" },
      { label: "Newsroom", to: "/newsroom" },
    ],
  },
  {
    label: "Investor Relations",
    activePaths: [
      "/investor-relations",
      "/investor-relations/overview",
      "/investor-relations/stock-information",
      "/investor-relations/events",
      "/investor-relations/reports",
      "/corporate-governance",
    ],
    children: [
      { label: "Overview", to: "/investor-relations/overview" },
      { label: "Reports", to: "/investor-relations/reports" },
      { label: "Stock Information", to: "/investor-relations/stock-information" },
      { label: "Events & Presentations", to: "/investor-relations/events" },
      { label: "Corporate Governance", to: "/corporate-governance" },
    ],
  },
];

const Chevron = ({ isOpen }) => (
  <svg
    viewBox="0 0 12 12"
    aria-hidden="true"
    className={`h-2.5 w-2.5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      d="M2.25 4.5 6 8.25 9.75 4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const pathname = location.pathname;

  const parentActiveMap = useMemo(
    () =>
      Object.fromEntries(
        navItems
          .filter((item) => item.children)
          .map((item) => [
            item.label,
            item.activePaths?.some((path) => pathname === path) ?? false,
          ])
      ),
    [pathname]
  );

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded({});
  }, [location.pathname, location.hash]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openMenu = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };

  const queueCloseMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimerRef.current = null;
    }, 140);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-charcoal-950/72 backdrop-blur-2xl"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Blackmont"
            className="h-14 object-contain md:h-12 lg:h-15"
          />
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
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
              );
            }

            const isOpenDropdown = openDropdown === item.label;
            const isActiveParent = parentActiveMap[item.label];

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={queueCloseMenu}
              >
                <button
                  type="button"
                  aria-expanded={isOpenDropdown}
                  aria-haspopup="menu"
                  onClick={() =>
                    setOpenDropdown((current) =>
                      current === item.label ? null : item.label
                    )
                  }
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] transition-all duration-300 ${
                    isActiveParent || isOpenDropdown
                      ? "bg-gold-500/10 text-gold-400"
                      : "text-white/68 hover:bg-white/5 hover:text-gold-300"
                  }`}
                >
                  {item.label}
                  <Chevron isOpen={isOpenDropdown} />
                </button>

                <div
                  className={`absolute top-full left-1/2 w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    isOpenDropdown
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={queueCloseMenu}
                >
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-charcoal-950/96 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="group flex items-center justify-between rounded-[1.1rem] px-4 py-3 text-sm text-white/72 transition duration-300 hover:bg-white/[0.04] hover:text-gold-300"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>{child.label}</span>
                        <span className="h-px w-0 bg-gold-400/70 transition-all duration-300 group-hover:w-6" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="inline-flex rounded-full border border-white/18 bg-charcoal-950/24 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/92 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-charcoal-950/36 hover:text-gold-300"
          >
            Client Login
          </Link>
          <Link
            to="/contact"
            className="gold-glint inline-flex rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-charcoal-950"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/8 bg-charcoal-950/95 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2 px-6 py-4">
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
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
              );
            }

            const isExpanded = mobileExpanded[item.label];

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-white/[0.03]"
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleMobileSubmenu(item.label)}
                  className={`flex w-full items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.24em] transition ${
                    parentActiveMap[item.label]
                      ? "text-gold-300"
                      : "text-white/75 hover:text-gold-300"
                  }`}
                >
                  <span>{item.label}</span>
                  <Chevron isOpen={isExpanded} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-80 pb-3" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 px-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className="rounded-[1rem] border border-transparent px-3 py-3 text-sm text-white/68 transition hover:border-gold-500/20 hover:bg-white/[0.04] hover:text-gold-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/90 transition hover:border-gold-500/30 hover:text-gold-300"
            >
              Client Login
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-charcoal-950"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

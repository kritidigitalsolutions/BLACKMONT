import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Blackmont", to: "/about-blackmont" },
      { label: "Mission & Vision", to: "/about/mission-vision" },
      { label: "Leadership", to: "/about/leadership" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Blog", to: "/insights" },
      { label: "Newsroom", to: "/newsroom" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Overview", to: "/investor-relations/overview" },
      { label: "Reports", to: "/investor-relations/reports" },
      { label: "Stock Information", to: "/investor-relations/stock-information" },
      { label: "Corporate Governance", to: "/corporate-governance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@blackmontcapital.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 7.5h16.5a1.5 1.5 0 0 1 1.5 1.5v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V9a1.5 1.5 0 0 1 1.5-1.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3 8.25 7.86 6.03a1.9 1.9 0 0 0 2.28 0L21 8.25"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.9.58 9.4.58 9.4.58s7.5 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5h-9.5Zm10.12 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.47 1.5-1.47H16.8V4.96c-.31-.04-1.36-.13-2.58-.13-2.55 0-4.29 1.56-4.29 4.42V11H7v3h2.93v8h3.57Z" />
      </svg>
    ),
  },
];

function Footer() {
  const { brand, tagline, email, location, note } = siteContent.footer;
  const linkClass =
    "group inline-flex w-fit items-center gap-3 text-sm text-white/64 transition duration-300 hover:text-gold-300";

  return (
    <footer className="section-shell border-t border-white/10 bg-charcoal-950 px-6 py-14 text-white/70 md:py-16">
      <div className="mx-auto grid max-w-7xl items-start gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] xl:gap-12">
        <div className="glass-card-layered rounded-[2rem] p-8 md:p-9">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
            {brand}
          </p>
          <h3 className="mt-5 max-w-md font-serif text-[2rem] leading-tight text-white md:text-[2.35rem]">
            Institutional stewardship for modern hard-asset wealth.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 md:text-[0.95rem]">
            {tagline}
          </p>
        </div>

        <div className="grid gap-8 pt-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          {footerColumns.map((column, index) => (
            <div
              key={column.title}
              className={`space-y-5 ${index === 0 ? "xl:justify-self-center xl:pl-8" : ""}`}
            >
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
                {column.title}
              </p>
              {column.description && (
                <p className="max-w-[13rem] text-sm leading-7 text-white/52">
                  {column.description}
                </p>
              )}
              <div className="grid content-start gap-3">
                {column.links.map((link) => (
                  <Link key={`${column.title}-${link.label}`} to={link.to} className={linkClass}>
                    <span className="h-px w-0 bg-gold-400/70 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
              Contact
            </p>
            <div className="grid content-start gap-3 text-sm text-white/64">
              <a
                href={`mailto:${email}`}
                className="inline-flex w-fit items-center transition duration-300 hover:text-gold-300"
              >
                {email}
              </a>
              <p>{location}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/68 transition duration-300 hover:-translate-y-0.5 hover:border-gold-500/35 hover:bg-gold-500/10 hover:text-gold-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/8 pt-6 text-sm text-white/45">
          <p>{note}</p>
      </div>
    </footer>
  );
}

export default Footer;

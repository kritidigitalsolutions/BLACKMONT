import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

function Footer() {
  const { brand, tagline, email, location, note } = siteContent.footer;

  return (
    <footer className="section-shell border-t border-white/10 bg-charcoal-950 px-6 py-14 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div className="glass-card-layered rounded-[2rem] p-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
            {brand}
          </p>
          <h3 className="mt-4 max-w-sm font-serif text-3xl leading-tight text-white">
            Institutional stewardship for modern hard-asset wealth.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/62">
            {tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <a href={`mailto:${email}`} className="transition hover:text-gold-300">
              {email}
            </a>
            <span>{location}</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
            Navigation
          </p>
          <div className="grid gap-3 text-sm">
            <Link to="/about" className="transition hover:text-gold-300">
              About
            </Link>
            <Link to="/services" className="transition hover:text-gold-300">
              Services
            </Link>
            <Link to="/blog" className="transition hover:text-gold-300">
              Journal
            </Link>
            <Link to="/contact" className="transition hover:text-gold-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
            Information
          </p>
          <div className="grid gap-3 text-sm">
            <Link to="/faq" className="transition hover:text-gold-300">
              FAQ
            </Link>
            <Link to="/blog" className="transition hover:text-gold-300">
              Insights
            </Link>
            <Link to="/terms" className="transition hover:text-gold-300">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="transition hover:text-gold-300">
              Privacy Policy
            </Link>
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

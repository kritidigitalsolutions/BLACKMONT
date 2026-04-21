import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const ContactCTA = () => {
  const { eyebrow, title, description, primaryButton } = siteContent.contactCta || {
    eyebrow: "PRIVATE ENGAGEMENT",
    title: "Speak With Blackmont Capital",
    description:
      "Connect with our team for bespoke guidance on physical gold stewardship, custody, and strategic precious metals positioning.",
    primaryButton: "CONTACT OUR TEAM",
  };

  return (
    <section className="section-shell relative overflow-hidden bg-charcoal-950 px-6 py-28 md:py-36">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full ambient-glow opacity-12 blur-[150px]" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-layered group relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 rounded-[2.25rem] p-8 md:p-12 lg:flex-row lg:items-end lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-charcoal-900/35 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />

          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/85">
              {eyebrow}
            </p>
            <h2 className="text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64 md:text-lg md:leading-9">
              {description}
            </p>
          </div>

          <div className="relative z-10 flex w-full shrink-0 justify-end lg:w-auto">
            <Link
              to="/contact"
              className="gold-glint w-full rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-10 py-5 text-center text-xs font-bold uppercase tracking-[0.25em] text-charcoal-950 shadow-xl transition-all hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-500 lg:w-auto"
            >
              {primaryButton}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

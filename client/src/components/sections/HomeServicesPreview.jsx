import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const HomeServicesPreview = () => {
  return (
    <section className="section-shell relative border-t border-white/5 bg-charcoal-900 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-charcoal-800/20 via-charcoal-900 to-charcoal-950" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 flex flex-col justify-between gap-10 md:mb-20 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/80">
              Institutional Capabilities
            </p>
            <h2 className="max-w-3xl text-[2.4rem] leading-[1.03] tracking-[-0.03em] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.5rem]">
              Engineered for Capital Preservation
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72 transition hover:text-gold-300"
            >
              <span className="h-px w-10 bg-gold-500/70" />
              View All Services
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-layered group flex min-h-[320px] flex-col justify-between rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/30"
            >
              <div>
                <div className="pointer-events-none absolute top-0 right-0 p-6 font-serif text-6xl text-gold-500/8 transition-opacity duration-700 group-hover:text-gold-500/16">
                  0{index + 1}
                </div>
                <span className="inline-flex rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-300">
                  {item.tag}
                </span>
                <h3 className="mt-8 text-2xl font-serif text-white transition-colors duration-500 group-hover:text-gold-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
              </div>

              <div className="mt-8 border-t border-white/8 pt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesPreview;

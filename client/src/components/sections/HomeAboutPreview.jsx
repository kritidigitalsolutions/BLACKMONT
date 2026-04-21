import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const HomeAboutPreview = () => {
  const { title, paragraphs, highlights, stats } = siteContent.about;

  return (
    <section className="section-shell bg-charcoal-950 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full ambient-glow opacity-20 blur-[140px]" />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.38em] text-gold-400/85">
              Our Identity
            </p>
            <h2 className="max-w-2xl text-[2.45rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.7rem]">
              {title}
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-base leading-8 text-white/68 md:text-lg md:leading-9">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-card-layered rounded-[1.5rem] px-5 py-5">
                  <p className="text-xl text-gold-400">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="glass-card-layered rounded-[2rem] p-7 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
                  Stewardship Pillars
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/48">
                  Blackmont
                </span>
              </div>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/25 text-xs text-gold-400">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/66">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400 transition hover:text-gold-300"
              >
                Discover Our Heritage
                <span className="h-px w-12 bg-gold-500/70" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;

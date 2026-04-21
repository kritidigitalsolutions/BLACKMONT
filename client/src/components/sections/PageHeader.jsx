import { motion } from "motion/react";

const PageHeader = ({ eyebrow, title, description, highlights = [] }) => {
  return (
    <section className="section-shell premium-grid relative overflow-hidden bg-charcoal-950 pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 ambient-glow opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-charcoal-950/50" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/85"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-[2.9rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-[3.7rem] md:text-[4.7rem] lg:text-[5.4rem]"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg md:leading-9"
              >
                {description}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18 }}
            className="glass-card-layered rounded-[2rem] p-6 md:p-7"
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
              Section Focus
            </p>
            <div className="mt-5 space-y-4">
              {(highlights.length
                ? highlights
                : [
                    "Institutional clarity",
                    "Refined operating model",
                    "Premium client experience",
                  ]).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                  <span className="text-sm text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

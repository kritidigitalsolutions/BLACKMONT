import { motion } from "motion/react";

const PageHeader = ({ eyebrow, title, description, backgroundVideo }) => {
  return (
    <section className="section-shell relative min-h-[70vh] overflow-hidden px-6 py-20">
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover object-center scale-[1.03] opacity-[0.94] md:scale-[1.05]"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
        ) : (
          <>
            <div className="pointer-events-none absolute top-0 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 ambient-glow opacity-20 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-charcoal-950/45" />
          </>
        )}

        {backgroundVideo && (
          <>
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_76%_24%,rgba(249,224,118,0.22),transparent_32%)]" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-charcoal-950/24 via-charcoal-950/18 to-charcoal-950/68" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-charcoal-950/62 via-charcoal-950/34 to-charcoal-950/22" />

            <div className="pointer-events-none absolute top-[10%] left-[12%] z-20 h-[28vw] w-[28vw] rounded-full ambient-glow opacity-16 blur-[120px]" />
            <div className="pointer-events-none absolute right-[8%] bottom-[12%] z-20 h-[22vw] w-[22vw] rounded-full ambient-glow-white opacity-[0.08] blur-[140px]" />
          </>
        )}
      </div>

      <div className="container relative z-30 mx-auto flex min-h-[70vh] items-center justify-center">
        <div className="max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-sm tracking-[0.28em] text-gold-400"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 font-serif text-5xl leading-tight text-white md:text-6xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

import { motion } from "motion/react";
import HomeInsightChart from "./HomeInsightChart";
import { siteContent } from "../../data/siteContent";

const HomeMarketPreview = () => {
  const {
    eyebrow,
    title,
    description,
    featuredGraphTitle,
    featuredGraphDescription,
    themes,
  } = siteContent.blog;

  return (
    <section className="section-shell relative overflow-hidden border-t border-white/5 bg-charcoal-900 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-[20%] h-[50vw] w-[50vw] rounded-full ambient-glow opacity-18 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-[56%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[120px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-14 lg:gap-18">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[920px] text-center"
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/80">
              {eyebrow}
            </p>
            <h2 className="text-[2.4rem] leading-[1.03] tracking-[-0.03em] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.4rem]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-[54rem] text-base leading-8 text-white/64 md:text-lg md:leading-9">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60"
                >
                  {theme}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-layered group relative mx-auto w-full max-w-[1120px] overflow-hidden rounded-[2.35rem] border border-white/12 p-8 shadow-[0_34px_120px_rgba(0,0,0,0.42)] md:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_62%)]" />

            <div className="relative mb-8 flex flex-col gap-6 border-b border-white/8 pb-8 text-center sm:text-left md:flex-row md:items-start md:justify-between lg:mb-10 lg:pb-10">
              <div className="mx-auto max-w-3xl md:mx-0">
                <h3 className="mb-3 text-[1.55rem] font-serif leading-tight text-white md:text-[2rem] lg:text-[2.45rem]">
                  {featuredGraphTitle}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-white/50 md:text-[0.98rem]">
                  {featuredGraphDescription}
                </p>
              </div>
              <span className="mx-auto w-fit rounded-full border border-gold-500/30 bg-gold-500/8 px-4 py-1.5 text-[10px] uppercase tracking-[0.32em] text-gold-400 md:mx-0">
                MARKET INSIGHT
              </span>
            </div>

            <div className="relative rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 pb-5 pt-7 md:px-8 md:pb-7 md:pt-9 lg:px-10 lg:pb-8">
              <div className="pointer-events-none absolute inset-x-8 top-6 h-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_68%)]" />

              <div className="relative mt-2 h-[18rem] w-full md:h-[24rem] lg:h-[30rem]">
                <HomeInsightChart />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeMarketPreview;

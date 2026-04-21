import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const HomeMarketPreview = () => {
  const {
    eyebrow,
    title,
    description,
    featuredGraphTitle,
    featuredGraphDescription,
    articles,
    themes,
  } = siteContent.blog;

  return (
    <section className="section-shell relative overflow-hidden border-t border-white/5 bg-charcoal-900 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-[20%] h-[50vw] w-[50vw] rounded-full ambient-glow opacity-18 blur-[100px]" />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-16 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/80">
                {eyebrow}
              </p>
              <h2 className="text-[2.4rem] leading-[1.03] tracking-[-0.03em] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.4rem]">
                {title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 md:text-lg md:leading-9">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
              className="glass-card-layered group relative rounded-[2rem] p-8 md:p-10"
            >
              <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                  <h3 className="mb-2 text-xl font-serif text-white md:text-2xl">
                    {featuredGraphTitle}
                  </h3>
                  <p className="text-sm text-white/45">{featuredGraphDescription}</p>
                </div>
                <span className="border border-gold-500/30 bg-gold-500/5 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-500">
                  Q3 Signal
                </span>
              </div>

              <div className="relative mt-12 mb-6 h-56 w-full border-l border-b border-white/10">
                <div className="absolute -left-10 bottom-0 text-[10px] text-white/30">0</div>
                <div className="absolute -left-10 top-1/2 text-[10px] text-white/30">500</div>
                <div className="absolute -left-10 top-0 text-[10px] text-white/30">1000</div>

                <div className="absolute left-0 top-1/2 h-px w-full bg-white/5" />
                <div className="absolute left-0 top-0 h-px w-full bg-white/5" />

                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlowPremium" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0 200 C 50 180, 100 210, 150 150 C 200 90, 250 140, 300 80 C 350 20, 400 40, 500 10 L 500 224 L 0 224 Z"
                    fill="url(#chartGlowPremium)"
                    vectorEffect="non-scaling-stroke"
                    transform="scale(1, 0.99)"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0 200 C 50 180, 100 210, 150 150 C 200 90, 250 140, 300 80 C 350 20, 400 40, 500 10"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="flex justify-between px-2 text-[10px] text-white/40">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>YTD</span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center space-y-6 lg:col-span-5 lg:mt-32">
            <div className="mb-2 flex items-end justify-between border-b border-white/10 pb-4">
              <h4 className="font-serif text-2xl text-white">Editorial Focus</h4>
            </div>

            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/blog"
                  className="glass-card-layered group block rounded-[1.8rem] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-widest">
                    <span className="bg-gold-500/10 px-3 py-1 text-gold-500">{article.category}</span>
                    <span className="text-white/30">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-white/90 transition-colors duration-500 group-hover:text-gold-400 md:text-2xl">
                    {article.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
            <div className="pt-8">
              <Link
                to="/blog"
                className="block w-full rounded-full border border-white/10 px-8 py-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-gold-500/30 hover:bg-white/10 hover:text-gold-300"
              >
                Enter Intelligence Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMarketPreview;

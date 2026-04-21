import { motion } from "motion/react";
import { siteContent } from "../../data/siteContent";

const WhyBlackmont = () => {
  const { title, subtitle, features } = siteContent.whyBlackmont;

  return (
    <section className="section-shell relative border-t border-white/5 bg-charcoal-950 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-900/20 to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[40vw] w-[60vw] -translate-x-1/2 rounded-full ambient-glow opacity-16 blur-[120px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 inline-block text-[10px] uppercase tracking-[0.38em] text-gold-400/85">
              The Blackmont Standard
            </p>
            <h2 className="text-[2.4rem] leading-[1.03] tracking-[-0.03em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg md:leading-9">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-layered group relative z-10 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/26"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-charcoal-950 text-xl text-gold-500 shadow-inner transition-all duration-500 group-hover:border-gold-500/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-serif tracking-wide text-white transition-colors group-hover:text-gold-400">
                {feature.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-white/62">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBlackmont;

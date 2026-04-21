import { motion } from "motion/react";
import PageHeader from "../components/sections/PageHeader";
import { siteContent } from "../data/siteContent";

const Services = () => {
  const services = siteContent.services;

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHeader
        eyebrow="Capabilities"
        title="Bespoke Structuring"
        description="We engineer physical gold assets into high-utility financial instruments without diluting sovereign ownership."
        highlights={["Trading access", "Audited custody", "Liquidity design"]}
      />

      <section className="section-shell px-6 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-layered group relative overflow-hidden rounded-[2rem] p-8 md:p-10"
              >
                <div className="pointer-events-none absolute top-0 right-0 p-6 text-[140px] font-serif text-gold-500/6 transition-colors group-hover:text-gold-500/10">
                  0{index + 1}
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10">
                    <span className="inline-flex rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-300">
                      {item.tag}
                    </span>
                    <h3 className="mt-6 font-serif text-3xl text-white transition-colors group-hover:text-gold-400">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 md:text-lg md:leading-9">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                      {item.detail}
                    </p>
                    <div className="h-px w-14 bg-gold-500/50 transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

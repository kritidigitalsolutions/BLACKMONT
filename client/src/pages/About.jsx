import { motion } from "motion/react";
import PageHeader from "../components/sections/PageHeader";
import { siteContent } from "../data/siteContent";

const About = () => {
  const { paragraphs, highlights, stats } = siteContent.about;
  const audiences = siteContent.audiences || [];
  const approach = siteContent.approach || [];

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHeader
        eyebrow="Corporate Identity"
        title="The Benchmark in Stewardship"
        description="A legacy of executing impeccable bullion logistics and custody for discerning private capital and institutional funds."
        highlights={[
          "Global infrastructure",
          "Governance-led execution",
          "Client-first discretion",
        ]}
      />

      <section className="section-shell px-6 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass-card-layered rounded-[2rem] p-8 md:p-10"
            >
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
                Blackmont Overview
              </p>
              <div className="mt-6 space-y-6">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-8 text-white/70 md:text-lg md:leading-9">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.1 }}
              className="grid gap-4"
            >
              {stats.map((item) => (
                <div key={item.label} className="glass-card-layered rounded-[1.75rem] p-6">
                  <p className="text-3xl text-gold-400">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/52">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="glass-card-layered rounded-[1.9rem] p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                  Pillar 0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {audiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/20"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                  Who We Serve
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {approach.map((item) => (
              <div key={item.step} className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                  {item.step}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

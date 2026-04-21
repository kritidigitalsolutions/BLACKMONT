import { motion } from "motion/react";
import { Link } from "react-router-dom";

const insights = [
  {
    title: "Why Gold Remains Strategically Relevant",
    text: "A short perspective on preservation, resilience, and long-term asset positioning.",
  },
  {
    title: "The Value of Professional Custody",
    text: "How governance, verification, and reporting strengthen confidence in physical holdings.",
  },
  {
    title: "Structured Gold Stewardship Explained",
    text: "Understanding how Blackmont approaches physical gold beyond passive ownership.",
  },
];

function InsightsPreview() {
  return (
    <section className="section-shell mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
          Insights
        </p>
        <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
          Market commentary & perspectives
        </h2>
        <p className="mt-4 text-base leading-8 text-white/68">
          Relevant perspectives on physical gold, stewardship, and strategic asset
          positioning.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="glass-card-layered rounded-[1.8rem] p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
              Insight 0{index + 1}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/66">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/blog"
          className="inline-flex rounded-full border border-gold-500/40 px-6 py-3 text-sm font-medium text-gold-400 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
        >
          Explore Insights
        </Link>
      </div>
    </section>
  );
}

export default InsightsPreview;

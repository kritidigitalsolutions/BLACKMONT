import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const newsroomItems = [
  {
    title: "The Role of Gold in Institutional Portfolios",
    description:
      "A concise perspective on how physical bullion continues to serve as a strategic stabiliser within long-term capital frameworks.",
  },
  {
    title: "Understanding Structured Bullion Custody",
    description:
      "An overview of custody considerations, operational confidence, and institutional handling standards for physical assets.",
  },
  {
    title: "Market Stability and Precious Metals",
    description:
      "A high-level commentary on why hard assets continue to attract attention during periods of uncertainty and repricing.",
  },
  {
    title: "Governance in Physical Asset Management",
    description:
      "A discussion of process, accountability, and control structures in the stewardship of tangible precious metals holdings.",
  },
];

const Newsroom = () => {
  return (
    <PageBackground>
      <div className="text-white">
        <PageHeader
          eyebrow="NEWSROOM"
          title="Institutional Perspectives & Announcements"
          description="Updates, commentary, and institutional perspectives from Blackmont Capital."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
              Latest Updates
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
              News and commentary with institutional clarity
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              Explore concise updates and perspective pieces shaped by
              Blackmont&apos;s stewardship-led view of physical gold and hard-asset
              governance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsroomItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: index * 0.06 }}
                className="glass-card-layered group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="h-40 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(135deg,rgba(212,175,55,0.2),rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.02))]" />

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-500/80">
                  Commentary 0{index + 1}
                </p>

                <h2 className="mt-4 font-serif text-2xl leading-snug text-white transition group-hover:text-gold-300">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/68">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition hover:text-gold-300"
                >
                  Read More
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-sm leading-7 text-white/58">
              Content is provided for informational purposes and does not
              constitute investment advice.
            </p>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default Newsroom;

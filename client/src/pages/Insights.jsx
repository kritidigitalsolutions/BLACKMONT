import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const blogPosts = [
  {
    id: 1,
    category: "Market Insight",
    title: "Why Gold Continues to Matter in Modern Wealth Preservation",
    excerpt:
      "Gold remains one of the few globally recognised assets that can support portfolio resilience during periods of inflation, currency volatility, and geopolitical uncertainty.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Strategy",
    title: "The Role of Secure Custody in Professional Precious Metals Stewardship",
    excerpt:
      "Institutional-grade custody, verification, and reporting processes help preserve asset integrity and strengthen confidence in long-term physical gold holdings.",
    date: "April 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Advisory",
    title: "Physical Gold in Diversified Portfolios: A Strategic Perspective",
    excerpt:
      "From family offices to institutional investors, physical gold can serve a strategic role alongside broader asset allocation and preservation objectives.",
    date: "April 2026",
    readTime: "6 min read",
  },
];

function Blog() {
  return (
    <PageBackground>
      <div className="text-white">
        <PageHeader
          eyebrow="Insights & Commentary"
          title="Blackmont Journal"
          description="Perspectives on physical gold, wealth preservation, custody, and strategic asset stewardship."
          backgroundVideo={bgvideo}
          highlights={["Market perspective", "Custody intelligence", "Portfolio strategy"]}
        />

        <section className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div id="investor-relations-overview" className="relative -top-28" aria-hidden="true" />
          <div id="stock-information" className="relative -top-28" aria-hidden="true" />
          <div id="events-presentations" className="relative -top-28" aria-hidden="true" />
          <div id="reports" className="relative -top-28" aria-hidden="true" />
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
              Latest Articles
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
              Thoughtful market and stewardship insights
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              Explore commentary designed to help clients understand the strategic
              role of physical gold within a disciplined and professionally
              governed framework.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: post.id * 0.06 }}
                className="glass-card-layered group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="h-40 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(135deg,rgba(212,175,55,0.2),rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.02))]" />

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-500/80">
                  {post.category}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-snug text-white transition group-hover:text-gold-300">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/68">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between text-sm text-white/45">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition hover:text-gold-300">
                  Read More
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </PageBackground>
  );
}

export default Blog;

import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const highlights = [
  {
    title: "Global Custody Framework",
    text: "A custody-led operating model designed around jurisdictional clarity, professional control, and disciplined asset stewardship.",
  },
  {
    title: "Institutional Governance",
    text: "Structured internal procedures and reporting practices that support transparent oversight and long-term capital confidence.",
  },
  {
    title: "Asset-backed Wealth Strategy",
    text: "A precious metals approach intended to align physical asset ownership with broader preservation and strategic planning objectives.",
  },
];

const InvestorOverview = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Investor Relations"
          title="Institutional Capital Perspective"
          description="An overview of Blackmont's custody-oriented operating model, governance principles, and asset-backed wealth positioning for long-term stakeholders."
          backgroundVideo={bgvideo}
          highlights={[
            "Custody-led framework",
            "Governance discipline",
            "Long-term alignment",
          ]}
        />

        <section className="section-shell relative overflow-hidden px-6 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.08),transparent_42%)]" />
          <div className="container relative z-10 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/24"
                >
                  <div className="mb-5 h-px w-14 bg-gradient-to-r from-gold-500/80 to-gold-500/10" />
                  <h3 className="font-serif text-[1.7rem] leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="inline-flex rounded-full border border-gold-500/40 px-6 py-3 text-sm font-medium text-gold-400 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
              >
                Download Investor Overview
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default InvestorOverview;

import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const leadershipFramework = [
  {
    title: "Executive Leadership",
    text: "Blackmont’s operating direction is shaped by disciplined decision-making, execution oversight, and a long-term view of precious metals stewardship.",
  },
  {
    title: "Governance Oversight",
    text: "Internal controls, documentation standards, and accountability frameworks support a professional environment for client asset stewardship.",
  },
  {
    title: "Advisory Perspective",
    text: "Strategic judgment is informed by experience across finance, logistics, and capital structures connected to physical asset management.",
  },
];

const Leadership = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="LEADERSHIP"
          title="Institutional Perspective, Professional Discipline"
          description="Blackmont operates with a governance-led mindset shaped by experience across finance, logistics, and stewardship-oriented capital structures."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell px-6 py-24 md:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              {leadershipFramework.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered rounded-[1.9rem] p-7 md:p-8"
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                    Framework 0{index + 1}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/66 md:text-[0.98rem]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default Leadership;

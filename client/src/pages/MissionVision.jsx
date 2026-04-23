import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const sections = [
  {
    title: "Mission",
    text: "To safeguard and structure physical precious metals through disciplined stewardship, secure custody, and institutional operating standards.",
  },
  {
    title: "Vision",
    text: "To provide a trusted framework through which enduring wealth preservation can be supported with clarity, governance, and long-horizon perspective.",
  },
];

const MissionVision = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="MISSION & VISION"
          title="Purpose Built for Long-Term Stewardship"
          description="Our mission is to safeguard and structure physical precious metals with institutional discipline. Our vision is to provide a trusted framework for enduring wealth preservation."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell px-6 py-24 md:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {sections.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered rounded-[1.9rem] p-8 md:p-9"
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                    {item.title}
                  </p>
                  <h2 className="mt-5 font-serif text-3xl text-white">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-white/66">
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

export default MissionVision;

import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const principles = [
  {
    title: "Asset Integrity",
    text: "Maintaining the authenticity, traceability, and proper documentation of physical bullion assets through rigorous verification processes.",
  },
  {
    title: "Client Ownership",
    text: "Ensuring that clients retain clear ownership and recognition of their underlying gold holdings at all times.",
  },
  {
    title: "Professional Governance",
    text: "Operating through disciplined procedures, transparent structures, and responsible asset stewardship practices.",
  },
  {
    title: "Strategic Utilisation",
    text: "Supporting clients in managing physical gold in a manner that enhances its practical role within broader asset holdings.",
  },
];

const AboutBlackmont = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="ABOUT BLACKMONT"
          title="A Modern Precious Metals Enterprise"
          description="Blackmont Capital stands as a beacon in the global bullion market, offering professional stewardship, secure custody, and strategic utilisation of physical gold assets."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell px-6 py-24 md:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered rounded-[1.9rem] p-7 md:p-8"
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                    Principle 0{index + 1}
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

export default AboutBlackmont;

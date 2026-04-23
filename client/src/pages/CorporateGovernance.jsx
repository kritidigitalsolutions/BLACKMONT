import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const governanceFramework = [
  {
    title: "Internal Controls",
    text: "Structured oversight processes designed to support accuracy, accountability, and disciplined decision-making.",
  },
  {
    title: "External Audit Alignment",
    text: "A governance mindset shaped by review readiness, verification discipline, and transparent operational standards.",
  },
  {
    title: "Compliance Structure",
    text: "Procedural rigor applied to documentation, conduct expectations, and institutional stewardship responsibilities.",
  },
  {
    title: "Reporting Discipline",
    text: "Clear internal frameworks intended to support informed review, consistency, and professional communication.",
  },
];

const principles = [
  "Transparency",
  "Accountability",
  "Client Protection",
  "Operational Integrity",
];

const CorporateGovernance = () => {
  return (
    <PageBackground>
      <div className="text-white">
        <PageHeader
          eyebrow="CORPORATE GOVERNANCE"
          title="Structured Oversight and Accountability"
          description="Blackmont operates under disciplined governance frameworks designed to support transparency, integrity, and institutional alignment."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
              Governance Framework
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
              Principles embedded in operating discipline
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              Review the control structures, reporting mindset, and institutional
              governance principles that inform Blackmont&apos;s operating model.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {governanceFramework.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: index * 0.06 }}
                className="glass-card-layered rounded-[1.75rem] p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gold-500/80">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-card-layered rounded-[2rem] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
                Governance Principles
              </p>
              <h2 className="mt-4 font-serif text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-white md:text-[2.9rem]">
                A framework built on disciplined stewardship
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68">
                Our governance philosophy is centered on process clarity,
                responsible oversight, and a professional standard of conduct that
                supports durable institutional relationships.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item, index) => (
                <div
                  key={item}
                  className="glass-card-layered rounded-[1.5rem] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-500/80">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-white">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12 md:pb-24">
          <div className="glass-card-layered rounded-[2rem] p-8 text-center md:p-10">
            <p className="mx-auto max-w-4xl text-base leading-8 text-white/66">
              Blackmont&apos;s approach to governance is intended to reinforce
              transparency of process, clarity of accountability, and consistent
              stewardship standards across its operating model.
            </p>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default CorporateGovernance;

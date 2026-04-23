import { motion } from "motion/react";
import { Link } from "react-router-dom";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const expertiseAreas = [
  {
    title: "Trading & Execution",
    text: "Support disciplined market participation, transaction coordination, and structured bullion execution workflows.",
  },
  {
    title: "Custody & Operations",
    text: "Contribute to secure asset handling, operational continuity, and professional stewardship processes.",
  },
  {
    title: "Legal & Compliance",
    text: "Help reinforce internal discipline, governance alignment, and documentation standards across engagements.",
  },
  {
    title: "Client Advisory",
    text: "Assist in delivering professional communication, structured client support, and long-term relationship stewardship.",
  },
];

const values = [
  "Institutional discipline",
  "Professional integrity",
  "Confidential handling",
  "Long-term perspective",
];

const Careers = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="CAREERS"
          title="Join a Discipline-Driven Institution"
          description="Blackmont seeks individuals aligned with institutional rigor, precision, and long-term stewardship of capital."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
              Working at Blackmont
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
              Professional culture shaped by stewardship
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              Our working environment is built around discretion, operational
              discipline, and clarity of responsibility for long-horizon
              institutional relationships.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card-layered rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-gold-500/80">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-lg text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-layered rounded-[2rem] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
                Current Availability
              </p>
              <h3 className="mt-4 font-serif text-[2rem] leading-[1.08] text-white md:text-[2.5rem]">
                Expressions of interest
              </h3>
              <p className="mt-5 text-base leading-8 text-white/68">
                We are not actively publishing open roles at this time. For
                expressions of interest related to future opportunities, please
                contact us directly.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-950 transition duration-300 hover:-translate-y-0.5 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500"
              >
                Submit Interest
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12 md:pb-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
              Areas of Expertise
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
              Functions that support our operating model
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              These areas reflect the institutional capabilities and operational
              disciplines that support Blackmont&apos;s broader stewardship model.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {expertiseAreas.map((item, index) => (
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
      </div>
    </PageBackground>
  );
};

export default Careers;

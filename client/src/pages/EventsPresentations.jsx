import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const events = [
  {
    title: "Global Bullion Outlook 2026",
    date: "March 2026",
    text: "A forward-looking discussion on the evolving role of physical bullion within preservation-led capital strategies.",
  },
  {
    title: "Institutional Gold Strategy Briefing",
    date: "June 2026",
    text: "A focused presentation on governance, custody structures, and long-horizon physical gold positioning.",
  },
  {
    title: "Annual Investor Dialogue",
    date: "September 2026",
    text: "An annual engagement session designed to review stewardship priorities, operating themes, and strategic outlook.",
  },
];

const EventsPresentations = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Investor Relations"
          title="Investor Engagements"
          description="Presentation materials and event-based communications designed to support clear institutional dialogue."
          backgroundVideo={bgvideo}
          highlights={[
            "Strategic briefings",
            "Presentation access",
            "Stakeholder dialogue",
          ]}
        />

        <section className="section-shell px-6 py-20 md:py-24">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered flex flex-col rounded-[1.9rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/22"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
                    Investor Event
                  </p>
                  <h3 className="mt-4 font-serif text-[1.75rem] leading-tight text-white">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/42">
                    {event.date}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {event.text}
                  </p>
                  <button
                    type="button"
                    className="mt-8 inline-flex w-fit rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-medium text-gold-400 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
                  >
                    View Presentation
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default EventsPresentations;

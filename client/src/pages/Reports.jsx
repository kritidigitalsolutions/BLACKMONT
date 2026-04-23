import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const reports = [
  {
    title: "Quarterly Capital Perspective",
    category: "Quarterly",
    date: "April 2026",
  },
  {
    title: "Custody & Stewardship Review",
    category: "Insight",
    date: "May 2026",
  },
  {
    title: "Physical Gold Strategy Commentary",
    category: "Commentary",
    date: "June 2026",
  },
  {
    title: "Institutional Allocation Observations",
    category: "Insight",
    date: "July 2026",
  },
];

const Reports = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Investor Relations"
          title="Research & Reports"
          description="A curated set of institutional-facing materials focused on stewardship themes, strategic positioning, and market commentary."
          backgroundVideo={bgvideo}
          highlights={[
            "Quarterly materials",
            "Research notes",
            "Commentary archive",
          ]}
        />

        <section className="section-shell px-6 py-20 md:py-24">
          <div className="container mx-auto">
            <div className="grid gap-5">
              {reports.map((report, index) => (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: index * 0.06 }}
                  className="glass-card-layered flex flex-col gap-5 rounded-[1.8rem] border border-white/10 p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
                      {report.category}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-white">
                      {report.title}
                    </h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/42">
                      {report.date}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-fit rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-medium text-gold-400 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
                  >
                    Download PDF
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

export default Reports;

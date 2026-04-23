import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const capitalCards = [
  {
    title: "Private Capital Model",
    text: "Blackmont operates within a private capital context centred on stewardship discipline, long-term alignment, and selective strategic engagement.",
  },
  {
    title: "Asset-backed Exposure",
    text: "Physical gold holdings remain central to the firm's positioning, reflecting a custody-conscious and asset-backed approach to wealth structure.",
  },
  {
    title: "Long-term Preservation Strategy",
    text: "The broader capital philosophy prioritises preservation, measured utilisation, and institutional clarity over short-term market orientation.",
  },
];

const StockInformation = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Investor Relations"
          title="Capital Structure & Asset Positioning"
          description="An institutional overview of Blackmont's private capital orientation, asset-backed positioning, and long-term preservation focus."
          backgroundVideo={bgvideo}
          highlights={[
            "Private capital model",
            "Asset-backed orientation",
            "Preservation focus",
          ]}
        />

        <section className="section-shell px-6 py-20 md:py-24">
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="grid gap-6">
                {capitalCards.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: index * 0.07 }}
                    className="glass-card-layered rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/22"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
                      Card 0{index + 1}
                    </p>
                    <h3 className="mt-4 font-serif text-[1.65rem] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: 0.18 }}
                className="glass-card-layered rounded-[2rem] border border-white/10 p-7 md:p-8"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
                  Positioning View
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  Structural outlook
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  The visual below is a design placeholder intended to communicate
                  structural balance rather than live market data.
                </p>

                <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-5">
                  <div className="flex h-64 items-end gap-4">
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div className="w-full rounded-t-[1rem] bg-gradient-to-t from-gold-500/25 to-gold-500/55" style={{ height: "42%" }} />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                        Private
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div className="w-full rounded-t-[1rem] bg-gradient-to-t from-gold-500/18 to-gold-500/42" style={{ height: "72%" }} />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                        Asset-backed
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div className="w-full rounded-t-[1rem] bg-gradient-to-t from-gold-500/14 to-gold-500/34" style={{ height: "58%" }} />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                        Preservation
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default StockInformation;

import { motion } from "motion/react";
import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const contactCards = [
  {
    title: "Headquarters",
    text: "Kuala Lumpur, Malaysia",
  },
  {
    title: "Client Contact",
    text: "hello@blackmontcapital.com",
    href: "mailto:hello@blackmontcapital.com",
  },
  {
    title: "Engagement Access",
    text: "Blackmont maintains a structured engagement model for private dialogue, institutional introductions, and stewardship-related enquiries.",
  },
];

const ContactLocations = () => {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="CONTACTS & LOCATIONS"
          title="Global Access, Structured Engagement"
          description="Blackmont maintains a professional engagement model for clients seeking institutional precious metals stewardship and strategic dialogue."
          backgroundVideo={bgvideo}
        />

        <section className="section-shell px-6 py-24 md:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              {contactCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: index * 0.08 }}
                  className="glass-card-layered rounded-[1.9rem] p-7 md:p-8"
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
                    Access 0{index + 1}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl text-white">
                    {item.title}
                  </h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-4 inline-flex text-base leading-8 text-white/72 transition hover:text-gold-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="mt-4 text-sm leading-7 text-white/66 md:text-[0.98rem]">
                      {item.text}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};

export default ContactLocations;

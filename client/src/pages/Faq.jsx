import { useState } from "react";
import PageHeader from "../components/sections/PageHeader";

const faqs = [
  {
    question: "What does Blackmont Capital do?",
    answer:
      "Blackmont Capital provides a professional platform centred around physical gold stewardship, including secure custody support, structured asset utilisation, and strategic advisory for clients seeking disciplined exposure to precious metals.",
  },
  {
    question: "Who does Blackmont Capital serve?",
    answer:
      "Blackmont Capital is designed for high net worth individuals, family offices, institutions, and other clients seeking a more structured and professionally governed approach to physical precious metals.",
  },
  {
    question: "Is client ownership of underlying gold maintained?",
    answer:
      "Yes. A core principle of Blackmont's approach is that clients retain clear ownership and recognition of their underlying physical gold holdings within a transparent and well-documented framework.",
  },
  {
    question: "Why is secure custody important?",
    answer:
      "Secure custody helps preserve asset integrity through disciplined storage arrangements, documentation standards, and verification processes that support confidence, traceability, and long-term stewardship.",
  },
  {
    question: "How is Blackmont different from passive bullion ownership?",
    answer:
      "Blackmont goes beyond simple holding by introducing structured utilisation frameworks and professional oversight, allowing physical gold to play a more strategic role while maintaining underlying ownership.",
  },
  {
    question: "Can institutions and family offices work with Blackmont?",
    answer:
      "Yes. The platform is suitable for institutional and multi-generational wealth contexts where governance, traceability, reporting, and strategic positioning are essential.",
  },
];

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="glass-card-layered rounded-[1.8rem]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:text-gold-300"
      >
        <span className="font-serif text-xl text-white md:text-2xl">{item.question}</span>
        <span className="text-2xl text-gold-500">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && <div className="px-6 pb-6 text-base leading-8 text-white/72">{item.answer}</div>}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-charcoal-950 text-white">
      <PageHeader
        eyebrow="Client Information"
        title="Frequently Asked Questions"
        description="Answers to common questions regarding Blackmont Capital's philosophy, platform, and approach to physical gold stewardship."
        highlights={["Client onboarding clarity", "Ownership-first framework", "Institutional process"]}
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
            Clear answers for prospective clients
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            This section provides a concise overview of Blackmont's operating
            philosophy, client positioning, custody orientation, and strategic
            outlook.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;

import { motion } from "motion/react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Who does Blackmont serve?",
    answer:
      "Blackmont supports high net worth individuals, family offices, and institutions seeking a more disciplined approach to physical precious metals.",
  },
  {
    question: "Is ownership of physical gold maintained?",
    answer:
      "Yes. Blackmont's framework is built around clarity of ownership, secure custody, and professional stewardship.",
  },
  {
    question: "Why choose a structured approach?",
    answer:
      "A structured approach helps transform passive bullion ownership into a more strategic and professionally governed asset position.",
  },
];

function FaqPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.36em] text-gold-400/80">
          Common Questions
        </p>
        <h2 className="mt-4 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-white md:text-[3.2rem]">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-8 text-white/68">
          A brief introduction to some of the most common questions prospective
          clients may have regarding Blackmont's philosophy and platform.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="glass-card-layered rounded-[1.8rem] p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80">
              FAQ 0{index + 1}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-white">{item.question}</h3>
            <p className="mt-4 text-sm leading-7 text-white/66">{item.answer}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/faq"
          className="inline-flex rounded-full border border-gold-500/40 px-6 py-3 text-sm font-medium text-gold-400 transition hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}

export default FaqPreview;

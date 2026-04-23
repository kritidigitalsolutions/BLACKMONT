import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const sections = [
  {
    title: "1. Introduction",
    content:
      "These Terms & Conditions govern the use of the Blackmont Capital website and any informational materials made available through it. By accessing this website, visitors acknowledge that they have read and understood these terms.",
  },
  {
    title: "2. Informational Purpose",
    content:
      "The information presented on this website is provided for general informational purposes only and does not constitute financial, legal, tax, investment, or other professional advice. Visitors should seek independent advice before making decisions relating to assets or investments.",
  },
  {
    title: "3. No Offer or Solicitation",
    content:
      "Nothing contained on this website shall be interpreted as an offer, invitation, recommendation, or solicitation to acquire, dispose of, or otherwise transact in any asset, product, or service.",
  },
  {
    title: "4. Accuracy of Information",
    content:
      "Blackmont Capital endeavours to ensure that website content is presented accurately and professionally. However, no warranty is given regarding completeness, timeliness, or ongoing accuracy, and content may be updated without notice.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All website content, including text, visual assets, branding, layout, and design elements, remains the property of Blackmont Capital unless otherwise stated. Unauthorised reproduction, redistribution, or commercial use is prohibited.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "Blackmont Capital shall not be liable for any direct, indirect, incidental, or consequential loss arising from reliance on website content, access interruptions, or third-party links and materials.",
  },
  {
    title: "7. External Links",
    content:
      "This website may contain links to third-party websites for convenience or reference. Blackmont Capital does not control and is not responsible for the content, security, or privacy practices of external websites.",
  },
  {
    title: "8. Changes to These Terms",
    content:
      "Blackmont Capital reserves the right to update or revise these Terms & Conditions at any time. Continued use of the website following such changes shall constitute acceptance of the revised terms.",
  },
];

function Terms() {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Please review these terms carefully before using the Blackmont Capital website."
          backgroundVideo={bgvideo}
        />

        <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <h2 className="font-serif text-2xl text-gold-400 md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-white/75">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageBackground>
  );
}

export default Terms;

import PageBackground from "../components/layout/PageBackground";
import PageHeader from "../components/sections/PageHeader";
import bgvideo from "../assets/videos/backgroundvideo1.mp4";

const privacySections = [
  {
    title: "1. Overview",
    content:
      "Blackmont Capital respects the privacy of website visitors and is committed to handling personal information in a professional and responsible manner.",
  },
  {
    title: "2. Information We May Collect",
    content:
      "We may collect personal information provided voluntarily through contact forms or consultation requests, such as name, email address, telephone number, and general enquiry details.",
  },
  {
    title: "3. Use of Information",
    content:
      "Any information submitted through the website may be used to respond to enquiries, provide requested information, improve website experience, and support professional communication with prospective or existing clients.",
  },
  {
    title: "4. Data Protection",
    content:
      "Blackmont Capital takes reasonable measures to protect submitted information against unauthorised access, misuse, disclosure, or loss. However, no internet-based transmission can be guaranteed to be completely secure.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "Where third-party tools or integrations are used, data may be processed in accordance with those providers’ respective privacy practices. Visitors should review relevant third-party policies where applicable.",
  },
  {
    title: "6. Cookies and Analytics",
    content:
      "This website may use cookies or analytics tools to understand visitor behaviour, improve performance, and support website functionality. Visitors may manage cookie preferences through their browser settings.",
  },
  {
    title: "7. Policy Updates",
    content:
      "This Privacy Policy may be updated periodically to reflect operational, legal, or technical changes. Continued use of the website after updates indicates acceptance of the revised policy.",
  },
];

function Privacy() {
  return (
    <PageBackground>
      <div className="min-h-screen text-white">
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="This policy outlines how Blackmont Capital approaches personal information submitted through this website."
          backgroundVideo={bgvideo}
        />

        <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
          <div className="space-y-6">
            {privacySections.map((section, index) => (
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

export default Privacy;

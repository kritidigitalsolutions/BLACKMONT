import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Mail, ShieldCheck } from "lucide-react";
import PageBackground from "../components/layout/PageBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact request:", formData);
  };

  return (
    <PageBackground>
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div id="contacts-locations" className="relative -top-28" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-gold-400">
                Private Engagement
              </p>

              <h1 className="max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
                Establish Dialogue With Blackmont.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Begin a confidential conversation with our team regarding private
                advisory, institutional structuring, and stewardship-led
                engagement for physical precious metals.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                    <Mail className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Direct Inquiries
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-white/60">
                      Reach Blackmont for advisory questions, confidential
                      introductions, and initial dialogue at{" "}
                      <a
                        href="mailto:hello@blackmontcapital.com"
                        className="text-gold-400 transition hover:text-gold-300"
                      >
                        hello@blackmontcapital.com
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                    <Building2 className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Global Headquarters
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-white/60">
                      Blackmont Capital operates from Kuala Lumpur, Malaysia,
                      supporting premium institutional and private client
                      engagement across jurisdictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14">
              <div className="mx-auto w-full max-w-md">
                <h2 className="font-serif text-3xl text-white sm:text-4xl">
                  Contact Us
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Use this form to begin a confidential conversation with
                  Blackmont.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/90"
                    >
                      Full Name
                    </label>
                    <div className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition focus-within:border-gold-500/40">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/90"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition focus-within:border-gold-500/40">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/90"
                    >
                      Message
                    </label>
                    <div className="rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition focus-within:border-gold-500/40">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        rows={4}
                        className="w-full resize-none bg-transparent text-white outline-none placeholder:text-white/35"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full border border-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-950 transition duration-300 hover:-translate-y-0.5 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500"
                  >
                    Submit Request
                  </button>
                </form>

                <div className="mt-6 flex items-start gap-3 text-sm text-white/55">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-gold-400" />
                  <p>
                    Prefer direct communication?{" "}
                    <Link
                      to="/about/contacts-locations"
                      className="text-gold-400 transition hover:text-gold-300"
                    >
                      Contact Blackmont
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
};

export default Contact;

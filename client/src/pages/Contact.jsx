import PageHeader from "../components/sections/PageHeader";
import { motion } from "motion/react";

const Contact = () => {
    return (
        <div className="bg-charcoal-950 min-h-screen">
            <PageHeader 
                eyebrow="Private Engagement"
                title="Establish Dialogue"
                description="Our advisory group is available to discuss specific logistics and structured acquisition strategies."
            />

            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-24">
                        <div className="lg:w-1/3 space-y-16">
                            <div>
                                <h3 className="text-white font-serif text-2xl mb-6">Global Headquarters</h3>
                                <p className="text-white/60 font-sans text-lg font-light leading-relaxed">
                                    Blackmont Capital<br />
                                    Exchange District<br />
                                    Kuala Lumpur, Malaysia
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-serif text-2xl mb-6">Direct Inquiries</h3>
                                <p className="text-white/60 font-sans text-lg font-light leading-relaxed mb-4">
                                    General: <a href="mailto:hello@blackmontcapital.com" className="text-white hover:text-gold-500 transition-colors">hello@blackmontcapital.com</a>
                                </p>
                                <p className="text-white/60 font-sans text-lg font-light leading-relaxed">
                                    Private Advisory: <a href="mailto:advisory@blackmontcapital.com" className="text-white hover:text-gold-500 transition-colors">advisory@blackmontcapital.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 glass-card-layered p-10 md:p-16">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="border-b border-white/20 pb-4 focus-within:border-gold-500 transition-colors">
                                        <input type="text" placeholder="Full Name" className="w-full bg-transparent border-none text-white font-sans text-lg placeholder:text-white/30 focus:outline-none" />
                                    </div>
                                    <div className="border-b border-white/20 pb-4 focus-within:border-gold-500 transition-colors">
                                        <input type="text" placeholder="Institution (Optional)" className="w-full bg-transparent border-none text-white font-sans text-lg placeholder:text-white/30 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="border-b border-white/20 pb-4 focus-within:border-gold-500 transition-colors">
                                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-none text-white font-sans text-lg placeholder:text-white/30 focus:outline-none" />
                                </div>
                                <div className="border-b border-white/20 pb-4 focus-within:border-gold-500 transition-colors">
                                    <textarea placeholder="Nature of Inquiry" rows={4} className="w-full bg-transparent border-none text-white font-sans text-lg placeholder:text-white/30 focus:outline-none resize-none" />
                                </div>
                                <div className="pt-6">
                                    <button type="button" className="px-12 py-5 bg-gold-500 text-charcoal-950 font-bold tracking-[0.25em] uppercase text-xs w-full hover:bg-gold-400 transition-colors shadow-lg">
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
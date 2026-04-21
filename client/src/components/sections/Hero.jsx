import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";
import bgvideo from "../../assets/videos/backgroundvideo1.mp4";

const Hero = () => {
    const { eyebrow, title, description, primaryButton, secondaryButton } =
        siteContent.hero;

    return (
        <section className="relative min-h-[100svh] overflow-hidden bg-charcoal-950 pt-28 pb-20 sm:pt-32 sm:pb-24">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 overflow-hidden">
    <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center scale-[1.03] opacity-[0.94] md:scale-[1.05]"
    >
        <source src={bgvideo} type="video/mp4" />
    </video>
</div>

                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_76%_24%,rgba(249,224,118,0.22),transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-charcoal-950/24 via-charcoal-950/18 to-charcoal-950/68" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-charcoal-950/62 via-charcoal-950/34 to-charcoal-950/22" />

                <div className="pointer-events-none absolute top-[10%] left-[12%] z-20 h-[28vw] w-[28vw] rounded-full ambient-glow opacity-16 blur-[120px]" />
                <div className="pointer-events-none absolute right-[8%] bottom-[12%] z-20 h-[22vw] w-[22vw] rounded-full ambient-glow-white opacity-[0.08] blur-[140px]" />
            </div>

            <div className="container relative z-30 mx-auto px-6">
                <div className="flex min-h-[calc(100svh-12rem)] items-center justify-center">
                    <div className="w-full max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="mb-6 inline-flex rounded-full border border-gold-500/20 bg-charcoal-950/24 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.42em] text-gold-300/90 backdrop-blur-md sm:mb-8">
                                {eyebrow}
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto mb-8 max-w-3xl whitespace-pre-line font-serif text-[2.85rem] leading-[1.03] tracking-[-0.03em] text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.4)] sm:text-[3.45rem] md:text-[4.3rem] lg:mb-10 lg:text-[5rem]"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto mb-12 max-w-2xl text-base leading-8 font-light text-white/84 sm:text-lg md:text-xl md:leading-9 lg:mb-14"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
                        >
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 px-8 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal-950 shadow-[0_18px_40px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500 hover:shadow-[0_22px_50px_rgba(212,175,55,0.24)] sm:px-10"
                            >
                                {primaryButton}
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-charcoal-950/24 px-8 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-charcoal-950/36 sm:px-10"
                            >
                                {secondaryButton}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

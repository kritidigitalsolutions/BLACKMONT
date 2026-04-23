import { useEffect, useState } from "react";
import goldimg1 from "../../assets/images/goldimage.jpg";
import goldimg2 from "../../assets/images/goldimage2.jpg";
import goldimg3 from "../../assets/images/goldimage3.jpg";

const HomeAboutPreview = () => {
  const slides = [
    {
      src: goldimg1,
      alt: "Refined gold bars in dramatic low light",
    },
    {
      src: goldimg2,
      alt: "Premium bullion arrangement with warm metallic contrast",
    },
    {
      src: goldimg3,
      alt: "Blackmont gold presentation with dark luxury atmosphere",
    },
  ];
  const principles = [
    {
      title: "Asset Integrity",
      text: "Maintaining the authenticity, traceability, and proper documentation of physical bullion assets through rigorous verification processes.",
    },
    {
      title: "Client Ownership",
      text: "Ensuring that clients retain clear ownership and recognition of their underlying gold holdings at all times.",
    },
    {
      title: "Professional Governance",
      text: "Operating through disciplined procedures, transparent structures, and responsible asset stewardship practices.",
    },
    {
      title: "Strategic Utilisation",
      text: "Supporting clients in managing physical gold in a manner that enhances its practical role within broader asset holdings.",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section className="section-shell bg-charcoal-950 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full ambient-glow opacity-20 blur-[140px]" />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:gap-10">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:min-h-[460px] lg:min-h-[620px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_40%),linear-gradient(180deg,rgba(6,6,6,0.08),rgba(6,6,6,0.42))]" />

            {slides.map((slide, index) => (
              <img
                key={slide.alt}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
                  index === activeSlide ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
              {slides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "w-7 bg-gold-400" : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="glass-card-layered flex h-full rounded-[2rem] p-7 md:p-8 lg:min-h-[620px]">
            <div className="flex w-full flex-col">
              <div className="max-w-xl">
                <p className="text-[10px] uppercase tracking-[0.34em] text-gold-400/80">
                  About Blackmont
                </p>
                <p className="mt-4 text-sm leading-7 text-white/62 md:text-[0.98rem]">
                  A modern precious metals enterprise built on disciplined stewardship, institutional clarity, and long-term client alignment.
                </p>
              </div>

              <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:border-gold-500/20 hover:bg-white/[0.045]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/25 text-xs text-gold-400">
                        0{index + 1}
                      </span>
                      <div>
                        <h4 className="font-serif text-xl text-white">{item.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;

import bgvideo from "../../assets/videos/backgroundvideo1.mp4";

const particles = [
  { left: "6%", top: "12%", size: "0.38rem", delay: "0s", duration: "15s" },
  { left: "18%", top: "28%", size: "0.22rem", delay: "2s", duration: "18s" },
  { left: "28%", top: "10%", size: "0.3rem", delay: "4s", duration: "14s" },
  { left: "36%", top: "42%", size: "0.18rem", delay: "1s", duration: "17s" },
  { left: "46%", top: "18%", size: "0.34rem", delay: "3s", duration: "16s" },
  { left: "58%", top: "34%", size: "0.2rem", delay: "5s", duration: "19s" },
  { left: "66%", top: "14%", size: "0.28rem", delay: "1.5s", duration: "15s" },
  { left: "74%", top: "48%", size: "0.42rem", delay: "6s", duration: "18s" },
  { left: "84%", top: "22%", size: "0.2rem", delay: "2.5s", duration: "17s" },
  { left: "91%", top: "36%", size: "0.32rem", delay: "4.5s", duration: "14s" },
  { left: "12%", top: "62%", size: "0.26rem", delay: "5.5s", duration: "20s" },
  { left: "32%", top: "74%", size: "0.18rem", delay: "3.5s", duration: "16s" },
  { left: "57%", top: "68%", size: "0.24rem", delay: "7s", duration: "19s" },
  { left: "79%", top: "80%", size: "0.36rem", delay: "2.2s", duration: "18s" },
];

const PageBackground = ({ children, className = "" }) => {
  return (
    <div
      className={`page-background relative isolate min-h-screen overflow-hidden bg-charcoal-950 ${className}`.trim()}
    >
      {/* Video layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center scale-[1.03] opacity-[0.22] md:scale-[1.05]"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>

      {/* Existing atmospheric layers */}
      <div className="page-background__base pointer-events-none absolute inset-0 z-[1]" />
      <div className="page-background__glow page-background__glow--primary pointer-events-none absolute left-1/2 top-[-12rem] z-[2] h-[34rem] w-[52rem] -translate-x-1/2" />
      <div className="page-background__glow page-background__glow--secondary pointer-events-none absolute right-[-12rem] top-[28%] z-[2] h-[28rem] w-[28rem]" />
      <div className="page-background__glow page-background__glow--tertiary pointer-events-none absolute bottom-[-14rem] left-[-10rem] z-[2] h-[26rem] w-[26rem]" />
      <div className="page-background__vignette pointer-events-none absolute inset-0 z-[3]" />

      <div className="page-background__stars pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}-${index}`}
            className="page-background__particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageBackground;
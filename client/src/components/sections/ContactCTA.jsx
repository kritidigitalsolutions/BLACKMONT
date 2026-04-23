import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

const particleShapes = ["rectangle", "circle", "star", "diamond"];
const goldColors = [
  "rgba(255, 236, 150, 0.96)",
  "rgba(224, 190, 78, 0.92)",
  "rgba(198, 148, 24, 0.82)",
  "rgba(255, 248, 220, 0.72)",
];

const GoldParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const initParticles = () => {
      particlesRef.current = [];

      for (let i = 0; i < 84; i += 1) {
        particlesRef.current.push({
          x: -canvas.width * 0.15 + Math.random() * canvas.width * 1.3,
          y: -Math.random() * canvas.height * 0.35,
          z: Math.random() * 1500 + 800,
          velocityX: (Math.random() - 0.5) * 0.32,
          velocityY: Math.random() * 0.16 + 0.05,
          velocityZ: -(Math.random() * 0.32 + 0.16),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.022,
          baseSize: Math.random() * 8 + 4,
          opacity: Math.random() * 0.24 + 0.54,
          shape: particleShapes[Math.floor(Math.random() * particleShapes.length)],
          color: goldColors[Math.floor(Math.random() * goldColors.length)],
          floatPhase: Math.random() * Math.PI * 2,
          swayAmplitude: Math.random() * 0.32 + 0.14,
          bobAmplitude: Math.random() * 0.2 + 0.08,
          isFading: false,
        });
      }
    };

    const drawParticle = (particle) => {
      const perspective = 800;
      const scale = perspective / (perspective + particle.z);
      const projectedX =
        particle.x + (particle.x - canvas.width / 2) * (1 - scale);
      const projectedY =
        particle.y + (particle.y - canvas.height / 2) * (1 - scale);

      if (scale <= 0.01 || scale > 2) return;

      const size = particle.baseSize * scale;
      const opacity = Math.min(particle.opacity * scale * 1.45, 0.94);

      ctx.save();
      ctx.translate(projectedX, projectedY);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = opacity;
      ctx.shadowColor = "rgba(255, 232, 138, 0.34)";
      ctx.shadowBlur = scale * 7.25;
      ctx.shadowOffsetX = scale * 1.6;
      ctx.shadowOffsetY = scale * 1.6;
      ctx.fillStyle = particle.color;

      switch (particle.shape) {
        case "rectangle": {
          const width = size * 1.4;
          const height = size * 0.75;
          ctx.fillRect(-width / 2, -height / 2, width, height);
          break;
        }
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.58, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "star": {
          ctx.beginPath();
          const starSize = size * 0.7;

          for (let i = 0; i < 6; i += 1) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * starSize;
            const y = Math.sin(angle) * starSize;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);

            const innerAngle = ((i + 0.5) * Math.PI) / 3;
            const innerX = Math.cos(innerAngle) * starSize * 0.5;
            const innerY = Math.sin(innerAngle) * starSize * 0.5;
            ctx.lineTo(innerX, innerY);
          }

          ctx.closePath();
          ctx.fill();
          break;
        }
        case "diamond": {
          ctx.beginPath();
          const diamondSize = size * 0.8;
          ctx.moveTo(0, -diamondSize);
          ctx.lineTo(diamondSize * 0.6, 0);
          ctx.lineTo(0, diamondSize);
          ctx.lineTo(-diamondSize * 0.6, 0);
          ctx.closePath();
          ctx.fill();
          break;
        }
        default:
          break;
      }

      ctx.restore();
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.floatPhase += 0.02;

        const swayX =
          Math.sin(particle.floatPhase) * particle.swayAmplitude * 0.22;
        const bobY =
          Math.cos(particle.floatPhase * 0.7) * particle.bobAmplitude * 0.14;

        particle.x += particle.velocityX + swayX;
        particle.y += particle.velocityY + bobY;
        particle.z += particle.velocityZ;
        particle.rotation += particle.rotationSpeed;

        const turbulence = Math.max(0, 1 - particle.z / 1500) * 0.035;
        particle.velocityX += (Math.random() - 0.5) * turbulence * 0.26;
        particle.velocityY += (Math.random() - 0.5) * turbulence * 0.2;
        particle.velocityX += (Math.random() - 0.5) * 0.0022;
        particle.velocityY += (Math.random() - 0.5) * 0.0022;
        particle.velocityX *= 0.9992;
        particle.velocityY *= 0.9992;
        particle.velocityY += 0.00024;
        particle.velocityZ *= 1.00028;

        if (
          !particle.isFading &&
          (particle.z <= 200 ||
            particle.x < -120 ||
            particle.x > canvas.width + 120 ||
            particle.y > canvas.height + 120)
        ) {
          particle.isFading = true;
        }

        if (particle.isFading) {
          particle.opacity -= 0.012;
        }

        if (particle.opacity <= 0) {
          particle.x = -canvas.width * 0.15 + Math.random() * canvas.width * 1.3;
          particle.y = -Math.random() * canvas.height * 0.35;
          particle.z = Math.random() * 800 + 1200;
          particle.velocityX = (Math.random() - 0.5) * 0.32;
          particle.velocityY = Math.random() * 0.16 + 0.05;
          particle.velocityZ = -(Math.random() * 0.32 + 0.16);
          particle.floatPhase = Math.random() * Math.PI * 2;
          particle.opacity = Math.random() * 0.24 + 0.54;
          particle.color = goldColors[Math.floor(Math.random() * goldColors.length)];
          particle.shape =
            particleShapes[Math.floor(Math.random() * particleShapes.length)];
          particle.isFading = false;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      particlesRef.current.forEach(drawParticle);
      animationRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        initParticles();
      });
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-100 mix-blend-screen"
      aria-hidden="true"
    />
  );
};

const ContactCTA = () => {
  const { eyebrow, title, description, primaryButton } = siteContent.contactCta || {
    eyebrow: "PRIVATE ENGAGEMENT",
    title: "Speak With Blackmont Capital",
    description:
      "Connect with our team for bespoke guidance on physical gold stewardship, custody, and strategic precious metals positioning.",
    primaryButton: "CONTACT OUR TEAM",
  };

  return (
    <section className="section-shell relative overflow-hidden bg-charcoal-950 px-6 py-28 md:py-36">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full ambient-glow opacity-12 blur-[150px]" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-layered group relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 rounded-[2.25rem] p-8 md:p-12 lg:flex-row lg:items-end lg:p-16"
        >
          <GoldParticleBackground />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_22%_24%,rgba(212,175,55,0.1),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(249,224,118,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 bg-charcoal-900/35 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />

          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-gold-400/85">
              {eyebrow}
            </p>
            <h2 className="text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64 md:text-lg md:leading-9">
              {description}
            </p>
          </div>

          <div className="relative z-10 flex w-full shrink-0 justify-end lg:w-auto">
            <Link
              to="/contact"
              className="gold-glint w-full rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-10 py-5 text-center text-xs font-bold uppercase tracking-[0.25em] text-charcoal-950 shadow-xl transition-all hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-500 lg:w-auto"
            >
              {primaryButton}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

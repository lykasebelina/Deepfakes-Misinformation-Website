import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-noise overflow-hidden">
      {/* BACKGROUND IMAGE WITH DARK OVERLAY ADDED HERE */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          // Added a linear gradient with dark rgba values before the url to create a dark overlay
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/deepfakes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Removed opacity: 0.4 as the gradient now handles the darkening better
        }}
      />

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 
            className={`font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 ${
              glitch ? "animate-glitch-text" : ""
            }`}
          >
            DEEPFAKES
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              & MISINFORMATION
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            An exploration of how artificial intelligence is reshaping the landscape of truth, 
            trust, and digital media in the contemporary world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="inline-block"
        >
          <div className="px-8 py-4 bg-primary/10 border border-primary/30 rounded-lg backdrop-blur-sm">
            <p className="text-sm md:text-base font-mono text-primary font-semibold">
              ⚠ CRITICAL ISSUE REQUIRING IMMEDIATE ATTENTION
            </p>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => scrollToSection("introduction")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
        >
          <span className="text-sm font-mono uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(245, 158, 11, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
    </section>
  );
}
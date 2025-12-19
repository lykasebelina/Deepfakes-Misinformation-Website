import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Radio, TrendingUp, Zap } from "lucide-react";

export default function MediaRole() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [glitchWords, setGlitchWords] = useState<string[]>([]);

  useEffect(() => {
    const words = ["deepfake", "misinformation", "truth"];
    const interval = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setGlitchWords([randomWord]);
      setTimeout(() => setGlitchWords([]), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderText = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, "");
      const shouldGlitch = glitchWords.includes(cleanWord.toLowerCase());
      return (
        <span key={index}>
          <span className={shouldGlitch ? "animate-glitch-text inline-block" : ""}>
            {word}
          </span>
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <section id="media" className="relative py-32 bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 05
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Media's
            <br />
            <span className="text-primary">Crucial Role</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            {renderText("How media shapes public perception and influences the spread of deepfake misinformation")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Amplification Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Radio className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-4">Amplification & Distribution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Social media platforms and news outlets serve as primary distribution channels for both authentic 
                and manipulated content. The viral nature of sensational content means deepfakes can reach millions 
                before verification occurs. Algorithms prioritize engagement over accuracy, inadvertently promoting 
                misleading content that generates strong emotional reactions.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground italic">
                  "A lie can travel halfway around the world while the truth is still putting on its shoes." 
                  - Mark Twain (Attributed)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Credibility Crisis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row-reverse gap-6 items-start"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-4">Eroding Trust</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The proliferation of deepfakes has created a "liar's dividend" where politicians and public figures 
                can dismiss authentic damaging content as fake. This erosion of trust affects journalism, democracy, 
                and public discourse. When everything can be questioned, nothing can be believed.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">73%</p>
                  <p className="text-sm text-muted-foreground">Concerned about deepfakes in elections</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">59%</p>
                  <p className="text-sm text-muted-foreground">Distrust online videos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-4">Media Literacy & Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responsible media organizations have begun implementing verification processes, transparency labels, 
                and educational initiatives to help audiences identify manipulated content. Fact-checking organizations 
                play a critical role, but they face challenges keeping pace with the volume of misinformation. 
                The future requires both technological solutions and widespread media literacy education to empower 
                individuals to critically evaluate content before sharing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

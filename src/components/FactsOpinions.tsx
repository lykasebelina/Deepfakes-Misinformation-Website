import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, HelpCircle } from "lucide-react";

const facts = [
  {
    title: "96% Detection Rate",
    content: "Studies show that deepfake detection technology can identify manipulated content with up to 96% accuracy in controlled settings.",
    source: "Intel News Report, 2022",
  },
  {
    title: "500% Increase",
    content: "Deepfake incidents increased by over 500% between 2019 and 2023, according to cybersecurity firm reports.",
    source: "Deeptrace Labs Report, 2023",
  },
  {
    title: "$250M in Fraud",
    content: "Deepfake audio and video have been used in corporate fraud schemes totaling over $250 million globally.",
    source: "FBI Internet Crime Report, 2023",
  },
  {
    title: "96% Non-Consensual",
    content: "A staggering 96% of deepfake videos online are non-consensual pornographic content targeting women.",
    source: "Sensity AI Research, 2023",
  },
];

const opinions = [
  {
    title: "Free Speech Concerns",
    content: "Some argue that regulating deepfakes could infringe on freedom of expression and artistic creativity, creating a slippery slope for censorship.",
    perspective: "Digital Rights Advocates",
  },
  {
    title: "Positive Applications",
    content: "Proponents highlight beneficial uses like film production, education, accessibility features, and historical recreation.",
    perspective: "Tech Industry",
  },
  {
    title: "Overreaction Debate",
    content: "Critics suggest media hysteria around deepfakes may be overblown, arguing people are more discerning than given credit for.",
    perspective: "Tech Skeptics",
  },
  {
    title: "Inevitable Technology",
    content: "Some technologists argue that deepfakes are an inevitable evolution and society must adapt rather than resist.",
    perspective: "Futurists",
  },
];

export default function FactsOpinions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);
  const [hoveredOpinion, setHoveredOpinion] = useState<number | null>(null);

  return (
    <section id="facts" className="relative py-32 bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 03
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Facts vs
            <br />
            <span className="text-primary">Opinions</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl">
            Distinguishing evidence-based information from perspectives and debates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Facts Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h3 className="font-heading text-3xl font-bold">Evidence-Based Facts</h3>
            </div>

            <div className="space-y-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredFact(index)}
                  onMouseLeave={() => setHoveredFact(null)}
                  className="bg-card border-2 border-primary/30 rounded-lg p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <h4 className="font-mono text-lg font-bold text-primary mb-2">
                    {fact.title}
                  </h4>
                  <p className="text-muted-foreground mb-3">{fact.content}</p>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredFact === index ? 1 : 0,
                      height: hoveredFact === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-secondary font-mono pt-2 border-t border-border">
                      Source: {fact.source}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Opinions Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-secondary" />
              <h3 className="font-heading text-3xl font-bold">Perspectives & Debates</h3>
            </div>

            <div className="space-y-6">
              {opinions.map((opinion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  onMouseEnter={() => setHoveredOpinion(index)}
                  onMouseLeave={() => setHoveredOpinion(null)}
                  className="bg-card border-2 border-secondary/30 rounded-lg p-6 transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/10"
                >
                  <h4 className="font-mono text-lg font-bold text-secondary mb-2">
                    {opinion.title}
                  </h4>
                  <p className="text-muted-foreground mb-3">{opinion.content}</p>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredOpinion === index ? 1 : 0,
                      height: hoveredOpinion === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-secondary/80 font-mono pt-2 border-t border-border">
                      Perspective: {opinion.perspective}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

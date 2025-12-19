import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, HelpCircle, Brain, Scale, Users } from "lucide-react";

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
    content: "Some argue that regulating deepfakes could infringe on freedom of expression and creativity, creating a slippery slope for censorship.",
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

const debateTabs = [
  {
    id: 0,
    label: "Persuasion",
    icon: Brain,
    title: "The Psychology of Belief",
    content: "Deepfakes are uniquely persuasive because they exploit society’s long-standing trust in visual and audio evidence. Videos and voice recordings are often perceived as more credible than written claims, allowing synthetic media to override critical thinking and emotionally persuade audiences even when the content is false."
  },
  {
    id: 1,
    label: "The Argument",
    icon: Scale,
    title: "Regulation vs. Innovation",
    content: "Competing arguments shape the public debate. Advocates for regulation argue that deepfakes pose severe risks to democracy, privacy, and public safety, justifying stronger legal controls. In contrast, opponents emphasize freedom of expression, technological inevitability, and the potential for positive innovation, warning that overregulation could suppress creativity."
  },
  {
    id: 2,
    label: "The Dispute",
    icon: Users,
    title: "Societal Conflict",
    content: "These opposing viewpoints create ongoing disputes among governments, technology companies, media organizations, and civil society. The disagreement centers on where to draw the line between protecting society from harm and preserving individual rights. This conflict demonstrates how argument and dispute play a central role in shaping policy responses."
  }
];

export default function FactsOpinions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);
  const [hoveredOpinion, setHoveredOpinion] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

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

        <div className="grid md:grid-cols-2 gap-12 mb-24">
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

        {/* 🔹 UPDATED INTERACTIVE SECTION: Persuasion and Public Debate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 bg-card/30 border border-border rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          <div className="p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">
              Persuasion and Public Debate
            </h3>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {debateTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-background shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] scale-105"
                        : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="relative min-h-[200px] max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background/50 border border-border/50 rounded-xl p-8 shadow-inner"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        {/* Render the icon dynamically based on active tab */}
                        {(() => {
                            const ActiveIcon = debateTabs[activeTab].icon;
                            return <ActiveIcon className="w-8 h-8 text-primary" />;
                        })()}
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4 text-foreground">
                      {debateTabs[activeTab].title}
                    </h4>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {debateTabs[activeTab].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
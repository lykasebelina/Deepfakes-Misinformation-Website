import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const timelineEvents = [
  {
    year: "1990s",
    title: "Digital Photo Manipulation",
    description: "Adobe Photoshop and similar tools enable basic image editing, setting the foundation for digital media manipulation.",
  },
  {
    year: "2014",
    title: "GANs Introduced",
    description: "Ian Goodfellow introduces Generative Adversarial Networks (GANs), the AI architecture that would power deepfakes.",
  },
  {
    year: "2017",
    title: "Term 'Deepfake' Coined",
    description: "A Reddit user named 'deepfakes' shares AI-generated face-swap videos, popularizing the technology and its name.",
  },
  {
    year: "2018",
    title: "Mainstream Awareness",
    description: "BuzzFeed and Jordan Peele create viral deepfake of Obama to demonstrate the technology's dangers.",
  },
  {
    year: "2019",
    title: "Political Weaponization",
    description: "Deepfakes begin appearing in political contexts, including manipulated videos of politicians globally.",
  },
  {
    year: "2020",
    title: "Pandemic Misinformation",
    description: "AI-generated content spreads COVID-19 misinformation, showing health-related implications.",
  },
  {
    year: "2022",
    title: "Accessibility Explosion",
    description: "Consumer apps like Lensa AI and user-friendly tools make deepfake creation accessible to millions.",
  },
  {
    year: "2023",
    title: "Legislative Response",
    description: "Multiple countries introduce deepfake-specific legislation; detection technology advances.",
  },
  {
    year: "2024",
    title: "Election Interference",
    description: "Deepfakes used in election campaigns worldwide, raising unprecedented concerns about democratic integrity.",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="history" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 02
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Historical
            <br />
            <span className="text-primary">Evolution</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl">
            The journey from simple photo editing to sophisticated AI-generated media manipulation
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-primary font-semibold">{event.year}</span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <h3 className="font-heading text-xl font-semibold mb-2">{event.title}</h3>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground">{event.description}</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
}

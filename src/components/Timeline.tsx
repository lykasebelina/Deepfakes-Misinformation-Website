import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// --- DATA: TIMELINE EVENTS ---
const timelineEvents = [
  {
    year: "1990s - 2000s",
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
    year: "2024 - Present",
    title: "Election Interference",
    description: "Deepfakes used in election campaigns worldwide, raising unprecedented concerns about democratic integrity.",
  },
];

// --- DATA: ANALYSIS CARDS (The Text Split) ---
const analysisCards = [
  {
    title: "The Technological Pivot",
    highlight: "2014 & GANs",
    content: "Early tools normalized editing, but the 2014 introduction of Generative Adversarial Networks (GANs) marked a critical turning point. Originally for research, GANs enabled the creation of synthetic media that is now indistinguishable from reality.",
    delay: 0.1
  },
  {
    title: "Democratization of Tools",
    highlight: "Labs to Public",
    content: "Post-2020, deepfake creation moved beyond technical experts into the public domain via consumer apps. This widespread accessibility directly fueled contemporary issues like online harassment, financial fraud, and identity theft.",
    delay: 0.2
  },
  {
    title: "Erosion of Trust",
    highlight: "Global Impact",
    content: "Building on cultural acceptance of editing, political actors now exploit deepfakes to influence elections and destabilize institutions. There is now a clear causal link between past innovation and today's crisis of information integrity.",
    delay: 0.3
  }
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="history" className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
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
            The journey from simple photo editing to sophisticated AI-generated media manipulation.
          </p>
        </motion.div>

        {/* --- TIMELINE --- */}
        <div className="relative mb-32">
          {/* Vertical Line */}
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
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Box */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors shadow-lg"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-mono text-sm text-primary font-semibold">{event.year}</span>
                    <h3 className="font-heading text-xl font-semibold mt-2 mb-2">{event.title}</h3>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-2">{event.description}</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ANALYSIS GRID (REPLACED THE BIG BOX) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Section Divider/Header */}
          <div className="text-center mb-16">
             <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              From Innovation to <span className="text-primary">Consequence</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              How a machine learning breakthrough evolved into a global challenge for democratic integrity.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analysisCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative h-full"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-card border border-border p-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
                  {/* Decorative Top Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-xs font-mono text-secondary uppercase tracking-wider mb-3">
                      {card.highlight}
                    </span>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                      {card.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
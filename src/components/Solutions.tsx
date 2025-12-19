import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, Scale, BookOpen, User, Zap } from "lucide-react";

const solutions = [
  {
    id: "technological",
    icon: Cpu,
    title: "Technological Solutions",
    color: "text-primary",
    bgColor: "bg-primary/10",
    strategies: [
      {
        name: "AI Detection Systems",
        description: "Develop advanced machine learning models that can identify synthetic media by analyzing inconsistencies in facial movements, lighting, audio patterns, and pixel-level artifacts.",
        implementation: "Tech companies and research institutions should invest in open-source detection tools and share datasets to improve accuracy.",
        impact: "Restores trust in digital media by acting as a first line of defense, filtering out a significant percentage of low-quality fakes before they go viral."
      },
      {
        name: "Digital Watermarking",
        description: "Implement blockchain-based authentication and cryptographic signatures to verify the origin and integrity of media content.",
        implementation: "Camera manufacturers and software developers should embed unforgeable metadata in files at creation.",
        impact: "Creates an immutable chain of custody, allowing viewers to instantly verify if a video comes from a trusted source or has been tampered with."
      },
      {
        name: "Content Provenance Tracking",
        description: "Create comprehensive tracking systems that document the entire lifecycle of digital content from creation to distribution.",
        implementation: "Establish industry-wide standards (like C2PA) that track edits, sources, and transformations.",
        impact: "Empowers users to trace a piece of media back to its original creator, establishing accountability and distinguishing original context from manipulated versions."
      },
    ],
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal & Regulatory Solutions",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    strategies: [
      {
        name: "Criminalization of Malicious Deepfakes",
        description: "Establish clear legal frameworks that criminalize the creation and distribution of deepfakes intended to harm, defraud, or deceive.",
        implementation: "Governments should pass legislation specifically addressing deepfake-related crimes including fraud and non-consensual imagery.",
        impact: "Provides a necessary deterrent and legal recourse for victims, establishing clear societal norms that malicious synthesis is a serious crime, not a prank."
      },
      {
        name: "Platform Liability",
        description: "Hold social media platforms accountable for hosting and amplifying known deepfake content.",
        implementation: "Regulations requiring platforms to proactively detect and remove malicious synthetic media.",
        impact: "Incentivizes tech giants to prioritize user safety over engagement metrics, forcing them to invest heavily in better moderation teams and tools."
      },
      {
        name: "International Cooperation",
        description: "Create global treaties and agreements to address cross-border deepfake crimes and standardize regulations.",
        implementation: "Nations should collaborate through organizations like the UN to share intelligence and facilitate extradition.",
        impact: "Eliminates 'safe havens' for perpetrators and ensures that digital crimes can be prosecuted regardless of where the server or attacker is located."
      },
    ],
  },
  {
    id: "educational",
    icon: BookOpen,
    title: "Educational Solutions",
    color: "text-primary",
    bgColor: "bg-primary/10",
    strategies: [
      {
        name: "Media Literacy Programs",
        description: "Integrate comprehensive digital literacy and critical thinking curricula into educational systems at all levels.",
        implementation: "Schools should teach students how to verify sources and identify manipulation techniques.",
        impact: "Builds long-term 'societal immunity,' creating a future generation that is naturally skeptical and less likely to fall for or share misinformation."
      },
      {
        name: "Public Awareness Campaigns",
        description: "Launch widespread campaigns to educate the general public about deepfakes, their risks, and how to identify them.",
        implementation: "Governments and NGOs should fund PSA campaigns across traditional and digital media.",
        impact: "Rapidly raises the baseline of vigilance among the general population, making it significantly harder for deepfakes to cause mass panic or confusion."
      },
      {
        name: "Professional Training",
        description: "Provide specialized training for journalists, law enforcement, legal professionals, and policymakers.",
        implementation: "Develop certification programs and workshops focused on deepfake detection and response.",
        impact: "Ensures that the 'gatekeepers' of information (journalists and police) are equipped to correctly identify fakes, preventing false reporting and wrongful arrests."
      },
    ],
  },
  {
    id: "individual",
    icon: User,
    title: "Individual Actions",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    strategies: [
      {
        name: "Critical Consumption",
        description: "Adopt skeptical evaluation of online content, especially emotionally charged or sensational material.",
        implementation: "Verify sources through multiple reputable outlets before sharing.",
        impact: "Stops the viral loop at the individual level. If users pause before sharing, they effectively 'flatten the curve' of misinformation spread."
      },
      {
        name: "Reporting & Advocacy",
        description: "Actively report suspected deepfakes and advocate for stronger protections.",
        implementation: "Use platform reporting tools and contact fact-checking organizations.",
        impact: "Crowdsources the defense of the internet, allowing communities to self-regulate and flag harmful content faster than automated systems alone."
      },
      {
        name: "Digital Hygiene",
        description: "Protect personal data and images to reduce vulnerability to deepfake targeting.",
        implementation: "Limit publicly available photos and videos and use privacy settings.",
        impact: "Proactively reduces the 'attack surface,' making it significantly harder for bad actors to gather the training data needed to create convincing personal deepfakes."
      },
    ],
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="relative py-32 bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 07
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Proposed
            <br />
            <span className="text-primary">Solutions</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            A multi-layered approach combining technology, policy, education, and individual action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <AccordionItem
                  key={solution.id}
                  value={solution.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${solution.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                      <span className="font-heading text-xl font-bold text-left">
                        {solution.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-8 pt-4">
                      {solution.strategies.map((strategy, stratIndex) => (
                        <div key={stratIndex} className="relative pl-6 border-l-2 border-primary/20">
                          <h4 className="font-heading text-lg font-semibold mb-2">
                            {strategy.name}
                          </h4>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {strategy.description}
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {/* Implementation Block */}
                            <div className="bg-background/50 rounded-lg p-4 border border-border">
                              <p className="text-sm text-foreground/80">
                                <span className="block font-mono text-xs text-primary uppercase tracking-wider mb-2">
                                  Implementation Plan
                                </span>
                                {strategy.implementation}
                              </p>
                            </div>

                            {/* Impact/Benefit Block - UPDATED COLOR */}
                            <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                              <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-3 h-3 text-secondary" />
                                <span className="block font-mono text-xs text-secondary uppercase tracking-wider">
                                  Projected Impact
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {strategy.impact}
                              </p>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Conclusion / Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg"
        >
          <h3 className="font-heading text-2xl font-bold mb-4">Evaluation of Impact</h3>
          <p className="text-muted-foreground leading-relaxed">
            Integrating these solutions creates a robust defense system. <strong>Technological tools</strong> provide immediate detection, 
            <strong> legal frameworks</strong> offer necessary deterrence, and <strong>educational initiatives</strong> build long-term societal resilience. 
            When combined, these measures do not just react to threats, but actively reshape the digital landscape into one where truth 
            is verifiable and trust is restored.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
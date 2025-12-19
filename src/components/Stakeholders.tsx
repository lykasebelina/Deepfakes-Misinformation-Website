import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Newspaper, GraduationCap, UserCircle2 } from "lucide-react";

const stakeholders = [
  {
    icon: Building2,
    title: "Governments",
    role: "Legislative & enforcement bodies",
    description: "Responsible for creating legal frameworks, enforcing regulations, and protecting citizens from deepfake-related crimes and misinformation campaigns.",
  },
  {
    icon: Users,
    title: "Tech Companies",
    role: "Creators & regulators",
    description: "Develop AI technologies that enable deepfakes while also creating detection tools and implementing platform policies to combat misuse.",
  },
  {
    icon: Newspaper,
    title: "Media Organizations",
    role: "Information gatekeepers",
    description: "Verify authenticity of content, educate public about deepfakes, and maintain journalistic integrity in an era of synthetic media.",
  },
  {
    icon: GraduationCap,
    title: "Academia",
    role: "Research & education",
    description: "Conduct research on AI ethics, develop detection methodologies, and educate students and public about media literacy and critical thinking.",
  },
  {
    icon: UserCircle2,
    title: "Individuals",
    role: "Content consumers",
    description: "Exercise critical thinking, verify sources, report suspicious content, and advocate for stronger protections against deepfake abuse.",
  },
];

export default function Stakeholders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stakeholders" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 04
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Key
            <br />
            <span className="text-primary">Stakeholders</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl">
            Understanding who shapes the response to deepfakes and their roles in combating misinformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-2">
                  {stakeholder.title}
                </h3>

                <p className="text-sm font-mono text-secondary mb-4 uppercase tracking-wider">
                  {stakeholder.role}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {stakeholder.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Connection visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 p-8 bg-card/50 border border-border rounded-lg"
        >
          <h3 className="font-heading text-2xl font-bold mb-4 text-center">
            Interconnected Responsibilities
          </h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Addressing the deepfake crisis requires coordinated action across all stakeholder groups. 
            Governments provide regulatory frameworks, tech companies develop solutions, media organizations 
            educate the public, academia advances research, and individuals exercise critical thinking. 
            No single entity can solve this challenge alone.
          </p>
        </motion.div>
      </div>

      {/* Decorative network pattern */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}

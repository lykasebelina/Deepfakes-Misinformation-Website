import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AlertTriangle, DollarSign, Users2, MapPin, Shield, Globe2, Landmark } from "lucide-react";

const impacts = [
  {
    icon: AlertTriangle,
    stat: "85%",
    label: "Trust Erosion",
    description: "of people report decreased trust in online media due to deepfakes",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    stat: "$250M+",
    label: "Financial Fraud",
    description: "estimated losses from deepfake-enabled fraud schemes globally",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users2,
    stat: "500K+",
    label: "Victims",
    description: "individuals targeted by non-consensual deepfake content",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    stat: "32",
    label: "Countries",
    description: "with reported deepfake-related election interference attempts",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

function CountUpNumber({ end, duration = 2000 }: { end: string; duration?: number }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from string (e.g., "85%" -> 85, "$250M+" -> 250)
    const numMatch = end.match(/\d+/);
    if (!numMatch) {
      setCount(end);
      return;
    }

    const targetNum = parseInt(numMatch[0]);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentNum = Math.floor(progress * targetNum);
      const formatted = end.replace(/\d+/, currentNum.toString());
      setCount(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Impacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impacts" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 06
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Societal
            <br />
            <span className="text-primary">Impact</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl">
            The far-reaching consequences of deepfakes on individuals, institutions, and society
          </p>
        </motion.div>

        {/* Animated Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <div className={`w-12 h-12 ${impact.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${impact.color}`} />
                </div>
                
                <div className={`text-4xl font-bold font-display mb-2 ${impact.color}`}>
                  <CountUpNumber end={impact.stat} />
                </div>
                
                <h3 className="font-heading text-lg font-semibold mb-2">{impact.label}</h3>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Impact Areas */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded"></span>
              Democracy & Political Stability
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Deepfakes pose an existential threat to democratic processes by enabling the creation of false evidence, 
              manipulating voter perception, and undermining faith in electoral systems. The 2024 election cycle saw 
              unprecedented use of synthetic media in political campaigns globally, raising concerns about sovereignty 
              and the integrity of democratic institutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-secondary rounded"></span>
              Personal Privacy & Safety
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The overwhelming majority of deepfake content targets individuals—particularly women—for harassment, 
              exploitation, and non-consensual pornography. Victims face psychological trauma, reputational damage, 
              and often have limited legal recourse. The ease of creating revenge porn and identity theft using 
              deepfakes has created a new category of digital violence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded"></span>
              Economic & Corporate Risk
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Businesses face escalating threats from deepfake-enabled fraud, including CEO voice impersonation scams, 
              stock manipulation through fake announcements, and intellectual property theft. The financial sector has 
              seen sophisticated attacks using synthetic identities to bypass verification systems, resulting in 
              hundreds of millions in losses.
            </p>
          </motion.div>
        </div>
      </div>


              {/* 🌍 NEW SECTION: Geographic & Global Implications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          

              <div className="grid md:grid-cols-3 gap-8">
                {/* Local */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <h4 className="font-heading text-xl font-semibold mb-3 text-center">Local Level</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    At the local level, individuals and communities are directly affected through scams, harassment,
                    reputational damage, and non-consensual deepfake content. Schools, workplaces, and families face
                    growing challenges in verifying digital information, increasing the need for media literacy and
                    community awareness.
                  </p>
                </div>

                {/* National */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <Landmark className="w-8 h-8 text-secondary mb-4 mx-auto" />
                  <h4 className="font-heading text-xl font-semibold mb-3 text-center">National Level</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    National governments face threats to election integrity, public trust, and political stability.
                    Deepfakes complicate law enforcement, strain legal systems, and intensify political polarization.
                    Countries with stronger regulations and media institutions are better equipped to respond than
                    those with weaker digital governance.
                  </p>
                </div>

                {/* Global */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <Globe2 className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <h4 className="font-heading text-xl font-semibold mb-3 text-center">Global Level</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Globally, deepfakes enable cross-border misinformation campaigns, cybercrime, and geopolitical
                    manipulation. Differences in laws, technological access, and cultural norms create uneven
                    vulnerabilities across regions, making international cooperation essential to address this
                    growing global security challenge.
                  </p>
                </div>
              </div>

              <p className="text-orange-400 text-muted-foreground text-center mt-10 max-w-4xl mx-auto leading-relaxed">
                The geographic spread of deepfake technology highlights how science and technology intersect with
                culture, economics, and politics at every level of society. Addressing these challenges requires
                coordinated local action, strong national policies, and sustained international collaboration.
              </p>
      
         
        </motion.div>
  

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
}

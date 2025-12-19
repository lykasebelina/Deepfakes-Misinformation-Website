import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="introduction" className="relative py-32 bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent"></div>
      
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              Section 01
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
            The Age of
            <br />
            <span className="text-primary">Digital Deception</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Deepfakes</strong> are synthetic media created using artificial intelligence 
              and machine learning algorithms to manipulate or generate visual and audio content with a high potential to deceive. 
              The term combines "deep learning" with "fake," representing a technological capability that can fabricate 
              realistic videos, images, and audio recordings of people saying or doing things they never did.
            </p>

            <p>
              What began as an academic curiosity has evolved into a significant threat to truth and trust in the digital age. 
              With accessibility to AI tools increasing exponentially, the barrier to creating convincing fake content has 
              dropped dramatically. Anyone with a smartphone and basic technical knowledge can now produce content that 
              challenges our fundamental ability to discern reality from fabrication.
            </p>

            <div className="bg-card border border-border rounded-lg p-8 my-8">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-secondary">Why This Matters Now</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Deepfakes are increasingly used to spread misinformation, manipulate public opinion, and undermine democratic processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>The technology has been weaponized for financial fraud, identity theft, and non-consensual intimate imagery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Trust in media, journalism, and visual evidence is eroding as "seeing is believing" no longer holds true</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>Legal frameworks and technological solutions are struggling to keep pace with the rapid evolution of AI capabilities</span>
                </li>
              </ul>
            </div>

            <p>
              This website examines the contemporary issue of deepfakes and AI-generated misinformation through multiple lenses: 
              historical development, factual evidence, stakeholder roles, media influence, geographic and cultural connections, 
              societal impacts, and proposed solutions. Understanding this phenomenon is critical for navigating an increasingly 
              complex information landscape where truth itself becomes contested terrain.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

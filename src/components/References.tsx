import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

const references = [
  {
    id: 1,
    citation: "Goodfellow, I., Pouget-Abadie, J., Mirza, M., et al. (2014). Generative Adversarial Networks. Advances in Neural Information Processing Systems, 27.",
    category: "Technical Research",
    url: "https://arxiv.org/abs/1406.2661",
  },
  {
    id: 2,
    citation: "Chesney, R., & Citron, D. (2019). Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security. California Law Review, 107(6), 1753-1820.",
    category: "Legal & Policy",
    url: "https://scholarship.law.bu.edu/faculty_scholarship/640/",
  },
  {
    id: 3,
    citation: "Vaccari, C., & Chadwick, A. (2020). Deepfakes and Disinformation: Exploring the Impact of Synthetic Political Video on Deception, Uncertainty, and Trust in News. Social Media + Society, 6(1).",
    category: "Media Studies",
    url: "https://journals.sagepub.com/doi/10.1177/2056305120903408",
  },
  {
    id: 4,
    citation: "Deeptrace Labs. (2019). The State of Deepfakes: Landscape, Threats, and Impact. Annual Report.",
    category: "Industry Report",
    url: "https://regmedia.co.uk/2019/10/08/deepfake_report.pdf",
  },
  {
    id: 5,
    citation: "Kietzmann, J., Lee, L. W., McCarthy, I. P., & Kietzmann, T. C. (2020). Deepfakes: Trick or treat? Business Horizons, 63(2), 135-146.",
    category: "Business & Economics",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0007681319301600",
  },
  {
    id: 6,
    citation: "Federal Bureau of Investigation. (2023). Internet Crime Report: Deepfake-Enabled Fraud. U.S. Department of Justice.",
    category: "Government Report",
    url: "https://www.ic3.gov/annualreport/reports/2023_ic3report.pdf",
  },
  {
    id: 7,
    citation: "Westerlund, M. (2019). The Emergence of Deepfake Technology: A Review. Technology Innovation Management Review, 9(11), 39-52.",
    category: "Technical Research",
    url: "https://timreview.ca/article/1282",
  },
  {
    id: 8,
    citation: "Intel. (2022). Intel Introduces Real-Time Deepfake Detector. Intel Newsroom.",
    category: "Corporate / Technology News",
    url: "https://newsroom.intel.com/artificial-intelligence/intel-introduces-real-time-deepfake-detector?utm_source=chatgpt.com",
},
  {
    id: 9,
    citation: "Sensity AI. (2023). The State of Deepfakes 2023: Realities, Threats, And Impact. Research Report.",
    category: "Industry Report",
    url: "https://www.securityhero.io/state-of-deepfakes/",
  },
  {
    id: 10,
    citation: "Paris, B., & Donovan, J. (2019). Deepfakes and Cheap Fakes: The Manipulation of Audio and Visual Evidence. Data & Society Research Institute.",
    category: "Media Studies",
    url: "https://datasociety.net/library/deepfakes-and-cheap-fakes/",
  },
];

export default function References() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="references" className="relative py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-mono text-secondary uppercase tracking-wider">
              References
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Academic
            <br />
            <span className="text-primary">Citations</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            Sources and research informing this investigation
          </p>
        </motion.div>

        <div className="space-y-4">
          {references.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-mono text-sm font-bold text-primary">
                    [{ref.id}]
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {ref.citation}
                    </p>
                    <button
                      onClick={() => copyToClipboard(ref.url, ref.id)}
                      className="flex-shrink-0 p-2 hover:bg-primary/10 rounded transition-colors"
                      title="Copy Link"
                    >
                      {copiedId === ref.id ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </button>
                  </div>
                  <span className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-xs font-mono text-secondary">
                    {ref.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 bg-card/50 border border-border rounded-lg"
        >
          <p className="text-sm text-muted-foreground text-center">
            This list represents a selection of key sources. For a comprehensive bibliography
            and additional research materials, please consult academic databases such as Google Scholar,
            JSTOR, and IEEE Xplore using keywords: deepfakes, synthetic media, AI-generated content,
            misinformation, media manipulation.
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 Educational Research Project
          </p>
          <p className="text-xs text-muted-foreground">
            This website was created for educational purposes to explore the contemporary
            issue of deepfakes and AI-generated misinformation.
          </p>
        </div>
      </div>
    </section>
  );
}
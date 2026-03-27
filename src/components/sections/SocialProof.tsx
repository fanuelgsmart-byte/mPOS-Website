"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PARTNERS = [
  { name: "Telebirr", icon: "📱" },
  { name: "CBE Birr", icon: "🏦" },
  { name: "Ministry of Revenue", icon: "🏛️" },
  { name: "INSA Certified", icon: "🔒" },
  { name: "Google Play", icon: "▶️" },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section ref={ref} style={{ background: "#F3F4F6", padding: "2.5rem 0", borderTop: "1px solid #E5E7EB" }}>
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "1.25rem" }}
        >
          Integrated with &amp; certified by
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
              style={{ opacity: 0.55 }}
              whileHover={{ opacity: 1 }}
            >
              <span style={{ fontSize: "1.125rem" }}>{p.icon}</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151" }}>{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

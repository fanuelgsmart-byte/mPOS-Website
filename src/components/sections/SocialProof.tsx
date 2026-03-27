"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { STATS } from "@/lib/constants";

const PARTNERS = ["Telebirr", "CBE Birr", "Ministry of Revenue", "INSA", "Google Play"];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#F9FAFB", borderTop: "1px solid #F3F4F6" }}>
      <div className="container-custom py-12 md:py-16">
        {/* Stats Row */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8 border-t border-gray-200"
        >
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Trusted By</p>
          {PARTNERS.map((name) => (
            <motion.span
              key={name}
              variants={fadeUp}
              className="text-sm font-medium text-gray-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

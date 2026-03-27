"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { MORE_FEATURES } from "@/lib/constants";
import { Check } from "lucide-react";

export default function AndMore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ background: "#F9FAFB" }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-label">And That&apos;s Not All</p>
          <h2>Everything else you need, built in</h2>
        </motion.div>

        {/* Feature Checklist */}
        <motion.div
          variants={staggerContainer(0.03)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-0"
        >
          {MORE_FEATURES.map((feat) => (
            <motion.div
              key={feat}
              variants={fadeUp}
              className="flex items-center gap-3 py-3"
              style={{ borderBottom: "1px solid #E5E7EB" }}
            >
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "#DCFCE7" }}
              >
                <Check size={12} color="#22C55E" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium text-gray-700">{feat}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

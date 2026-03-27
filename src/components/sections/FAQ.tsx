"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ background: "#F3F4F6" }}>
      <div className="container-custom max-w-2xl">
        <AnimatedSection className="text-center mb-12">
          <AnimatedItem><p className="section-label">FAQ</p></AnimatedItem>
          <AnimatedItem><h2>Frequently asked questions</h2></AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-2" stagger={0.06}>
          {FAQS.map((faq, i) => (
            <AnimatedItem key={i}>
              <div className="bg-white rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  style={{ background: "transparent" }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111827",
                    paddingRight: "1rem" }}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown size={16} color="#9CA3AF" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ padding: "0 1rem 1rem", fontSize: "0.875rem",
                        color: "#6B7280", lineHeight: 1.7 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

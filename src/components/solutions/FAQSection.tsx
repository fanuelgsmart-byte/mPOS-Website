"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  q: string;
  a: string;
}

export interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  accentColor: string;
}

export default function FAQSection({ title = "Frequently Asked Questions", faqs, accentColor }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom" style={{ maxWidth: "820px" }}>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{
                border: `1.5px solid ${open === i ? accentColor + "55" : "#E5E7EB"}`,
                borderRadius: "12px",
                overflow: "hidden",
                transition: "border-color 200ms ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.125rem 1.375rem",
                  background: open === i ? `${accentColor}08` : "#fff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 200ms ease",
                }}
              >
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0F172A", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  color={accentColor}
                  style={{ flexShrink: 0, transition: "transform 200ms ease", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 1.375rem 1.25rem", borderTop: "1px solid #F3F4F6" }}>
                      <p style={{ fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.8, paddingTop: "1rem" }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

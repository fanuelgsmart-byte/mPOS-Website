"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TOP_BENEFITS } from "@/lib/constants";
import {
  ShoppingCart, BarChart2, Wallet, Wifi, CreditCard, Shield, Award, Package,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  ShoppingCart, BarChart2, Wallet, Wifi, CreditCard, Shield, Award, Package,
};

const spring = { type: "spring", stiffness: 200, damping: 24 } as const;

function BenefitCard({ benefit, index }: { benefit: typeof TOP_BENEFITS[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = ICON_MAP[benefit.icon];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...spring, delay: (index % 4) * 0.07 }}
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "1.375rem",
        border: `1.5px solid ${open ? "rgba(229,57,53,0.2)" : "#E5E7EB"}`,
        boxShadow: open ? "0 4px 16px rgba(229,57,53,0.07)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "border-color 200ms ease, box-shadow 200ms ease",
        cursor: "pointer",
      }}
      whileHover={{ y: -2 }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={spring}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: `${benefit.color}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {Icon && <Icon size={20} color={benefit.color} strokeWidth={1.8} />}
        </motion.div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.3 }}>
              {benefit.title}
            </h4>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={spring}
              style={{ color: "#9CA3AF", flexShrink: 0, fontSize: "0.75rem" }}
            >
              ▼
            </motion.span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6, marginTop: "0.375rem" }}>
            {benefit.shortText}
          </p>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ paddingTop: "0.75rem", borderTop: "1px solid #F3F4F6", marginTop: "0.75rem" }}>
                  {benefit.fullText.split("\n\n").slice(1).map((para, i) => (
                    <p key={i} style={{ fontSize: "0.875rem", color: "#4B5563", lineHeight: 1.7, marginBottom: i < 1 ? "0.625rem" : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function AndMore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ background: "#F8FAFC" }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-12"
        >
          <span style={{ display: "inline-block", background: "#F0FDF4", color: "#059669", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.875rem", borderRadius: "999px", marginBottom: "1rem" }}>
            Why businesses choose us
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#0F172A",
            }}
          >
            Top 8 Benefits of Meleket
            <br />
            Billing Software
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", marginTop: "0.75rem" }}>
            Click any benefit to learn more
          </p>
        </motion.div>

        {/* Grid of benefit cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {TOP_BENEFITS.map((benefit, i) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={i} />
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0",
            marginTop: "3rem",
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}
        >
          {[
            { value: "5,000+", label: "Businesses", icon: "🏪" },
            { value: "ETB 2B+", label: "Processed", icon: "💳" },
            { value: "40+", label: "Reports", icon: "📊" },
            { value: "4.8★", label: "Play Store", icon: "⭐" },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                padding: "1.5rem",
                textAlign: "center",
                borderRight: i < arr.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              <div style={{ fontSize: "1.25rem", marginBottom: "0.375rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#E53935", letterSpacing: "-0.025em" }}>{s.value}</div>
              <div style={{ fontSize: "0.8125rem", color: "#6B7280", fontWeight: 500, marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

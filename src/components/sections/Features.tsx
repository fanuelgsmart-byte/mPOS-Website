"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FEATURE_TABS } from "@/lib/constants";
import {
  ShoppingCart, FileText, Package, Palette, Receipt,
  ArrowLeftRight, BarChart2, CloudUpload, Printer, Users, Globe,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  ShoppingCart, FileText, Package, Palette, Receipt,
  ArrowLeftRight, BarChart2, CloudUpload, Printer, Users, Globe,
};

const spring = { type: "spring", stiffness: 200, damping: 24 } as const;

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  const activeFeature = FEATURE_TABS[activeTab];
  const Icon = activeFeature ? ICON_MAP[activeFeature.icon] : null;

  return (
    <section id="features" ref={ref} style={{ background: "#FFFFFF" }} className="section-padding">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-14"
        >
          <span style={{ display: "inline-block", background: "#FFF0EE", color: "#E53935", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.875rem", borderRadius: "999px", marginBottom: "1rem" }}>
            Everything Built In
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
            Features of MoR Billing &amp;
            <br />
            Accounting Software
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", marginTop: "0.75rem", maxWidth: "480px", margin: "0.75rem auto 0" }}>
            Everything your Ethiopian business needs — from POS billing to payroll — in one app.
          </p>
        </motion.div>

        {/* Vertical Tab Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.12 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Left — Tab List */}
          <div className="w-full lg:w-[42%] flex flex-col gap-2 lg:max-h-[600px] lg:overflow-y-auto vertical-tab-scrollbar">
            {FEATURE_TABS.map((tab, index) => {
              const TabIcon = ICON_MAP[tab.icon];
              const isActive = activeTab === index;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.125rem 1.375rem",
                    borderRadius: "12px",
                    border: `1.5px solid ${isActive ? "rgba(229,57,53,0.2)" : "#F3F4F6"}`,
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    background: isActive ? "#FFF0EE" : "#FFFFFF",
                    borderLeftWidth: "4px",
                    borderLeftColor: isActive ? "#E53935" : "transparent",
                    boxShadow: isActive ? "0 4px 16px rgba(229,57,53,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
                    transition: "background 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#FAFAFA";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.borderColor = "#F3F4F6";
                    }
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `1.5px solid ${isActive ? "rgba(229,57,53,0.3)" : "#E5E7EB"}`,
                      background: isActive ? "rgba(229,57,53,0.08)" : "transparent",
                      transition: "all 200ms ease",
                    }}
                  >
                    {TabIcon && <TabIcon size={19} color={isActive ? "#E53935" : "#9CA3AF"} strokeWidth={1.8} />}
                  </div>
                  <span style={{ fontSize: "0.9375rem", fontWeight: isActive ? 700 : 500, color: isActive ? "#0F172A" : "#4B5563", transition: "all 180ms ease" }}>
                    {tab.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right — Content Panel */}
          <div className="w-full lg:w-[58%] lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 16, scale: 0.99 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.99 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "18px",
                  padding: "2.25rem 2.5rem",
                  border: "1px solid #E5E7EB",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent glow */}
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "160px", height: "160px", background: "radial-gradient(circle, rgba(229,57,53,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(229,57,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {Icon && <Icon size={24} color="#E53935" strokeWidth={1.8} />}
                  </div>
                  <h3 style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", fontWeight: 800, color: "#0F172A", lineHeight: 1.25 }}>
                    {activeFeature.title}
                  </h3>
                </div>

                <div style={{ fontSize: "0.9375rem", lineHeight: 1.85, color: "#4B5563" }}>
                  {activeFeature.content.split("\n").map((para, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>{para}</p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#get-started"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#E53935",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    marginTop: "0.5rem",
                    borderBottom: "2px solid rgba(229,57,53,0.3)",
                    paddingBottom: "1px",
                    transition: "border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#E53935")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.3)")}
                >
                  Learn more about this feature →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

export interface PillTab {
  label: string;
  description: string;
  imagePlaceholder?: string;
}

export interface PillTabsProps {
  title: string;
  tabs: PillTab[];
  accentColor: string;
  showDemoLink?: boolean;
}

function TabImagePanel({ placeholder, accent }: { placeholder: string; accent: string }) {
  const bars = [50, 75, 55, 90, 65, 80, 70, 95];
  return (
    <div style={{ background: "#111827", borderRadius: "14px", padding: "1.5rem", width: "100%", minHeight: "240px", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: "5px", marginBottom: "1rem" }}>
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
        ))}
      </div>

      <div style={{ textAlign: "center", fontSize: "3rem", marginBottom: "1rem" }}>{placeholder ?? "📱"}</div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "50px", marginBottom: "0.75rem" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 4 ? accent : `${accent}44`, borderRadius: "3px 3px 0 0" }} />
        ))}
      </div>

      <div style={{ height: "7px", background: "#1F2937", borderRadius: "4px", marginBottom: "0.5rem" }} />
      <div style={{ height: "7px", background: "#1F2937", borderRadius: "4px", width: "70%" }} />

      <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100px", height: "100px", background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`, pointerEvents: "none" }} />
    </div>
  );
}

export default function PillTabs({ title, tabs, accentColor, showDemoLink = true }: PillTabsProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
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
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h2>

        {/* Pill tabs — scrollable on mobile */}
        <div style={{ overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", gap: "0.625rem", width: "max-content", margin: "0 auto", justifyContent: "center", flexWrap: "wrap", maxWidth: "100%" }}>
            {tabs.map((tab, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "0.5rem 1.125rem",
                    borderRadius: "999px",
                    border: `2px solid ${isActive ? accentColor : "#D1D5DB"}`,
                    background: isActive ? "#fff" : "transparent",
                    color: isActive ? accentColor : "#4B5563",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 180ms ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "#F9FAFB";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            className="lg:!flex-row items-center gap-12"
          >
            {/* Image */}
            <div style={{ flex: "0 0 45%", width: "100%" }}>
              <TabImagePanel placeholder={tabs[active].imagePlaceholder ?? "📱"} accent={accentColor} />
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", fontWeight: 800, color: "#0F172A", marginBottom: "1rem", lineHeight: 1.25 }}>
                {tabs[active].label}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "#4B5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {tabs[active].description}
              </p>
              {showDemoLink && (
                <a
                  href="#get-started"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: accentColor,
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    borderBottom: `2px solid ${accentColor}55`,
                    paddingBottom: "2px",
                    transition: "border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${accentColor}55`)}
                >
                  Get a Free Demo →
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface Industry {
  icon: string;
  name: string;
  description: string;
}

export interface IndustrySectionProps {
  title: string;
  industries: Industry[];
  accentColor: string;
  accentLight: string;
}

function IndustryPanel({ industry, accent }: { industry: Industry; accent: string }) {
  const bars = [60, 80, 45, 90, 65, 75, 55];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontSize: "0.9375rem", color: "#4B5563", lineHeight: 1.75 }}>{industry.description}</p>
      {/* Dark illustration */}
      <div style={{ background: "#111827", borderRadius: "12px", padding: "1.25rem", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "5px", marginBottom: "0.75rem" }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ fontSize: "2rem", textAlign: "center", marginBottom: "0.75rem" }}>{industry.icon}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "40px" }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 4 ? accent : `${accent}44`, borderRadius: "3px 3px 0 0" }} />
          ))}
        </div>
        <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "80px", height: "80px", background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`, pointerEvents: "none" }} />
      </div>
    </div>
  );
}

export default function IndustrySection({ title, industries, accentColor, accentLight }: IndustrySectionProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#FAFAFA", paddingTop: "5rem", paddingBottom: "5rem" }}>
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
            marginBottom: "3rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Industry list */}
          <div style={{ flex: "0 0 42%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  border: `1.5px solid ${active === i ? accentColor + "55" : "#E5E7EB"}`,
                  background: active === i ? accentLight : "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  transition: "all 180ms ease",
                  borderLeftWidth: "4px",
                  borderLeftColor: active === i ? accentColor : "transparent",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{ind.icon}</span>
                <span style={{ fontSize: "0.9375rem", fontWeight: active === i ? 700 : 500, color: active === i ? "#0F172A" : "#4B5563" }}>
                  {ind.name}
                </span>
              </button>
            ))}
          </div>

          {/* Industry content */}
          <div style={{ flex: 1 }}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", marginBottom: "0.75rem" }}>
                {industries[active].name}
              </h3>
              <IndustryPanel industry={industries[active]} accent={accentColor} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

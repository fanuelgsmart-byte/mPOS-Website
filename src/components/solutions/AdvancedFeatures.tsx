"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AdvancedFeature {
  title: string;
  description: string;
  bullets: string[];
  imagePlaceholder?: string; // emoji or icon for the dark panel
}

export interface AdvancedFeaturesProps {
  title: string;
  features: AdvancedFeature[];
  accentColor: string;
}

function DarkImagePanel({ placeholder, accent, index }: { placeholder: string; accent: string; index: number }) {
  const rows = [75, 55, 90, 65, 80];
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "14px",
        padding: "1.5rem",
        width: "100%",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Window dots */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "0.25rem" }}>
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
        ))}
      </div>

      {/* Large icon */}
      <div style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "0.5rem" }}>{placeholder}</div>

      {/* Mini chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "44px", padding: "0 0.5rem" }}>
        {rows.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 3 ? accent : `${accent}44`, borderRadius: "3px 3px 0 0" }} />
        ))}
      </div>

      {/* Data rows */}
      {[0, 1].map((i) => (
        <div key={i} style={{ background: "#1F2937", borderRadius: "7px", padding: "0.5rem 0.75rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: accent, flexShrink: 0 }} />
          <div style={{ flex: 1, height: 6, background: "#374151", borderRadius: "3px" }} />
          <div style={{ width: 36, height: 6, background: `${accent}55`, borderRadius: "3px" }} />
        </div>
      ))}

      {/* Glow */}
      <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", background: `radial-gradient(circle, ${accent}25 0%, transparent 70%)`, pointerEvents: "none" }} />
    </div>
  );
}

function AdvancedPanel({ feature, index, accentColor }: { feature: AdvancedFeature; index: number; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        background: index % 2 === 0 ? "#F8FAFC" : "#fff",
        borderRadius: "16px",
        padding: "2.5rem",
        display: "flex",
        flexDirection: isEven ? "row" : "row-reverse",
        gap: "3rem",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
      className="flex-col lg:!flex-row"
    >
      {/* Image side */}
      <div style={{ flex: "0 0 42%", width: "100%" }}>
        <DarkImagePanel placeholder={feature.imagePlaceholder ?? "📊"} accent={accentColor} index={index} />
      </div>

      {/* Text side */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", fontWeight: 800, color: accentColor, marginBottom: "0.875rem", lineHeight: 1.25 }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: "0.9375rem", color: "#4B5563", lineHeight: 1.75, marginBottom: "1.25rem" }}>
          {feature.description}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {feature.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
              <span style={{ color: "#059669", fontWeight: 800, flexShrink: 0, fontSize: "0.9rem", marginTop: "2px" }}>✓</span>
              <span style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AdvancedFeatures({ title, features, accentColor }: AdvancedFeaturesProps) {
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

        <div>
          {features.map((f, i) => (
            <AdvancedPanel key={i} feature={f} index={i} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

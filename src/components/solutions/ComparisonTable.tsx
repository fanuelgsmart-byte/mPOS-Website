"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface ComparisonFeature {
  name: string;
  basic: boolean;
  meleket: boolean;
}

export interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  features: ComparisonFeature[];
  basicLabel?: string;
  meleket?: string;
  accentColor: string;
}

function CheckIcon({ checked, accent }: { checked: boolean; accent: string }) {
  if (checked) {
    return (
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 2L10 10M10 2L2 10" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ComparisonTable({
  title,
  features,
  basicLabel = "Basic Software",
  meleket: meleket_label = "Meleket",
  accentColor,
}: ComparisonTableProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#FFF5F3", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              maxWidth: "680px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>

          {/* Table card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
              overflow: "hidden",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            {/* Header row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 160px" }}>
              <div style={{ padding: "1.25rem 1.5rem", background: "#F8FAFC", borderBottom: "1px solid #E5E7EB" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>Features</span>
              </div>
              <div style={{ padding: "1.25rem 1rem", background: "#F8FAFC", borderBottom: "1px solid #E5E7EB", borderLeft: "1px solid #E5E7EB", textAlign: "center" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#6B7280" }}>{basicLabel}</span>
              </div>
              <div
                style={{
                  padding: "1.25rem 1rem",
                  background: "#FFF5F3",
                  borderBottom: `2px solid ${accentColor}`,
                  borderLeft: "1px solid #E5E7EB",
                  borderRight: `2px solid ${accentColor}`,
                  textAlign: "center",
                  borderTop: `2px solid ${accentColor}`,
                }}
              >
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: accentColor }}>{meleket_label}</span>
              </div>
            </div>

            {/* Feature rows */}
            {features.map((f, i) => (
              <div
                key={i}
                style={{ display: "grid", gridTemplateColumns: "1fr 140px 160px", borderBottom: i < features.length - 1 ? "1px solid #F3F4F6" : "none" }}
              >
                <div style={{ padding: "0.875rem 1.5rem", display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9rem", color: "#374151", fontWeight: 500 }}>{f.name}</span>
                </div>
                <div style={{ padding: "0.875rem 1rem", borderLeft: "1px solid #F3F4F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckIcon checked={f.basic} accent={accentColor} />
                </div>
                <div
                  style={{
                    padding: "0.875rem 1rem",
                    borderLeft: "1px solid #F3F4F6",
                    borderRight: `2px solid ${accentColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FFFBFA",
                  }}
                >
                  <CheckIcon checked={f.meleket} accent={accentColor} />
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 160px" }}>
              <div style={{ padding: "1.25rem 1.5rem" }} />
              <div style={{ padding: "1.25rem 1rem", borderLeft: "1px solid #F3F4F6" }} />
              <div
                style={{
                  padding: "1.25rem 1rem",
                  borderLeft: "1px solid #F3F4F6",
                  borderRight: `2px solid ${accentColor}`,
                  borderBottom: `2px solid ${accentColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFBFA",
                  borderRadius: "0 0 16px 0",
                }}
              >
                <a
                  href="#get-started"
                  style={{
                    background: accentColor,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.8125rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "opacity 150ms ease",
                    textAlign: "center",
                    display: "block",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Download Free Now!
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

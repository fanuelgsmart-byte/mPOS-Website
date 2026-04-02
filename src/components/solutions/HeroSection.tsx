"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface HeroLabel {
  text: string;
  icon: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
}

export interface HeroProps {
  breadcrumb: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  ctaLabel: string;
  labels: HeroLabel[];
  accentColor: string;
  accentLight: string;
  dashboardType?: "accounting" | "invoicing" | "inventory" | "pos";
}

// Dark SVG dashboard mockups per page type
function DashboardMockup({ type, accent }: { type: string; accent: string }) {
  const bars = [55, 75, 40, 90, 65, 80, 50, 95, 70, 85];
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "16px",
        padding: "1.5rem",
        width: "100%",
        maxWidth: "480px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Window dots */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
      </div>

      {/* Top stat row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.625rem", marginBottom: "1rem" }}>
        {[
          { label: type === "pos" ? "Sales Today" : type === "inventory" ? "In Stock" : "Revenue", val: type === "inventory" ? "2,840" : "ETB 48K", accent: true },
          { label: type === "pos" ? "Transactions" : "This Month", val: type === "pos" ? "124" : "ETB 142K", accent: false },
          { label: type === "inventory" ? "Low Stock" : "Growth", val: type === "inventory" ? "12 items" : "+18%", accent: false },
        ].map((s, i) => (
          <div key={i} style={{ background: s.accent ? accent : "#1F2937", borderRadius: "10px", padding: "0.75rem 0.875rem" }}>
            <div style={{ fontSize: "0.6rem", color: s.accent ? "rgba(255,255,255,0.7)" : "#6B7280", marginBottom: "4px" }}>{s.label}</div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#fff" }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ background: "#1F2937", borderRadius: "10px", padding: "1rem", marginBottom: "0.75rem" }}>
        <div style={{ fontSize: "0.625rem", color: "#6B7280", marginBottom: "0.6rem" }}>
          {type === "accounting" ? "Profit & Loss Overview" : type === "invoicing" ? "Invoice Collections" : type === "inventory" ? "Stock Movement" : "Daily Sales"}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "56px" }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? accent : `${accent}55`, borderRadius: "3px 3px 0 0" }} />
          ))}
        </div>
      </div>

      {/* List rows */}
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ background: "#1F2937", borderRadius: "8px", padding: "0.6rem 0.875rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div style={{ width: 28, height: 28, borderRadius: "6px", background: `${accent}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 12, height: 12, borderRadius: "3px", background: accent }} />
          </div>
          <div style={{ flex: 1, height: 7, background: "#374151", borderRadius: "4px" }} />
          <div style={{ width: 44, height: 7, background: `${accent}66`, borderRadius: "4px" }} />
        </div>
      ))}

      {/* Glow */}
      <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "140px", height: "140px", background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`, pointerEvents: "none" }} />
    </div>
  );
}

export default function HeroSection({
  breadcrumb,
  title,
  titleAccent,
  subtitle,
  ctaLabel,
  labels,
  accentColor,
  accentLight,
  dashboardType = "accounting",
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} style={{ background: accentLight, paddingTop: "3.5rem", paddingBottom: "4rem" }}>
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "1.5rem" }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ fontSize: "0.8125rem", color: "#6B7280", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)} onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}>
            Home
          </Link>
          <ChevronRight size={12} color="#9CA3AF" />
          <span style={{ fontSize: "0.8125rem", color: "#374151" }}>{breadcrumb}</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
            style={{ maxWidth: "560px" }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0F172A",
                marginBottom: "1.25rem",
              }}
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span style={{ color: accentColor }}>{titleAccent}</span>
                </>
              )}
            </h1>

            <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)", color: "#4B5563", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "480px" }}>
              {subtitle}
            </p>

            <a
              href="#get-started"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: accentColor,
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: `0 4px 14px ${accentColor}40`,
                transition: "all 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 20px ${accentColor}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 14px ${accentColor}40`;
              }}
            >
              {ctaLabel}
            </a>
          </motion.div>

          {/* Right — illustration + labels */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex-1 w-full"
            style={{ position: "relative", display: "flex", justifyContent: "center", maxWidth: "520px" }}
          >
            <DashboardMockup type={dashboardType} accent={accentColor} />

            {/* Floating labels */}
            {labels.map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                style={{
                  position: "absolute",
                  ...label.pos,
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "0.5rem 0.875rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  whiteSpace: "nowrap",
                  border: "1px solid #F3F4F6",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{label.icon}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#111827" }}>{label.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

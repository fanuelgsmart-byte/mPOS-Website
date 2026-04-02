"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SolutionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionTab {
  id: string;
  title: string;
  content: string;
  bullets: string[];
}

export interface SolutionFAQ {
  q: string;
  a: string;
}

export interface SolutionPageData {
  slug: string;
  accentColor: string;
  accentLight: string;
  heroTag: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroFeatures: string[];
  stats: { value: string; label: string }[];
  featuresTitle: string;
  features: SolutionFeature[];
  tabsTitle: string;
  tabs: SolutionTab[];
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  faqTitle: string;
  faqs: SolutionFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function InViewSection({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SolutionPage({ data }: { data: SolutionPageData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { accentColor, accentLight } = data;

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{ background: accentLight, paddingTop: "4rem", paddingBottom: "5rem" }}
      >
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-xl"
            >
              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  background: accentColor,
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "999px",
                  marginBottom: "1.25rem",
                }}
              >
                {data.heroTag}
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "#111827",
                  marginBottom: "1.25rem",
                }}
              >
                {data.heroTitle}{" "}
                <span style={{ color: accentColor }}>{data.heroTitleAccent}</span>
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  color: "#4B5563",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {data.heroSubtitle}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {data.heroFeatures.map((f, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "#fff",
                      border: `1.5px solid ${accentColor}22`,
                      borderRadius: "999px",
                      padding: "0.3rem 0.85rem",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#374151",
                    }}
                  >
                    <span style={{ color: accentColor, fontWeight: 800 }}>✓</span>
                    {f}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#get-started"
                  style={{
                    background: accentColor,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.875rem 2rem",
                    borderRadius: "10px",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 150ms ease",
                    boxShadow: `0 4px 14px ${accentColor}40`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Get Started Free
                </a>
                <a
                  href="#features"
                  style={{
                    background: "#fff",
                    color: "#111827",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "0.875rem 2rem",
                    borderRadius: "10px",
                    textDecoration: "none",
                    border: "1.5px solid #E5E7EB",
                    cursor: "pointer",
                    transition: "border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                >
                  Explore Features
                </a>
              </div>
            </motion.div>

            {/* Right — decorative card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="flex-1 w-full max-w-lg"
            >
              <div
                style={{
                  background: "#111827",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                  minHeight: "320px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative top bar */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                  ))}
                </div>

                {/* Mock dashboard lines */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {/* Top row: 3 stat cards */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {data.stats.slice(0, 3).map((s, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          background: i === 0 ? accentColor : "#1F2937",
                          borderRadius: "10px",
                          padding: "0.75rem",
                        }}
                      >
                        <div style={{ fontSize: "0.625rem", color: i === 0 ? "rgba(255,255,255,0.7)" : "#6B7280", marginBottom: "0.25rem" }}>{s.label}</div>
                        <div style={{ fontSize: "1rem", fontWeight: 800, color: "#fff" }}>{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart bar mock */}
                  <div style={{ background: "#1F2937", borderRadius: "10px", padding: "1rem" }}>
                    <div style={{ fontSize: "0.625rem", color: "#6B7280", marginBottom: "0.6rem" }}>Monthly Overview</div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "0.4rem", height: "60px" }}>
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 72].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            background: i === 6 ? accentColor : `${accentColor}44`,
                            borderRadius: "3px 3px 0 0",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* List items mock */}
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      style={{
                        background: "#1F2937",
                        borderRadius: "8px",
                        padding: "0.7rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: accentColor, flexShrink: 0 }} />
                      <div style={{ flex: 1, height: 8, background: "#374151", borderRadius: "4px" }} />
                      <div style={{ width: 48, height: 8, background: `${accentColor}55`, borderRadius: "4px" }} />
                    </div>
                  ))}
                </div>

                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    background: `radial-gradient(circle, ${accentColor}33 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          <InViewSection>
            <div className="flex flex-wrap justify-center md:justify-between gap-6 py-10">
              {data.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4">
                  <span
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 800,
                      color: accentColor,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.value}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#6B7280", fontWeight: 500, marginTop: "0.25rem" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </InViewSection>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────────────── */}
      <section id="features" style={{ background: "#FAFAFA", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-custom">
          <InViewSection>
            <div className="text-center mb-12">
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#111827",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                {data.featuresTitle}
              </h2>
            </div>
          </InViewSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f, i) => (
              <InViewSection key={i} delay={i * 0.05}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "1.75rem",
                    border: "1px solid #E5E7EB",
                    height: "100%",
                    transition: "box-shadow 200ms ease, transform 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${accentColor}18`;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: accentLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65 }}>
                    {f.description}
                  </p>
                </div>
              </InViewSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE TABS ─────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-custom">
          <InViewSection>
            <div className="text-center mb-12">
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#111827",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {data.tabsTitle}
              </h2>
            </div>
          </InViewSection>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Tab list */}
            <div className="w-full lg:w-[42%] flex flex-col gap-2">
              {data.tabs.map((tab, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.1rem 1.35rem",
                      borderRadius: "10px",
                      border: `1.5px solid ${isActive ? accentColor + "44" : "#E5E7EB"}`,
                      background: isActive ? accentLight : "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      transition: "all 180ms ease",
                      borderLeftWidth: "4px",
                      borderLeftColor: isActive ? accentColor : "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#111827" : "#4B5563",
                      }}
                    >
                      {tab.title}
                    </span>
                    <ChevronRight
                      size={16}
                      color={isActive ? accentColor : "#9CA3AF"}
                      style={{ flexShrink: 0, transition: "transform 180ms ease", transform: isActive ? "translateX(2px)" : "none" }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="w-full lg:w-[58%] lg:sticky lg:top-24 lg:self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  <div
                    style={{
                      background: "#FAFAFA",
                      borderRadius: "16px",
                      padding: "2rem 2.25rem",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                        fontWeight: 800,
                        color: "#111827",
                        marginBottom: "1rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {data.tabs[activeTab].title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "#4B5563",
                        lineHeight: 1.8,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {data.tabs[activeTab].content}
                    </p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {data.tabs[activeTab].bullets.map((b, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                          <span
                            style={{
                              flexShrink: 0,
                              marginTop: "2px",
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              background: accentColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Check size={10} color="#fff" strokeWidth={3} />
                          </span>
                          <span style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-custom">
          <InViewSection>
            <div className="text-center mb-12">
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#111827",
                  letterSpacing: "-0.02em",
                }}
              >
                {data.benefitsTitle}
              </h2>
            </div>
          </InViewSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.benefits.map((b, i) => (
              <InViewSection key={i} delay={i * 0.07}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "1.75rem",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: accentColor,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.4rem" }}>
                      {b.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                </div>
              </InViewSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-custom" style={{ maxWidth: "800px" }}>
          <InViewSection>
            <div className="text-center mb-12">
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#111827",
                  letterSpacing: "-0.02em",
                }}
              >
                {data.faqTitle}
              </h2>
            </div>
          </InViewSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {data.faqs.map((faq, i) => (
              <InViewSection key={i} delay={i * 0.04}>
                <div
                  style={{
                    border: "1.5px solid",
                    borderColor: openFaq === i ? accentColor + "55" : "#E5E7EB",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "border-color 200ms ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.2rem 1.5rem",
                      background: openFaq === i ? accentLight : "#fff",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 200ms ease",
                    }}
                  >
                    <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color={accentColor}
                      style={{
                        flexShrink: 0,
                        transition: "transform 200ms ease",
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 1.5rem 1.25rem", borderTop: "1px solid #F3F4F6" }}>
                          <p style={{ fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.75, paddingTop: "1rem" }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </InViewSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        id="get-started"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container-custom text-center">
          <InViewSection>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {data.ctaTitle}
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "2.5rem",
                maxWidth: "560px",
                margin: "0 auto 2.5rem",
              }}
            >
              {data.ctaSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                style={{
                  background: "#fff",
                  color: accentColor,
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.9rem 2.25rem",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "opacity 150ms ease",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Download Free
              </a>
              <Link
                href="/"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.9rem 2.25rem",
                  borderRadius: "10px",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              >
                Back to Home
              </Link>
            </div>
          </InViewSection>
        </div>
      </section>

      <Footer />
    </>
  );
}

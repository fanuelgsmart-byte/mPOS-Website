"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface Testimonial {
  name: string;
  business: string;
  city: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface TrustTestimonialsProps {
  headline?: string;
  testimonials: Testimonial[];
  accentColor: string;
  stats?: { value: string; label: string }[];
}

function Stars({ count = 5, color = "#F59E0B" }: { count?: number; color?: string }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < count ? color : "#E5E7EB"}>
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.25 4.3 12.52l.7-4.1L2 5.5l4.15-.75L8 1z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, accent }: { t: Testimonial; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "1.75rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        border: "1px solid #F3F4F6",
        flex: 1,
        minWidth: "260px",
      }}
    >
      <Stars count={t.rating} />
      <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.75, margin: "1rem 0 1.25rem", fontStyle: "italic" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: `${accent}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "0.875rem",
            color: accent,
            flexShrink: 0,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111827" }}>{t.name}</div>
          <div style={{ fontSize: "0.8125rem", color: "#6B7280" }}>{t.business}, {t.city}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrustTestimonials({ headline, testimonials, accentColor, stats }: TrustTestimonialsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#FAFAFA", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
        {/* Trust header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            {headline ?? "Trusted by 5,000+ Ethiopian Businesses"}
          </h2>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginBottom: stats ? "2.5rem" : 0 }}>
            {[
              { label: "Google Play", rating: "4.8", icon: "▶" },
              { label: "App Store", rating: "4.7", icon: "" },
              { label: "MoR Certified", rating: "", icon: "✅" },
            ].map((b) => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.625rem", background: "#fff", borderRadius: "12px", padding: "0.75rem 1.25rem", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <span style={{ fontSize: "1.125rem" }}>{b.icon}</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>{b.label}</div>
                  {b.rating && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Stars count={5} color="#F59E0B" />
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111827" }}>{b.rating}/5</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          {stats && (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: accentColor, letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#6B7280", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Testimonials */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} accent={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

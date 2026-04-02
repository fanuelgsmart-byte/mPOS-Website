"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StarRating({ accentColor = "#E53935" }: { accentColor?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const display = hovered ?? selected ?? 0;

  const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <section style={{ background: "#F8FAFC", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <h3
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            fontWeight: 800,
            color: "#0F172A",
            marginBottom: "0.5rem",
          }}
        >
          How Useful is Meleket for Your Business?
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "1.5rem" }}>
          Rate your experience and help other Ethiopian business owners
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#D1FAE5", borderRadius: "999px" }}
          >
            <span style={{ fontSize: "1.25rem" }}>🎉</span>
            <span style={{ fontWeight: 700, color: "#059669" }}>Thank you for your {selected}-star rating!</span>
          </motion.div>
        ) : (
          <>
            {/* Stars */}
            <div
              style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "0.75rem" }}
              onMouseLeave={() => setHovered(null)}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHovered(star)}
                  onClick={() => { setSelected(star); setSubmitted(true); }}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", transition: "transform 150ms ease" }}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                  aria-label={`Rate ${star} stars`}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill={star <= display ? "#F59E0B" : "#E5E7EB"} style={{ transition: "fill 150ms ease" }}>
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Label */}
            <div style={{ height: "1.5rem" }}>
              {display > 0 && (
                <motion.span
                  key={display}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "0.9rem", fontWeight: 600, color: accentColor }}
                >
                  {labels[display]}
                </motion.span>
              )}
            </div>

            {/* Average */}
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? "#F59E0B" : "#E5E7EB"}>
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>4.8 / 5 &nbsp;·&nbsp; 5,000+ votes</span>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}

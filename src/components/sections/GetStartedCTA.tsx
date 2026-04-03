"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const spring = { type: "spring", stiffness: 180, damping: 22 } as const;

export default function GetStartedCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [phone, setPhone] = useState("");

  return (
    <section ref={ref} id="get-started" style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={spring}
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)",
            borderRadius: "24px",
            overflow: "hidden",
            padding: "4rem",
          }}
        >
          {/* Background glows */}
          <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(229,57,53,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "40%", left: "40%", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Subtle grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16" style={{ zIndex: 1 }}>
            {/* Left — Copy */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(229,57,53,0.15)", borderRadius: "999px", padding: "0.3rem 0.875rem", marginBottom: "1.25rem", border: "1px solid rgba(229,57,53,0.25)" }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#E53935", display: "inline-block" }} />
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Start free today</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.16 }}
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "1rem" }}
              >
                Get started with
                <br />
                <span style={{ color: "#FCA5A5" }}>Meleket.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.22 }}
                style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "420px" }}
              >
                Join 5,000+ Ethiopian businesses managing their billing, inventory, and compliance in one place.
              </motion.p>

              {/* Feature snippets */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.3 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}
              >
                {["MoR Certified", "Works Offline", "Amharic Support", "Free to Start"].map((f) => (
                  <span key={f} style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                    <span style={{ color: "#4ADE80", fontWeight: 800 }}>✓</span>{f}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...spring, delay: 0.2 }}
              style={{ flex: "0 0 auto", width: "100%", maxWidth: "420px" }}
            >
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "18px", padding: "2rem", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff", marginBottom: "1.125rem" }}>
                  Enter your phone to get the app
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", flex: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", overflow: "hidden" }}>
                    <span style={{ display: "flex", alignItems: "center", padding: "0 0.875rem", borderRight: "1px solid rgba(255,255,255,0.1)", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" }}>
                      🇪🇹 +251
                    </span>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ flex: 1, border: "none", outline: "none", padding: "0.875rem", fontSize: "0.9375rem", color: "#fff", background: "transparent", minWidth: 0 }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: "#E53935",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      padding: "0.875rem 1.375rem",
                      whiteSpace: "nowrap",
                      transition: "all 180ms ease",
                      boxShadow: "0 4px 12px rgba(229,57,53,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#C62828";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(229,57,53,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#E53935";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(229,57,53,0.4)";
                    }}
                  >
                    Get Link
                  </button>
                </form>

                {/* Download badges */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    { store: "Google Play", sub: "Get it on", icon: "▶" },
                    { store: "App Store", sub: "Download on the", icon: "" },
                  ].map((b) => (
                    <a
                      key={b.store}
                      href="#download"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        background: "rgba(255,255,255,0.08)",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "0.625rem 1rem",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.1)",
                        transition: "background 150ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                    >
                      <div>
                        <div style={{ fontSize: "0.6rem", opacity: 0.65, marginBottom: "2px" }}>{b.sub}</div>
                        <div style={{ fontSize: "1rem", fontWeight: 600 }}>{b.store}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

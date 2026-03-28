"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, EASE_SPRING } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "#FFF0EE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* ── Main layout row ── */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start flex-1 pt-10 lg:pt-14">
        {/* Left — text content */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="px-5 sm:px-8 lg:pl-[clamp(2.5rem,5vw,5rem)] lg:pr-8 w-full lg:max-w-[520px] lg:flex-shrink-0 z-[2] text-center lg:text-left"
        >
          {/* Cursive accent — Khatabook "(aur bhi)" */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)",
              color: "#374151",
              lineHeight: 1,
              marginBottom: "0.125rem",
            }}
          >
            (even more)
          </motion.p>

          {/* Bold headline — Khatabook "Business hua easy" */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#111827",
              marginBottom: "0.375rem",
            }}
          >
            Business made{" "}
            <span style={{ display: "inline-block" }}>easy</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
              fontWeight: 400,
              color: "#6B7280",
              marginBottom: "2.25rem",
              lineHeight: 1.3,
            }}
          >
            with Meleket on any device
          </motion.p>

          {/* Phone number input — Khatabook pattern: [+251 | input | Get Started] */}
          <motion.div variants={fadeUp}>
            <div
              className="max-w-[440px] mx-auto lg:mx-0"
              style={{
                display: "flex",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* +251 country code */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  borderRight: "1px solid #E5E7EB",
                  paddingLeft: "1rem",
                  paddingRight: "0.875rem",
                  height: "56px",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "#374151",
                  whiteSpace: "nowrap",
                }}
              >
                +251
              </div>
              {/* Phone input */}
              <input
                type="tel"
                placeholder="Enter your phone number"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "0.9375rem",
                  color: "#374151",
                  background: "transparent",
                  padding: "0 0.75rem",
                  height: "56px",
                  minWidth: 0,
                }}
              />
              {/* Get Started button — Khatabook red */}
              <button
                className="hero-get-started-btn"
                style={{
                  flexShrink: 0,
                  background: "#E53935",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  border: "none",
                  cursor: "pointer",
                  padding: "0 1.5rem",
                  height: "56px",
                  transition: "background 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — overlapping device mockups (bleeds to right edge) */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE_SPRING }}
          className="hidden lg:flex"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "58%",
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "120px",
          }}
        >
          {/* Desktop app mockup — large, anchored right */}
          <div
            style={{
              position: "absolute",
              right: "-20px",
              top: "24px",
              width: "68%",
              minHeight: "320px",
              borderRadius: "16px 16px 0 0",
              border: "2px solid #E5E7EB",
              borderBottom: "none",
              background: "#FFFFFF",
              overflow: "hidden",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                background: "#1F2937",
                borderBottom: "1px solid #374151",
              }}
            >
              <div style={{ display: "flex", gap: "5px" }}>
                {["#EF4444", "#FBBF24", "#22C55E"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  marginLeft: "8px",
                  height: "20px",
                  borderRadius: "6px",
                  background: "#374151",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "8px",
                }}
              >
                <span style={{ fontSize: "9px", color: "#9CA3AF" }}>meleket.app/customers</span>
              </div>
            </div>

            {/* App layout */}
            <div style={{ display: "flex", height: "100%" }}>
              {/* Sidebar */}
              <div style={{ width: "140px", flexShrink: 0, background: "#0F172A", padding: "12px 0" }}>
                <div style={{ padding: "0 10px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "#E53935", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "white", fontSize: 9, fontWeight: 700 }}>M</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 700, color: "#FFFFFF" }}>Super Kirana</p>
                      <p style={{ fontSize: 7, color: "#22C55E" }}>● Online</p>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 7, color: "#64748B", padding: "4px 10px", fontWeight: 600, letterSpacing: "0.08em" }}>LEDGER MANAGEMENT</p>
                {[
                  { label: "Customers", active: true },
                  { label: "Suppliers", active: false },
                  { label: "Expenses", active: false },
                  { label: "Cashbook", active: false },
                  { label: "Staff", active: false },
                  { label: "Reports - Parties", active: false },
                  { label: "Settings", active: false },
                ].map(({ label, active }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 10px",
                      background: active ? "rgba(229,57,53,0.15)" : "transparent",
                      borderLeft: active ? "2px solid #E53935" : "2px solid transparent",
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: active ? "#E53935" : "#475569" }} />
                    <span style={{ fontSize: 8, color: active ? "#FFFFFF" : "#94A3B8", fontWeight: active ? 600 : 400 }}>{label}</span>
                  </div>
                ))}
                <p style={{ fontSize: 7, color: "#64748B", padding: "8px 10px 4px", fontWeight: 600, letterSpacing: "0.08em", marginTop: 4 }}>BILLS &amp; INVENTORY</p>
              </div>

              {/* Main content */}
              <div style={{ flex: 1, background: "#F8FAFC", padding: "12px", overflowX: "hidden" }}>
                {/* Tabs */}
                <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                  <div style={{ padding: "3px 10px", borderRadius: 4, background: "#E53935", color: "white", fontSize: 8, fontWeight: 600 }}>
                    Customers · 120
                  </div>
                  <div style={{ padding: "3px 10px", borderRadius: 4, border: "1px solid #E2E8F0", color: "#94A3B8", fontSize: 8 }}>
                    Suppliers · 0
                  </div>
                </div>

                {/* Summary row */}
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 8, padding: "8px", border: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: 7, color: "#94A3B8", marginBottom: 2 }}>You&apos;ll Give</p>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#22C55E" }}>ETB 13,480 ↑</p>
                  </div>
                  <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 8, padding: "8px", border: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: 7, color: "#94A3B8", marginBottom: 2 }}>You&apos;ll Get</p>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#EF4444" }}>ETB 2,340 ↓</p>
                  </div>
                </div>

                {/* Search bar */}
                <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                  <div style={{ flex: 1, height: 24, borderRadius: 6, border: "1px solid #E2E8F0", background: "#FFFFFF", display: "flex", alignItems: "center", paddingLeft: 6 }}>
                    <span style={{ fontSize: 7, color: "#94A3B8" }}>🔍 Name or Phone Number</span>
                  </div>
                  <div style={{ padding: "0 6px", height: 24, borderRadius: 6, border: "1px solid #E2E8F0", background: "#FFFFFF", display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: 7, color: "#374151" }}>All ▾</span>
                  </div>
                  <div style={{ padding: "0 6px", height: 24, borderRadius: 6, border: "1px solid #E2E8F0", background: "#FFFFFF", display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: 7, color: "#374151" }}>Most Recent ▾</span>
                  </div>
                </div>

                {/* Customer rows */}
                <div style={{ display: "flex", fontSize: 7, fontWeight: 600, color: "#94A3B8", marginBottom: 4, padding: "0 4px" }}>
                  <span style={{ flex: 1 }}>NAME</span>
                  <span>AMOUNT</span>
                </div>
                {[
                  { init: "AS", name: "Arya Sharma", time: "Just now", amt: "ETB 300", col: "#22C55E", label: "YOU'LL GET" },
                  { init: "KO", name: "Kapil Ojha", time: "2 minutes ago", amt: "ETB 75", col: "#22C55E", label: "YOU'LL GET" },
                  { init: "PJ", name: "Priyanka Jadhav", time: "1 hour ago", amt: "ETB 140", col: "#22C55E", label: "YOU'LL GET" },
                  { init: "AK", name: "Abdi Kumar", time: "5 hours ago", amt: "ETB 300", col: "#EF4444", label: "YOU'LL GIVE" },
                  { init: "SS", name: "Sara Singh", time: "1 week ago", amt: "ETB 50", col: "#22C55E", label: "YOU'LL GET" },
                ].map((row) => (
                  <div
                    key={row.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "5px 4px",
                      borderBottom: "1px solid #F1F5F9",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#E2E8F0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 7,
                        fontWeight: 700,
                        color: "#475569",
                        marginRight: 6,
                        flexShrink: 0,
                      }}
                    >
                      {row.init}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 8, fontWeight: 600, color: "#1E293B" }}>{row.name}</p>
                      <p style={{ fontSize: 6, color: "#94A3B8" }}>{row.time}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 9, fontWeight: 700, color: row.col }}>{row.amt}</p>
                      <p style={{ fontSize: 6, color: "#94A3B8" }}>{row.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockup — foreground, overlapping desktop */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              marginLeft: "5%",
              marginBottom: "-20px",
            }}
          >
            <div
              style={{
                width: "200px",
                borderRadius: "32px",
                border: "5px solid #1F2937",
                boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                background: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              {/* Notch */}
              <div style={{ height: "20px", background: "#1F2937", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 48, height: 12, borderRadius: 6, background: "#111827" }} />
              </div>

              {/* App bar */}
              <div style={{ background: "#0F172A", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 9, color: "#FFFFFF", fontWeight: 600 }}>My Business name</span>
                  <span style={{ fontSize: 7, color: "#94A3B8" }}>▾</span>
                </div>
                <div style={{ width: 20, height: 12, borderRadius: 3, background: "#E53935", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 6, color: "white", fontWeight: 700 }}>ON</span>
                </div>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", background: "#FFFFFF" }}>
                <div style={{ flex: 1, textAlign: "center", padding: "6px 0", fontSize: 8, fontWeight: 700, color: "#E53935", borderBottom: "2px solid #E53935" }}>
                  CUSTOMERS
                </div>
                <div style={{ flex: 1, textAlign: "center", padding: "6px 0", fontSize: 8, fontWeight: 500, color: "#94A3B8" }}>
                  SUPPLIERS
                </div>
              </div>

              {/* Balance row */}
              <div style={{ display: "flex", padding: "8px 10px", background: "#F8FAFC", gap: 6 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 6, color: "#94A3B8" }}>You will get</p>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#22C55E" }}>ETB 1,200</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 6, color: "#94A3B8" }}>You will give</p>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#EF4444" }}>ETB 3,070</p>
                </div>
              </div>

              {/* Search */}
              <div style={{ padding: "6px 8px", borderBottom: "1px solid #F1F5F9", display: "flex", gap: 4, alignItems: "center" }}>
                <div style={{ flex: 1, height: 20, borderRadius: 4, border: "1px solid #E2E8F0", background: "#F8FAFC", display: "flex", alignItems: "center", paddingLeft: 6 }}>
                  <span style={{ fontSize: 6, color: "#94A3B8" }}>Search by name or number</span>
                </div>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8 }}>⇅</span>
                </div>
              </div>

              {/* Customer list */}
              <div style={{ background: "#FFFFFF" }}>
                {[
                  { init: "AB", name: "Arun Batra", time: "Yesterday", amt: "ETB 200", col: "#22C55E" },
                  { init: "RJ", name: "Rajat Jha", time: "Yesterday", amt: "ETB 70", col: "#EF4444", remind: true },
                  { init: "BJ", name: "Babita Jain", time: "2 days ago", amt: "ETB 3,000", col: "#EF4444", remind: true },
                  { init: "AK", name: "Aruna Kumar", time: "4 days ago", amt: "ETB 1,000", col: "#22C55E" },
                  { init: "M", name: "Manjunath", time: "4 days ago", amt: "ETB 8,000", col: "#EF4444", remind: true },
                ].map((c) => (
                  <div
                    key={c.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "6px 8px",
                      borderBottom: "1px solid #F8FAFC",
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: c.col === "#22C55E" ? "#DCFCE7" : "#FEE2E2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 7,
                        fontWeight: 700,
                        color: c.col,
                        marginRight: 6,
                        flexShrink: 0,
                      }}
                    >
                      {c.init}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 8, fontWeight: 600, color: "#1E293B" }}>{c.name}</p>
                      <p style={{ fontSize: 6, color: "#94A3B8" }}>{c.time}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      {c.remind ? (
                        <span style={{ fontSize: 7, fontWeight: 600, color: "#E53935", border: "1px solid #FCA5A5", borderRadius: 3, padding: "1px 4px" }}>
                          Remind
                        </span>
                      ) : (
                        <p style={{ fontSize: 8, fontWeight: 700, color: c.col }}>{c.amt}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add customer */}
              <div style={{ padding: "8px 10px", display: "flex", gap: 4 }}>
                <div style={{ flex: 1, height: 22, borderRadius: 4, border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 7, color: "#374151", fontWeight: 600 }}>+ Add Bulk Import</span>
                </div>
                <div style={{ flex: 1, height: 22, borderRadius: 4, background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 7, color: "white", fontWeight: 600 }}>+ Add Customer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom feature strip — Khatabook "Manage Digital Bahi Khata | Send Payment Reminders" ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          background: "rgba(255,255,255,0.6)",
          borderTop: "1px solid rgba(229,57,53,0.12)",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          paddingLeft: "clamp(1.25rem, 5vw, 5rem)",
          paddingRight: "clamp(1.25rem, 5vw, 5rem)",
          backdropFilter: "blur(4px)",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "0.625rem",
          }}
        >
          One platform for all your business needs
        </h3>
        <div className="flex flex-wrap items-center gap-0">
          {[
            "Manage Digital Business Ledger",
            "Send Payment Reminders for easy collection",
            "MoR e-Invoice & Z-Report compliance",
          ].map((text, i) => (
            <div key={text} className="flex items-center gap-4">
              <span style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.4 }}>{text}</span>
              {i < 2 && (
                <div
                  style={{
                    width: "2px",
                    height: "28px",
                    background: "#E53935",
                    borderRadius: "1px",
                    flexShrink: 0,
                    margin: "0 1rem",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

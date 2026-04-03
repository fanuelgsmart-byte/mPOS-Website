"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";

// ─── Floating stat card ──────────────────────────────────────────────────────
function StatCard({
  value, label, icon, delay, style,
}: { value: string; label: string; icon: string; delay: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
      style={{
        position: "absolute",
        background: "#fff",
        borderRadius: "14px",
        padding: "0.75rem 1.125rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset",
        border: "1px solid rgba(229,57,53,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
        backdropFilter: "blur(8px)",
        zIndex: 10,
        ...style,
      }}
    >
      <span style={{ fontSize: "1.25rem" }}>{icon}</span>
      <div>
        <div style={{ fontSize: "1rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 500, marginTop: "2px", whiteSpace: "nowrap" }}>{label}</div>
      </div>
    </motion.div>
  );
}

// ─── Animated app dashboard mockup ──────────────────────────────────────────
function AppMockup() {
  const bars = [45, 70, 55, 88, 65, 92, 72];
  const miniData = [30, 60, 45, 80, 55, 70, 85, 62];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.25 }}
      style={{
        background: "#0F172A",
        borderRadius: "24px",
        padding: "1.5rem",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow overlay */}
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(229,57,53,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Window controls */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
        ))}
        <div style={{ flex: 1, height: 11, background: "#1E293B", borderRadius: "6px", marginLeft: "8px" }} />
      </div>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ fontSize: "0.65rem", color: "#64748B", marginBottom: "2px" }}>Today's Revenue</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}
          >
            ETB 48,290
          </motion.div>
        </div>
        <div style={{ background: "#16A34A22", borderRadius: "10px", padding: "0.375rem 0.75rem", border: "1px solid #16A34A44" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4ADE80" }}>↑ 18.4%</span>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.625rem", marginBottom: "1rem" }}>
        {[
          { label: "Invoices", val: "124", color: "#E53935" },
          { label: "Collections", val: "ETB 31K", color: "#6366F1" },
          { label: "Stock Items", val: "2,840", color: "#F59E0B" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#1E293B", borderRadius: "10px", padding: "0.625rem 0.75rem" }}>
            <div style={{ fontSize: "0.6rem", color: "#64748B", marginBottom: "3px" }}>{s.label}</div>
            <div style={{ fontSize: "0.875rem", fontWeight: 800, color: "#fff" }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ background: "#1E293B", borderRadius: "12px", padding: "1rem", marginBottom: "0.75rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: "0.625rem", color: "#64748B" }}>Weekly Sales</span>
          <div style={{ display: "flex", gap: "3px" }}>
            {miniData.map((v, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 + i * 0.07 }}
                style={{ width: "4px", height: `${v * 0.25}px`, background: i === 5 ? "#E53935" : "#334155", borderRadius: "2px", transformOrigin: "bottom" }}
              />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "52px" }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.5 + i * 0.06 }}
              style={{ flex: 1, height: `${h}%`, background: i === 5 ? "#E53935" : `rgba(229,57,53,0.3)`, borderRadius: "4px 4px 0 0", transformOrigin: "bottom" }}
            />
          ))}
        </div>
      </div>

      {/* Recent transactions */}
      {[
        { name: "Abebe Trading", amount: "+ETB 4,200", type: "POS Sale", color: "#4ADE80" },
        { name: "Tigist Pharmacy", amount: "+ETB 12,500", type: "Invoice #0089", color: "#4ADE80" },
        { name: "Yonas Wholesale", amount: "-ETB 8,300", type: "Purchase", color: "#F87171" },
      ].map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + i * 0.1 }}
          style={{
            background: "#1E293B",
            borderRadius: "8px",
            padding: "0.5rem 0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: i < 2 ? "0.375rem" : 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "0.625rem", fontWeight: 600, color: "#CBD5E1" }}>{t.name}</div>
              <div style={{ fontSize: "0.55rem", color: "#475569" }}>{t.type}</div>
            </div>
          </div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: t.color }}>{t.amount}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [phone, setPhone] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const bgX = useTransform(springX, [-300, 300], ["-8px", "8px"]);
  const bgY = useTransform(springY, [-200, 200], ["-6px", "6px"]);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      style={{
        background: "#FFF5F3",
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Animated mesh gradient background */}
      <motion.div
        style={{ x: bgX, y: bgY, position: "absolute", inset: "-20px", zIndex: 0, pointerEvents: "none" }}
      >
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(229,57,53,0.09) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "25%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
      </motion.div>

      {/* Subtle grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(229,57,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(229,57,53,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0, pointerEvents: "none" }} />

      <div className="container-custom flex flex-col flex-1 relative" style={{ zIndex: 1, maxWidth: "1720px", paddingTop: "3rem" }}>
        <div className="flex flex-col lg:flex-row items-center flex-1 gap-12 lg:gap-8 pb-16 lg:pb-20">

          {/* ── LEFT: Copy ────────────────────────────────────────────── */}
          <div className="flex-1 w-full" style={{ maxWidth: "620px" }}>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", border: "1px solid rgba(229,57,53,0.2)", borderRadius: "999px", padding: "0.375rem 1rem 0.375rem 0.5rem", marginBottom: "1.5rem", boxShadow: "0 2px 8px rgba(229,57,53,0.08)" }}
            >
              <span style={{ background: "#E53935", color: "#fff", fontSize: "0.65rem", fontWeight: 800, padding: "0.2rem 0.6rem", borderRadius: "999px", letterSpacing: "0.06em" }}>NEW</span>
              <span style={{ fontSize: "0.8125rem", color: "#374151", fontWeight: 500 }}>MoR e-Invoice compliant · Amharic supported</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.08 }}
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                color: "#0F172A",
                marginBottom: "1.25rem",
              }}
            >
              One App.
              <br />
              <span style={{ color: "#E53935", position: "relative" }}>
                Every Business
                {/* Underline squiggle */}
                <svg viewBox="0 0 260 12" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px" }} preserveAspectRatio="none">
                  <motion.path
                    d="M0 8 Q 30 2, 60 8 T 120 8 T 180 8 T 240 8 T 260 8"
                    stroke="#E53935"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  />
                </svg>
              </span>
              <br />
              Need.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.18 }}
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "#4B5563",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
                maxWidth: "480px",
              }}
            >
              Billing · Inventory · POS · Payroll · MoR e-Invoicing — built for Ethiopia. Switch from paper, Peachtree, or cash register in one day.
            </motion.p>

            {/* Phone form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.26 }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", gap: "0.625rem", marginBottom: "1.25rem", maxWidth: "520px" }}
                className="flex-col sm:flex-row"
              >
                <div style={{ display: "flex", flex: 1, background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "border-color 180ms ease" }}
                  onFocus={() => {}} onBlur={() => {}}
                >
                  <div style={{ display: "flex", alignItems: "center", padding: "0 1rem", borderRight: "1px solid #E5E7EB", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.9375rem", color: "#111827", fontWeight: 600 }}>🇪🇹 +251</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ flex: 1, border: "none", outline: "none", padding: "1rem 1rem", fontSize: "1rem", color: "#111827", background: "transparent", minWidth: 0 }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "#E53935",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    padding: "1rem 2rem",
                    whiteSpace: "nowrap",
                    transition: "all 180ms ease",
                    boxShadow: "0 4px 14px rgba(229,57,53,0.35)",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#C62828";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(229,57,53,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#E53935";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(229,57,53,0.35)";
                  }}
                >
                  Get Started Free
                </button>
              </form>

              {/* Trust signals below form */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
                {[
                  { icon: "✅", text: "Free to start" },
                  { icon: "🔒", text: "MoR certified" },
                  { icon: "📱", text: "Works offline" },
                ].map((s) => (
                  <span key={s.text} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", color: "#6B7280", fontWeight: 500 }}>
                    <span>{s.icon}</span>{s.text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Modules strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.38 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}
            >
              {["POS Billing", "e-Invoicing", "Inventory", "Payroll", "Accounting", "Amharic UI"].map((m, i) => (
                <span
                  key={m}
                  style={{
                    background: i === 0 ? "#FFF0EE" : "#F8FAFC",
                    border: `1px solid ${i === 0 ? "rgba(229,57,53,0.2)" : "#E5E7EB"}`,
                    color: i === 0 ? "#E53935" : "#374151",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: i === 0 ? 700 : 500,
                  }}
                >
                  {m}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: App mockup + floating cards ──────────────────── */}
          <div className="flex-1 w-full flex justify-center lg:justify-end" style={{ position: "relative", minHeight: "520px", maxWidth: "560px" }}>
            {/* Floating stat cards */}
            {inView && (
              <>
                <StatCard value="5,000+" label="Businesses" icon="🏪" delay={0.6} style={{ top: "0%", left: "-2%" }} />
                <StatCard value="4.8★" label="Play Store" icon="⭐" delay={0.72} style={{ top: "0%", right: "4%" }} />
                <StatCard value="ETB 2B+" label="Processed" icon="💳" delay={0.84} style={{ bottom: "18%", left: "-4%" }} />
                <StatCard value="MoR" label="Certified" icon="✅" delay={0.96} style={{ bottom: "6%", right: "2%" }} />
              </>
            )}

            {/* App mockup */}
            <div style={{ paddingTop: "2.5rem", paddingRight: "1rem", width: "100%", maxWidth: "420px" }}>
              <AppMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

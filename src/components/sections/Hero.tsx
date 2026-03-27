"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeUp, fadeRight, EASE_SPRING } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
      {/* Ultra-subtle background gradient — barely visible */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, #EEF2FF 0%, transparent 70%)" }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — content */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.p variants={fadeUp} className="section-label">
              #1 Business Platform for Ethiopia
            </motion.p>

            <motion.h1 variants={fadeUp} className="mb-5">
              Run your entire business{" "}
              <span className="gradient-text">from one app</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: "1.125rem", color: "#6B7280", maxWidth: "32rem", margin: "0 auto 2rem" }}
              className="lg:mx-0"
            >
              Billing, inventory, POS, payroll &amp; MoR e‑Invoicing — built
              for Ethiopian businesses. Free to start, in Amharic &amp; English.
            </motion.p>

            {/* Single primary CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button href="#download" variant="primary">
                Get Started Free
                <ArrowRight size={16} />
              </Button>
              <Button href="#demo" variant="secondary">
                <span>Watch Demo</span>
              </Button>
            </motion.div>

            {/* App store badges */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </motion.div>

            {/* Trust numbers */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "5,000+", label: "Businesses" },
                { value: "4.8 ★", label: "Play Store" },
                { value: "Free", label: "To start" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center">
                    <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "2px" }}>
                      {stat.label}
                    </p>
                  </div>
                  {i < 2 && <div style={{ width: "1px", height: "2rem", background: "#E5E7EB" }} />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_SPRING }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-[2.5rem]"
        style={{ background: "#EEF2FF", filter: "blur(36px)", transform: "scale(0.85) translateY(8%)", zIndex: 0 }} />

      {/* Floating card — top left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-10 top-16 z-10 bg-white rounded-xl px-3 py-2 text-xs font-semibold"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #E5E7EB", color: "#00C853" }}
      >
        ✓ IRN Generated
      </motion.div>

      {/* Floating card — bottom right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 bottom-24 z-10 bg-white rounded-xl px-3 py-2 text-xs font-semibold"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #E5E7EB", color: "#1A3C8F" }}
      >
        📊 40+ Reports
      </motion.div>

      {/* Phone */}
      <motion.div
        className="relative z-[1] float-anim"
        style={{ width: "260px" }}
      >
        <div className="rounded-[2.5rem] overflow-hidden"
          style={{ border: "6px solid #111827", boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }}>
          {/* Status bar */}
          <div className="flex justify-center items-center py-2 px-4" style={{ background: "#111827" }}>
            <div className="w-16 h-4 rounded-full" style={{ background: "#1a1a1a" }} />
          </div>

          {/* App screen */}
          <div style={{ background: "#F3F4F6", padding: "12px 12px 20px" }}>
            {/* Header */}
            <div className="rounded-xl p-3 mb-2 text-white" style={{ background: "#1A3C8F" }}>
              <p style={{ fontSize: "9px", opacity: 0.7, marginBottom: "2px" }}>Good morning 👋</p>
              <p style={{ fontSize: "11px", fontWeight: 700, marginBottom: "8px" }}>Kebede Trading</p>
              <div className="flex gap-2">
                <div className="flex-1 rounded-lg p-2" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <p style={{ fontSize: "7px", opacity: 0.75 }}>To Collect</p>
                  <p style={{ fontSize: "10px", fontWeight: 700 }}>ETB 12,450</p>
                </div>
                <div className="flex-1 rounded-lg p-2" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <p style={{ fontSize: "7px", opacity: 0.75 }}>To Pay</p>
                  <p style={{ fontSize: "10px", fontWeight: 700 }}>ETB 3,200</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {[["🧾","Bill"],["📦","Stock"],["💳","POS"],["📊","Report"]].map(([icon, label]) => (
                <div key={label} className="flex flex-col items-center gap-1 p-1.5 rounded-xl"
                  style={{ background: "#ffffff" }}>
                  <span style={{ fontSize: "14px" }}>{icon}</span>
                  <span style={{ fontSize: "7px", fontWeight: 600, color: "#374151" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Transactions */}
            <div className="rounded-xl p-2.5" style={{ background: "#ffffff" }}>
              <p style={{ fontSize: "7px", fontWeight: 700, color: "#9CA3AF", marginBottom: "6px" }}>
                RECENT
              </p>
              {[
                { name: "Abdi Supermarket", amt: "+ETB 2,400", color: "#00C853" },
                { name: "Addis Wholesalers", amt: "-ETB 8,500", color: "#EF4444" },
                { name: "Tigist Trading",    amt: "+ETB 1,200", color: "#00C853" },
              ].map((tx) => (
                <div key={tx.name} className="flex justify-between items-center py-1"
                  style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <span style={{ fontSize: "8px", fontWeight: 500, color: "#374151" }}>{tx.name}</span>
                  <span style={{ fontSize: "8px", fontWeight: 700, color: tx.color }}>{tx.amt}</span>
                </div>
              ))}
            </div>

            {/* Compliance badge */}
            <div className="rounded-lg flex items-center gap-1.5 px-2 py-1.5 mt-2"
              style={{ background: "#ECFDF5" }}>
              <span style={{ fontSize: "8px" }}>✓</span>
              <span style={{ fontSize: "7px", fontWeight: 600, color: "#00C853" }}>
                MoR e-Invoice · Z-Report: Sent
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-pointer"
      style={{ background: "#111827", border: "1px solid #1f2937" }}>
      <span className="text-white" style={{ fontSize: "13px" }}>{store === "google" ? "▶" : ""}</span>
      <div>
        <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {store === "google" ? "Get it on" : "Download on the"}
        </p>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>
          {store === "google" ? "Google Play" : "App Store"}
        </p>
      </div>
    </div>
  );
}

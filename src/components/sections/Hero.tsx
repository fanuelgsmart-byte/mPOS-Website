"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h1 variants={fadeUp} className="mb-5">
              Simplify Your Business{" "}
              <span style={{ color: "#22C55E" }}>with Meleket</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg mb-8 max-w-lg" style={{ color: "#6B7280" }}>
              Billing, Inventory, POS, Payroll &amp; MoR e-Invoicing — all in one app.
              Built for Ethiopian businesses, in Amharic &amp; English.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8">
              <Button href="#download" variant="primary">
                Download App <ArrowRight size={16} />
              </Button>
              <Button href="#features" variant="secondary">
                See Features
              </Button>
            </motion.div>

            {/* App Store Badges */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </motion.div>

            {/* Trust line */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 text-sm" style={{ color: "#9CA3AF" }}>
              <span className="flex items-center gap-1">
                <Star size={14} fill="#FBBF24" color="#FBBF24" />
                <strong className="text-gray-900">4.8</strong> Rating
              </span>
              <span className="w-px h-4 bg-gray-200" />
              <span><strong className="text-gray-900">5,000+</strong> Businesses</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="hidden sm:inline"><strong className="text-gray-900">Free</strong> to Start</span>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[260px] sm:w-[280px]">
              {/* Phone Frame */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden float-anim"
                style={{
                  background: "#F9FAFB",
                  border: "6px solid #1F2937",
                  aspectRatio: "9/19",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                {/* Notch */}
                <div className="flex justify-center py-2" style={{ background: "#1F2937" }}>
                  <div className="w-16 h-4 rounded-full" style={{ background: "#111827" }} />
                </div>
                {/* App header */}
                <div className="px-4 py-3" style={{ background: "#22C55E" }}>
                  <p className="text-white text-xs font-semibold">Meleket POS</p>
                  <p className="text-white/70 text-[10px]">Dashboard</p>
                </div>
                {/* Content cards */}
                <div className="px-3 py-3 space-y-2">
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-[10px] text-gray-400 mb-1">Today&apos;s Sales</p>
                    <p className="text-sm font-bold text-gray-900">ETB 12,450</p>
                    <div className="mt-1.5 h-1 rounded-full bg-green-100">
                      <div className="h-full w-3/4 rounded-full" style={{ background: "#22C55E" }} />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-[10px] text-gray-400 mb-1">Items in Stock</p>
                    <p className="text-sm font-bold text-gray-900">1,284</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-[10px] text-gray-400 mb-1">Pending Invoices</p>
                    <p className="text-sm font-bold text-gray-900">3</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl p-2.5 text-center" style={{ background: "#DCFCE7" }}>
                      <p className="text-[10px] font-medium" style={{ color: "#16A34A" }}>New Sale</p>
                    </div>
                    <div className="rounded-xl p-2.5 text-center" style={{ background: "#EFF6FF" }}>
                      <p className="text-[10px] font-medium" style={{ color: "#2563EB" }}>Reports</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/3 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100"
              >
                <p className="text-[10px] font-medium text-gray-900">✓ MoR Compliant</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-6 top-2/3 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100"
              >
                <p className="text-[10px] font-medium text-gray-900">🇪🇹 Ethiopian Calendar</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div
      className="flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-800"
      style={{ background: "#111827" }}
    >
      <span className="text-white text-sm">{store === "google" ? "▶" : ""}</span>
      <div>
        <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {store === "google" ? "Get it on" : "Download on the"}
        </p>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "#FFFFFF" }}>
          {store === "google" ? "Google Play" : "App Store"}
        </p>
      </div>
    </div>
  );
}

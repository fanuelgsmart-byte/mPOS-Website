"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F2460 0%, #1A3C8F 55%, #2952B3 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#00C853", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/2 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "#FFD600", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: "#ffffff", filter: "blur(60px)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{ background: "rgba(0,200,83,0.15)", color: "#00C853", border: "1px solid rgba(0,200,83,0.3)" }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ background: "#00C853" }} />
              🇪🇹 Built exclusively for Ethiopia
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
              Ethiopia&apos;s Complete{" "}
              <span style={{ color: "#00C853" }}>Business</span>{" "}
              Management Platform
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Billing, Inventory, POS, Payroll &amp; MoR e‑Invoicing — all in one
              app. In Amharic and English. Built for Ethiopian businesses.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8">
              {[
                "✓ MoR e-Invoice Ready",
                "✓ Ethiopian Calendar",
                "✓ VAT & TOT Compliant",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#download" className="btn-primary text-base px-7 py-3.5">
                Start For Free
                <ArrowRight size={18} />
              </Link>
              <Link href="#features" className="btn-outline-white text-base px-7 py-3.5">
                See All Features
              </Link>
            </div>

            {/* App Store badges */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <p className="text-white/50 text-sm">Download free on:</p>
              <div className="flex items-center gap-3">
                <StoreBadge store="google" />
                <StoreBadge store="apple" />
              </div>
            </div>

            {/* Social proof micro */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["AK", "TH", "YT", "MB"].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-primary"
                    style={{
                      background: `hsl(${initials.charCodeAt(0) * 20}, 60%, 45%)`,
                      borderColor: "#1A3C8F",
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} fill="#FFD600" color="#FFD600" />
                  ))}
                </div>
                <p className="text-white/60 text-xs">
                  Trusted by <strong className="text-white">5,000+</strong> Ethiopian businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative float-anim">
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-[3rem] opacity-40"
        style={{ background: "#00C853", filter: "blur(40px)", transform: "scale(0.9) translateY(10%)" }}
      />

      {/* Phone frame */}
      <div
        className="relative w-64 md:w-72 lg:w-80 rounded-[3rem] overflow-hidden"
        style={{
          background: "#0F2460",
          border: "8px solid rgba(255,255,255,0.15)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-24 h-5 rounded-full" style={{ background: "#000" }} />
        </div>

        {/* Screen content */}
        <div className="px-4 pb-8 pt-2" style={{ background: "#F8F9FF" }}>
          {/* Header bar */}
          <div
            className="rounded-xl p-3 mb-3 text-white"
            style={{ background: "linear-gradient(135deg, #1A3C8F, #2952B3)" }}
          >
            <p className="text-xs opacity-70 mb-0.5">Good morning, Abebe 👋</p>
            <p className="text-sm font-bold">Kebede Trading</p>
            <div className="flex gap-3 mt-2">
              <div className="flex-1 bg-white/10 rounded-lg p-2">
                <p className="text-[9px] opacity-70">To Collect</p>
                <p className="text-xs font-bold">ETB 12,450</p>
              </div>
              <div className="flex-1 bg-white/10 rounded-lg p-2">
                <p className="text-[9px] opacity-70">To Pay</p>
                <p className="text-xs font-bold">ETB 3,200</p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { icon: "🧾", label: "Invoice" },
              { icon: "📦", label: "Stock" },
              { icon: "💳", label: "POS" },
              { icon: "📊", label: "Reports" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 p-2 rounded-xl"
                style={{ background: "#EEF2FF" }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-[8px] font-semibold text-neutral-600">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Recent transactions */}
          <div className="rounded-xl p-3" style={{ background: "white" }}>
            <p className="text-[9px] font-bold text-neutral-500 mb-2">RECENT TRANSACTIONS</p>
            {[
              { name: "Abdi Supermarket", amount: "+ETB 2,400", color: "#00C853", type: "Invoice #INV-0041" },
              { name: "Addis Wholesalers", amount: "-ETB 8,500", color: "#E91E63", type: "Purchase #PO-0012" },
              { name: "Tigist Trading", amount: "+ETB 1,200", color: "#00C853", type: "Payment Received" },
            ].map((tx) => (
              <div key={tx.name} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-[9px] font-semibold text-neutral-800">{tx.name}</p>
                  <p className="text-[8px] text-neutral-400">{tx.type}</p>
                </div>
                <span className="text-[9px] font-bold" style={{ color: tx.color }}>{tx.amount}</span>
              </div>
            ))}
          </div>

          {/* e-Invoice badge */}
          <div
            className="mt-2 flex items-center gap-1.5 px-2 py-1.5 rounded-lg"
            style={{ background: "#E8FFF2" }}
          >
            <span className="text-[10px]">✓</span>
            <p className="text-[8px] font-semibold" style={{ color: "#00C853" }}>MoR e-Invoice Active · Z-Report: Sent</p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute -left-8 top-16 px-3 py-2 rounded-xl shadow-xl text-xs font-bold text-white"
        style={{ background: "#00C853" }}
      >
        ✓ IRN Generated
      </div>
      <div
        className="absolute -right-6 bottom-20 px-3 py-2 rounded-xl shadow-xl text-xs font-bold"
        style={{ background: "white", color: "#1A3C8F" }}
      >
        📊 40+ Reports
      </div>
    </div>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
    >
      <span className="text-base">{store === "google" ? "▶" : ""}</span>
      <div>
        <p className="text-white/50 text-[9px]">{store === "google" ? "Get it on" : "Download on the"}</p>
        <p className="text-white text-xs font-semibold">{store === "google" ? "Google Play" : "App Store"}</p>
      </div>
    </div>
  );
}

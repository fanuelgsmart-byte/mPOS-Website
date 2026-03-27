"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container-custom pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: "#00C853" }}>
              #1 Business App for Ethiopia
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-6" style={{ color: "#1A202C" }}>
              Manage your entire business from{" "}
              <span style={{ color: "#1A3C8F" }}>one app</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0" style={{ color: "#718096" }}>
              Billing, Inventory, POS, Payroll &amp; MoR e‑Invoicing.
              In Amharic &amp; English. Free to start.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link href="#download" className="btn-primary text-base px-8 py-3.5">
                Get Started Free
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-colors"
                style={{ color: "#1A3C8F" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <Play size={14} fill="#1A3C8F" color="#1A3C8F" />
                </div>
                Watch Demo
              </Link>
            </div>

            {/* App badges */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
              <AppBadge store="google" />
              <AppBadge store="apple" />
            </div>

            {/* Trust numbers */}
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "#1A202C" }}>5,000+</p>
                <p className="text-xs" style={{ color: "#A0AEC0" }}>Active Businesses</p>
              </div>
              <div className="w-px h-10" style={{ background: "#E2E8F0" }} />
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "#1A202C" }}>4.8 ★</p>
                <p className="text-xs" style={{ color: "#A0AEC0" }}>Play Store Rating</p>
              </div>
              <div className="w-px h-10" style={{ background: "#E2E8F0" }} />
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "#1A202C" }}>13</p>
                <p className="text-xs" style={{ color: "#A0AEC0" }}>Business Modules</p>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup — simple, clean */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(circle at 70% 30%, #1A3C8F, transparent 70%)" }} />
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full opacity-15"
        style={{ background: "#1A3C8F", filter: "blur(20px)" }} />

      {/* Phone */}
      <div className="relative w-64 md:w-72 rounded-[2.5rem] overflow-hidden"
        style={{ border: "6px solid #1A202C", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        {/* Notch */}
        <div className="bg-black flex justify-center pt-2 pb-1">
          <div className="w-20 h-4 rounded-full" style={{ background: "#1A1A1A" }} />
        </div>

        {/* Screen */}
        <div className="bg-white px-3 pb-6 pt-2">
          {/* App header */}
          <div className="rounded-xl p-3 mb-2 text-white" style={{ background: "#1A3C8F" }}>
            <p className="text-[10px] opacity-70">Good morning 👋</p>
            <p className="text-xs font-bold mb-2">Kebede Trading</p>
            <div className="flex gap-2">
              <div className="flex-1 rounded-lg p-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
                <p className="text-[8px] opacity-70">To Collect</p>
                <p className="text-[10px] font-bold">ETB 12,450</p>
              </div>
              <div className="flex-1 rounded-lg p-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
                <p className="text-[8px] opacity-70">To Pay</p>
                <p className="text-[10px] font-bold">ETB 3,200</p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-1.5 mb-2">
            {["🧾 Invoice", "📦 Stock", "💳 POS", "📊 Reports"].map((item) => {
              const [icon, label] = item.split(" ");
              return (
                <div key={label} className="flex flex-col items-center gap-0.5 p-1.5 rounded-lg" style={{ background: "#F7FAFC" }}>
                  <span className="text-sm">{icon}</span>
                  <span className="text-[7px] font-medium" style={{ color: "#4A5568" }}>{label}</span>
                </div>
              );
            })}
          </div>

          {/* Transactions */}
          <div className="rounded-lg p-2" style={{ background: "#F7FAFC" }}>
            <p className="text-[8px] font-bold mb-1.5" style={{ color: "#A0AEC0" }}>RECENT</p>
            {[
              { name: "Abdi Supermarket", amount: "+ETB 2,400", color: "#00C853" },
              { name: "Addis Wholesalers", amount: "-ETB 8,500", color: "#E53E3E" },
              { name: "Tigist Trading", amount: "+ETB 1,200", color: "#00C853" },
            ].map((tx) => (
              <div key={tx.name} className="flex justify-between py-1 border-b last:border-0" style={{ borderColor: "#EDF2F7" }}>
                <span className="text-[8px] font-medium" style={{ color: "#2D3748" }}>{tx.name}</span>
                <span className="text-[8px] font-bold" style={{ color: tx.color }}>{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer" style={{ background: "#1A202C" }}>
      <span className="text-white text-sm">{store === "google" ? "▶" : ""}</span>
      <div>
        <p className="text-white/60 text-[9px]">{store === "google" ? "GET IT ON" : "Download on the"}</p>
        <p className="text-white text-xs font-semibold">{store === "google" ? "Google Play" : "App Store"}</p>
      </div>
    </div>
  );
}

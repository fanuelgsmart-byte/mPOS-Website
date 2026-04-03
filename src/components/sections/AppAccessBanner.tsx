"use client";

import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 180, damping: 22 } as const;

export default function AppAccessBanner() {
  return (
    <section className="relative z-20">
      <div className="container-custom" style={{ maxWidth: "1560px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">

          {/* ── Card 1: Download the app ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="relative overflow-hidden rounded-[14px] border min-h-[148px] px-6 md:px-8 py-5 flex items-center justify-between gap-4 md:gap-6"
            style={{ background: "#FFFFFF", borderColor: "#E5EAF0", boxShadow: "0 4px 16px rgba(229,57,53,0.07), 0 1px 0 rgba(17,24,39,0.02)" }}
          >
            {/* BG glow */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(229,57,53,0.07) 0%, transparent 70%)" }} />

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md" style={{ background: "#E53935", boxShadow: "0 4px 12px rgba(229,57,53,0.35)" }}>
                M
              </div>
              <div>
                <p className="text-[19px] font-extrabold text-[#0F172A] leading-none tracking-tight">Meleket</p>
                <p className="text-[11px] text-[#6B7280] mt-0.5 font-medium">Business Platform</p>
              </div>
            </div>

            {/* Text + badges */}
            <div className="relative z-10 text-left flex-1">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#111827] leading-[1.15] tracking-tight">
                5,000+ Ethiopian businesses<br className="hidden sm:block" /> trust Meleket
              </h3>
              <p className="text-[14px] text-[#6B7280] mt-1 leading-tight">Access your account anywhere, anytime.</p>

              {/* Store badges */}
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                {[
                  {
                    label: "Play Store",
                    icon: (
                      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 2.5v19l11-9.5z" fill="#34A853" />
                        <path d="M14 10.4 18.2 8l2.8 1.6c1.3.7 1.3 1.9 0 2.6L18.2 14 14 11.6z" fill="#FBBC05" />
                        <path d="M3 21.5 14 12l4.2 2.4L5.2 21.1c-.9.5-1.7.6-2.2.4z" fill="#EA4335" />
                        <path d="M3 2.5c.5-.2 1.3-.1 2.2.4L18.2 9.6 14 12z" fill="#4285F4" />
                      </svg>
                    ),
                    sub: "4.8★ · 10K+ reviews",
                  },
                  {
                    label: "App Store",
                    icon: (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.37 4.79 9.34 4.76C10.62 4.74 11.84 5.63 12.63 5.63C13.41 5.63 14.9 4.56 16.46 4.71C17.12 4.74 18.88 4.97 20.01 6.63C19.91 6.69 17.65 7.98 17.68 10.7C17.71 13.95 20.52 14.99 20.55 15C20.52 15.07 20.12 16.48 19.15 17.93L18.71 19.5ZM15.5 2.5C14.78 3.32 13.63 3.95 12.58 3.87C12.43 2.82 12.93 1.72 13.6.97C14.34.14 15.56-.45 16.5-.5C16.62.6 16.21 1.67 15.5 2.5Z" />
                      </svg>
                    ),
                    sub: "iOS & iPadOS",
                  },
                ].map((store) => (
                  <a
                    key={store.label}
                    href="#download"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all"
                    style={{ background: "#F8FAFC", border: "1px solid #E5E7EB", color: "#111827" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.borderColor = "#CBD5E1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
                  >
                    {store.icon}
                    <div>
                      <div>{store.label}</div>
                      <div style={{ fontSize: "0.6rem", color: "#6B7280", fontWeight: 400 }}>{store.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Key stat + MoR badge ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="relative overflow-hidden rounded-[14px] border min-h-[148px] px-6 md:px-8 py-5 flex items-center justify-between gap-4"
            style={{ background: "#FFFFFF", borderColor: "#E5EAF0", boxShadow: "0 4px 16px rgba(99,102,241,0.06), 0 1px 0 rgba(17,24,39,0.02)" }}
          >
            {/* BG glow */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />

            <div className="relative z-10 flex-1">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#111827] leading-[1.15] tracking-tight">
                MoR certified &amp; INSA compliant
              </h3>
              <p className="text-[14px] text-[#6B7280] mt-1 leading-tight">
                Automatic IRN, QR code &amp; daily Z-Report — zero manual compliance effort.
              </p>

              <div className="flex items-center gap-4 mt-3 flex-wrap">
                {[
                  { label: "MoR Certified", bg: "#ECFDF5", color: "#059669", icon: "✅" },
                  { label: "INSA Compliant", bg: "#EFF6FF", color: "#2563EB", icon: "🔒" },
                  { label: "Auto Z-Report", bg: "#FFF7ED", color: "#EA580C", icon: "📋" },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[12px] font-semibold" style={{ background: b.bg, color: b.color }}>
                    <span>{b.icon}</span>{b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat */}
            <div className="relative z-10 flex-shrink-0 text-right hidden sm:block">
              <div className="text-[2.5rem] font-extrabold text-[#0F172A] leading-none tracking-tight">ETB 2B+</div>
              <div className="text-[13px] text-[#6B7280] mt-1 font-medium">Transactions<br />processed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

const SOLUTIONS = [
  {
    label: "Accounting",
    href: "/solutions/accounting",
    icon: "📒",
    iconBg: "#FEE2E2",
    desc: "Ledger, P&L, VAT & MoR compliance",
  },
  {
    label: "Inventory",
    href: "/solutions/inventory",
    icon: "📦",
    iconBg: "#D1FAE5",
    desc: "Multi-warehouse stock management",
  },
  {
    label: "Invoicing",
    href: "/solutions/invoicing",
    icon: "🧾",
    iconBg: "#DBEAFE",
    desc: "MoR e-invoicing & payment tracking",
  },
  {
    label: "POS",
    href: "/solutions/pos",
    icon: "🖥️",
    iconBg: "#EDE9FE",
    desc: "Fast counter billing & Telebirr",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const router = useRouter();
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setSolutionsOpen(true);
  };
  const closeDropdown = () => {
    leaveTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
        style={{ boxShadow: scrolled ? "0 1px 4px rgba(0,0,0,0.06)" : "none" }}
      >
        <div className="container-custom flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo → Home */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "#E53935" }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="absolute inset-0">
                <path d="M0 36C0 36 8 28 18 22C28 16 36 14 36 14V36H0Z" fill="rgba(255,255,255,0.15)" />
              </svg>
              <span className="relative text-white font-extrabold text-base">M</span>
            </div>
            <span className="text-[22px] font-bold text-gray-900 tracking-tight leading-none">
              {SITE_NAME}<sup className="text-[8px] text-gray-400 ml-0.5 font-normal">®</sup>
            </span>
          </Link>

          {/* Desktop — Solution dropdown only */}
          <nav className="hidden md:flex items-center gap-1 mx-6">
            <div style={{ position: "relative" }}>
              <button
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                onClick={() => setSolutionsOpen((v) => !v)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "none",
                  background: solutionsOpen ? "#F9FAFB" : "transparent",
                  color: solutionsOpen ? "#111827" : "#4B5563",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 150ms ease",
                }}
              >
                Solution
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 200ms ease",
                    transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.14 }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "360px",
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
                      border: "1px solid #E5E7EB",
                      zIndex: 100,
                      overflow: "hidden",
                    }}
                  >
                    {/* Header row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem 0.75rem", borderBottom: "1px solid #F3F4F6" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827" }}>
                        Business Management Solutions
                      </span>
                      <button onClick={() => setSolutionsOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "2px", lineHeight: 1 }}>
                        ✕
                      </button>
                    </div>

                    {/* 2×2 grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                      {SOLUTIONS.map((s, i) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "1rem 1.25rem",
                            textDecoration: "none",
                            borderRight: i % 2 === 0 ? "1px solid #F3F4F6" : "none",
                            borderBottom: i < 2 ? "1px solid #F3F4F6" : "none",
                            transition: "background 150ms ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FAFB")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.125rem", flexShrink: 0 }}>
                            {s.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111827", marginBottom: "2px" }}>{s.label}</div>
                            <div style={{ fontSize: "0.75rem", color: "#6B7280", lineHeight: 1.4 }}>{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom strip */}
                    <div style={{ padding: "0.75rem 1.25rem", background: "#F9FAFB", borderTop: "1px solid #F3F4F6", display: "flex", gap: "0.5rem", overflow: "hidden" }}>
                      {["Profit", "Sale", "Balance", "Stock"].map((label, i) => (
                        <span key={i} style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: ["#FEE2E2", "#D1FAE5", "#DBEAFE", "#EDE9FE"][i], color: ["#991B1B", "#065F46", "#1D4ED8", "#5B21B6"][i], whiteSpace: "nowrap" }}>
                          {label}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+251911000000"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={{ background: "#FCEDED", color: "#111827" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F9E1E1")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FCEDED")}
            >
              <Phone size={14} strokeWidth={2.5} color="#E53935" />
              <span>+251 911 000 000</span>
            </a>
            <LiquidMetalButton label="Log In" variant="red" onClick={() => router.push("/login")} />
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} color="#111827" /> : <Menu size={22} color="#111827" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto"
            style={{ paddingTop: "64px" }}
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {/* Solutions accordion */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.875rem 1rem", borderRadius: "10px", fontSize: "1rem", fontWeight: 500, color: "#374151", background: mobileSolutionsOpen ? "#F9FAFB" : "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  Solution
                  <ChevronDown size={16} style={{ transition: "transform 200ms ease", transform: mobileSolutionsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileSolutionsOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: "hidden" }}>
                      <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9CA3AF", padding: "0.5rem 1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Business Management Solutions
                        </p>
                        {SOLUTIONS.map((s) => (
                          <Link key={s.label} href={s.href} onClick={() => setMenuOpen(false)}
                            style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "10px", textDecoration: "none" }}
                          >
                            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                              {s.icon}
                            </div>
                            <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111827" }}>{s.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ height: "1px", background: "#F3F4F6", margin: "0.5rem 0" }} />

              <a href="tel:+251911000000" className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold" style={{ background: "#FCEDED", color: "#111827" }}>
                <Phone size={14} strokeWidth={2.5} color="#E53935" />
                +251 911 000 000
              </a>
              <Link href="#download" onClick={() => setMenuOpen(false)} className="flex items-center justify-center py-3 rounded-full text-sm font-semibold text-white" style={{ background: "#E53935" }}>
                Get Started
              </Link>
              <div className="flex justify-center">
                <LiquidMetalButton label="Log In" variant="red" onClick={() => { setMenuOpen(false); router.push("/login"); }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 lg:h-[72px]" />
    </>
  );
}

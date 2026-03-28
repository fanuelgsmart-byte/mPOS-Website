"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
        style={{
          boxShadow: scrolled ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-custom flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo — Khatabook style: colored icon block + bold wordmark */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "#E53935" }}
            >
              {/* Decorative wave */}
              <svg
                width="36" height="36" viewBox="0 0 36 36" fill="none"
                className="absolute inset-0"
              >
                <path d="M0 36C0 36 8 28 18 22C28 16 36 14 36 14V36H0Z" fill="rgba(255,255,255,0.15)" />
              </svg>
              <span className="relative text-white font-extrabold text-base">M</span>
            </div>
            <span className="text-[22px] font-bold text-gray-900 tracking-tight leading-none">
              {SITE_NAME}<sup className="text-[8px] text-gray-400 ml-0.5 font-normal">®</sup>
            </span>
          </Link>

          {/* Desktop right — Khatabook: phone pill + Log In */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+251911000000"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={{ background: "#1F2937", color: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1F2937")}
            >
              <Phone size={14} strokeWidth={2.5} />
              <span>+251 911 000 000</span>
            </a>
            <Link
              href="#download"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}
            >
              Log In
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
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
            className="fixed inset-0 z-40 bg-white md:hidden"
            style={{ paddingTop: "64px" }}
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              <a
                href="tel:+251911000000"
                className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold"
                style={{ background: "#1F2937", color: "#FFFFFF" }}
              >
                <Phone size={14} strokeWidth={2.5} />
                +251 911 000 000
              </a>
              <Link
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: "#E53935" }}
              >
                Get Started
              </Link>
              <Link
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-full text-sm font-medium"
                style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}
              >
                Log In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 lg:h-[72px]" />
    </>
  );
}

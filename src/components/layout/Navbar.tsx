"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white"
        style={{
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
        }}
      >
        <div className="container-custom flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo — matches Khatabook: icon + name */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: "#E53935" }}
            >
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              {SITE_NAME}<sup className="text-[8px] text-gray-400 ml-0.5">®</sup>
            </span>
          </Link>

          {/* Desktop Right — Phone pill + Log In (like Khatabook) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+251911000000"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ border: "1.5px solid #111827", color: "#111827" }}
            >
              <Phone size={14} />
              <span>+251 911 000 000</span>
            </a>
            <Link
              href="#download"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ border: "1.5px solid #E5E7EB", color: "#374151" }}
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
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
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
                className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium"
                style={{ border: "1.5px solid #111827", color: "#111827" }}
              >
                <Phone size={14} />
                +251 911 000 000
              </a>
              <Link
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-full text-sm font-medium text-white"
                style={{ background: "#E53935" }}
              >
                Get Started
              </Link>
              <Link
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-full text-sm font-medium"
                style={{ border: "1.5px solid #E5E7EB", color: "#374151" }}
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

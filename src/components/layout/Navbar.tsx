"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b" style={{ borderColor: "#EDF2F7" }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: "#1A3C8F" }}>
              M
            </div>
            <span className="text-lg font-extrabold" style={{ color: "#1A202C" }}>{SITE_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#1A3C8F]"
                style={{ color: "#4A5568" }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#download" className="text-sm font-semibold" style={{ color: "#1A3C8F" }}>
              Sign In
            </Link>
            <Link href="#download" className="btn-primary text-sm px-5 py-2">
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} color="#1A202C" /> : <Menu size={20} color="#1A202C" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#EDF2F7" }}>
          <div className="container-custom py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}
                className="text-sm font-medium py-2" style={{ color: "#4A5568" }}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: "#EDF2F7" }}>
              <Link href="#download" className="btn-primary text-center text-sm">Get Started Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
              style={{ background: "linear-gradient(135deg, #1A3C8F, #2952B3)" }}>
              M
            </div>
            <span
              className={cn(
                "text-xl font-black tracking-tight transition-colors",
                scrolled ? "text-primary-dark" : "text-white"
              )}
              style={{ color: scrolled ? "#0F2460" : "#ffffff" }}
            >
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-colors hover:text-accent",
                  scrolled ? "text-neutral-600" : "text-white/90 hover:text-white"
                )}
                style={{ "--hover-color": "#00C853" } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#download"
              className={cn(
                "text-sm font-semibold transition-colors",
                scrolled ? "text-primary" : "text-white/90 hover:text-white"
              )}
              style={{ color: scrolled ? "#1A3C8F" : undefined }}
            >
              Sign In
            </Link>
            <Link
              href="#download"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className={scrolled ? "text-neutral-900" : "text-white"} size={22} />
            ) : (
              <Menu className={scrolled ? "text-neutral-900" : "text-white"} size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-custom py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-neutral-700 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
              <Link href="#download" className="btn-secondary text-center text-sm">
                Sign In
              </Link>
              <Link href="#download" className="btn-primary text-center text-sm">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

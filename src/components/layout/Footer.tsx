"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Globe, Link2, Send, PlayCircle } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "POS Billing", href: "#pos" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download App", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Video Tutorials", href: "#tutorials" },
      { label: "MoR Compliance", href: "#compliance" },
      { label: "API Docs", href: "#api" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "#security" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

const SOCIAL = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: PlayCircle, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2460" }} className="text-white">
      <div className="container-custom py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
                style={{ background: "linear-gradient(135deg, #1A3C8F, #2952B3)" }}
              >
                M
              </div>
              <span className="text-xl font-black">{SITE_NAME}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Ethiopia&apos;s complete business management platform. Built for
              Ethiopian businesses, in Amharic and English.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                  }
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App badges row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div>
            <p className="text-white/60 text-sm mb-3">Available on</p>
            <div className="flex items-center gap-3">
              <AppBadge store="google" />
              <AppBadge store="apple" />
            </div>
          </div>
          <div className="text-right">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold mb-2"
              style={{ background: "#E8FFF2", color: "#00C853" }}
            >
              ✓ MoR e-Invoice Certified
            </div>
            <p className="text-white/40 text-xs">INSA Security Standards Compliant</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/40 text-xs">
            © 2025 {SITE_NAME}. All rights reserved. Made with ❤️ for Ethiopia.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">🇪🇹 Addis Ababa, Ethiopia</span>
            <span className="text-white/40 text-xs">ETB • Amharic • EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-colors"
      style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)" }}
    >
      {store === "google" ? (
        <>
          <span className="text-lg">▶</span>
          <div>
            <p className="text-white/50 text-[10px]">Get it on</p>
            <p className="text-white text-xs font-semibold">Google Play</p>
          </div>
        </>
      ) : (
        <>
          <span className="text-lg"></span>
          <div>
            <p className="text-white/50 text-[10px]">Download on the</p>
            <p className="text-white text-xs font-semibold">App Store</p>
          </div>
        </>
      )}
    </div>
  );
}

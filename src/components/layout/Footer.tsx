"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Globe, Link2, Send, PlayCircle } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Compliance", href: "#compliance" },
      { label: "Invoicing", href: "#invoicing" },
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
    <footer style={{ background: "#111827" }} className="text-white">
      <div className="container-custom py-14">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "#22C55E" }}
              >
                M
              </div>
              <span className="text-lg font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Ethiopia&apos;s complete business management platform.
              Built for Ethiopian businesses, in Amharic and English.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2025 {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/30 text-xs">
            <span>Addis Ababa, Ethiopia</span>
            <span>ETB &middot; Amharic &middot; EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const solutions = [
  { label: "Accounting Software", href: "/solutions/accounting" },
  { label: "Invoicing Software", href: "/solutions/invoicing" },
  { label: "Inventory Software", href: "/solutions/inventory" },
  { label: "POS Software", href: "/solutions/pos" },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3H15.8c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 20.4h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.7V9h3.3v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.4v6.3zM5.3 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1.7 12.9H3.6V9h3.4v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/>
      </svg>
    ),
  },
];

export default function DarkFooter() {
  return (
    <footer style={{ background: "#0F172A", color: "#fff", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Column 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#E53935", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>M</span>
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>{SITE_NAME}</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1rem", maxWidth: "240px" }}>
              Ethiopia&rsquo;s complete business management platform — POS, billing, inventory, payroll &amp; MoR e-invoicing in one app.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    textDecoration: "none",
                    transition: "background 150ms ease, color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E53935";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1E293B";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Solutions
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {solutions.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    style={{ fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none", transition: "color 150ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>📍</span>
                <span style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.6 }}>
                  Bole, Addis Ababa<br />Ethiopia
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }}>📞</span>
                <a href="tel:+251911000000" style={{ fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none", transition: "color 150ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  +251 911 000 000
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }}>✉️</span>
                <a href="mailto:support@meleket.com" style={{ fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none", transition: "color 150ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                  support@meleket.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 — Download */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Download App
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { store: "Google Play", sub: "Get it on" },
                { store: "App Store", sub: "Download on the" },
              ].map((b) => (
                <a
                  key={b.store}
                  href="#download"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    background: "#1E293B",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                    transition: "background 150ms ease",
                    border: "1px solid #334155",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#334155")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1E293B")}
                >
                  <span style={{ fontSize: "1.25rem" }}>{b.store === "Google Play" ? "▶" : ""}</span>
                  <div>
                    <div style={{ fontSize: "0.6rem", opacity: 0.7, marginBottom: "2px" }}>{b.sub}</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600 }}>{b.store}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Payment icons */}
            <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {["Telebirr", "CBE", "Visa"].map((p) => (
                <span key={p} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "6px", padding: "0.3rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, color: "#94A3B8" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1E293B", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.8125rem", color: "#64748B" }}>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "#64748B", textDecoration: "none", transition: "color 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

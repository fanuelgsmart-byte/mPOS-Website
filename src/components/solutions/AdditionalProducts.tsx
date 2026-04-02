"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRODUCTS = [
  {
    href: "/solutions/accounting",
    icon: "📒",
    title: "Accounting Software",
    desc: "Complete ledger management, P&L statements, VAT/TOT, and MoR compliance — all automated.",
    color: "#E53935",
    bg: "#FEE2E2",
  },
  {
    href: "/solutions/inventory",
    icon: "📦",
    title: "Inventory Management",
    desc: "Multi-warehouse stock control, barcode scanning, low-stock alerts, and FIFO/LIFO costing.",
    color: "#059669",
    bg: "#D1FAE5",
  },
  {
    href: "/solutions/invoicing",
    icon: "🧾",
    title: "Invoicing Software",
    desc: "MoR e-invoices with auto IRN & QR code, SMS delivery, and smart payment reminders.",
    color: "#2563EB",
    bg: "#DBEAFE",
  },
];

export default function AdditionalProducts({ exclude }: { exclude?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const items = PRODUCTS.filter((p) => !p.href.includes(exclude ?? ""));

  return (
    <section style={{ background: "#F8FAFC", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <h2 style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
            Meleket Helps You Do More Than Just POS
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "#6B7280", marginTop: "0.5rem" }}>
            One app for every aspect of your business
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {items.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  border: "1px solid #E5E7EB",
                  transition: "box-shadow 200ms ease, transform 200ms ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${p.color}20`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: p.color, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

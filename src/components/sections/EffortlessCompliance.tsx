"use client";

import { motion } from "framer-motion";
import { FileCheck, QrCode, Clock, ShieldCheck, FileSpreadsheet, Bell } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const POINTS = [
  { icon: FileCheck,       title: "Automatic IRN",           desc: "Every invoice gets a unique IRN as required by MoR" },
  { icon: QrCode,          title: "QR on Every Invoice",     desc: "Scannable QR readable by the tax authority's app" },
  { icon: Clock,           title: "Daily Z-Report",          desc: "Compiled and sent to MoR automatically every night" },
  { icon: ShieldCheck,     title: "INSA Compliant",          desc: "Built to meet Ethiopia's INSA security standards" },
  { icon: FileSpreadsheet, title: "VAT & TOT Ready",         desc: "Full Ethiopian tax support with classification reporting" },
  { icon: Bell,            title: "Void & Audit Trail",      desc: "Complete receipt void reporting and audit log" },
];

export default function EffortlessCompliance() {
  return (
    <section className="section-padding" style={{ background: "#F3F4F6" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — content */}
          <AnimatedSection direction="left">
            <AnimatedItem>
              <p className="section-label">Compliance</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mb-4">
                Experience effortless MoR compliance with Meleket
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
                Stop worrying about tax compliance. Every invoice, every report, every
                submission to the Ministry of Revenue — handled automatically.
              </p>
            </AnimatedItem>
            <AnimatedSection className="grid sm:grid-cols-2 gap-4" stagger={0.06} direction="up">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <AnimatedItem key={p.title}>
                    <motion.div
                      className="flex items-start gap-3 p-3 rounded-xl"
                      style={{ background: "#ffffff", border: "1px solid #E5E7EB" }}
                      whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(0,0,0,0.07)" }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#EEF2FF" }}>
                        <Icon size={15} color="#1A3C8F" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.8125rem", marginBottom: "2px" }}>{p.title}</h4>
                        <p style={{ fontSize: "0.75rem", color: "#6B7280", lineHeight: 1.5 }}>{p.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                );
              })}
            </AnimatedSection>
          </AnimatedSection>

          {/* Right — invoice mockup */}
          <AnimatedSection direction="right">
            <AnimatedItem>
              <div className="flex justify-center lg:justify-end">
                <InvoiceMockup />
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function InvoiceMockup() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white rounded-2xl overflow-hidden"
        style={{ width: "280px", border: "1px solid #E5E7EB", boxShadow: "0 16px 50px rgba(0,0,0,0.1)" }}
      >
        {/* Invoice header */}
        <div className="p-4" style={{ borderBottom: "1px solid #E5E7EB" }}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black mb-1"
                style={{ background: "#1A3C8F" }}>M</div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#111827" }}>Kebede Trading</p>
              <p style={{ fontSize: "9px", color: "#9CA3AF" }}>TIN: ET-12345678</p>
            </div>
            <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 8px",
              background: "#1A3C8F", color: "white", borderRadius: "4px" }}>INVOICE</span>
          </div>
          <div className="flex justify-between" style={{ fontSize: "9px", color: "#6B7280" }}>
            <span>INV-2024-0041</span>
            <span>13/07/2017 EC</span>
          </div>
        </div>

        {/* Line items */}
        <div className="p-4" style={{ borderBottom: "1px solid #E5E7EB" }}>
          <div className="flex justify-between mb-2" style={{ fontSize: "8px", fontWeight: 600, color: "#9CA3AF" }}>
            <span>ITEM</span><span>AMOUNT</span>
          </div>
          {[["Rice 25kg","ETB 2,400"],["Sugar 50kg","ETB 4,500"],["Cooking Oil 20L","ETB 1,800"]].map(([item, amt]) => (
            <div key={item} className="flex justify-between py-1" style={{ fontSize: "10px", borderBottom: "1px solid #F3F4F6" }}>
              <span style={{ color: "#374151" }}>{item}</span>
              <span style={{ fontWeight: 600, color: "#111827" }}>{amt}</span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-4" style={{ borderBottom: "1px solid #E5E7EB" }}>
          {[["Subtotal","ETB 8,700"],["VAT (15%)","ETB 1,305"]].map(([label, val]) => (
            <div key={label} className="flex justify-between mb-1" style={{ fontSize: "10px", color: "#6B7280" }}>
              <span>{label}</span><span>{val}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 pt-2" style={{ fontSize: "11px", fontWeight: 700,
            borderTop: "1px solid #E5E7EB", color: "#111827" }}>
            <span>Total</span><span>ETB 10,005</span>
          </div>
        </div>

        {/* Compliance footer */}
        <div className="p-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span style={{ fontSize: "8px", fontWeight: 700, color: "#00C853" }}>✓ IRN: ET-2024-48291</span>
            </div>
            <div className="flex items-center gap-1">
              <span style={{ fontSize: "8px", fontWeight: 700, color: "#00C853" }}>✓ Z-Report queued</span>
            </div>
          </div>
          {/* QR code mockup */}
          <div className="w-12 h-12 rounded grid p-1" style={{ border: "1px solid #E5E7EB" }}
            >
            <div className="w-full h-full grid grid-cols-5 gap-px">
              {Array.from({ length: 25 }).map((_, j) => (
                <div key={j} className="rounded-[1px]"
                  style={{ background: [0,1,2,4,5,6,8,10,14,16,18,20,22,24].includes(j)
                    ? "#111827" : "transparent" }} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-5 top-8 bg-white rounded-xl px-3 py-2"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #E5E7EB",
          fontSize: "10px", fontWeight: 600, color: "#00C853" }}
      >
        ✓ MoR Compliant
      </motion.div>
    </div>
  );
}

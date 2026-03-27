"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { COMPLIANCE_TABS } from "@/lib/constants";
import { FileCheck, Calculator, ShieldCheck, Download } from "lucide-react";

const TAB_ICONS = [FileCheck, Calculator, ShieldCheck, Download];

export default function EffortlessCompliance() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const tab = COMPLIANCE_TABS[activeTab];

  return (
    <section id="compliance" ref={ref} className="section-padding" style={{ background: "#F9FAFB" }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-label">Compliance</p>
          <h2>Experience Effortless Compliance</h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Stop worrying about tax compliance. Every invoice, every report,
            every submission — handled automatically.
          </p>
        </motion.div>

        {/* Tab Navigation - Horizontal like MyBillBook */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center gap-1 mb-10 overflow-x-auto"
        >
          {COMPLIANCE_TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
              style={{
                background: activeTab === i ? "#22C55E" : "transparent",
                color: activeTab === i ? "#FFFFFF" : "#6B7280",
                border: activeTab === i ? "none" : "1px solid #E5E7EB",
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content - text left, illustration right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          >
            {/* Left - Text Content */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tab.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{tab.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {tab.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <span style={{ color: "#22C55E", fontSize: "14px" }}>✓</span>
                    <span className="text-sm font-medium text-gray-700">{feat}</span>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 text-sm font-semibold flex items-center gap-1 transition-colors"
                style={{ color: "#22C55E" }}
              >
                Learn More →
              </button>
            </div>

            {/* Right - Invoice Mockup */}
            <div className="flex justify-center lg:justify-end">
              <ComplianceMockup tabIndex={activeTab} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ComplianceMockup({ tabIndex }: { tabIndex: number }) {
  const labels = [
    { badge: "IRN Generated", detail: "ET-2024-48291" },
    { badge: "VAT Calculated", detail: "15% Applied" },
    { badge: "INSA Certified", detail: "Encrypted" },
    { badge: "Export Ready", detail: "PDF & Excel" },
  ];
  const label = labels[tabIndex];

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white rounded-2xl overflow-hidden"
      style={{
        width: "260px",
        border: "1px solid #E5E7EB",
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Invoice header */}
      <div className="p-4" style={{ borderBottom: "1px solid #F3F4F6" }}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold mb-1"
              style={{ background: "#22C55E" }}
            >
              M
            </div>
            <p className="text-[11px] font-bold text-gray-900">Kebede Trading</p>
            <p className="text-[9px] text-gray-400">TIN: ET-12345678</p>
          </div>
          <span
            className="text-[9px] font-bold px-2 py-0.5 rounded"
            style={{ background: "#22C55E", color: "white" }}
          >
            INVOICE
          </span>
        </div>
        <div className="flex justify-between text-[9px] text-gray-400">
          <span>INV-2024-0041</span>
          <span>13/07/2017 EC</span>
        </div>
      </div>

      {/* Line items */}
      <div className="px-4 py-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
        {[
          ["Rice 25kg", "ETB 2,400"],
          ["Sugar 50kg", "ETB 4,500"],
          ["Cooking Oil 20L", "ETB 1,800"],
        ].map(([item, amt]) => (
          <div
            key={item}
            className="flex justify-between py-1"
            style={{ fontSize: "10px", borderBottom: "1px solid #F9FAFB" }}
          >
            <span className="text-gray-600">{item}</span>
            <span className="font-semibold text-gray-900">{amt}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="px-4 py-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
          <span>VAT (15%)</span>
          <span>ETB 1,305</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-gray-900 pt-1 border-t border-gray-100">
          <span>Total</span>
          <span>ETB 10,005</span>
        </div>
      </div>

      {/* Compliance badge */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold" style={{ color: "#22C55E" }}>
            ✓ {label.badge}
          </p>
          <p className="text-[8px] text-gray-400">{label.detail}</p>
        </div>
        {/* QR Code */}
        <div className="w-10 h-10 rounded grid grid-cols-5 gap-px p-1" style={{ border: "1px solid #E5E7EB" }}>
          {Array.from({ length: 25 }).map((_, j) => (
            <div
              key={j}
              className="rounded-[1px]"
              style={{
                background: [0, 1, 2, 4, 5, 6, 8, 10, 14, 16, 18, 20, 22, 24].includes(j)
                  ? "#111827"
                  : "transparent",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

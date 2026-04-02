"use client";

import { useState, useRef } from "react";
import NextImage from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion";
import { COMPLIANCE_TABS } from "@/lib/constants";
import { FileCheck, Calculator, ShieldCheck, Download, ArrowRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/FloatingPaths";

const TAB_ICONS = [FileCheck, Calculator, ShieldCheck, Download];

export default function EffortlessCompliance() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const tab = COMPLIANCE_TABS[activeTab];

  return (
    <section id="compliance" ref={ref} className="section-padding" style={{ background: "#F9FAFB", position: "relative", overflow: "hidden" }}>
      {/* Animated Background Paths */}
      <div className="absolute inset-0" style={{ opacity: 0.35 }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container-custom" style={{ position: "relative", zIndex: 10 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] leading-tight">
            Experience Effortless Compliance with <br/> Meleket Invoicing Software
          </h2>
        </motion.div>

        {/* Main Layout: Vertical tabs on left, content on right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        >
          {/* Left Column - Vertical Tab Navigation */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            {COMPLIANCE_TABS.map((t, i) => {
              const Icon = TAB_ICONS[i];
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left"
                  style={{
                    background: activeTab === i ? "#F4F0FF" : "#FFFFFF",
                    border: activeTab === i ? "1px solid #F4F0FF" : "1px solid #F3F4F6",
                    boxShadow: activeTab === i ? "none" : "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                  whileHover={{ x: 4 }}
                >
                  <Icon
                    size={24}
                    style={{
                      color: activeTab === i ? "#6366F1" : "#9CA3AF",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: activeTab === i ? "#6366F1" : "#111827",
                      fontWeight: activeTab === i ? 600 : 500,
                    }}
                  >
                    {t.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column - Tab Content (image, description, button) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200"
              >
                {/* Feature Image */}
                <div className="relative w-full" style={{ minHeight: "300px" }}>
                  <ComplianceImage tabIndex={activeTab} />
                </div>

                {/* Description and Button */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    {tab.description}
                  </p>

                  <button
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:gap-3"
                    style={{
                      background: "#4F46E5",
                      color: "#FFFFFF",
                    }}
                  >
                    Get Started Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComplianceImage({ tabIndex }: { tabIndex: number }) {
  const images = [
    "gst-filing", // MoR e-Invoicing tab mapped to user's first image
    "e-invoicing", // VAT & TOT mapped to user's second image
    "e-way-billing", // INSA Security mapped to user's third image
    "data-export", // Data Export
  ];
  const imageName = images[tabIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full relative bg-[#F8FAFC] flex items-center justify-center p-8"
      style={{ minHeight: "350px" }}
    >
      <NextImage
        src={`/images/compliance/${imageName}.webp`}
        alt={`${imageName} compliance feature`}
        width={500}
        height={350}
        className="w-full h-full object-contain drop-shadow-sm z-10"
        loading="lazy"
      />
      {/* Fallback placeholder - only shown if image fails or is loading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-5xl mb-3">📋</div>
        <div className="text-sm font-medium text-gray-600">
          {imageName.toUpperCase()} Compliance
        </div>
      </div>
    </motion.div>
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

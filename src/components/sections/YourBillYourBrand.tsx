"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";

const TABS = ["Thermal Prints", "A4 Prints", "A5 Prints"];

const TEMPLATES = [
  { name: "Classic", accent: "#374151", bg: "#F9FAFB" },
  { name: "Modern", accent: "#22C55E", bg: "#F0FDF4" },
  { name: "Luxury", accent: "#92400E", bg: "#FFFBEB" },
  { name: "Stylish", accent: "#2563EB", bg: "#EFF6FF" },
];

export default function YourBillYourBrand() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="invoicing" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-label">Customization</p>
          <h2>Your Bill, Your Brand</h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Create professional invoices that represent your business. Choose from multiple
            themes, add your logo, and stay MoR compliant automatically.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center gap-2 mb-10"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeTab === i ? "#22C55E" : "transparent",
                color: activeTab === i ? "#FFFFFF" : "#6B7280",
                border: activeTab === i ? "none" : "1px solid #E5E7EB",
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Template Gallery */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
        >
          {TEMPLATES.map((theme) => (
            <motion.div
              key={theme.name}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{ border: "1px solid #E5E7EB" }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              {/* Invoice Preview */}
              <div className="p-4" style={{ background: theme.bg }}>
                <div className="h-2 w-12 rounded-full mb-3" style={{ background: theme.accent }} />
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="h-1.5 w-14 rounded mb-1" style={{ background: theme.accent, opacity: 0.5 }} />
                    <div className="h-1 w-9 rounded" style={{ background: "#D1D5DB" }} />
                  </div>
                  <span
                    className="text-[7px] font-bold px-1.5 py-0.5 rounded"
                    style={{ background: theme.accent, color: "white" }}
                  >
                    INVOICE
                  </span>
                </div>
                {[1, 2, 3].map((r) => (
                  <div key={r} className="flex gap-1 mb-1">
                    <div className="h-1 rounded flex-[3]" style={{ background: "#D1D5DB" }} />
                    <div className="h-1 rounded flex-1" style={{ background: "#D1D5DB" }} />
                    <div className="h-1 rounded flex-1" style={{ background: "#D1D5DB" }} />
                  </div>
                ))}
                <div
                  className="flex justify-between items-center mt-3 pt-2"
                  style={{ borderTop: `1px solid ${theme.accent}25` }}
                >
                  <div className="h-1 w-6 rounded" style={{ background: "#D1D5DB" }} />
                  <div className="h-1.5 w-10 rounded" style={{ background: theme.accent }} />
                </div>
              </div>
              {/* Label */}
              <div className="px-4 py-3 bg-white text-center">
                <p className="text-xs font-semibold" style={{ color: theme.accent }}>{theme.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Start Using →
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature points */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500"
        >
          {["Custom Colors", "Your Logo & TIN", "Multiple Themes", "IRN & QR Code"].map((point) => (
            <motion.span key={point} variants={fadeRight} className="flex items-center gap-2">
              <span style={{ color: "#22C55E" }}>✓</span> {point}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

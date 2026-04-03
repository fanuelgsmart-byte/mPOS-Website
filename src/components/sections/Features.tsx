"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FEATURE_TABS } from "@/lib/constants";
import {
  ShoppingCart,
  FileText,
  Package,
  Palette,
  Receipt,
  ArrowLeftRight,
  BarChart2,
  CloudUpload,
  Printer,
  Users,
  Globe,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  ShoppingCart,
  FileText,
  Package,
  Palette,
  Receipt,
  ArrowLeftRight,
  BarChart2,
  CloudUpload,
  Printer,
  Users,
  Globe,
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  const activeFeature = FEATURE_TABS[activeTab];
  const Icon = activeFeature ? ICON_MAP[activeFeature.icon] : null;

  return (
    <section id="features" ref={ref} style={{ background: "#FFFFFF" }} className="section-padding">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1F2937",
            }}
          >
            Features of MoR Billing and
            <br />
            Accounting Software
          </h2>
        </motion.div>

        {/* Vertical Tab Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Left — Tab List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2.5 lg:max-h-[600px] lg:overflow-y-auto vertical-tab-scrollbar">
            {FEATURE_TABS.map((tab, index) => {
              const TabIcon = ICON_MAP[tab.icon];
              const isActive = activeTab === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className="vertical-tab-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    borderRadius: "12px",
                    border: "1px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    transition: "all 200ms ease",
                    background: isActive ? "#EEF0FF" : "#FFFFFF",
                    borderColor: isActive ? "#C7D2FE" : "#F3F4F6",
                    borderLeftWidth: "4px",
                    borderLeftColor: isActive ? "#4F46E5" : "transparent",
                    boxShadow: isActive
                      ? "0 4px 12px rgba(79,70,229,0.08)"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#FAFAFA";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.borderColor = "#F3F4F6";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                    }
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `1.5px solid ${isActive ? "#E53935" : "#D1D5DB"}`,
                      background: isActive ? "rgba(229,57,53,0.06)" : "transparent",
                      transition: "all 200ms ease",
                    }}
                  >
                    {TabIcon && (
                      <TabIcon
                        size={20}
                        color={isActive ? "#E53935" : "#9CA3AF"}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#1F2937" : "#4B5563",
                      transition: "all 200ms ease",
                    }}
                  >
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — Content Panel */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                style={{ paddingTop: "0.5rem" }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    fontWeight: 800,
                    color: "#1F2937",
                    marginBottom: "1.5rem",
                    lineHeight: 1.25,
                  }}
                >
                  {activeFeature.title}
                </h3>

                <div
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                    color: "#4B5563",
                  }}
                >
                  {activeFeature.content.split("\n").map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

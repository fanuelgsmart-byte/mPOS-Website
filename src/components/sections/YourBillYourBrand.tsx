"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Scissors } from "lucide-react";
import Image from "next/image";

const TABS = ["Thermal Prints", "A4 Prints", "A5 Prints"] as const;

interface TemplateCard {
  name: string;
  image: string;
  alt: string;
}

const A4_TEMPLATES: TemplateCard[] = [
  {
    name: "Classic",
    image: "/invoice-templates/a4-print-1.webp",
    alt: "Classic invoice template",
  },
  {
    name: "Modern",
    image: "/invoice-templates/a4-print-2.webp",
    alt: "Modern invoice template",
  },
  {
    name: "Luxury",
    image: "/invoice-templates/a4-print-4.webp",
    alt: "Luxury invoice template",
  },
  {
    name: "Stylish",
    image: "/invoice-templates/a4-print-5.webp",
    alt: "Stylish invoice template",
  },
];

const A5_TEMPLATES: TemplateCard[] = [
  {
    name: "Billbook (A5)",
    image: "/invoice-templates/a5-print-1.webp",
    alt: "GST Billing Software A5 Print",
  },
  {
    name: "Advanced GST (A5)",
    image: "/invoice-templates/a5-print-2.webp",
    alt: "Online billing software A5 Print",
  },
];

export default function YourBillYourBrand() {
  const [activeTab, setActiveTab] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const templates =
    activeTab === 1 ? A4_TEMPLATES : activeTab === 2 ? A5_TEMPLATES : [];

  return (
    <section id="invoicing" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="print-types-header">
            Your bill, Your Brand{" "}
            <span className="print-types-gradient-text">And More!</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Fully customisable invoices with multiple invoice theme options. Get
            the power to personalise your invoices that reflect your brand&apos;s
            identity, exclusively on Meleket Billing Software
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="print-types-tabs">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`print-types-tab ${activeTab === i ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Template Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 0 ? (
              /* Thermal Print - two overlapping receipts with size labels */
              <div className="flex justify-center items-end gap-0 relative"
                   style={{ minHeight: 500 }}>
                {/* 2 inch receipt */}
                <div className="relative" style={{ zIndex: 2, marginRight: -40 }}>
                  <div className="print-types-card" style={{ width: 220, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                    <div className="print-types-card-image-wrap">
                      <Image
                        src="/invoice-templates/thermal-print.webp"
                        alt="2 inch Thermal Print"
                        width={220}
                        height={400}
                        className="print-types-card-img"
                      />
                    </div>
                  </div>
                  <span
                    className="absolute text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      background: "#6366F1",
                      bottom: 80,
                      left: 20,
                      zIndex: 3,
                    }}
                  >
                    2 inch
                  </span>
                </div>

                {/* 3 inch receipt */}
                <div className="relative" style={{ zIndex: 1 }}>
                  <div className="print-types-card" style={{ width: 280, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                    <div className="print-types-card-image-wrap">
                      <Image
                        src="/invoice-templates/thermal-print.webp"
                        alt="3 inch Thermal Print"
                        width={280}
                        height={480}
                        className="print-types-card-img"
                      />
                    </div>
                  </div>
                  <span
                    className="absolute text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      background: "#111827",
                      top: 20,
                      right: 20,
                      zIndex: 3,
                    }}
                  >
                    3 inch
                  </span>
                </div>
              </div>
            ) : (
              /* A4 / A5 Templates Grid */
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="show"
                className="print-types-gallery"
              >
                {templates.map((template) => (
                  <motion.div
                    key={template.name}
                    variants={fadeUp}
                    className="print-types-card"
                  >
                    <div className="print-types-card-image-wrap">
                      <Image
                        src={template.image}
                        alt={template.alt}
                        width={400}
                        height={560}
                        className="print-types-card-img"
                      />
                      {/* Hover overlay */}
                      <div className="print-types-card-overlay">
                        <div className="print-types-card-overlay-content">
                          <span className="print-types-card-overlay-name">
                            {template.name}
                          </span>
                          <span className="print-types-card-overlay-cta">
                            Use Template{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5 10h10m0 0l-4-4m4 4l-4 4"
                                stroke="#2563EB"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Customize your own Invoice card (A4 only) */}
                {activeTab === 1 && (
                  <motion.div
                    variants={fadeUp}
                    className="print-types-card flex flex-col items-center justify-center p-8 text-center"
                    style={{ minHeight: 300, background: "#FAFAFA", border: "2px dashed #E5E7EB" }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: "#F3F4F6" }}
                    >
                      <Scissors size={24} color="#6B7280" />
                    </div>
                    <p className="font-semibold text-gray-800 text-base">
                      Customize your own Invoice
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

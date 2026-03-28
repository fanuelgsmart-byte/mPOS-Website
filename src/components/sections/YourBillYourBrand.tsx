"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const TABS = ["Thermal Prints", "A4 Prints", "A5 Prints"] as const;

interface Template {
  name: string;
  accent: string;
  headerBg: string;
  bodyBg: string;
  businessName: string;
  invoiceNo: string;
  invoiceDate: string;
  dueDate: string;
  billTo: string;
  items: { name: string; qty: number; rate: number; amount: number }[];
  hasLogo?: boolean;
  hasQR?: boolean;
}

const A4_TEMPLATES: Template[] = [
  {
    name: "Luxury Theme",
    accent: "#6D28D9",
    headerBg: "#F5F3FF",
    bodyBg: "#FAFAFE",
    businessName: "Parshwanath Medicare",
    invoiceNo: "DP/SL/23-24/731",
    invoiceDate: "11/03/2026",
    dueDate: "10/04/2026",
    billTo: "Patel Distributors",
    items: [
      { name: "COMBIFLAM", qty: 5, rate: 40, amount: 206 },
      { name: "CROCIN", qty: 5, rate: 6.3, amount: 215.3 },
      { name: "DOLO 650", qty: 20, rate: 4.2, amount: 110 },
    ],
    hasLogo: true,
  },
  {
    name: "Special Themes",
    accent: "#059669",
    headerBg: "#ECFDF5",
    bodyBg: "#F8FDFB",
    businessName: "Business Name",
    invoiceNo: "INV-001",
    invoiceDate: "22/11/2025",
    dueDate: "22/12/2025",
    billTo: "Sample Party",
    items: [
      { name: "SAMSUNG A30", qty: 1, rate: 10000, amount: 11500 },
      { name: "Mobile Cover", qty: 1, rate: 341.8, amount: 341.8 },
      { name: "Headphones BT12", qty: 2, rate: 900, amount: 1800 },
    ],
    hasLogo: true,
  },
  {
    name: "Custom Invoice",
    accent: "#1D4ED8",
    headerBg: "#EFF6FF",
    bodyBg: "#F8FAFF",
    businessName: "Ramesh Electronics",
    invoiceNo: "5343",
    invoiceDate: "22/11/2025",
    dueDate: "22/12/2025",
    billTo: "Shantanu Sharma",
    items: [
      { name: "SAMSUNG GALAXY F54", qty: 1, rate: 21185.59, amount: 24999 },
    ],
    hasQR: true,
  },
  {
    name: "Stylish",
    accent: "#DC2626",
    headerBg: "#FEF2F2",
    bodyBg: "#FFFBFB",
    businessName: "Shree Raju Agencies",
    invoiceNo: "50442",
    invoiceDate: "13/06/2023",
    dueDate: "13/08/2023",
    billTo: "Sanas Supermart",
    items: [
      { name: "RAJU NAMKEEN-1", qty: 2, rate: 2950, amount: 20160 },
    ],
    hasLogo: true,
  },
  {
    name: "Modern",
    accent: "#0891B2",
    headerBg: "#ECFEFF",
    bodyBg: "#F8FDFE",
    businessName: "Tech Solutions Ltd",
    invoiceNo: "TS-2024-089",
    invoiceDate: "15/01/2026",
    dueDate: "15/02/2026",
    billTo: "Digital Corp",
    items: [
      { name: "Web Development", qty: 1, rate: 45000, amount: 45000 },
      { name: "UI/UX Design", qty: 1, rate: 25000, amount: 25000 },
    ],
  },
];

const A5_TEMPLATES: Template[] = [
  {
    name: "Billbook (A5)",
    accent: "#7C3AED",
    headerBg: "#F5F3FF",
    bodyBg: "#FAF9FE",
    businessName: "Quick Mart",
    invoiceNo: "QM-1042",
    invoiceDate: "05/02/2026",
    dueDate: "05/03/2026",
    billTo: "Walk-in Customer",
    items: [
      { name: "Item A", qty: 2, rate: 150, amount: 300 },
      { name: "Item B", qty: 1, rate: 450, amount: 450 },
    ],
  },
  {
    name: "Advanced GST (A5)",
    accent: "#B45309",
    headerBg: "#FFFBEB",
    bodyBg: "#FEFDF5",
    businessName: "GST Traders",
    invoiceNo: "GT-5567",
    invoiceDate: "18/03/2026",
    dueDate: "18/04/2026",
    billTo: "Retail Shop",
    items: [
      { name: "Product X", qty: 5, rate: 200, amount: 1000 },
      { name: "Product Y", qty: 3, rate: 350, amount: 1050 },
    ],
    hasQR: true,
  },
];

function InvoicePreview({ template, compact }: { template: Template; compact?: boolean }) {
  const { accent, headerBg, bodyBg, businessName, invoiceNo, invoiceDate, dueDate, billTo, items, hasLogo, hasQR } = template;
  const total = items.reduce((s, i) => s + i.amount, 0);

  return (
    <div className="w-full overflow-hidden" style={{ background: bodyBg, fontSize: compact ? 5 : 6 }}>
      {/* Invoice Header */}
      <div className="px-3 py-2" style={{ background: headerBg, borderBottom: `2px solid ${accent}` }}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1.5">
            {hasLogo && (
              <div className="rounded" style={{ width: 14, height: 14, background: accent, opacity: 0.2 }} />
            )}
            <div>
              <div className="font-bold" style={{ color: accent, fontSize: compact ? 6 : 7 }}>{businessName}</div>
              <div style={{ color: "#9CA3AF", fontSize: compact ? 4 : 4.5 }}>Business address line</div>
            </div>
          </div>
          <div className="text-right">
            <span
              className="font-bold px-1.5 py-0.5 rounded"
              style={{ background: accent, color: "white", fontSize: compact ? 4.5 : 5 }}
            >
              TAX INVOICE
            </span>
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="px-3 py-1.5">
        <div className="flex justify-between" style={{ fontSize: compact ? 4.5 : 5, color: "#6B7280" }}>
          <div>
            <span className="font-semibold" style={{ color: "#374151" }}>Invoice No: </span>{invoiceNo}
          </div>
          <div>
            <span className="font-semibold" style={{ color: "#374151" }}>Date: </span>{invoiceDate}
          </div>
        </div>
        <div className="flex gap-4 mt-1" style={{ fontSize: compact ? 4 : 4.5, color: "#6B7280" }}>
          <div>
            <div className="font-semibold" style={{ color: "#374151" }}>BILL TO</div>
            <div>{billTo}</div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="px-3">
        <div
          className="flex font-semibold py-0.5 mb-0.5"
          style={{ borderBottom: `1px solid ${accent}40`, color: "#374151", fontSize: compact ? 4 : 4.5 }}
        >
          <div className="flex-[3]">ITEMS</div>
          <div className="flex-1 text-right">QTY</div>
          <div className="flex-1 text-right">RATE</div>
          <div className="flex-1 text-right">AMOUNT</div>
        </div>
        {items.map((item, i) => (
          <div key={i} className="flex py-0.5" style={{ color: "#6B7280", fontSize: compact ? 3.5 : 4 }}>
            <div className="flex-[3]">{item.name}</div>
            <div className="flex-1 text-right">{item.qty}</div>
            <div className="flex-1 text-right">{item.rate.toLocaleString()}</div>
            <div className="flex-1 text-right">{item.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="px-3 py-1.5 mt-1" style={{ borderTop: `1px solid ${accent}30` }}>
        <div className="flex justify-between items-center">
          <div style={{ fontSize: compact ? 4 : 4.5, color: "#9CA3AF" }}>
            {hasQR && (
              <div className="border rounded p-0.5" style={{ width: 16, height: 16, borderColor: "#D1D5DB" }}>
                <div className="w-full h-full grid grid-cols-3 gap-px">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} style={{ background: i % 2 === 0 ? "#374151" : "transparent" }} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="font-bold" style={{ color: accent, fontSize: compact ? 5.5 : 6.5 }}>
              Total: ₹{total.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1" style={{ background: headerBg }}>
        <div className="flex justify-between" style={{ fontSize: compact ? 3.5 : 4, color: "#9CA3AF" }}>
          <span>Bank Details: XXXX XXXX</span>
          <span>Due: {dueDate}</span>
        </div>
      </div>
    </div>
  );
}

function ThermalPreview() {
  return (
    <div className="w-full max-w-[180px] mx-auto bg-white" style={{ fontSize: 5, fontFamily: "monospace" }}>
      <div className="text-center py-2 px-3">
        <div className="font-bold" style={{ fontSize: 7 }}>STORE NAME</div>
        <div style={{ color: "#6B7280", fontSize: 4 }}>Shop No. 12, Main Street</div>
        <div style={{ color: "#6B7280", fontSize: 4 }}>Tel: 011-XXX-XXXX</div>
        <div className="my-1" style={{ borderTop: "1px dashed #D1D5DB" }} />
        <div className="text-left font-semibold mb-0.5">Bill No: TH-0042</div>
        <div className="text-left mb-1" style={{ color: "#6B7280", fontSize: 4 }}>Date: 28/03/2026 14:32</div>
        <div className="my-0.5" style={{ borderTop: "1px dashed #D1D5DB" }} />
        <div className="flex justify-between font-semibold py-0.5" style={{ fontSize: 4.5 }}>
          <span className="flex-[2] text-left">Item</span>
          <span className="flex-1 text-right">Qty</span>
          <span className="flex-1 text-right">Amt</span>
        </div>
        <div className="my-0.5" style={{ borderTop: "1px dashed #D1D5DB" }} />
        {[
          { name: "Rice 5kg", qty: 1, amt: 320 },
          { name: "Sugar 1kg", qty: 2, amt: 110 },
          { name: "Oil 1L", qty: 1, amt: 185 },
          { name: "Dal 1kg", qty: 2, amt: 240 },
          { name: "Salt 1kg", qty: 1, amt: 25 },
        ].map((item, i) => (
          <div key={i} className="flex justify-between py-0.5" style={{ fontSize: 4 }}>
            <span className="flex-[2] text-left">{item.name}</span>
            <span className="flex-1 text-right">{item.qty}</span>
            <span className="flex-1 text-right">₹{item.amt}</span>
          </div>
        ))}
        <div className="my-0.5" style={{ borderTop: "1px dashed #D1D5DB" }} />
        <div className="flex justify-between font-bold py-0.5" style={{ fontSize: 5.5 }}>
          <span>TOTAL</span>
          <span>₹880</span>
        </div>
        <div className="my-0.5" style={{ borderTop: "1px dashed #D1D5DB" }} />
        <div className="py-1" style={{ color: "#6B7280", fontSize: 4 }}>
          <div>Cash: ₹1000 | Change: ₹120</div>
          <div className="mt-1">Thank you! Visit again.</div>
        </div>
      </div>
    </div>
  );
}

export default function YourBillYourBrand() {
  const [activeTab, setActiveTab] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const templates = activeTab === 1 ? A4_TEMPLATES : activeTab === 2 ? A5_TEMPLATES : [];

  return (
    <section id="print-types" ref={ref} className="section-padding bg-white">
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
            <span className="print-types-gradient-text">Font</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Fully customisable GST &amp; non-GST invoices with multiple invoice theme options.
            Get the power to personalise your invoices that reflect your brand&apos;s identity,
            exclusively on myBillBook GST Billing Software
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
              /* Thermal Print */
              <div className="flex justify-center">
                <div className="print-types-card" style={{ maxWidth: 260 }}>
                  <div className="print-types-card-preview" style={{ background: "#F9FAFB" }}>
                    <ThermalPreview />
                  </div>
                  <div className="print-types-card-label">
                    <span className="print-types-card-name">Thermal Print</span>
                    <span className="print-types-card-cta">
                      Start Using Templates
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* A4 / A5 Templates */
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
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="print-types-card-preview">
                      <InvoicePreview template={template} compact={activeTab === 2} />
                    </div>
                    <div className="print-types-card-label">
                      <span className="print-types-card-name">{template.name}</span>
                      <span className="print-types-card-cta">
                        Start Using Templates
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

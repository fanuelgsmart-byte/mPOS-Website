"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      {/* Main Hero */}
      <div className="bg-white" style={{ paddingTop: "2rem", paddingBottom: "0" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-end">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="pb-12 lg:pb-20"
            >
              {/* Accent text — cursive like Khatabook's "(aur bhi)" */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "1.5rem",
                  color: "#374151",
                  marginBottom: "-0.25rem",
                }}
              >
                (even more)
              </motion.p>

              {/* Main heading — large, bold, multi-line */}
              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                Business made<span style={{ position: "relative" }}>{" "}easy</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  fontWeight: 400,
                  color: "#6B7280",
                  marginBottom: "2rem",
                  lineHeight: 1.3,
                }}
              >
                with Meleket on any device
              </motion.p>

              {/* Phone number input form — exact Khatabook pattern */}
              <motion.div variants={fadeUp}>
                <div
                  className="flex items-center max-w-md"
                  style={{ borderRadius: "12px", overflow: "hidden" }}
                >
                  {/* Country code + input */}
                  <div
                    className="flex items-center flex-1"
                    style={{
                      border: "1.5px solid #E5E7EB",
                      borderRight: "none",
                      borderRadius: "12px 0 0 12px",
                      height: "54px",
                    }}
                  >
                    <span
                      className="flex-shrink-0 text-sm font-medium text-gray-700 pl-4 pr-3"
                      style={{ borderRight: "1px solid #E5E7EB", paddingTop: "1px" }}
                    >
                      +251
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="flex-1 px-3 text-sm text-gray-700 outline-none bg-transparent h-full"
                      style={{ fontSize: "0.9375rem" }}
                    />
                  </div>
                  {/* Get Started button — red like Khatabook */}
                  <button
                    className="flex-shrink-0 px-6 text-white font-semibold text-sm cursor-pointer transition-colors"
                    style={{
                      background: "#E53935",
                      height: "54px",
                      borderRadius: "0 12px 12px 0",
                      border: "none",
                      minWidth: "140px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Overlapping device mockups (like Khatabook's phone + desktop) */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative flex justify-center lg:justify-end items-end"
              style={{ minHeight: "400px" }}
            >
              {/* Desktop mockup (background, larger) */}
              <div
                className="absolute right-0 top-0 hidden lg:block"
                style={{
                  width: "380px",
                  height: "280px",
                  borderRadius: "12px 12px 0 0",
                  border: "2px solid #E5E7EB",
                  borderBottom: "none",
                  background: "#FFFFFF",
                  overflow: "hidden",
                  boxShadow: "0 -4px 30px rgba(0,0,0,0.06)",
                }}
              >
                {/* Desktop browser bar */}
                <div
                  className="flex items-center gap-2 px-4 py-2"
                  style={{ background: "#1F2937", borderBottom: "1px solid #374151" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FBBF24" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="h-5 rounded-md px-2 flex items-center" style={{ background: "#374151" }}>
                      <span className="text-[9px] text-gray-400">meleket.app/dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Desktop sidebar + content */}
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div
                    className="flex-shrink-0 py-3 px-2"
                    style={{ width: "130px", background: "#111827" }}
                  >
                    <div className="flex items-center gap-1.5 px-2 mb-3">
                      <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "#E53935" }}>
                        <span className="text-white text-[7px] font-bold">M</span>
                      </div>
                      <span className="text-[9px] text-white font-semibold">Meleket</span>
                    </div>
                    {["Customers", "Suppliers", "Expenses", "Cashbook", "Staff", "Reports", "Settings"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className="flex items-center gap-1.5 px-2 py-1.5 rounded-md mb-0.5"
                          style={{
                            background: i === 0 ? "rgba(255,255,255,0.1)" : "transparent",
                          }}
                        >
                          <div className="w-3 h-3 rounded" style={{ background: i === 0 ? "#E53935" : "#4B5563" }} />
                          <span className="text-[8px]" style={{ color: i === 0 ? "#FFFFFF" : "#9CA3AF" }}>
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Desktop content area */}
                  <div className="flex-1 p-3" style={{ background: "#F9FAFB" }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[8px] font-bold text-gray-500 uppercase">Ledger Management</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <div className="px-2 py-0.5 rounded text-[7px] font-semibold" style={{ background: "#E53935", color: "white" }}>
                        Customers 120
                      </div>
                      <div className="px-2 py-0.5 rounded text-[7px] font-medium text-gray-400 border border-gray-200">
                        Suppliers 0
                      </div>
                    </div>
                    <div className="flex justify-between text-[7px] text-gray-400 mb-2">
                      <span>You&apos;ll Give: <strong className="text-green-600">ETB 13,480</strong></span>
                      <span>You&apos;ll Get: <strong className="text-red-500">ETB 2,340</strong></span>
                    </div>
                    {/* Customer rows */}
                    {[
                      { name: "Arya Sharma", time: "Just now", amt: "ETB 300", color: "#22C55E" },
                      { name: "Kapil Ojha", time: "2 min ago", amt: "ETB 75", color: "#22C55E" },
                      { name: "Priyanka J.", time: "1 hour ago", amt: "ETB 140", color: "#22C55E" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between py-1" style={{ borderBottom: "1px solid #F3F4F6" }}>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold text-white" style={{ background: row.color }}>
                            {row.name[0]}
                          </div>
                          <div>
                            <p className="text-[7px] font-medium text-gray-800">{row.name}</p>
                            <p className="text-[6px] text-gray-400">{row.time}</p>
                          </div>
                        </div>
                        <span className="text-[7px] font-semibold" style={{ color: row.color }}>{row.amt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone mockup (foreground, overlapping) */}
              <div className="relative z-10" style={{ marginRight: "40px" }}>
                <div
                  className="rounded-[2rem] overflow-hidden"
                  style={{
                    width: "220px",
                    border: "5px solid #1F2937",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    background: "#FFFFFF",
                  }}
                >
                  {/* Phone notch */}
                  <div className="flex justify-center py-1.5" style={{ background: "#1F2937" }}>
                    <div className="w-14 h-3 rounded-full" style={{ background: "#111827" }} />
                  </div>

                  {/* App header */}
                  <div
                    className="px-3 py-2 flex items-center justify-between"
                    style={{ background: "#111827" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: "#E53935" }}>
                        <span className="text-white text-[6px] font-bold">M</span>
                      </div>
                      <span className="text-[9px] text-white font-medium">My Business</span>
                    </div>
                  </div>

                  {/* Customers / Suppliers tabs */}
                  <div className="flex border-b border-gray-200">
                    <div className="flex-1 text-center py-1.5 text-[8px] font-bold" style={{ color: "#E53935", borderBottom: "2px solid #E53935" }}>
                      CUSTOMERS
                    </div>
                    <div className="flex-1 text-center py-1.5 text-[8px] font-medium text-gray-400">
                      SUPPLIERS
                    </div>
                  </div>

                  {/* Balance summary */}
                  <div className="flex px-3 py-2 gap-2" style={{ background: "#F9FAFB" }}>
                    <div className="flex-1">
                      <p className="text-[7px] text-gray-400">You will get</p>
                      <p className="text-[10px] font-bold text-green-600">ETB 1,200</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[7px] text-gray-400">You will give</p>
                      <p className="text-[10px] font-bold text-red-500">ETB 3,070</p>
                    </div>
                  </div>

                  {/* Customer list */}
                  <div className="px-2 py-1">
                    {[
                      { name: "Arun Batra", time: "Yesterday", amt: "ETB 200", color: "#22C55E" },
                      { name: "Rajat Jha", time: "Yesterday", amt: "ETB 70", color: "#EF4444", remind: true },
                      { name: "Babita Jain", time: "2 days ago", amt: "ETB 3,000", color: "#22C55E" },
                      { name: "Aruna Kumar", time: "4 days ago", amt: "ETB 1,000", color: "#22C55E" },
                      { name: "Manjunath", time: "4 days ago", amt: "ETB 8,000", color: "#EF4444", remind: true },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid #F3F4F6" }}>
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white"
                            style={{ background: c.color === "#22C55E" ? "#4CAF50" : "#F44336" }}
                          >
                            {c.name.split(" ").map(w => w[0]).join("")}
                          </div>
                          <div>
                            <p className="text-[8px] font-medium text-gray-800">{c.name}</p>
                            <p className="text-[6px] text-gray-400">{c.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] font-semibold" style={{ color: c.color }}>{c.amt}</p>
                          {c.remind && (
                            <p className="text-[6px] font-medium" style={{ color: "#E53935" }}>Remind →</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add customer button */}
                  <div className="px-3 py-2 flex justify-end">
                    <div
                      className="px-3 py-1 rounded-full text-[7px] font-bold text-white"
                      style={{ background: "#E53935" }}
                    >
                      + ADD CUSTOMER
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* "One platform" sub-section — matches Khatabook exactly */}
      <div style={{ background: "#FFF5F5", borderTop: "1px solid #FEE2E2" }}>
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              One platform for all your business needs
            </h3>

            <div className="flex flex-wrap items-start gap-6">
              <div className="flex items-start gap-4">
                <span className="text-sm text-gray-600 leading-snug">
                  Manage Digital<br />Business Ledger
                </span>
                <div
                  className="flex-shrink-0"
                  style={{ width: "2px", height: "32px", background: "#E53935", borderRadius: "1px" }}
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-sm text-gray-600 leading-snug">
                  Send Payment Reminders for<br />easy collection
                </span>
                <div
                  className="flex-shrink-0 hidden sm:block"
                  style={{ width: "2px", height: "32px", background: "#E53935", borderRadius: "1px" }}
                />
              </div>
              <span className="text-sm text-gray-600 leading-snug">
                MoR e-Invoice &amp;<br />Z-Report compliance
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

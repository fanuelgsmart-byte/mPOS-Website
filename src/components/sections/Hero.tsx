"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "#FFF0EE",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container-custom flex flex-col lg:flex-row items-center flex-1 relative">
        {/* LEFT — Text content (Khatabook style: content on left) */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full lg:w-[50%] py-12 lg:py-20 z-10"
        >
          {/* Elevated accent — "(even more)" above title */}
          <motion.div variants={fadeUp} className="mb-2">
            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "#E53935",
                fontWeight: 600,
                display: "inline-block",
                marginLeft: "clamp(10rem, 22vw, 16rem)",
              }}
            >
              (even more)
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div variants={fadeUp}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Business made
              <span style={{ position: "relative" }}>
                {" "}
                <span style={{ color: "#E53935", fontSize: "0.5em", verticalAlign: "super" }}>^</span>
                {" "}
              </span>
              easy
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              color: "#6B7280",
              marginTop: "0.75rem",
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            with Meleket on Desktop
          </motion.p>

          {/* Phone number form */}
          <motion.form
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div
              className="flex"
              style={{
                border: "1px solid #D6D6D6",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#FFFFFF",
                maxWidth: "400px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRight: "1px solid #D6D6D6",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "18px", color: "#374151", fontWeight: 500 }}>+251</span>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  color: "#374151",
                  padding: "0.875rem 1rem",
                  minWidth: 0,
                  background: "transparent",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: "#E53935",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "0.875rem 2.5rem",
                whiteSpace: "nowrap",
                transition: "background 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
            >
              Get Started
            </button>
          </motion.form>

          {/* Feature items strip */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "#FFFFFF",
              borderRadius: "12px",
              padding: "1.5rem 2rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              One platform for all your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {[
                "Manage Digital\nBusiness Ledger",
                "Send Payment Reminders for\neasy collection",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5">
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {text}
                  </span>
                  {i < 1 && (
                    <div
                      className="hidden sm:block"
                      style={{
                        width: "3px",
                        height: "36px",
                        background: "#E53935",
                        borderRadius: "2px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — App mockups (desktop + mobile + person illustration) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-[50%] relative flex items-end justify-center lg:justify-end"
          style={{ minHeight: "400px" }}
        >
          {/* Background illustration (person/character area) */}
          <div
            className="absolute inset-0 flex items-end justify-center"
            style={{ zIndex: 1 }}
          >
            <Image
              src="/hero-illustration.svg"
              alt="Business illustration"
              width={512}
              height={226}
              priority
              className="w-full max-w-[500px] h-auto opacity-40"
              style={{ transform: "translateY(20px)" }}
            />
          </div>

          {/* Desktop dashboard mockup */}
          <div
            className="relative z-10"
            style={{
              width: "100%",
              maxWidth: "520px",
              perspective: "1000px",
            }}
          >
            {/* Desktop frame */}
            <div
              style={{
                background: "#1a1a2e",
                borderRadius: "12px 12px 0 0",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca42" }} />
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  color: "#888",
                  fontWeight: 500,
                }}
              >
                Meleket Dashboard
              </span>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "0 0 12px 12px",
                padding: "16px",
                border: "1px solid #E5E7EB",
                borderTop: "none",
              }}
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div style={{ width: 32, height: 32, borderRadius: "8px", background: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "14px" }}>M</div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>My Business</p>
                    <p style={{ fontSize: "10px", color: "#9CA3AF" }}>Addis Ababa</p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="text-center">
                    <p style={{ color: "#22C55E", fontWeight: 700 }}>ETB 13,480</p>
                    <p style={{ color: "#9CA3AF", fontSize: "10px" }}>You&apos;ll Get</p>
                  </div>
                  <div className="text-center">
                    <p style={{ color: "#E53935", fontWeight: 700 }}>ETB 2,340</p>
                    <p style={{ color: "#9CA3AF", fontSize: "10px" }}>You&apos;ll Give</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-3 mb-3">
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#E53935", borderBottom: "2px solid #E53935", paddingBottom: "4px" }}>Customers 120</span>
                <span style={{ fontSize: "12px", color: "#9CA3AF", paddingBottom: "4px" }}>Suppliers 8</span>
              </div>

              {/* Customer list */}
              <div className="flex flex-col gap-2">
                {[
                  { name: "Abebe Kebede", time: "Just now", amount: "ETB 300", color: "#22C55E", initials: "AK" },
                  { name: "Tigist Hailu", time: "2 min ago", amount: "ETB 75", color: "#22C55E", initials: "TH" },
                  { name: "Yonas Tadesse", time: "1 hour ago", amount: "ETB 140", color: "#E53935", initials: "YT" },
                  { name: "Meron Bekele", time: "3 hours ago", amount: "ETB 300", color: "#22C55E", initials: "MB" },
                ].map((customer) => (
                  <div key={customer.name} className="flex items-center justify-between" style={{ padding: "6px 0", borderBottom: "1px solid #F3F4F6" }}>
                    <div className="flex items-center gap-2">
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600, color: "#6366F1" }}>{customer.initials}</div>
                      <div>
                        <p style={{ fontSize: "12px", fontWeight: 500, color: "#111827" }}>{customer.name}</p>
                        <p style={{ fontSize: "10px", color: "#9CA3AF" }}>{customer.time}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: customer.color }}>{customer.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile phone mockup — overlapping bottom-right */}
            <div
              className="absolute z-20 hidden md:block"
              style={{
                bottom: "-20px",
                right: "-40px",
                width: "160px",
              }}
            >
              <div
                style={{
                  background: "#111827",
                  borderRadius: "20px",
                  padding: "6px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
              >
                {/* Phone notch */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
                  <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "#333" }} />
                </div>
                {/* Phone screen */}
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "10px 8px",
                    minHeight: "220px",
                  }}
                >
                  {/* Mobile app header */}
                  <div className="flex items-center gap-1 mb-2">
                    <div style={{ width: 20, height: 20, borderRadius: "6px", background: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "9px" }}>M</div>
                    <span style={{ fontSize: "9px", fontWeight: 600 }}>My Business</span>
                    <span style={{ marginLeft: "auto", fontSize: "8px", color: "#22C55E" }}>Online</span>
                  </div>

                  {/* Mobile tabs */}
                  <div className="flex gap-2 mb-2">
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#E53935", background: "#FEE2E2", borderRadius: "4px", padding: "2px 6px" }}>Customers</span>
                    <span style={{ fontSize: "8px", color: "#9CA3AF", padding: "2px 6px" }}>Suppliers</span>
                  </div>

                  {/* Mobile stats */}
                  <div className="flex justify-between mb-2" style={{ padding: "4px 6px", background: "#F9FAFB", borderRadius: "6px" }}>
                    <div>
                      <p style={{ fontSize: "7px", color: "#9CA3AF" }}>You&apos;ll get</p>
                      <p style={{ fontSize: "9px", fontWeight: 700, color: "#22C55E" }}>ETB 1,200</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "7px", color: "#9CA3AF" }}>You&apos;ll give</p>
                      <p style={{ fontSize: "9px", fontWeight: 700, color: "#E53935" }}>ETB 3,070</p>
                    </div>
                  </div>

                  {/* Mobile customer list */}
                  {[
                    { name: "Arun B.", amount: "200", initials: "AB" },
                    { name: "Rajat J.", amount: "Remind", initials: "RJ" },
                    { name: "Babita J.", amount: "3,000", initials: "BJ" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between" style={{ padding: "3px 0", borderBottom: "1px solid #F3F4F6" }}>
                      <div className="flex items-center gap-1">
                        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6px", fontWeight: 600, color: "#6366F1" }}>{c.initials}</div>
                        <span style={{ fontSize: "8px", color: "#111827" }}>{c.name}</span>
                      </div>
                      <span style={{ fontSize: "8px", fontWeight: 600, color: c.amount === "Remind" ? "#E53935" : "#22C55E" }}>{c.amount === "Remind" ? "Remind >" : `ETB ${c.amount}`}</span>
                    </div>
                  ))}

                  {/* Add customer button */}
                  <div style={{ marginTop: "8px", background: "#E53935", borderRadius: "6px", padding: "4px", textAlign: "center" }}>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#fff" }}>+ Add Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom-left decorative illustration peek */}
      <div
        className="absolute bottom-0 left-0 hidden lg:block"
        style={{ zIndex: 0, opacity: 0.6 }}
      >
        <Image
          src="/hero-illustration.svg"
          alt=""
          width={280}
          height={124}
          className="h-auto"
          style={{ transform: "translate(-15%, 15%)" }}
        />
      </div>
    </section>
  );
}

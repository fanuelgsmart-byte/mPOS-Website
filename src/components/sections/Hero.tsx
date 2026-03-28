"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";

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
      {/* ── Header Box: illustration left + content right ── */}
      <div className="flex flex-col lg:flex-row items-center flex-1">
        {/* LEFT — Illustration asset (Khatabook .left-asset) */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-[45%] flex items-center justify-center px-6 pt-10 lg:pt-0 lg:pl-[clamp(2rem,4vw,4rem)]"
        >
          <Image
            src="/hero-illustration.svg"
            alt="Business illustration"
            width={512}
            height={226}
            priority
            className="w-full max-w-[480px] h-auto"
          />
        </motion.div>

        {/* RIGHT — Header content (Khatabook .header-content) */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full lg:w-[55%] px-6 sm:px-10 lg:pr-[clamp(2rem,5vw,5rem)] lg:pl-8 py-10 lg:py-16"
        >
          {/* Title container — "Business made (even more) easy" */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-baseline gap-x-3 mb-1"
          >
            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111827",
              }}
            >
              Business made
            </h1>

            {/* Elevated container — "(even more)" with arrow */}
            <div className="flex flex-col items-center" style={{ marginTop: "-0.5rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#E53935",
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                ^
              </span>
              <span
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  color: "#E53935",
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                (even more)
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111827",
              }}
            >
              easy
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#6B7280",
              marginBottom: "2rem",
              marginTop: "0.5rem",
            }}
          >
            with Meleket on Desktop
          </motion.p>

          {/* Phone number form — exact Khatabook pattern */}
          <motion.form
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div
              className="flex flex-1 max-w-[420px]"
              style={{
                border: "1px solid #D6D6D6",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#FFFFFF",
              }}
            >
              {/* +251 prefix */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.5rem 1rem",
                  borderRight: "1px solid #D6D6D6",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "18px", color: "#374151", fontWeight: 500 }}>+251</span>
              </div>
              {/* Phone input */}
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
            {/* Get Started button */}
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
                padding: "0.875rem 2rem",
                whiteSpace: "nowrap",
                transition: "background 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
            >
              Get Started
            </button>
          </motion.form>

          {/* Feature items — Khatabook bottom strip */}
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "0.75rem",
              }}
            >
              One platform for all your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {[
                "Manage Digital Business Ledger",
                "Send Payment Reminders for easy collection",
              ].map((text, i) => (
                <div key={text} className="flex items-center gap-4">
                  <span style={{ fontSize: "0.875rem", color: "#6B7280" }}>{text}</span>
                  {i < 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "24px",
                        background: "#E53935",
                        borderRadius: "1px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

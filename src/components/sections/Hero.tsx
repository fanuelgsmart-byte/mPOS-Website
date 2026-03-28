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
        {/* LEFT — Text content */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full lg:w-[48%] py-12 lg:py-20 z-10"
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

        {/* RIGHT — App mockup image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-[52%] relative flex items-end justify-center lg:justify-end"
        >
          <Image
            src="/hero-mockup.png"
            alt="Meleket app dashboard and mobile interface"
            width={750}
            height={750}
            priority
            className="w-full max-w-[650px] h-auto object-contain"
            style={{ marginBottom: "-4px" }}
          />
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

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
        background: "#F8EFF1",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "7.5rem",
      }}
    >
      <div
        className="container-custom flex flex-col lg:flex-row items-start flex-1 relative gap-10 lg:gap-0"
        style={{ maxWidth: "1720px", paddingTop: "2.5rem" }}
      >
        {/* LEFT — Text content */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full lg:w-1/2 py-8 lg:py-14 z-10"
          style={{ paddingLeft: "0.5rem" }}
        >
          {/* Main title + script accent */}
          <motion.div variants={fadeUp} style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.15rem, 2.5vw, 1.85rem)",
                color: "#111827",
                fontWeight: 600,
                position: "absolute",
                left: "calc(100% * 0.58)",
                top: "-1.45rem",
                whiteSpace: "nowrap",
              }}
            >
              (aur bhi)
            </span>
            <h1
              style={{
                fontSize: "clamp(3.2rem, 5.4vw, 5.15rem)",
                fontWeight: 700,
                lineHeight: 1.02,
                color: "#111827",
                letterSpacing: "-0.02em",
                marginBottom: 0,
              }}
            >
              Business hua
              <span style={{ color: "#111827", fontSize: "0.48em", verticalAlign: "super" }}>^</span>
              easy
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              color: "#111827",
              marginTop: "1.25rem",
              marginBottom: "2.6rem",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            with Khatabook on Desktop
          </motion.p>

          {/* Phone number form */}
          <motion.form
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-12"
            onSubmit={(e) => e.preventDefault()}
            style={{ alignItems: "stretch" }}
          >
            <div
              className="flex"
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#FFFFFF",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                width: "100%",
                maxWidth: "610px",
                minHeight: "66px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1.05rem 1.35rem",
                  borderRight: "1px solid #E5E7EB",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "16px", color: "#111827", fontWeight: 500 }}>+91</span>
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
                  color: "#111827",
                  padding: "1rem 1.35rem",
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
                borderRadius: "10px",
                cursor: "pointer",
                padding: "0.875rem 2.8rem",
                whiteSpace: "nowrap",
                transition: "all 150ms ease",
                boxShadow: "0 2px 8px rgba(229,57,53,0.25)",
                minHeight: "66px",
                minWidth: "285px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C62828";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(229,57,53,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E53935";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(229,57,53,0.25)";
              }}
            >
              Get Started
            </button>
          </motion.form>

          {/* Feature items strip */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "2rem 2.5rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              One platform for all your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {[
                "Manage Digital\nBahi Khata",
                "Send Payment Reminders for\neasy collection",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </span>
                  {i < 1 && (
                    <div
                      className="hidden sm:block"
                      style={{
                        width: "2px",
                        height: "48px",
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

        {/* RIGHT — App mockup image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 relative flex items-end justify-end"
          style={{ minHeight: 640, paddingRight: 0, overflow: "visible" }}
        >
          <Image
            src="/Hero.tsx.png"
            alt="Wenchef app dashboard and mobile interface"
            width={1100}
            height={950}
            priority
            className="w-full h-auto object-contain"
            style={{ maxWidth: "150%", transform: "translate(9%, 5%)" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
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

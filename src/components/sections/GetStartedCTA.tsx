"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

export default function GetStartedCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ paddingTop: "5rem", paddingBottom: "3rem" }} className="bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ position: "relative" }}
        >
          {/* Pink background card — does NOT clip the phone */}
          <div
            style={{
              background: "#FFF0EE",
              borderRadius: "24px",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div className="flex flex-col lg:flex-row items-stretch" style={{ minHeight: "380px" }}>
              {/* LEFT — Content */}
              <div className="w-full lg:w-[42%] px-8 py-12 lg:px-12 lg:py-14 flex flex-col justify-center">
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#111827",
                    letterSpacing: "-0.025em",
                    marginBottom: "2.5rem",
                  }}
                >
                  Get started with
                  <br />
                  Meleket.
                </h2>

                {/* Phone form */}
                <form
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div
                    className="flex"
                    style={{
                      border: "1px solid #D6D6D6",
                      borderRadius: "8px",
                      overflow: "hidden",
                      background: "#FFFFFF",
                      maxWidth: "380px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.875rem 1rem",
                        borderRight: "1px solid #D6D6D6",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "18px", color: "#374151", fontWeight: 500 }}>+251</span>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter your Phone Number"
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
                      padding: "0.875rem 2.25rem",
                      whiteSpace: "nowrap",
                      transition: "background 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
                  >
                    Get Started
                  </button>
                </form>

                {/* Feature bullets — Khatabook style with red divider */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-0">
                  <div className="flex items-start gap-2.5">
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#E53935",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <Check size={12} color="#FFFFFF" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.5 }}>
                      Manage Digital
                      <br />
                      Business Ledger
                    </span>
                  </div>

                  {/* Red divider */}
                  <div
                    className="hidden sm:block"
                    style={{
                      width: "3px",
                      height: "40px",
                      background: "#E53935",
                      borderRadius: "2px",
                      margin: "0 1.5rem",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex items-start gap-2.5">
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#E53935",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <Check size={12} color="#FFFFFF" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.5 }}>
                      Send Payment Reminders for
                      <br />
                      easy collection
                    </span>
                  </div>
                </div>
              </div>

              {/* CENTER — Hand holding phone — overflows top */}
              <div
                className="hidden lg:flex w-[28%] items-end justify-center relative"
                style={{ overflow: "visible" }}
              >
                <Image
                  src="/hand-phone-mockup.png"
                  alt="Hand holding phone showing Meleket app"
                  width={380}
                  height={520}
                  className="object-contain"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    maxHeight: "520px",
                    width: "auto",
                  }}
                />
              </div>

              {/* RIGHT — QR Code + App Store */}
              <div className="w-full lg:w-[30%] flex flex-col items-center justify-center px-8 py-10 lg:py-8">
                {/* QR Code */}
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E5E7EB",
                    marginBottom: "1rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <rect x="10" y="10" width="30" height="30" rx="4" fill="#1F2937" />
                    <rect x="80" y="10" width="30" height="30" rx="4" fill="#1F2937" />
                    <rect x="10" y="80" width="30" height="30" rx="4" fill="#1F2937" />
                    <rect x="16" y="16" width="18" height="18" rx="2" fill="white" />
                    <rect x="86" y="16" width="18" height="18" rx="2" fill="white" />
                    <rect x="16" y="86" width="18" height="18" rx="2" fill="white" />
                    <rect x="21" y="21" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="91" y="21" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="21" y="91" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="50" y="10" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="62" y="10" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="50" y="22" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="50" y="50" width="8" height="8" rx="1" fill="#E53935" />
                    <rect x="62" y="50" width="8" height="8" rx="1" fill="#E53935" />
                    <rect x="50" y="62" width="8" height="8" rx="1" fill="#E53935" />
                    <rect x="56" y="56" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="10" y="50" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="22" y="50" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="10" y="62" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="34" y="62" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="80" y="50" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="80" y="62" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="92" y="50" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="80" y="80" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="92" y="80" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="104" y="80" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="80" y="92" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="104" y="92" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="50" y="80" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="62" y="80" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="50" y="92" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="62" y="104" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="104" y="50" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="62" y="34" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="34" y="34" width="8" height="8" rx="1" fill="#1F2937" />
                    <rect x="104" y="34" width="8" height="8" rx="1" fill="#1F2937" />
                  </svg>
                </div>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#111827",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  Scan to download the app
                </p>

                {/* App Store Badges */}
                <div className="flex flex-col gap-3">
                  <a
                    href="#download"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: "#111827",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "0.625rem 1.5rem",
                      textDecoration: "none",
                      minWidth: "190px",
                      transition: "opacity 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3.18 2.04C3.06 2.16 3 2.34 3 2.58V21.42C3 21.66 3.06 21.84 3.18 21.96L3.24 22.02L13.71 12.06V11.94L3.24 1.98L3.18 2.04Z" fill="url(#gp1b)" />
                      <path d="M17.22 15.54L13.71 12.06V11.94L17.22 8.46L17.28 8.52L21.42 10.86C22.56 11.52 22.56 12.6 21.42 13.2L17.28 15.54H17.22Z" fill="url(#gp2b)" />
                      <path d="M17.28 15.48L13.71 12L3.18 21.96C3.54 22.32 4.08 22.38 4.74 22.02L17.28 15.48Z" fill="url(#gp3b)" />
                      <path d="M17.28 8.52L4.74 1.98C4.08 1.62 3.54 1.68 3.18 2.04L13.71 12L17.28 8.52Z" fill="url(#gp4b)" />
                      <defs>
                        <linearGradient id="gp1b" x1="12.87" y1="2.88" x2="1.38" y2="14.37" gradientUnits="userSpaceOnUse"><stop stopColor="#00A0FF" /><stop offset="1" stopColor="#00E3FF" /></linearGradient>
                        <linearGradient id="gp2b" x1="22.56" y1="12" x2="2.76" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE000" /><stop offset="1" stopColor="#FF9C00" /></linearGradient>
                        <linearGradient id="gp3b" x1="15.48" y1="13.56" x2="0.48" y2="28.56" gradientUnits="userSpaceOnUse"><stop stopColor="#FF3A44" /><stop offset="1" stopColor="#C31162" /></linearGradient>
                        <linearGradient id="gp4b" x1="1.44" y1="-1.68" x2="8.64" y2="5.52" gradientUnits="userSpaceOnUse"><stop stopColor="#32A071" /><stop offset="1" stopColor="#00F076" /></linearGradient>
                      </defs>
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.625rem", opacity: 0.8, lineHeight: 1, marginBottom: "2px" }}>GET IT ON</div>
                      <div style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
                    </div>
                  </a>

                  <a
                    href="#download"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: "#111827",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "0.625rem 1.5rem",
                      textDecoration: "none",
                      minWidth: "190px",
                      transition: "opacity 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.37 4.79 9.34 4.76C10.62 4.74 11.84 5.63 12.63 5.63C13.41 5.63 14.9 4.56 16.46 4.71C17.12 4.74 18.88 4.97 20.01 6.63C19.91 6.69 17.65 7.98 17.68 10.7C17.71 13.95 20.52 14.99 20.55 15C20.52 15.07 20.12 16.48 19.15 17.93C18.35 19.14 17.51 20.34 16.18 20.37L18.71 19.5ZM15.5 2.5C14.78 3.32 13.63 3.95 12.58 3.87C12.43 2.82 12.93 1.72 13.6 0.97C14.34 0.14 15.56 -0.45 16.5 -0.5C16.62 0.6 16.21 1.67 15.5 2.5Z" />
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.625rem", opacity: 0.8, lineHeight: 1, marginBottom: "2px" }}>Download on the</div>
                      <div style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

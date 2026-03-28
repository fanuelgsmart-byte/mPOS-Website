"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AdvertBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #E53935 0%, #C62828 100%)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-custom py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        {/* Left — marquee-style feature highlights */}
        <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {[
              "POS Billing",
              "MoR e-Invoicing",
              "Inventory Management",
              "Staff & Payroll",
              "Amharic & English",
              "Works Offline",
              "Ethiopian Calendar",
              "40+ Reports",
              "Telebirr & CBE Birr",
              "Multi-Warehouse",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.5)",
                    flexShrink: 0,
                  }}
                />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Right — CTA */}
        <a
          href="#features"
          style={{
            background: "#FFFFFF",
            color: "#E53935",
            fontWeight: 700,
            fontSize: "0.8125rem",
            borderRadius: "6px",
            padding: "0.5rem 1.25rem",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "transform 150ms ease, box-shadow 150ms ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Explore All Features
        </a>
      </motion.div>
    </section>
  );
}

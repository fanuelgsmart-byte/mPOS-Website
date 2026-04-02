"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CARDS = [
  {
    image: "/cards/cash-register.png",
    alt: "Cash Register",
    scrollText:
      "Manual calculations \u2022 Paper receipts \u2022 Limited reporting \u2022 No digital records \u2022 Cash-only transactions \u2022 No inventory tracking \u2022 Time-consuming reconciliation \u2022 Error-prone bookkeeping",
  },
  {
    image: "/cards/pos-machine.png",
    alt: "POS Machine",
    scrollText:
      "Card payments \u2022 Barcode scanning \u2022 Basic inventory \u2022 Digital receipts \u2022 Limited business insights \u2022 No accounting integration \u2022 Hardware dependent \u2022 Costly maintenance",
  },
  {
    image: "/cards/peachtree-software.png",
    alt: "Peachtree Accounting Software",
    scrollText:
      "Desktop-only access \u2022 Complex setup \u2022 Manual data entry \u2022 No mobile support \u2022 Expensive licenses \u2022 No real-time sync \u2022 Limited scalability \u2022 Outdated interface",
  },
];

const CODE_LINES = [
  "/* Legacy business systems */",
  "const PROCESS = 'manual';",
  "// Paper ledgers and calculators",
  "function calcTotal(items) {",
  "  let sum = 0;",
  "  for (let i = 0; i < items.length; i++) {",
  "    sum += items[i].price * items[i].qty;",
  "  }",
  "  return sum;",
  "}",
  "// Hours of manual data entry",
  "const TAX = 0.15; // Ethiopian VAT",
  "class OldSystem {",
  "  constructor() {",
  "    this.records = [];",
  "    this.errors = Infinity;",
  "  }",
  "  reconcile() {",
  "    // Manual process, error-prone",
  "    return this.records.filter(",
  "      r => r.valid === true",
  "    );",
  "  }",
  "}",
  "// No real-time insights",
  "// No compliance automation",
  "// No mobile access",
  "function generateReport() {",
  "  // Print and file manually",
  "  return { format: 'paper' };",
  "}",
  "/* Time for transformation */",
  "const FUTURE = 'Meleket';",
  "// All-in-one solution",
  "// MoR compliant e-invoicing",
  "// Real-time business insights",
  "// Works online & offline",
];

export default function BurningCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="burning-cards-section">
      <div className="container-custom">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            From Legacy Systems to{" "}
            <span style={{ color: "#E53935" }}>Meleket</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.0625rem",
              marginTop: "1rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            See what you&apos;re leaving behind when you upgrade to the
            all-in-one platform built for Ethiopian businesses.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="burning-cards-grid"
        >
          {CARDS.map((card, index) => (
            <div
              key={card.alt}
              className="burning-card"
              style={{
                animationDelay: `${index * 3.33}s`,
              }}
            >
              {/* Actual image underneath */}
              <div className="burning-card-image">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                />
              </div>

              {/* Code text overlay — gets burned away */}
              <div
                className="burning-card-overlay"
                style={{
                  animationDelay: `${index * 3.33}s`,
                }}
              >
                <div className="burning-card-code-scroll">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="burning-card-code-line">
                      <span className="burning-card-line-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          line.startsWith("//") || line.startsWith("/*")
                            ? "burning-card-comment"
                            : line.includes("const ") ||
                                line.includes("function ") ||
                                line.includes("class ")
                              ? "burning-card-keyword"
                              : "burning-card-code"
                        }
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {CODE_LINES.map((line, i) => (
                    <div key={`dup-${i}`} className="burning-card-code-line">
                      <span className="burning-card-line-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          line.startsWith("//") || line.startsWith("/*")
                            ? "burning-card-comment"
                            : line.includes("const ") ||
                                line.includes("function ") ||
                                line.includes("class ")
                              ? "burning-card-keyword"
                              : "burning-card-code"
                        }
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Burn line — bright vertical sweep */}
              <div
                className="burning-card-burn-line"
                style={{
                  animationDelay: `${index * 3.33}s`,
                }}
              />

              {/* Ember / spark particles */}
              <div
                className="burning-card-embers"
                style={{ animationDelay: `${index * 3.33}s` }}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="burning-card-ember"
                    style={{
                      top: `${8 + (i * 7) % 80}%`,
                      animationDelay: `${index * 3.33 + (i * 0.15)}s`,
                      animationDuration: `${0.6 + (i % 3) * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Post-burn scrolling text bar */}
              <div
                className="burning-card-textbar"
                style={{
                  animationDelay: `${index * 3.33}s`,
                }}
              >
                <div className="burning-card-textbar-inner">
                  <span>{card.scrollText}</span>
                  <span>{card.scrollText}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

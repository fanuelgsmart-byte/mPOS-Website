"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <AnimatedItem><p className="section-label">Pricing</p></AnimatedItem>
          <AnimatedItem><h2>Simple, transparent pricing in ETB</h2></AnimatedItem>
          <AnimatedItem>
            <p style={{ marginTop: "0.5rem", color: "#6B7280" }}>
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" stagger={0.1}>
          {PRICING_PLANS.map((plan) => (
            <AnimatedItem key={plan.name}>
              <motion.div
                className={plan.highlight ? "" : "card"}
                style={plan.highlight
                  ? { background: "#1A3C8F", borderRadius: "12px", padding: "1.75rem",
                      boxShadow: "0 16px 40px rgba(26,60,143,0.22)", position: "relative" }
                  : { padding: "1.75rem", position: "relative" }
                }
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-white px-3 py-1 rounded-full"
                    style={{ background: "#00C853" }}>
                    Most Popular
                  </span>
                )}

                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem",
                  color: plan.highlight ? "#ffffff" : "#111827" }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: "0.8125rem", marginBottom: "1rem",
                  color: plan.highlight ? "rgba(255,255,255,0.6)" : "#9CA3AF" }}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em",
                    color: plan.highlight ? "#ffffff" : "#111827" }}>
                    {plan.price === "0" ? "Free" : `ETB ${plan.price}`}
                  </span>
                  {plan.price !== "0" && (
                    <span style={{ fontSize: "0.8125rem", marginLeft: "4px",
                      color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9CA3AF" }}>
                      /{plan.period}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2" style={{ fontSize: "0.8125rem" }}>
                      <Check size={14} color={plan.highlight ? "#00C853" : "#00C853"}
                        strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: plan.highlight ? "rgba(255,255,255,0.82)" : "#374151" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#download"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full justify-center"
                  style={{ fontSize: "0.875rem" }}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center mt-8">
          <AnimatedItem>
            <p style={{ fontSize: "0.8125rem", color: "#9CA3AF" }}>
              All plans include MoR e-Invoicing, ETB, Ethiopian Calendar, and Amharic + English.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}

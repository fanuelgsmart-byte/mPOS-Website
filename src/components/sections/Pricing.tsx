"use client";

import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ background: "#F8F9FF" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Simple, transparent pricing in ETB
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            Start free. Upgrade when you&apos;re ready. No hidden fees. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 relative flex flex-col"
              style={
                plan.highlight
                  ? {
                      background: "linear-gradient(135deg, #1A3C8F, #2952B3)",
                      color: "white",
                      transform: "scale(1.05)",
                      boxShadow: "0 20px 60px rgba(26,60,143,0.3)",
                    }
                  : {
                      background: "white",
                      border: "1px solid #EEF2FF",
                      boxShadow: "0 4px 24px rgba(26,60,143,0.06)",
                    }
              }
            >
              {plan.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "#00C853", color: "white" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xl font-black mb-1"
                  style={{ color: plan.highlight ? "white" : "#0F2460" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#94A3B8" }}
                >
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-black"
                    style={{ color: plan.highlight ? "white" : "#0F2460" }}
                  >
                    {plan.price === "0" ? "Free" : `ETB ${plan.price}`}
                  </span>
                  {plan.price !== "0" && (
                    <span
                      className="text-sm mb-1"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#94A3B8" }}
                    >
                      / {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={
                        plan.highlight
                          ? { background: "rgba(0,200,83,0.2)", color: "#00C853" }
                          : { background: "#E8FFF2", color: "#00C853" }
                      }
                    >
                      <Check size={12} />
                    </span>
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "#2D3748" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#download"
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={
                  plan.highlight
                    ? {
                        background: "#00C853",
                        color: "white",
                      }
                    : {
                        background: "#EEF2FF",
                        color: "#1A3C8F",
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#00A846";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#D8E0FF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#00C853";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#EEF2FF";
                  }
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "#94A3B8" }}>
          All plans include MoR e-Invoicing, ETB currency, Ethiopian Calendar, and Amharic + English support.
        </p>
      </div>
    </section>
  );
}

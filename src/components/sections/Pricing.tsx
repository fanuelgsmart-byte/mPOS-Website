"use client";

import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Simple, transparent pricing
          </h2>
          <p className="text-sm mt-3" style={{ color: "#718096" }}>
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.name} className="rounded-2xl p-6 relative flex flex-col"
              style={plan.highlight
                ? { background: "#1A3C8F", boxShadow: "0 12px 40px rgba(26,60,143,0.2)" }
                : { background: "white", border: "1px solid #EDF2F7" }
              }>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: "#00C853" }}>
                  Popular
                </div>
              )}

              <h3 className="text-lg font-bold mb-1" style={{ color: plan.highlight ? "white" : "#1A202C" }}>
                {plan.name}
              </h3>
              <p className="text-xs mb-4" style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#A0AEC0" }}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold" style={{ color: plan.highlight ? "white" : "#1A202C" }}>
                  {plan.price === "0" ? "Free" : `ETB ${plan.price}`}
                </span>
                {plan.price !== "0" && (
                  <span className="text-xs ml-1" style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#A0AEC0" }}>
                    /{plan.period}
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs">
                    <Check size={14} className="flex-shrink-0 mt-0.5"
                      color={plan.highlight ? "#00C853" : "#00C853"} strokeWidth={2.5} />
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.8)" : "#4A5568" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link href="#download"
                className="block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors"
                style={plan.highlight
                  ? { background: "#00C853", color: "white" }
                  : { background: "#F7FAFC", color: "#1A3C8F" }
                }>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

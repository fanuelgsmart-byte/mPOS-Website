"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Frequently asked questions
          </h2>
          <p className="text-lg" style={{ color: "#4A5568" }}>
            Everything you need to know about the platform.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                border: open === i ? "1px solid #D8E0FF" : "1px solid #EEF2FF",
                background: open === i ? "#F8F9FF" : "white",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: "#0F2460" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#1A3C8F",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

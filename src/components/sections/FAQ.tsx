"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #EDF2F7" }}>
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: "#1A202C" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  style={{
                    color: "#A0AEC0",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm leading-relaxed" style={{ color: "#718096" }}>
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

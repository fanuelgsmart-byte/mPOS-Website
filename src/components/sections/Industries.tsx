"use client";

import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Built for every Ethiopian business
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            Whether you run a corner shop in Merkato or a distribution network — this platform is for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="group p-6 rounded-2xl cursor-pointer transition-all duration-200"
              style={{ background: "#F8F9FF", border: "1px solid #EEF2FF" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "#EEF2FF";
                el.style.borderColor = "#D8E0FF";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 8px 30px rgba(26,60,143,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "#F8F9FF";
                el.style.borderColor = "#EEF2FF";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0F2460" }}>
                {industry.label}
              </h3>
              <p className="text-sm" style={{ color: "#4A5568" }}>{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

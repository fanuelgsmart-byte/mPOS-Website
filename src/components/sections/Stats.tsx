"use client";

import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-12" style={{ background: "linear-gradient(135deg, #0F2460, #1A3C8F)" }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

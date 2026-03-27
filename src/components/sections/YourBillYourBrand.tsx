"use client";

import { Palette, Type, Image, Star } from "lucide-react";

const THEMES = [
  { name: "Stylish", accent: "#1A3C8F", bg: "#EEF2FF" },
  { name: "Luxury", accent: "#B8860B", bg: "#FFF8E0" },
  { name: "Advanced", accent: "#00C853", bg: "#E8FFF2" },
  { name: "Classic", accent: "#607D8B", bg: "#F0F4F8" },
];

const CUSTOMIZATIONS = [
  { icon: Palette, title: "Custom Colors", desc: "Match your brand's primary color across all documents" },
  { icon: Type, title: "Your Logo & Details", desc: "Business logo, name, TIN & address on every invoice" },
  { icon: Image, title: "Multiple Themes", desc: "Choose from Stylish, Luxury, Advanced & Classic templates" },
  { icon: Star, title: "Signature & Terms", desc: "Add authorized signatory and custom terms & conditions" },
];

export default function YourBillYourBrand() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Invoice previews */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {THEMES.map((theme, i) => (
                <div
                  key={theme.name}
                  className="rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px solid #E2E8F0",
                    boxShadow: i === 0 ? "0 8px 30px rgba(26,60,143,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Invoice mockup */}
                  <div className="p-3" style={{ background: theme.bg }}>
                    {/* Header bar */}
                    <div className="h-2 w-16 rounded-full mb-2" style={{ background: theme.accent }} />
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="h-1.5 w-20 rounded-full mb-1" style={{ background: theme.accent, opacity: 0.6 }} />
                        <div className="h-1 w-14 rounded-full" style={{ background: "#CBD5E0" }} />
                      </div>
                      <div className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ background: theme.accent, color: "white" }}>
                        INVOICE
                      </div>
                    </div>

                    {/* Table mockup */}
                    <div className="space-y-1 mb-3">
                      <div className="h-1 rounded-full" style={{ background: theme.accent, opacity: 0.15 }} />
                      <div className="flex gap-1">
                        <div className="h-1 flex-[3] rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                      </div>
                      <div className="flex gap-1">
                        <div className="h-1 flex-[3] rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                      </div>
                      <div className="flex gap-1">
                        <div className="h-1 flex-[3] rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                        <div className="h-1 flex-1 rounded-full" style={{ background: "#E2E8F0" }} />
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center pt-2" style={{ borderTop: `1px solid ${theme.accent}30` }}>
                      <div className="h-1 w-8 rounded-full" style={{ background: "#CBD5E0" }} />
                      <div className="h-1.5 w-12 rounded-full" style={{ background: theme.accent }} />
                    </div>

                    {/* QR code mockup */}
                    <div className="mt-2 flex justify-end">
                      <div className="w-6 h-6 rounded grid grid-cols-3 grid-rows-3 gap-px p-px" style={{ background: "#E2E8F0" }}>
                        {Array.from({ length: 9 }).map((_, j) => (
                          <div key={j} className="rounded-[1px]" style={{ background: j % 2 === 0 ? "#4A5568" : "#E2E8F0" }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Theme label */}
                  <div className="px-3 py-2 text-center" style={{ background: "white" }}>
                    <p className="text-[10px] font-semibold" style={{ color: theme.accent }}>{theme.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
              Customization
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4" style={{ color: "#1A202C" }}>
              Your bill, your brand
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#718096" }}>
              Create professional invoices that represent your business. Choose from multiple
              themes, add your logo, customize colors, and include your TIN for MoR compliance —
              all with automatic IRN and QR code on every invoice.
            </p>

            <div className="flex flex-col gap-5">
              {CUSTOMIZATIONS.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#EEF2FF" }}>
                      <Icon size={18} color="#1A3C8F" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5" style={{ color: "#1A202C" }}>{c.title}</h3>
                      <p className="text-xs" style={{ color: "#718096" }}>{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

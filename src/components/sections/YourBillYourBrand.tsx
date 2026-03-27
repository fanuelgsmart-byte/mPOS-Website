"use client";

import { motion } from "framer-motion";
import { Palette, Type, Image, Star } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const THEMES = [
  { name: "Stylish",   accent: "#1A3C8F", bg: "#EEF2FF" },
  { name: "Luxury",    accent: "#92400E", bg: "#FFFBEB" },
  { name: "Advanced",  accent: "#00C853", bg: "#ECFDF5" },
  { name: "Classic",   accent: "#374151", bg: "#F9FAFB" },
];

const POINTS = [
  { icon: Palette, title: "Custom Colors",     desc: "Match your brand's color across all documents" },
  { icon: Type,    title: "Logo & Details",    desc: "Business logo, name, TIN & address on every invoice" },
  { icon: Image,   title: "Multiple Themes",   desc: "Choose from Stylish, Luxury, Advanced & Classic" },
  { icon: Star,    title: "Signature & Terms", desc: "Authorized signatory and custom T&Cs on every doc" },
];

export default function YourBillYourBrand() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — invoice previews */}
          <AnimatedSection direction="left">
            <AnimatedItem>
              <div className="grid grid-cols-2 gap-4">
                {THEMES.map((theme, i) => (
                  <motion.div
                    key={theme.name}
                    className="rounded-xl overflow-hidden cursor-pointer"
                    style={{ border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // @ts-expect-error framer-motion transition prop
                    transition_={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className="p-3" style={{ background: theme.bg }}>
                      <div className="h-2 w-14 rounded-full mb-2" style={{ background: theme.accent }} />
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="h-1.5 w-16 rounded mb-1" style={{ background: theme.accent, opacity: 0.5 }} />
                          <div className="h-1 w-10 rounded" style={{ background: "#D1D5DB" }} />
                        </div>
                        <span className="text-[7px] font-bold px-1.5 py-0.5 rounded"
                          style={{ background: theme.accent, color: "white" }}>INVOICE</span>
                      </div>
                      {[1,2,3].map(r => (
                        <div key={r} className="flex gap-1 mb-1">
                          <div className="h-1 rounded flex-[3]" style={{ background: "#D1D5DB" }} />
                          <div className="h-1 rounded flex-1" style={{ background: "#D1D5DB" }} />
                          <div className="h-1 rounded flex-1" style={{ background: "#D1D5DB" }} />
                        </div>
                      ))}
                      <div className="flex justify-between items-center mt-2 pt-2"
                        style={{ borderTop: `1px solid ${theme.accent}30` }}>
                        <div className="h-1 w-6 rounded" style={{ background: "#D1D5DB" }} />
                        <div className="h-1.5 w-10 rounded" style={{ background: theme.accent }} />
                      </div>
                    </div>
                    <div className="px-3 py-2 text-center bg-white">
                      <p style={{ fontSize: "10px", fontWeight: 600, color: theme.accent }}>{theme.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right — content */}
          <AnimatedSection direction="right">
            <AnimatedItem>
              <p className="section-label">Customization</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mb-4">Your bill, your brand</h2>
            </AnimatedItem>
            <AnimatedItem>
              <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
                Create professional invoices that represent your business. Multiple themes, your logo,
                custom colors, and TIN for MoR compliance — with automatic IRN and QR code on every invoice.
              </p>
            </AnimatedItem>
            <AnimatedSection className="flex flex-col gap-4" stagger={0.07} direction="right">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <AnimatedItem key={p.title}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#EEF2FF" }}>
                        <Icon size={16} color="#1A3C8F" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 style={{ marginBottom: "2px" }}>{p.title}</h4>
                        <p style={{ fontSize: "0.8125rem", color: "#6B7280" }}>{p.desc}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                );
              })}
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

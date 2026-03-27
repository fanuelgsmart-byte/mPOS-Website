"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: "#F3F4F6" }}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <AnimatedItem><p className="section-label">Testimonials</p></AnimatedItem>
          <AnimatedItem><h2>Trusted by Ethiopian businesses</h2></AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto" stagger={0.1}>
          {TESTIMONIALS.map((t) => (
            <AnimatedItem key={t.name}>
              <motion.div
                className="card p-6"
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#374151", fontStyle: "italic",
                  lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `hsl(${t.avatar.charCodeAt(0) * 18}, 55%, 42%)` }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111827" }}>{t.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                      {t.business} · {t.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

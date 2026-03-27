"use client";

import { Download, Settings, Zap } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const STEPS = [
  { num: "01", icon: Download, title: "Download & Sign Up",    desc: "Get the app on Google Play. Sign up with your phone number in 30 seconds.", color: "#1A3C8F" },
  { num: "02", icon: Settings, title: "Set Up Your Business",  desc: "Add items, parties, warehouses. Configure VAT/TOT and e-invoicing.",        color: "#00C853" },
  { num: "03", icon: Zap,      title: "Start Billing",         desc: "Create invoices, accept payments. Z-Report sends to MoR automatically.",    color: "#F59E0B" },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <AnimatedItem><p className="section-label">Getting Started</p></AnimatedItem>
          <AnimatedItem><h2>Up and running in 3 steps</h2></AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto" stagger={0.12}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <AnimatedItem key={step.num}>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${step.color}12` }}>
                    <Icon size={24} color={step.color} strokeWidth={1.75} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: step.color }}>
                      {step.num.slice(1)}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>{step.desc}</p>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

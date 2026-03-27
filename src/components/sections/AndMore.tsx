"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const ALL_FEATURES = [
  "Multi-warehouse stock transfers",
  "Barcode label printing (2″ & 3″)",
  "Quotation & proforma invoices",
  "Credit notes & debit notes",
  "Purchase returns & sales returns",
  "Party-wise price overrides",
  "Serial & IMEI number tracking",
  "Custom invoice themes & colors",
  "Role-based access (5 user roles)",
  "Bulk item import (CSV/XLSX)",
  "Ethiopian calendar support",
  "Amharic & English bilingual",
  "Expense tracking & categories",
  "Payment reminders via SMS",
  "Full audit log for all actions",
  "Year-end financial close wizard",
];

export default function AndMore() {
  return (
    <section className="section-padding" style={{ background: "#F3F4F6" }}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12" direction="up">
          <AnimatedItem>
            <p className="section-label">And That&apos;s Not All</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2>Everything else you need, built in</h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection
          className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-1"
          stagger={0.04}
        >
          {ALL_FEATURES.map((feat) => (
            <AnimatedItem key={feat}>
              <motion.div
                className="flex items-center gap-3 py-2.5"
                style={{ borderBottom: "1px solid #E5E7EB" }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#ECFDF5" }}>
                  <Check size={11} color="#00C853" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151" }}>{feat}</span>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import {
  FileText, ShoppingCart, Package, Truck, Users, BarChart2,
  Wallet, RefreshCw, MessageSquare, Calculator, Shield, Smartphone,
} from "lucide-react";

const FEATURES = [
  { icon: FileText,      title: "Billing & Invoicing",        desc: "Professional invoices with IRN & QR code",             color: "#1A3C8F" },
  { icon: ShoppingCart,  title: "POS Billing",                 desc: "Fast counter sales with barcode scanning",              color: "#00C853" },
  { icon: Package,       title: "Inventory Management",        desc: "Multi-warehouse stock with FIFO/LIFO costing",          color: "#FF6B35" },
  { icon: Truck,         title: "Purchase Management",         desc: "Manage suppliers, orders & settlements",                color: "#6C63FF" },
  { icon: Users,         title: "Staff & Payroll",             desc: "Attendance, salary calculation & payslips",             color: "#E91E63" },
  { icon: BarChart2,     title: "40+ Reports",                 desc: "Sales, stock, tax & payroll — PDF or Excel",           color: "#F59E0B" },
  { icon: Wallet,        title: "Cash & Bank",                 desc: "Track all money movement across accounts",              color: "#0EA5E9" },
  { icon: RefreshCw,     title: "Automated Bills",             desc: "Recurring invoices for regular customers",             color: "#10B981" },
  { icon: MessageSquare, title: "SMS Marketing",               desc: "Promotional campaigns & payment reminders",             color: "#F97316" },
  { icon: Calculator,    title: "VAT & TOT",                   desc: "Ethiopian tax calculations, automatic",                 color: "#8B5CF6" },
  { icon: Shield,        title: "MoR e-Invoicing",             desc: "IRN, QR codes & daily Z-Report to MoR",                color: "#14B8A6" },
  { icon: Smartphone,    title: "Works Everywhere",            desc: "Phone, tablet & desktop — online or offline",          color: "#64748B" },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14" direction="up">
          <AnimatedItem>
            <p className="section-label">Powerful Features</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2>Powerful features to help you<br className="hidden md:block" /> manage your business effortlessly</h2>
          </AnimatedItem>
          <AnimatedItem>
            <p style={{ marginTop: "0.75rem", color: "#6B7280", maxWidth: "30rem", margin: "0.75rem auto 0" }}>
              Every tool you need, in one place. No switching apps. No manual work.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
          stagger={0.05}
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <AnimatedItem key={f.title}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${f.color}14` }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Icon size={22} color={f.color} strokeWidth={1.75} />
                  </motion.div>
                  <h4 style={{ fontSize: "0.875rem", marginBottom: "0.35rem" }}>{f.title}</h4>
                  <p style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.55 }}>{f.desc}</p>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

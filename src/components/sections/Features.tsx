"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { FEATURES } from "@/lib/constants";
import {
  ShoppingCart,
  FileText,
  Package,
  Truck,
  Users,
  BarChart2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  ShoppingCart,
  FileText,
  Package,
  Truck,
  Users,
  BarChart2,
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label">Features</p>
          <h2>Powerful Features to Help You</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Everything you need to manage your business — billing, inventory, payroll,
            and compliance — in one platform.
          </p>
        </motion.div>

        {/* Feature Grid - 3x2 like Khatabook */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="card p-6 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}10` }}
                >
                  {Icon && <Icon size={22} color={feature.color} />}
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

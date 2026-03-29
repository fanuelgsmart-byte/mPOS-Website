"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { TOP_BENEFITS } from "@/lib/constants";
import {
  ShoppingCart,
  BarChart2,
  Wallet,
  Wifi,
  CreditCard,
  Shield,
  Award,
  Package,
} from "lucide-react";
import Image from "next/image";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  ShoppingCart,
  BarChart2,
  Wallet,
  Wifi,
  CreditCard,
  Shield,
  Award,
  Package,
};

const leftBenefits = TOP_BENEFITS.slice(0, 4);
const rightBenefits = TOP_BENEFITS.slice(4, 8);

function BenefitCard({
  benefit,
  align,
}: {
  benefit: (typeof TOP_BENEFITS)[number];
  align: "left" | "right";
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = ICON_MAP[benefit.icon];
  const isRight = align === "right";

  return (
    <div
      className={`flex gap-4 ${isRight ? "flex-row-reverse text-right" : "flex-row text-left"}`}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-1"
        style={{ background: `${benefit.color}15` }}
      >
        {Icon && <Icon size={20} color={benefit.color} />}
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-gray-800 mb-2">
          {benefit.title}
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
          {expanded ? benefit.fullText : benefit.shortText}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium border-none bg-transparent cursor-pointer"
          style={{ color: "#EF4444" }}
        >
          {expanded ? "- Read less" : "+ Read more"}
        </button>
      </div>
    </div>
  );
}

export default function AndMore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2>Top 8 Benefits of Meleket Billing Software</h2>
        </motion.div>

        {/* Mobile: center image */}
        <div className="flex justify-center mb-10 lg:hidden">
          <Image
            src="/benefits_of_gst_billing_and_invoicing_software.webp"
            alt="Meleket Billing App"
            width={280}
            height={380}
            className="object-contain"
          />
        </div>

        {/* 3-column layout */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-start"
        >
          {/* Left column - benefits 1-4, right-aligned text */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex-1 flex flex-col gap-8"
          >
            {leftBenefits.map((b) => (
              <motion.div key={b.id} variants={fadeUp}>
                <BenefitCard benefit={b} align="right" />
              </motion.div>
            ))}
          </motion.div>

          {/* Center column - phone image (desktop only) */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center self-center"
               style={{ width: 350 }}>
            <Image
              src="/benefits_of_gst_billing_and_invoicing_software.webp"
              alt="Meleket Billing App"
              width={350}
              height={470}
              className="object-contain"
            />
          </div>

          {/* Right column - benefits 5-8, left-aligned text */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex-1 flex flex-col gap-8"
          >
            {rightBenefits.map((b) => (
              <motion.div key={b.id} variants={fadeUp}>
                <BenefitCard benefit={b} align="left" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

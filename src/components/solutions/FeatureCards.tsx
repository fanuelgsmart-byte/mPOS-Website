"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface FeatureCard {
  icon: string;
  iconBg?: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface FeatureCardsProps {
  title: string;
  cards: FeatureCard[];
  accentColor: string;
  columns?: 2 | 3;
}

function Card({ card, accent, index }: { card: FeatureCard; accent: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "1.75rem",
        border: "1px solid #E5E7EB",
        transition: "box-shadow 200ms ease, transform 200ms ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${accent}18`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: card.iconBg ?? `${accent}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.625rem",
          marginBottom: "1.125rem",
          transition: "transform 180ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {card.icon}
      </div>

      <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem", lineHeight: 1.3 }}>
        {card.title}
      </h3>

      <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, marginBottom: card.bullets?.length ? "1rem" : 0 }}>
        {card.description}
      </p>

      {card.bullets && card.bullets.length > 0 && (
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {card.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ color: "#059669", fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
              <span style={{ fontSize: "0.8375rem", color: "#374151", lineHeight: 1.5 }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function FeatureCards({ title, cards, accentColor, columns = 2 }: FeatureCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#fff", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${columns === 3 ? "280px" : "340px"}, 1fr))`,
            gap: "1.25rem",
          }}
        >
          {cards.map((card, i) => (
            <Card key={i} card={card} accent={accentColor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
  Calculator,
  Package,
  Receipt,
  Users,
  Smartphone,
} from "lucide-react";

const CATEGORY_ICON: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Compliance: ShieldCheck,
  "Tax Guide": Calculator,
  Inventory: Package,
  "Billing Tips": Receipt,
  Payroll: Users,
  Growth: Smartphone,
};

export default function OurBlogs() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const total = BLOG_POSTS.length;
  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  const post = BLOG_POSTS[current];
  const Icon = CATEGORY_ICON[post.category] ?? FileText;

  return (
    <section ref={ref} className="section-padding" style={{ background: "#fff" }}>
      <div className="container-custom">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "3rem",
          }}
        >
          Our Blogs
        </motion.h2>

        {/* Carousel area with arrows */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous blog"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#F6F7F9",
              border: "1px solid #F6F7F9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current === 0 ? "default" : "pointer",
              opacity: current === 0 ? 0.5 : 1,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={22} color="#DC343B" strokeWidth={2} />
          </button>

          {/* Card */}
          <div style={{ flex: 1, overflow: "hidden", borderRadius: "16px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="blog-card-row"
                style={{
                  display: "flex",
                  background: current % 2 === 0 ? "#FFFFFF" : "#FAFBFC",
                  borderRadius: "16px",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #F3F4F6",
                  overflow: "hidden",
                  minHeight: "200px",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="blog-thumb-area"
                  style={{
                    flexShrink: 0,
                    width: "55%",
                    minHeight: "200px",
                    background: `linear-gradient(135deg, ${post.thumbnail} 0%, ${post.thumbnail}CC 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-30px",
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "-20px",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                  <div style={{ textAlign: "center", zIndex: 1 }}>
                    {/* @ts-expect-error strokeWidth valid on lucide icons */}
                    <Icon size={48} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
                    <p
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginTop: "0.75rem",
                        maxWidth: "200px",
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title}
                    </p>
                  </div>
                </div>

                {/* Text content */}
                <div
                  style={{
                    padding: "2rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  {/* Category tag — bordered pill like Khatabook */}
                  <span
                    style={{
                      display: "inline-block",
                      border: "1px solid #E5E7EB",
                      color: "#374151",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "4px",
                      width: "fit-content",
                      marginBottom: "1rem",
                      background: "#F9FAFB",
                    }}
                  >
                    {post.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.7 }}>
                    {post.summary.length > 140 ? post.summary.slice(0, 140) + "..." : post.summary}
                    <span
                      style={{
                        color: "#2563EB",
                        fontWeight: 600,
                        cursor: "pointer",
                        marginLeft: "0.25rem",
                      }}
                    >
                      Read More
                    </span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next blog"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#F6F7F9",
              border: "1px solid #F6F7F9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current === total - 1 ? "default" : "pointer",
              opacity: current === total - 1 ? 0.5 : 1,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          >
            <ChevronRight size={22} color="#DC343B" strokeWidth={2} />
          </button>
        </motion.div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.4rem",
            marginTop: "2rem",
          }}
        >
          {BLOG_POSTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to blog ${i + 1}`}
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: i === current ? "#DC343B" : "#D1D5DB",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* View All Articles button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ textAlign: "center", marginTop: "2.5rem" }}
        >
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "0.875rem 2.5rem",
              background: "#DC343B",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#B91C1C")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#DC343B")}
          >
            View All Articles
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .blog-card-row { flex-direction: row; }
        .blog-thumb-area { width: 55%; min-height: 200px; }
        @media (max-width: 640px) {
          .blog-card-row { flex-direction: column !important; }
          .blog-thumb-area { width: 100% !important; min-height: 160px !important; }
        }
      `}</style>
    </section>
  );
}

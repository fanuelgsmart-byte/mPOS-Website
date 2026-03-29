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

/* ── icon per category ────────────────────────────────── */
const CATEGORY_ICON: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Compliance: ShieldCheck,
  "Tax Guide": Calculator,
  Inventory: Package,
  "Billing Tips": Receipt,
  Payroll: Users,
  Growth: Smartphone,
};

/* ── how many cards visible at once per breakpoint ────── */
const CARDS_PER_VIEW = 1; // mobile-first; desktop handled via CSS grid

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
        {/* ── Heading ───────────────────────────────────── */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            textAlign: "center",
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "2.5rem",
          }}
        >
          Our Blogs
        </motion.h2>

        {/* ── Carousel wrapper ─────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ position: "relative" }}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous blog"
            style={{
              position: "absolute",
              left: "-1.25rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: current === 0 ? "#E5E7EB" : "#F3F4F6",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current === 0 ? "not-allowed" : "pointer",
              opacity: current === 0 ? 0.4 : 1,
              transition: "opacity 0.2s, background 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <ChevronLeft size={22} color="#E53935" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next blog"
            style={{
              position: "absolute",
              right: "-1.25rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: current === total - 1 ? "#E5E7EB" : "#F3F4F6",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current === total - 1 ? "not-allowed" : "pointer",
              opacity: current === total - 1 ? 0.4 : 1,
              transition: "opacity 0.2s, background 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <ChevronRight size={22} color="#E53935" />
          </button>

          {/* Card (animated) */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "1rem",
              minHeight: 220,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  background: current % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                  borderRadius: "1rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
                className="blog-card-flex"
              >
                {/* Thumbnail placeholder */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 260,
                    minHeight: 200,
                    background: post.thumbnail,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="blog-thumb"
                >
                  <Icon size={56} color="rgba(255,255,255,0.85)" />
                </div>

                {/* Text content */}
                <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                  {/* Category badge */}
                  <span
                    style={{
                      display: "inline-block",
                      background: post.thumbnail + "1A", // 10 % opacity hex suffix
                      color: post.thumbnail,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      width: "fit-content",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {post.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "0.5rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {post.summary}
                  </p>

                  <a
                    href="#"
                    style={{
                      color: "#E53935",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    Read More <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Dot indicators ────────────────────────── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {BLOG_POSTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to blog ${i + 1}`}
                style={{
                  width: i === current ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: "none",
                  background: i === current ? "#E53935" : "#D1D5DB",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* ── View All Articles button ─────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.25rem",
              background: "#E53935",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
          >
            View All Articles
          </a>
        </motion.div>
      </div>

      {/* ── Responsive styles ──────────────────────────── */}
      <style jsx global>{`
        .blog-card-flex {
          flex-direction: row;
        }
        .blog-thumb {
          width: 260px;
          min-height: 200px;
        }
        @media (max-width: 640px) {
          .blog-card-flex {
            flex-direction: column !important;
          }
          .blog-thumb {
            width: 100% !important;
            min-height: 160px !important;
          }
        }
      `}</style>
    </section>
  );
}

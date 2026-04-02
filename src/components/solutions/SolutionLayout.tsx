"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowUp, Download } from "lucide-react";

// ─── Sticky Download Bar ──────────────────────────────────────────────────────
function StickyDownloadBar({ ctaLabel }: { ctaLabel: string }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "#E53935",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "0.75rem 1rem",
        boxShadow: "0 -2px 12px rgba(229,57,53,0.35)",
      }}
    >
      <span style={{ color: "#fff", fontSize: "0.9375rem", fontWeight: 600 }}>
        {ctaLabel}
      </span>
      <a
        href="#get-started"
        style={{
          background: "#fff",
          color: "#E53935",
          fontWeight: 700,
          fontSize: "0.875rem",
          padding: "0.45rem 1.25rem",
          borderRadius: "999px",
          textDecoration: "none",
          transition: "opacity 150ms ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Download Free
      </a>
    </div>
  );
}

// ─── Floating Buttons (Live Chat + Scroll to Top) ─────────────────────────────
function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "4.5rem",
        right: "1.25rem",
        zIndex: 39,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              border: "1.5px solid #E5E7EB",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "box-shadow 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} color="#4B5563" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Live chat */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setChatOpen((v) => !v)}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "#E53935",
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(229,57,53,0.4)",
            transition: "box-shadow 150ms ease, transform 150ms ease",
            gap: "1px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(229,57,53,0.5)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(229,57,53,0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          aria-label="Live chat"
        >
          <MessageCircle size={20} color="#fff" />
          <span style={{ fontSize: "0.5rem", color: "#fff", fontWeight: 700, letterSpacing: "0.06em" }}>LIVE</span>
        </button>

        {/* Chat popup */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 12px)",
                right: 0,
                width: "260px",
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
              }}
            >
              <div style={{ background: "#E53935", padding: "0.875rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>Chat with Meleket</span>
                <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 0 }}><X size={16} /></button>
              </div>
              <div style={{ padding: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#4B5563", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                  Hi! How can we help you today? Our team typically replies within minutes.
                </p>
                <a
                  href="tel:+251911000000"
                  style={{ display: "block", background: "#E53935", color: "#fff", textAlign: "center", fontWeight: 600, fontSize: "0.875rem", padding: "0.625rem", borderRadius: "8px", textDecoration: "none" }}
                >
                  Call +251 911 000 000
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Scroll-Triggered Modal ───────────────────────────────────────────────────
function ScrollModal() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [phone, setPhone] = useState("");

  const handleScroll = useCallback(() => {
    if (dismissed) return;
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrolled > 0.35) {
      setVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [dismissed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 60 }}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 61,
              background: "#fff",
              borderRadius: "20px",
              padding: "2.5rem",
              width: "min(480px, calc(100vw - 2rem))",
              boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
            }}
          >
            <button
              onClick={dismiss}
              style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "4px" }}
            >
              <X size={20} />
            </button>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>👋</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "0.5rem" }}>
                Still Exploring? Let Meleket Help
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.6 }}>
                Talk to one of our business software experts — free, no commitment.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div style={{ display: "flex", flex: 1, border: "1.5px solid #E5E7EB", borderRadius: "10px", overflow: "hidden", background: "#FAFAFA" }}>
                <span style={{ padding: "0 0.875rem", display: "flex", alignItems: "center", borderRight: "1px solid #E5E7EB", fontSize: "0.9rem", color: "#374151", fontWeight: 500, flexShrink: 0 }}>
                  +251
                </span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ flex: 1, border: "none", outline: "none", padding: "0.75rem", fontSize: "0.9rem", background: "transparent", color: "#111827" }}
                />
              </div>
              <button
                onClick={dismiss}
                style={{ background: "#E53935", color: "#fff", fontWeight: 700, fontSize: "0.875rem", border: "none", borderRadius: "10px", cursor: "pointer", padding: "0.75rem 1.25rem", whiteSpace: "nowrap", transition: "opacity 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Talk to Expert
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Layout ──────────────────────────────────────────────────────────────
export default function SolutionLayout({
  children,
  downloadBarLabel = "Get Meleket Free — Complete Business Management for Ethiopian Businesses",
}: {
  children: React.ReactNode;
  downloadBarLabel?: string;
}) {
  return (
    <>
      {/* Page content */}
      <div style={{ paddingBottom: "3.5rem" }}>{children}</div>

      {/* Fixed overlays */}
      <StickyDownloadBar ctaLabel={downloadBarLabel} />
      <FloatingButtons />
      <ScrollModal />
    </>
  );
}

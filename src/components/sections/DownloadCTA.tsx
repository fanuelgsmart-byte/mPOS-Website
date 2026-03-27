"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const TRUST = ["Free to start", "MoR e-Invoice certified", "INSA compliant", "Ethiopian Calendar"];

export default function DownloadCTA() {
  return (
    <section id="download" className="section-padding" style={{ background: "#111827" }}>
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <AnimatedItem>
            <h2 style={{ color: "#ffffff", marginBottom: "1rem" }}>
              Ready to grow your Ethiopian business?
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem", fontSize: "1.0625rem" }}>
              Join 5,000+ businesses. Free to start — no credit card required.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button href="#" variant="primary">
                Start For Free
                <ArrowRight size={16} />
              </Button>
              <Button href="#" variant="outline-white">
                Download App
              </Button>
            </div>
          </AnimatedItem>

          {/* App badges */}
          <AnimatedItem>
            <div className="flex items-center gap-3 justify-center mb-8">
              {["google", "apple"].map((store) => (
                <motion.div
                  key={store}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                  whileHover={{ borderColor: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span style={{ color: "white", fontSize: "12px" }}>{store === "google" ? "▶" : ""}</span>
                  <div>
                    <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {store === "google" ? "Get it on" : "Download on the"}
                    </p>
                    <p style={{ fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>
                      {store === "google" ? "Google Play" : "App Store"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedItem>

          {/* Trust chips */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2" stagger={0.05}>
            {TRUST.map((item) => (
              <AnimatedItem key={item}>
                <span style={{ fontSize: "0.75rem", fontWeight: 500, padding: "5px 12px",
                  borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)" }}>
                  ✓ {item}
                </span>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}

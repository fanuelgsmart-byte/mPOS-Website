"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const TRUST = ["Free to start", "MoR e-Invoice certified", "INSA compliant", "Ethiopian Calendar"];

export default function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="download" ref={ref} className="section-padding" style={{ background: "#111827" }}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to Grow Your Business?
          </motion.h2>

          <motion.p variants={fadeUp} style={{ color: "rgba(255,255,255,0.5)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            Join 5,000+ Ethiopian businesses. Free to start — no credit card required.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button href="#" variant="primary">
              Start For Free <ArrowRight size={16} />
            </Button>
            <Button href="#" variant="outline-white">
              Download App
            </Button>
          </motion.div>

          {/* App Badges */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center mb-8">
            {["google", "apple"].map((store) => (
              <div
                key={store}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-pointer transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <span style={{ color: "white", fontSize: "12px" }}>{store === "google" ? "▶" : ""}</span>
                <div>
                  <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {store === "google" ? "Get it on" : "Download on the"}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#FFFFFF" }}>
                    {store === "google" ? "Google Play" : "App Store"}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust Chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {TRUST.map((item) => (
              <span
                key={item}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
              >
                ✓ {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

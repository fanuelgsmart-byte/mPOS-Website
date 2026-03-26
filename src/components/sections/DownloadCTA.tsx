import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #00A846 0%, #00C853 50%, #00D863 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
          style={{ background: "white", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15"
          style={{ background: "white", filter: "blur(50px)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl"
            style={{ background: "rgba(255,255,255,0.2)" }}>
            🚀
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to grow your
            <br />
            Ethiopian business?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            Join 5,000+ businesses already using Meleket.
            Start free today — no credit card required.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "white", color: "#00A846" }}
            >
              Start For Free
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              Download App
            </Link>
          </div>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DownloadBadge store="google" />
            <DownloadBadge store="apple" />
          </div>

          {/* Compliance strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "✓ Free to start",
              "✓ MoR e-Invoice certified",
              "✓ INSA compliant",
              "✓ Ethiopian Calendar built-in",
            ].map((item) => (
              <span
                key={item}
                className="text-sm font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadBadge({ store }: { store: "google" | "apple" }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
    >
      <span className="text-2xl">{store === "google" ? "▶" : ""}</span>
      <div className="text-left">
        <p className="text-white/70 text-[10px]">{store === "google" ? "Get it on" : "Download on the"}</p>
        <p className="text-white font-bold text-sm">{store === "google" ? "Google Play" : "App Store"}</p>
      </div>
    </div>
  );
}

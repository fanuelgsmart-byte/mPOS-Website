import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="section-padding" style={{ background: "#1A3C8F" }}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to grow your business?
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
          Join 5,000+ Ethiopian businesses. Start free — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="#" className="btn-primary text-base px-8 py-3.5">
            Start For Free
            <ArrowRight size={18} />
          </Link>
          <Link href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base text-white transition-colors"
            style={{ border: "2px solid rgba(255,255,255,0.25)" }}>
            Download App
          </Link>
        </div>

        {/* App badges */}
        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-white text-sm">▶</span>
            <div className="text-left">
              <p className="text-white/50 text-[9px]">GET IT ON</p>
              <p className="text-white text-xs font-semibold">Google Play</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-white text-sm"></span>
            <div className="text-left">
              <p className="text-white/50 text-[9px]">Download on the</p>
              <p className="text-white text-xs font-semibold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

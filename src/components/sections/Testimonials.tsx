import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Loved by Ethiopian businesses
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            From Addis Ababa to Hawassa — real businesses, real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{ borderLeft: "4px solid #1A3C8F" }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#FFD600" color="#FFD600" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#2D3748" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{
                    background: `hsl(${t.avatar.charCodeAt(0) * 20}, 60%, 45%)`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0F2460" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#4A5568" }}>
                    {t.business} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          {[
            { label: "4.8 / 5", sublabel: "Google Play Rating", icon: "⭐" },
            { label: "5,000+", sublabel: "Active Businesses", icon: "🏪" },
            { label: "MoR Certified", sublabel: "e-Invoice Ready", icon: "✅" },
            { label: "INSA Compliant", sublabel: "Security Standards", icon: "🔒" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: "#F8F9FF", border: "1px solid #EEF2FF" }}
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className="font-black text-sm" style={{ color: "#0F2460" }}>{badge.label}</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>{badge.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: "#F7FAFC" }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Trusted by Ethiopian businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6" style={{ border: "1px solid #EDF2F7" }}>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#FFD600" color="#FFD600" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#4A5568" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `hsl(${t.avatar.charCodeAt(0) * 20}, 55%, 45%)` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#1A202C" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#A0AEC0" }}>{t.business} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

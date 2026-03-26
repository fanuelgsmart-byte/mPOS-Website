"use client";

const DIFFS = [
  {
    icon: "📅",
    title: "Ethiopian Calendar",
    description: "Full Ethiopian calendar support throughout the platform. Gregorian display available optionally.",
    color: "#1A3C8F",
    bg: "#EEF2FF",
  },
  {
    icon: "🇪🇹",
    title: "Amharic + English",
    description: "Fully bilingual — switch between Amharic and English at any time without affecting your data.",
    color: "#00C853",
    bg: "#E8FFF2",
  },
  {
    icon: "💰",
    title: "ETB Currency",
    description: "All amounts, balances, reports and documents are in Ethiopian Birr. No currency conversion needed.",
    color: "#FFB300",
    bg: "#FFF8E0",
  },
  {
    icon: "🧾",
    title: "MoR e-Invoicing",
    description: "Every invoice gets an IRN and QR code automatically. Daily Z-Report sent to the Ministry of Revenue.",
    color: "#E91E63",
    bg: "#FFEEF4",
  },
  {
    icon: "📋",
    title: "VAT & TOT Support",
    description: "Full support for Ethiopian VAT and TOT tax types. No GST — built specifically for Ethiopia's tax system.",
    color: "#6C63FF",
    bg: "#F0EEFF",
  },
  {
    icon: "🔒",
    title: "INSA Compliance",
    description: "Built to meet INSA security standards. Your business data is protected at the highest level.",
    color: "#FF6B35",
    bg: "#FFF3EE",
  },
];

export default function EthiopianDifferentiators() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #0F2460 0%, #1A3C8F 100%)" }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,200,83,0.15)", color: "#00C853", border: "1px solid rgba(0,200,83,0.3)" }}
          >
            🇪🇹 Made for Ethiopia
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Purpose-built for Ethiopian businesses
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Not a localized Indian app. Not a generic tool. Built from the ground up
            for the Ethiopian market, regulatory environment, and business culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFS.map((diff) => (
            <div
              key={diff.title}
              className="rounded-2xl p-6 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
                style={{ background: diff.bg }}
              >
                {diff.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{diff.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

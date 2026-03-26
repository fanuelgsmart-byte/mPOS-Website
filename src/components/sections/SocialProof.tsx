export default function SocialProof() {
  const PARTNERS = [
    { name: "Telebirr", icon: "📱" },
    { name: "CBE Birr", icon: "🏦" },
    { name: "Awash Bank", icon: "🏦" },
    { name: "MoR Ethiopia", icon: "🏛️" },
    { name: "INSA", icon: "🔒" },
    { name: "Google Play", icon: "▶" },
  ];

  return (
    <section className="py-10 bg-white border-b" style={{ borderColor: "#EEF2FF" }}>
      <div className="container-custom">
        <p className="text-center text-sm font-semibold mb-6" style={{ color: "#94A3B8" }}>
          INTEGRATED WITH & CERTIFIED BY
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ background: "#F8F9FF" }}
            >
              <span className="text-xl">{p.icon}</span>
              <span className="text-sm font-semibold" style={{ color: "#4A5568" }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

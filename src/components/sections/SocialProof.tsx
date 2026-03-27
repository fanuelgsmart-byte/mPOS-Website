export default function SocialProof() {
  return (
    <section className="py-8 bg-white" style={{ borderBottom: "1px solid #EDF2F7" }}>
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {[
            { label: "Telebirr", icon: "📱" },
            { label: "CBE Birr", icon: "🏦" },
            { label: "Ministry of Revenue", icon: "🏛️" },
            { label: "INSA Certified", icon: "🔒" },
            { label: "Google Play", icon: "▶️" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
              <span className="text-lg">{p.icon}</span>
              <span className="text-sm font-medium" style={{ color: "#4A5568" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Download, Settings, Zap } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Download,
    title: "Download & Sign Up",
    description:
      "Get the app from Google Play or App Store. Sign up with your phone number in under 30 seconds. No paperwork needed.",
    color: "#1A3C8F",
    bg: "#EEF2FF",
  },
  {
    number: "02",
    icon: Settings,
    title: "Set Up Your Business",
    description:
      "Add your items, parties, and warehouses. Configure your VAT/TOT settings and e-invoicing for MoR compliance.",
    color: "#00C853",
    bg: "#E8FFF2",
  },
  {
    number: "03",
    icon: Zap,
    title: "Start Billing",
    description:
      "Create invoices, manage stock, accept payments, and let the Z-Report send itself to MoR every night automatically.",
    color: "#FFB300",
    bg: "#FFF8E0",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="section-padding" style={{ background: "#F8F9FF" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Up and running in minutes
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            No training needed. No IT setup. Just download and start billing.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-14 left-0 right-0 h-0.5 mx-32"
            style={{ background: "linear-gradient(90deg, #1A3C8F, #00C853, #FFB300)" }}
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center">
                  {/* Icon circle */}
                  <div
                    className="w-28 h-28 rounded-full flex flex-col items-center justify-center mx-auto mb-6 relative"
                    style={{
                      background: step.bg,
                      border: `3px solid ${step.color}`,
                    }}
                  >
                    <Icon size={32} color={step.color} />
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                      style={{ background: step.color }}
                    >
                      {step.number.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0F2460" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "#4A5568" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

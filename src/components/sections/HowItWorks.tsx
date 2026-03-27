import { Download, Settings, Zap } from "lucide-react";

const STEPS = [
  { num: "1", icon: Download, title: "Download & Sign Up", desc: "Get the app from Google Play. Sign up with your phone number in 30 seconds.", color: "#1A3C8F" },
  { num: "2", icon: Settings, title: "Set Up Your Business", desc: "Add items, parties, warehouses. Configure VAT/TOT and e-invoicing settings.", color: "#00C853" },
  { num: "3", icon: Zap, title: "Start Billing", desc: "Create invoices, manage stock, accept payments. Z-Report sends automatically.", color: "#FFB300" },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Up and running in 3 simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="text-center">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${step.color}12` }}>
                  <Icon size={24} color={step.color} strokeWidth={1.8} />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: step.color }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#1A202C" }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#718096" }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

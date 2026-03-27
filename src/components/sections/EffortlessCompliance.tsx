import { FileCheck, QrCode, Clock, ShieldCheck, FileSpreadsheet, Bell } from "lucide-react";

const COMPLIANCE_FEATURES = [
  {
    icon: FileCheck,
    title: "Automatic IRN Generation",
    desc: "Every sales invoice automatically gets a unique Invoice Reference Number as required by the Ministry of Revenue.",
  },
  {
    icon: QrCode,
    title: "QR Code on Every Invoice",
    desc: "A scannable QR code is embedded on all invoices, readable by the tax authority's verification app.",
  },
  {
    icon: Clock,
    title: "Daily Z-Report Transmission",
    desc: "At end of each business day, the Z-Report is compiled and sent to MoR automatically. No manual steps.",
  },
  {
    icon: ShieldCheck,
    title: "INSA Security Compliant",
    desc: "Built to meet INSA security standards. Your financial data is protected at the highest level.",
  },
  {
    icon: FileSpreadsheet,
    title: "VAT & TOT Ready",
    desc: "Full Ethiopian tax support — VAT and TOT calculations, tax summaries, and classification-based reporting.",
  },
  {
    icon: Bell,
    title: "Void & Audit Trail",
    desc: "Complete void reporting for cancelled receipts with audit logs for every transaction change.",
  },
];

export default function EffortlessCompliance() {
  return (
    <section className="section-padding" style={{ background: "#F7FAFC" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
              Compliance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4" style={{ color: "#1A202C" }}>
              Experience effortless MoR
              <br />
              compliance with Meleket
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#718096" }}>
              Stop worrying about tax compliance. Every invoice, every report, every submission
              to the Ministry of Revenue — handled automatically. Focus on your business while
              we handle the paperwork.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {COMPLIANCE_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#EEF2FF" }}>
                      <Icon size={16} color="#1A3C8F" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold mb-0.5" style={{ color: "#1A202C" }}>{f.title}</h3>
                      <p className="text-[11px] leading-relaxed" style={{ color: "#718096" }}>{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual — compliance phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <ComplianceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceMockup() {
  return (
    <div className="relative">
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-6 rounded-full opacity-10"
        style={{ background: "#1A3C8F", filter: "blur(16px)" }} />

      <div className="relative w-60 md:w-64 rounded-[2.5rem] overflow-hidden"
        style={{ border: "6px solid #1A202C", boxShadow: "0 16px 50px rgba(0,0,0,0.12)" }}>
        <div className="bg-black flex justify-center pt-2 pb-1">
          <div className="w-20 h-4 rounded-full" style={{ background: "#1A1A1A" }} />
        </div>

        <div className="bg-white px-3 pb-5 pt-2">
          {/* Invoice header */}
          <div className="text-center mb-3 pb-2" style={{ borderBottom: "1px solid #E2E8F0" }}>
            <div className="w-8 h-8 rounded-lg mx-auto mb-1.5 flex items-center justify-center text-white text-xs font-black"
              style={{ background: "#1A3C8F" }}>M</div>
            <p className="text-[9px] font-bold" style={{ color: "#1A202C" }}>Kebede Trading</p>
            <p className="text-[7px]" style={{ color: "#A0AEC0" }}>TIN: ET-12345678</p>
          </div>

          {/* Invoice details */}
          <div className="flex justify-between text-[7px] mb-2" style={{ color: "#718096" }}>
            <span>INV-2024-0041</span>
            <span>13/07/2017 EC</span>
          </div>

          {/* Items */}
          <div className="rounded-lg p-2 mb-2" style={{ background: "#F7FAFC" }}>
            <div className="flex justify-between text-[7px] font-bold mb-1" style={{ color: "#4A5568" }}>
              <span>Item</span>
              <span>Amount</span>
            </div>
            {[
              { item: "Rice 25kg", amount: "ETB 2,400" },
              { item: "Sugar 50kg", amount: "ETB 4,500" },
              { item: "Cooking Oil 20L", amount: "ETB 1,800" },
            ].map((row) => (
              <div key={row.item} className="flex justify-between text-[7px] py-0.5" style={{ color: "#2D3748" }}>
                <span>{row.item}</span>
                <span>{row.amount}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="text-[7px] space-y-0.5 mb-2 pb-2" style={{ borderBottom: "1px solid #E2E8F0" }}>
            <div className="flex justify-between" style={{ color: "#718096" }}>
              <span>Subtotal</span><span>ETB 8,700</span>
            </div>
            <div className="flex justify-between" style={{ color: "#718096" }}>
              <span>VAT (15%)</span><span>ETB 1,305</span>
            </div>
            <div className="flex justify-between font-bold pt-0.5" style={{ color: "#1A202C" }}>
              <span>Total</span><span>ETB 10,005</span>
            </div>
          </div>

          {/* IRN & QR */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[6px] font-bold" style={{ color: "#00C853" }}>✓ IRN GENERATED</p>
              <p className="text-[6px]" style={{ color: "#A0AEC0" }}>IRN-ET-2024-48291</p>
              <p className="text-[6px] mt-1" style={{ color: "#00C853" }}>✓ Z-REPORT QUEUED</p>
            </div>
            {/* QR Code */}
            <div className="w-10 h-10 rounded grid grid-cols-5 grid-rows-5 gap-[1px] p-[2px]" style={{ background: "white", border: "1px solid #E2E8F0" }}>
              {Array.from({ length: 25 }).map((_, j) => (
                <div key={j} className="rounded-[0.5px]"
                  style={{ background: [0,1,2,4,5,6,8,10,12,14,16,18,20,22,23,24].includes(j) ? "#1A202C" : "white" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 top-20 px-3 py-2 rounded-xl text-[10px] font-bold"
        style={{ background: "white", color: "#00C853", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #E8FFF2" }}>
        ✓ MoR Compliant
      </div>
    </div>
  );
}

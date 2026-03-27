import { Check } from "lucide-react";

const LEFT_FEATURES = [
  "Multi-warehouse stock transfers",
  "Barcode label printing (2\" & 3\")",
  "Quotation & proforma invoices",
  "Credit notes & debit notes",
  "Purchase returns & sales returns",
  "Party-wise price overrides",
  "Serial & IMEI number tracking",
  "Custom invoice themes & colors",
];

const RIGHT_FEATURES = [
  "Role-based access (5 user roles)",
  "Bulk item import (CSV/XLSX)",
  "Ethiopian calendar support",
  "Amharic & English bilingual",
  "Expense tracking & categorization",
  "Payment reminders via SMS",
  "Audit log for all actions",
  "Close financial year wizard",
];

export default function AndMore() {
  return (
    <section className="section-padding" style={{ background: "#F7FAFC" }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            And That&apos;s Not All
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Everything else you need, built in
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((feat) => (
              <div key={feat} className="flex items-center gap-3 py-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#E8FFF2" }}>
                  <Check size={14} color="#00C853" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium" style={{ color: "#2D3748" }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

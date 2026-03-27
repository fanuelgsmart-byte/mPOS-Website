import {
  FileText, ShoppingCart, Package, Truck, Users, BarChart2,
  Wallet, RefreshCw, MessageSquare, Calculator, Shield, Smartphone,
} from "lucide-react";

const FEATURES = [
  { icon: FileText, title: "Billing & Invoicing", desc: "Create professional invoices with IRN & QR code in seconds", color: "#1A3C8F" },
  { icon: ShoppingCart, title: "POS Billing", desc: "Fast counter sales with barcode scanning & thermal printing", color: "#00C853" },
  { icon: Package, title: "Inventory Management", desc: "Track stock across warehouses with FIFO/LIFO costing", color: "#FF6B35" },
  { icon: Truck, title: "Purchase Management", desc: "Manage suppliers, purchase orders & settlements easily", color: "#6C63FF" },
  { icon: Users, title: "Staff & Payroll", desc: "Attendance tracking, salary calculation & payslip generation", color: "#E91E63" },
  { icon: BarChart2, title: "40+ Reports", desc: "Sales, stock, tax, expense & payroll reports in PDF/Excel", color: "#FFB300" },
  { icon: Wallet, title: "Cash & Bank", desc: "Track all money movement across cash and bank accounts", color: "#00BCD4" },
  { icon: RefreshCw, title: "Automated Bills", desc: "Set up recurring invoices for regular customers", color: "#8BC34A" },
  { icon: MessageSquare, title: "SMS Marketing", desc: "Send promotional campaigns & payment reminders to customers", color: "#FF5722" },
  { icon: Calculator, title: "VAT & TOT", desc: "Ethiopian tax compliance with automatic calculations", color: "#795548" },
  { icon: Shield, title: "MoR e-Invoicing", desc: "IRN generation, QR codes & daily Z-Report to tax authority", color: "#607D8B" },
  { icon: Smartphone, title: "Works Everywhere", desc: "Same features on phone, tablet & desktop — online or offline", color: "#9C27B0" },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header — Khatabook style: uppercase label + bold heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00C853" }}>
            Powerful Features
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#1A202C" }}>
            Powerful features to help you manage
            <br className="hidden md:block" />
            your business effortlessly
          </h2>
        </div>

        {/* Simple 4-col grid — Khatabook style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${f.color}12` }}
                >
                  <Icon size={24} color={f.color} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "#1A202C" }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#718096" }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

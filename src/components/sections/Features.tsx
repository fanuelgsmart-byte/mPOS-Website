import { FEATURES } from "@/lib/constants";
import {
  ShoppingCart, FileText, Package, Truck, Users, BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.FC<{ size?: number; color?: string }>> = {
  ShoppingCart,
  FileText,
  Package,
  Truck,
  Users,
  BarChart2,
};

export default function Features() {
  return (
    <section id="features" className="section-padding" style={{ background: "#F8F9FF" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            Everything your business needs
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A5568" }}>
            From your first invoice to tax compliance — one platform handles it all.
            No spreadsheets. No paper. Just results.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? BarChart2;
            return (
              <div
                key={feature.id}
                className="card group cursor-pointer"
                style={{ borderTop: `3px solid ${feature.color}` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: feature.bg }}
                >
                  <Icon size={22} color={feature.color} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0F2460" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A5568" }}>
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm" style={{ color: "#2D3748" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px]"
                        style={{ background: feature.bg, color: feature.color }}>
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

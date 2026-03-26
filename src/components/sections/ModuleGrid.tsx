"use client";

import { MODULES } from "@/lib/constants";
import {
  LayoutDashboard, Users2, Package, Warehouse, FileText, ShoppingCart,
  Truck, Wallet, RefreshCw, BarChart2, UserCheck, MessageSquare, Settings,
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ size?: number; color?: string }>> = {
  LayoutDashboard, Users2, Package, Warehouse, FileText, ShoppingCart,
  Truck, Wallet, RefreshCw, BarChart2, UserCheck, MessageSquare, Settings,
};

export default function ModuleGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">13 Modules</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#0F2460" }}>
            One platform. Complete control.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A5568" }}>
            Every tool your business needs, connected and working together.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {MODULES.map((mod) => {
            const Icon = ICON_MAP[mod.icon] ?? LayoutDashboard;
            return (
              <div
                key={mod.label}
                className="flex flex-col items-center text-center p-5 rounded-2xl cursor-pointer transition-all duration-200 group"
                style={{ background: "#F8F9FF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#EEF2FF";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#F8F9FF";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "#EEF2FF" }}
                >
                  <Icon size={20} color="#1A3C8F" />
                </div>
                <p className="text-sm font-bold mb-0.5" style={{ color: "#0F2460" }}>{mod.label}</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

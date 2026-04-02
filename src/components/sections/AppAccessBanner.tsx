"use client";

import { Apple } from "lucide-react";

export default function AppAccessBanner() {
  return (
    <section className="relative z-20">
      <div className="container-custom" style={{ maxWidth: "1560px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          <div
            className="relative overflow-hidden rounded-[10px] border min-h-[138px] md:min-h-[140px] px-5 md:px-8 py-5 flex items-center justify-between gap-4 md:gap-6"
            style={{ background: "#FFFFFF", borderColor: "#E5EAF0", boxShadow: "0 1px 0 rgba(17,24,39,0.02)" }}
          >
            <div
              className="absolute -left-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full"
              style={{ background: "rgba(229,57,53,0.06)" }}
            />
            <div className="relative z-10 flex items-center gap-2 min-w-[145px]">
              <div className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-xl" style={{ background: "#E53935", boxShadow: "inset -2px 0 0 rgba(255,255,255,0.25)" }}>
                <span className="translate-x-[1px]">K</span>
              </div>
              <div>
                <p className="text-[18px] md:text-[20px] font-bold text-[#E53935] leading-none tracking-tight">Khatabook</p>
                <sup className="text-[9px] text-[#E53935] -top-2 relative">®</sup>
              </div>
            </div>

            <div className="relative z-10 text-left flex-1">
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#111827] leading-[1.15] tracking-tight">
                5 Cr+ Businesses using our free apps
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-1.5 leading-tight">Access your account anywhere, anytime.</p>
              <div className="flex items-center gap-5 md:gap-6 mt-3 text-[#111827]">
                <span className="inline-flex items-center gap-2 text-[16px] md:text-[17px] font-semibold leading-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 2.5v19l11-9.5z" fill="#34A853" />
                    <path d="M14 10.4 18.2 8l2.8 1.6c1.3.7 1.3 1.9 0 2.6L18.2 14 14 11.6z" fill="#FBBC05" />
                    <path d="M3 21.5 14 12l4.2 2.4L5.2 21.1c-.9.5-1.7.6-2.2.4z" fill="#EA4335" />
                    <path d="M3 2.5c.5-.2 1.3-.1 2.2.4L18.2 9.6 14 12z" fill="#4285F4" />
                  </svg>
                  Play Store
                </span>
                <span className="inline-flex items-center gap-2 text-[16px] md:text-[17px] font-semibold leading-none">
                  <Apple size={18} />
                  App Store
                </span>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[10px] border min-h-[138px] md:min-h-[140px] px-5 md:px-8 py-5 flex items-center justify-between gap-4 md:gap-6"
            style={{ background: "#FFFFFF", borderColor: "#E5EAF0", boxShadow: "0 1px 0 rgba(17,24,39,0.02)" }}
          >
            <div
              className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full"
              style={{ background: "rgba(66,153,225,0.10)" }}
            />

            <div className="relative z-10 flex-1">
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#111827] leading-[1.15] tracking-tight">Already use Tally?</h3>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-1.5 leading-tight">Get Tally on mobile with BizAnalyst</p>
              <a href="#" className="inline-flex items-center gap-2 text-[16px] md:text-[17px] font-semibold mt-3 leading-none" style={{ color: "#1186EA" }}>
                Go to BizAnalyst ↗
              </a>
            </div>

            <div className="relative z-10 min-w-[120px] md:min-w-[150px] flex justify-end">
              <div className="text-right">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl ml-auto flex items-center justify-center" style={{ background: "#1186EA" }}>
                  <span className="text-white text-xl md:text-2xl font-bold">B</span>
                </div>
                <p className="text-[16px] md:text-[17px] font-semibold mt-1 leading-none" style={{ color: "#1186EA" }}>
                  BizAnalyst
                </p>
                <sup className="text-[9px] relative -top-1" style={{ color: "#1186EA" }}>
                  ®
                </sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

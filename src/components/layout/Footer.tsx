"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Contact Us", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "#refund" },
  { label: "Security", href: "#security" },
  { label: "Cookie Policy", href: "#cookies" },
];

const SOCIAL = [
  { label: "YouTube", icon: "▶", href: "#" },
  { label: "Instagram", icon: "📷", href: "#" },
  { label: "Twitter", icon: "𝕏", href: "#" },
  { label: "Facebook", icon: "f", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "#E53935" }}
              >
                M
              </div>
              <span className="text-lg font-bold text-gray-900">{SITE_NAME}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {SITE_NAME} is Ethiopia&apos;s complete business management platform.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              MoR e-Invoice Certified
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mt-2">
              INSA Security Compliant
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-semibold text-base mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold text-base mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold text-base mb-1">
              We&apos;d love to hear from you!
            </h4>
            <p className="text-gray-400 text-sm mb-5">You can reach out to us at:</p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+251911000000"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone size={16} className="flex-shrink-0 text-gray-400" />
                +251-911-000-000
              </a>
              <a
                href="mailto:info@meleket.com"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 text-gray-400" />
                info@meleket.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={16} className="flex-shrink-0 text-gray-400 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL.map(({ label, icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-gray-400 transition-colors hover:text-gray-700 hover:bg-gray-100"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #E5E7EB" }}
        >
          <p className="text-gray-400 text-xs">
            &copy; 2025 {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meleket — Ethiopia's Complete Business Management Platform",
  description:
    "Billing, Inventory, POS, Payroll & MoR e-Invoicing — all in one app. Built for Ethiopian businesses, in Amharic and English. MoR certified, INSA compliant.",
  keywords: [
    "billing software Ethiopia",
    "POS system Addis Ababa",
    "inventory management Ethiopia",
    "e-invoice Ethiopia MoR",
    "Ethiopian business app",
    "accounting software Ethiopia",
  ],
  openGraph: {
    title: "Meleket — Ethiopia's Complete Business Management Platform",
    description: "Billing, Inventory, POS, Payroll & MoR e-Invoicing for Ethiopian businesses.",
    type: "website",
    locale: "en_ET",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

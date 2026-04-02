import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import SolutionLayout from "@/components/solutions/SolutionLayout";
import DarkFooter from "@/components/solutions/DarkFooter";
import HeroSection from "@/components/solutions/HeroSection";
import ComparisonTable from "@/components/solutions/ComparisonTable";
import FeatureCards from "@/components/solutions/FeatureCards";
import AdvancedFeatures from "@/components/solutions/AdvancedFeatures";
import PillTabs from "@/components/solutions/PillTabs";
import TrustTestimonials from "@/components/solutions/TrustTestimonials";
import FAQSection from "@/components/solutions/FAQSection";
import StarRating from "@/components/solutions/StarRating";

export const metadata: Metadata = {
  title: "Invoicing Software for Small Business — Meleket",
  description:
    "Create MoR-compliant e-invoices with auto IRN and QR code. Send via SMS and email, track payments, manage receivables. Built for Ethiopian businesses.",
};

const ACCENT = "#2563EB";
const ACCENT_LIGHT = "#EFF6FF";

export default function InvoicingPage() {
  return (
    <>
      <Navbar />
      <SolutionLayout downloadBarLabel="Download Meleket Invoicing Software — Free for Ethiopian Businesses">
        {/* ── HERO ── */}
        <HeroSection
          breadcrumb="Invoicing Software"
          title="Invoicing Software for"
          titleAccent="Small Business"
          subtitle="Create MoR-compliant e-invoices in seconds with automatic IRN and QR code. Send to customers via SMS or email and collect payments faster."
          ctaLabel="Download Invoicing Software"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          dashboardType="invoicing"
          labels={[
            { text: "Quick Invoice Creation", icon: "⚡", pos: { top: "8%", right: "-2%" } },
            { text: "Compliant Tax Support", icon: "✅", pos: { bottom: "28%", right: "-2%" } },
            { text: "Multi-Currency Support", icon: "💱", pos: { bottom: "8%", left: "5%" } },
          ]}
        />

        {/* ── COMPARISON TABLE ── */}
        <ComparisonTable
          title="Why Meleket Invoicing Software is the Perfect Choice for Your Business?"
          accentColor={ACCENT}
          basicLabel="Basic Invoicing"
          meleket="Meleket"
          features={[
            { name: "Accounts Payable & Receivable", basic: true, meleket: true },
            { name: "Customizable Invoice Templates", basic: false, meleket: true },
            { name: "Tax Compliance (MoR/VAT/TOT)", basic: false, meleket: true },
            { name: "User Interface & Ease of Use", basic: false, meleket: true },
            { name: "Item Tracking", basic: true, meleket: true },
            { name: "Recurring Invoices", basic: false, meleket: true },
            { name: "Multi-Currency Support", basic: false, meleket: true },
            { name: "Smart Payment Reminders (SMS)", basic: false, meleket: true },
            { name: "E-Invoice (IRN + QR Code)", basic: false, meleket: true },
            { name: "WhatsApp Invoice Delivery", basic: false, meleket: true },
            { name: "Works Offline", basic: false, meleket: true },
            { name: "Amharic Language Support", basic: false, meleket: true },
          ]}
        />

        {/* ── FEATURE CARDS ── */}
        <FeatureCards
          title="Features of the Best Billing Software for Small Business"
          accentColor={ACCENT}
          cards={[
            {
              icon: "⚡",
              title: "Quick Invoice Creation",
              description: "Generate a complete, MoR-compliant invoice in under 5 seconds. Select customer, add items, and send — that's it.",
              bullets: [
                "Create invoices in under 5 seconds",
                "Auto-fill from product catalog",
                "IRN and QR code automatically added",
                "Preview before sending",
                "Keyboard shortcut support",
              ],
            },
            {
              icon: "✅",
              title: "Compliant Tax Support",
              description: "Every invoice automatically handles Ethiopian tax requirements — VAT, TOT, withholding tax, and daily Z-Report transmission.",
              bullets: [
                "Auto VAT (15%) calculation",
                "Turnover Tax support",
                "Withholding tax deduction",
                "Daily Z-Report to MoR",
                "Tax-ready reports for authority",
              ],
            },
            {
              icon: "💱",
              title: "Multi-Currency Support",
              description: "Set currency per customer for international clients. All reports can show multi-currency transactions with ETB conversion.",
              bullets: [
                "Set currency per customer",
                "Auto exchange rate entry",
                "Multi-currency reports",
                "ETB equivalent tracking",
              ],
            },
            {
              icon: "🔔",
              title: "Smart Payment Tracking & Reminders",
              description: "See which invoices are paid, partially paid, or overdue. Send SMS reminders to customers with one tap.",
              bullets: [
                "Real-time payment status dashboard",
                "One-tap SMS payment reminder",
                "Telebirr & CBE Birr payment links",
                "Partial payment recording",
                "Ageing analysis report",
              ],
            },
          ]}
        />

        {/* ── ADVANCED FEATURES ── */}
        <AdvancedFeatures
          title="Advanced Features Built for Small Business Billing"
          accentColor={ACCENT}
          features={[
            {
              title: "Inventory Management",
              description: "Every invoice automatically deducts items from your inventory. Always know what's in stock without manual counts.",
              bullets: [
                "Auto stock deduction on invoice",
                "Low stock alerts on invoice creation",
                "Reorder suggestions at checkout",
                "Multi-warehouse inventory sync",
              ],
              imagePlaceholder: "📦",
            },
            {
              title: "Business Dashboard & Insights",
              description: "Real-time dashboard showing daily collections, pending invoices, top customers, and monthly trends at a glance.",
              bullets: [
                "Daily collection summary",
                "Pending and overdue invoice totals",
                "Top-paying customer analysis",
                "Monthly billing trend charts",
              ],
              imagePlaceholder: "📊",
            },
            {
              title: "Expense Tracking",
              description: "Track every business expense alongside your billing activity. See true profitability by comparing revenue to costs.",
              bullets: [
                "Expense categories and tags",
                "Receipt photo attachments",
                "Expense vs revenue comparison",
                "Department-wise expense reports",
              ],
              imagePlaceholder: "💸",
            },
            {
              title: "Customer Management",
              description: "Complete customer profiles with purchase history, outstanding balances, preferred payment methods, and contact details.",
              bullets: [
                "Full customer purchase history",
                "Outstanding balance per customer",
                "Credit limit management",
                "Customer statement export",
              ],
              imagePlaceholder: "👤",
            },
            {
              title: "Barcode Billing",
              description: "Scan product barcodes to instantly add items to invoices. Generate and print barcode labels for all your products.",
              bullets: [
                "Phone camera barcode scanning",
                "USB barcode scanner support",
                "Barcode label printing",
                "Bulk product import with barcodes",
              ],
              imagePlaceholder: "📟",
            },
            {
              title: "Quotation & Estimates",
              description: "Create professional quotations and estimates. Convert approved quotes to invoices with a single tap — no re-entering data.",
              bullets: [
                "Quotation creation and sending",
                "Customer approval tracking",
                "One-tap quote-to-invoice conversion",
                "Quotation validity settings",
              ],
              imagePlaceholder: "📋",
            },
          ]}
        />

        {/* ── PILL TABS ── */}
        <PillTabs
          title="Why Meleket is the Best Invoicing Software for Small Business"
          accentColor={ACCENT}
          tabs={[
            {
              label: "Cost-Effective for New Entrepreneurs",
              imagePlaceholder: "💰",
              description: "Start invoicing professionally from day one without expensive software costs. Meleket gives new Ethiopian entrepreneurs access to enterprise-grade invoicing at an affordable price — including MoR compliance that protects you from tax penalties.",
            },
            {
              label: "Easy to Set Up and Use",
              imagePlaceholder: "⚡",
              description: "Create your first invoice within 5 minutes of downloading the app. No training needed — the interface guides you step by step. Add your logo, configure your tax settings, and start billing customers immediately.",
            },
            {
              label: "No Internet Needed",
              imagePlaceholder: "📶",
              description: "Invoice customers even when you're offline. Meleket stores everything locally and syncs when connectivity returns. Your billing never stops because of network issues — critical for businesses outside major cities.",
            },
            {
              label: "Compatible with Multiple Devices",
              imagePlaceholder: "📱",
              description: "Create invoices on your phone at the customer site, review collections on your tablet at home, and generate reports on your desktop computer. All data stays perfectly in sync across all your devices.",
            },
            {
              label: "Maintains a Professional Image",
              imagePlaceholder: "✨",
              description: "Branded invoices with your logo, professional templates, MoR-compliant QR codes, and IRN numbers make your business look established and credible. Customers take businesses seriously when they receive proper invoices.",
            },
          ]}
        />

        {/* ── TRUST & TESTIMONIALS ── */}
        <TrustTestimonials
          accentColor={ACCENT}
          stats={[
            { value: "1M+", label: "Invoices Generated" },
            { value: "< 5s", label: "Invoice Creation Time" },
            { value: "100%", label: "MoR Compliance Rate" },
            { value: "4.8★", label: "App Store Rating" },
          ]}
          testimonials={[
            {
              name: "Yonas Tadesse",
              business: "Tadesse Wholesale",
              city: "Hawassa",
              rating: 5,
              quote: "I used to spend 30 minutes creating each invoice manually. Now I create a complete MoR-compliant invoice in 5 seconds and send it directly to the customer's phone. Collections are 40% faster.",
              avatar: "YT",
            },
            {
              name: "Meron Bekele",
              business: "Bekele Cafe",
              city: "Dire Dawa",
              rating: 5,
              quote: "The professional invoice templates have completely changed how customers see our business. We look like a proper company now. The SMS reminders also help us collect payments faster.",
              avatar: "MB",
            },
          ]}
        />

        {/* ── FAQ ── */}
        <FAQSection
          accentColor={ACCENT}
          title="Frequently Asked Questions about Meleket Invoicing Software"
          faqs={[
            {
              q: "Is Meleket invoicing compliant with Ethiopia's Ministry of Revenue?",
              a: "Yes. Meleket is MoR-certified. Every invoice automatically generates an IRN (Invoice Reference Number) and QR code. The daily Z-Report is transmitted to the Ministry of Revenue automatically at end of business day.",
            },
            {
              q: "Can I send invoices via SMS to customers without smartphones?",
              a: "Yes. When you send an invoice via SMS, customers receive a link to view their invoice. The link works on any phone with basic internet. You can also print and hand over paper invoices.",
            },
            {
              q: "How many invoice templates does Meleket offer?",
              a: "Meleket offers 15+ professionally designed invoice templates in four style families: Classic, Modern, Luxury, and Stylish. Each is available in thermal receipt, A5, and A4 formats.",
            },
            {
              q: "Can I create invoices in Amharic?",
              a: "Yes. Meleket supports Amharic and English for all invoices. You can set a default language per customer and switch on any individual invoice. Ethiopian Calendar dates are fully supported.",
            },
            {
              q: "Does Meleket support recurring invoices?",
              a: "Yes. Set up automatic recurring invoices for regular customers on weekly, monthly, or custom schedules. The system generates and sends them on the due date automatically.",
            },
            {
              q: "What if I need to issue a credit note or return?",
              a: "Meleket supports debit notes, credit notes, and return invoices. Each reversal is properly recorded in the ledger and complies with MoR requirements for invoice cancellation.",
            },
          ]}
        />

        {/* ── STAR RATING ── */}
        <StarRating accentColor={ACCENT} />

        {/* ── FOOTER ── */}
        <DarkFooter />
      </SolutionLayout>
    </>
  );
}

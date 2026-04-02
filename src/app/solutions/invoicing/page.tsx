import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import type { SolutionPageData } from "@/components/solutions/SolutionPage";

export const metadata: Metadata = {
  title: "Invoicing Software for Ethiopian Businesses — Meleket",
  description:
    "Create MoR-compliant e-invoices with automatic IRN and QR code. Send invoices via SMS and email, track payments, and manage receivables. Built for Ethiopia.",
};

const data: SolutionPageData = {
  slug: "invoicing",
  accentColor: "#2563EB",
  accentLight: "#EFF6FF",
  heroTag: "Invoicing Software",
  heroTitle: "Professional Invoicing",
  heroTitleAccent: "Made Simple",
  heroSubtitle:
    "Create MoR-compliant e-invoices in seconds. Automatic IRN and QR code on every invoice. Send to customers via SMS or email and track payments in real time.",
  heroFeatures: [
    "MoR e-Invoice compliant",
    "Auto IRN & QR code",
    "Daily Z-Report auto-send",
    "SMS & email delivery",
    "Payment tracking",
    "Custom invoice themes",
  ],
  stats: [
    { value: "1M+", label: "Invoices Generated" },
    { value: "< 5s", label: "Invoice Creation Time" },
    { value: "15+", label: "Invoice Templates" },
    { value: "100%", label: "MoR Compliance Rate" },
  ],
  featuresTitle: "Everything You Need for Professional Invoicing",
  features: [
    {
      icon: "🧾",
      title: "MoR e-Invoice Generation",
      description:
        "Every invoice automatically gets an IRN (Invoice Reference Number) and QR code as required by Ethiopia's Ministry of Revenue. Full compliance, zero effort.",
    },
    {
      icon: "📱",
      title: "Send via SMS & Email",
      description:
        "Share invoices with customers instantly via SMS, email, or WhatsApp. Customers receive a professional PDF with your business branding.",
    },
    {
      icon: "🎨",
      title: "Custom Invoice Themes",
      description:
        "Choose from 15+ professionally designed invoice templates in Classic, Modern, Luxury, and Stylish styles. Add your logo and brand colors.",
    },
    {
      icon: "📊",
      title: "Payment Tracking",
      description:
        "Track which invoices are paid, partially paid, or overdue. Send automatic payment reminders via SMS to speed up collections.",
    },
    {
      icon: "🔁",
      title: "Recurring Invoices",
      description:
        "Set up recurring invoices for regular customers. The system automatically generates and sends invoices on your schedule.",
    },
    {
      icon: "🖨️",
      title: "Multi-Format Printing",
      description:
        "Print thermal receipts for counter sales, A4 invoices for wholesale clients, or A5 compact invoices — all from the same system.",
    },
    {
      icon: "🌐",
      title: "Amharic & English Invoices",
      description:
        "Generate invoices in Amharic or English. Switch languages per customer preference. Ethiopian Calendar dates fully supported.",
    },
    {
      icon: "📋",
      title: "Quotation & Estimate",
      description:
        "Create professional quotations and estimates. Convert approved quotes to invoices with a single tap — no re-entering data.",
    },
    {
      icon: "📤",
      title: "Daily Z-Report",
      description:
        "End-of-day Z-Reports are compiled and transmitted to the Ministry of Revenue automatically — no manual action required.",
    },
  ],
  tabsTitle: "How Meleket Makes Invoicing Effortless",
  tabs: [
    {
      id: "create",
      title: "Create Invoices in Seconds",
      content:
        "Open Meleket, add items from your product list, select a customer, and tap 'Create Invoice'. The system fills in all required fields, calculates taxes, generates IRN, adds QR code, and your invoice is ready in under 5 seconds.",
      bullets: [
        "Add items from existing product catalog",
        "Apply discounts at item or invoice level",
        "Auto-calculate VAT, TOT, and other taxes",
        "IRN and QR code generated automatically",
        "Preview invoice before finalizing",
      ],
    },
    {
      id: "compliance",
      title: "MoR e-Invoice Compliance",
      content:
        "Meleket is certified by Ethiopia's Ministry of Revenue. Every invoice you create is validated in real time against MoR requirements. The daily Z-Report is transmitted automatically at end of business day.",
      bullets: [
        "MoR-certified invoice generation",
        "Auto IRN on every transaction",
        "QR code with embedded transaction data",
        "Real-time MoR server validation",
        "Daily Z-Report auto-transmission at day close",
      ],
    },
    {
      id: "customize",
      title: "Customize Your Invoice Design",
      content:
        "Make your invoices reflect your brand. Upload your logo, choose your color theme, and select from 15+ professional templates. Your invoices will look as professional as any large company's.",
      bullets: [
        "15+ invoice templates to choose from",
        "Upload business logo and stamp",
        "Custom colors matching your brand",
        "Add terms, notes, and payment instructions",
        "Different templates for retail vs. wholesale",
      ],
    },
    {
      id: "share",
      title: "Share & Collect Payments",
      content:
        "Once created, share invoices via SMS, email, or WhatsApp directly from the app. Include payment links for Telebirr and CBE Birr to make it easy for customers to pay immediately.",
      bullets: [
        "One-tap SMS sharing to customer phone",
        "Email as PDF attachment",
        "WhatsApp sharing with invoice link",
        "Telebirr and CBE Birr payment links",
        "Track who viewed your invoice",
      ],
    },
    {
      id: "track",
      title: "Track & Manage Receivables",
      content:
        "Never lose track of outstanding invoices. Meleket shows you at a glance which invoices are unpaid, overdue, or partially paid. Send reminder SMS messages with one tap.",
      bullets: [
        "Dashboard showing unpaid invoice total",
        "Overdue invoice alerts",
        "One-tap payment reminder SMS",
        "Partial payment recording",
        "Customer statement with all invoices",
      ],
    },
  ],
  benefitsTitle: "Why Meleket is the Best Invoicing Software for Ethiopia",
  benefits: [
    {
      title: "100% MoR Compliant",
      desc: "Meleket is officially certified by Ethiopia's Ministry of Revenue. Every invoice automatically meets all legal requirements — IRN, QR code, and daily Z-Report.",
    },
    {
      title: "Professional Appearance Builds Trust",
      desc: "Custom-branded invoices with your logo and colors make your business look professional and build customer confidence.",
    },
    {
      title: "Faster Payment Collection",
      desc: "Including Telebirr and CBE Birr payment links on invoices significantly reduces the time customers take to pay. Reminder SMS messages cut follow-up time.",
    },
    {
      title: "Works on Any Device",
      desc: "Create and send invoices from your smartphone, tablet, or desktop computer. The app works the same on all platforms.",
    },
    {
      title: "Bilingual Invoicing",
      desc: "Send invoices to customers in Amharic or English based on their preference. All legal text and tax labels are properly localized.",
    },
    {
      title: "Complete Audit Trail",
      desc: "Every invoice, edit, and payment is logged with timestamps. Full audit trail for tax authorities and business review.",
    },
  ],
  faqTitle: "Frequently Asked Questions about Meleket Invoicing",
  faqs: [
    {
      q: "Is Meleket invoicing compliant with Ethiopia's Ministry of Revenue?",
      a: "Yes. Meleket is MoR-certified. Every invoice automatically generates an IRN (Invoice Reference Number) and QR code. The daily Z-Report is transmitted to the Ministry of Revenue automatically at the end of each business day.",
    },
    {
      q: "Can I send invoices to customers via SMS?",
      a: "Yes. Once you create an invoice, you can send it to any phone number via SMS directly from the app. The customer receives a link to view or download their PDF invoice.",
    },
    {
      q: "How many invoice templates are available?",
      a: "Meleket offers 15+ professionally designed invoice templates in four style families: Classic, Modern, Luxury, and Stylish. Each template is available in thermal receipt, A5, and A4 formats.",
    },
    {
      q: "Can I create invoices in Amharic?",
      a: "Yes. Meleket supports both Amharic and English for all business documents including invoices, receipts, and reports. You can set a default language per customer.",
    },
    {
      q: "Does Meleket support recurring invoices?",
      a: "Yes. You can set up recurring invoices for regular customers with weekly, monthly, or custom schedules. The system generates and sends them automatically on the due date.",
    },
    {
      q: "What if I need to issue a credit note or return invoice?",
      a: "Meleket supports debit notes, credit notes, and return invoices. Each reversal transaction is properly recorded in the ledger and complies with MoR requirements.",
    },
  ],
  ctaTitle: "Start Creating Professional Invoices Today",
  ctaSubtitle:
    "Join 5,000+ Ethiopian businesses using Meleket to create MoR-compliant invoices, collect payments faster, and stay audit-ready.",
};

export default function InvoicingPage() {
  return <SolutionPage data={data} />;
}

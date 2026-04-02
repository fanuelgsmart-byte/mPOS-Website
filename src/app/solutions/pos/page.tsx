import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import type { SolutionPageData } from "@/components/solutions/SolutionPage";

export const metadata: Metadata = {
  title: "POS Software for Ethiopian Businesses — Meleket",
  description:
    "Lightning-fast POS billing with barcode scanning, thermal printing, Telebirr and CBE Birr payments, and MoR-compliant receipts. Built for Ethiopian retail businesses.",
};

const data: SolutionPageData = {
  slug: "pos",
  accentColor: "#7C3AED",
  accentLight: "#F5F3FF",
  heroTag: "POS Software",
  heroTitle: "Lightning-Fast POS",
  heroTitleAccent: "for Ethiopian Businesses",
  heroSubtitle:
    "Process counter sales in seconds with barcode scanning, thermal printing, and Telebirr/CBE Birr payments. MoR-compliant receipts on every transaction.",
  heroFeatures: [
    "Barcode scanning",
    "Thermal receipt printing",
    "Telebirr & CBE Birr",
    "MoR compliant receipts",
    "Works offline",
    "Multi-payment split",
  ],
  stats: [
    { value: "< 3s", label: "Average Transaction Time" },
    { value: "10+", label: "Payment Methods Supported" },
    { value: "Zero", label: "Missed Transactions Offline" },
    { value: "4.8★", label: "Customer Rating" },
  ],
  featuresTitle: "Everything Your POS Counter Needs",
  features: [
    {
      icon: "⚡",
      title: "Lightning-Fast Checkout",
      description:
        "Process sales in under 3 seconds. Keyboard shortcuts (F6 for new sale, F7 for payment) let experienced cashiers work without touching the mouse.",
    },
    {
      icon: "📱",
      title: "Barcode Scanning",
      description:
        "Scan products instantly using a USB barcode scanner or your phone camera. Items and prices populate automatically from your product catalog.",
    },
    {
      icon: "🖨️",
      title: "Thermal Receipt Printing",
      description:
        "Print professional thermal receipts in seconds. Receipts include your logo, business details, MoR QR code, and IRN for full compliance.",
    },
    {
      icon: "💰",
      title: "Multiple Payment Methods",
      description:
        "Accept cash, Telebirr, CBE Birr, bank transfer, and card payments. Split payments across multiple methods on a single transaction.",
    },
    {
      icon: "📶",
      title: "Works 100% Offline",
      description:
        "Never stop selling due to internet issues. All transactions are recorded locally and synced when connectivity returns.",
    },
    {
      icon: "🏷️",
      title: "Discount & Offer Management",
      description:
        "Apply item-level or invoice-level discounts as percentages or fixed amounts. Set up time-limited offers and promotional pricing.",
    },
    {
      icon: "👥",
      title: "Customer Management",
      description:
        "Attach sales to customer accounts for loyalty tracking, credit sales, and payment reminders. Build customer purchase history.",
    },
    {
      icon: "📊",
      title: "Real-Time Sales Dashboard",
      description:
        "See today's sales, top-selling items, and hourly revenue breakdown on the main POS dashboard. Close the day with a Z-Report in one tap.",
    },
    {
      icon: "🔐",
      title: "Staff Access Controls",
      description:
        "Cashiers can process sales but not access reports or settings. Managers get full access. Role-based permissions protect your business data.",
    },
  ],
  tabsTitle: "How Meleket POS Makes Your Counter Faster",
  tabs: [
    {
      id: "checkout",
      title: "Fast Counter Checkout",
      content:
        "The Meleket POS checkout screen is designed for speed. Open a new sale with F6, scan barcodes or search products, apply discounts, collect payment with F7, and print receipt — all in under 10 seconds for a typical transaction.",
      bullets: [
        "F6 to start a new sale, F7 for payment",
        "Product search by name or barcode",
        "Quick-access shortcuts for top products",
        "Automatic tax calculation",
        "One-tap receipt printing",
      ],
    },
    {
      id: "payments",
      title: "Ethiopian Payment Methods",
      content:
        "Accept every payment method used by Ethiopian customers. Cash, Telebirr, CBE Birr, bank transfer, and card payments are all supported natively. Split a single transaction across multiple payment methods.",
      bullets: [
        "Cash with automatic change calculation",
        "Telebirr mobile money",
        "CBE Birr digital payment",
        "Bank transfer recording",
        "Split payment across multiple methods",
      ],
    },
    {
      id: "offline",
      title: "Offline-First Operation",
      content:
        "Ethiopia's internet connectivity can be unpredictable. Meleket is built offline-first — your POS works perfectly without any internet connection. All data syncs automatically when you reconnect.",
      bullets: [
        "Full POS functionality without internet",
        "Automatic background sync when online",
        "MoR compliance maintained offline",
        "No data loss during connectivity gaps",
        "Queue Telebirr payments for online processing",
      ],
    },
    {
      id: "receipts",
      title: "MoR-Compliant Receipts",
      content:
        "Every receipt printed by Meleket POS meets Ministry of Revenue requirements. Automatic IRN generation, embedded QR code, and daily Z-Report transmission are all handled without any manual steps.",
      bullets: [
        "IRN on every transaction receipt",
        "QR code with embedded invoice data",
        "Business details and TIN on all receipts",
        "VAT/TOT breakdown on receipt",
        "Daily Z-Report auto-transmission",
      ],
    },
    {
      id: "endofday",
      title: "End-of-Day & Shift Management",
      content:
        "Close your business day with a comprehensive Z-Report showing total sales, payment breakdown, tax collected, and cashier performance. Shift management tracks opening and closing cash for each cashier.",
      bullets: [
        "One-tap Z-Report generation",
        "Payment method breakdown (cash, Telebirr, etc.)",
        "Cashier-wise sales summary",
        "Opening and closing cash reconciliation",
        "Auto Z-Report transmission to MoR",
      ],
    },
  ],
  benefitsTitle: "Why Meleket POS is Right for Ethiopian Retail",
  benefits: [
    {
      title: "Serve Customers Faster",
      desc: "A transaction that takes 30 seconds with manual billing takes under 5 seconds with Meleket POS. Reduce queues and serve more customers per hour.",
    },
    {
      title: "Accept Every Payment Method",
      desc: "From cash to Telebirr to bank transfer — accept how every customer wants to pay. Never lose a sale due to payment method limitations.",
    },
    {
      title: "Never Stop Selling",
      desc: "Internet outages don't affect your POS. Meleket works fully offline and syncs automatically when connectivity returns.",
    },
    {
      title: "Always Stay Compliant",
      desc: "MoR-compliant receipts, automatic Z-Report transmission, and proper tax recording keep you legally compliant without extra effort.",
    },
    {
      title: "Staff Training Takes Minutes",
      desc: "The Meleket POS interface is designed for simplicity. Most cashiers are fully productive within a few hours of first use.",
    },
    {
      title: "Full Visibility Into Counter Performance",
      desc: "Daily sales summaries, cashier-wise reports, and hourly breakdowns give you complete visibility into how your counter is performing.",
    },
  ],
  faqTitle: "Frequently Asked Questions about Meleket POS",
  faqs: [
    {
      q: "Does Meleket POS work without internet?",
      a: "Yes. Meleket POS is built to work fully offline. All transactions are recorded locally on your device and synced to the cloud when internet is available. Your sales never stop due to connectivity issues.",
    },
    {
      q: "What payment methods does Meleket POS support?",
      a: "Meleket POS supports cash, Telebirr, CBE Birr, bank transfer, and card payments. You can split a single transaction across multiple payment methods — for example, part cash and part Telebirr.",
    },
    {
      q: "Does Meleket POS print MoR-compliant receipts?",
      a: "Yes. Every receipt printed by Meleket POS includes an IRN (Invoice Reference Number), QR code, and all required MoR fields. The daily Z-Report is automatically transmitted to the Ministry of Revenue at day close.",
    },
    {
      q: "What hardware do I need for Meleket POS?",
      a: "Meleket works on any Android or iOS phone or tablet. For a full counter setup, you can connect a USB barcode scanner, a thermal receipt printer (via USB or Bluetooth), and a cash drawer. No special hardware is required.",
    },
    {
      q: "Can multiple cashiers use Meleket POS simultaneously?",
      a: "Yes. Meleket supports multiple cashier accounts with role-based access. Each cashier has their own login, and the system tracks sales by cashier for performance reporting.",
    },
    {
      q: "How does the end-of-day closing work?",
      a: "At the end of each business day, tap 'Close Day' in Meleket. The system generates a Z-Report with total sales, payment breakdown, and tax collected. The Z-Report is automatically transmitted to the Ministry of Revenue.",
    },
  ],
  ctaTitle: "Upgrade Your Counter with Meleket POS",
  ctaSubtitle:
    "Join thousands of Ethiopian retailers using Meleket for faster checkout, Telebirr payments, and MoR-compliant receipts.",
};

export default function POSPage() {
  return <SolutionPage data={data} />;
}

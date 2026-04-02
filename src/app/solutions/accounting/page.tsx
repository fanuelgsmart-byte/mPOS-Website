import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import type { SolutionPageData } from "@/components/solutions/SolutionPage";

export const metadata: Metadata = {
  title: "Accounting Software for Ethiopian Businesses — Meleket",
  description:
    "Complete accounting software with ledger management, profit & loss, balance sheet, VAT/TOT, and MoR e-invoicing compliance. Built for Ethiopian businesses.",
};

const data: SolutionPageData = {
  slug: "accounting",
  accentColor: "#E53935",
  accentLight: "#FFF5F3",
  heroTag: "Accounting Software",
  heroTitle: "Simplify Your Business",
  heroTitleAccent: "Accounting",
  heroSubtitle:
    "From ledger entries to profit & loss statements — Meleket handles all your accounting in one place. MoR compliant, VAT-ready, and built for Ethiopian businesses.",
  heroFeatures: [
    "Auto ledger entries",
    "Profit & Loss reports",
    "VAT & TOT management",
    "MoR e-Invoicing",
    "Bank reconciliation",
    "Works offline",
  ],
  stats: [
    { value: "5,000+", label: "Businesses Trust Meleket" },
    { value: "ETB 2B+", label: "Transactions Processed" },
    { value: "40+", label: "Accounting Reports" },
    { value: "4.8★", label: "Google Play Rating" },
  ],
  featuresTitle: "Everything You Need for Business Accounting",
  features: [
    {
      icon: "📒",
      title: "Digital Ledger Management",
      description:
        "Maintain a complete digital ledger with automatic entries for every transaction. Party-wise ledgers, day books, and cash books always up to date.",
    },
    {
      icon: "📊",
      title: "Profit & Loss Statement",
      description:
        "Instantly generate profit & loss statements for any period. Understand your gross profit, operating costs, and net profitability at a glance.",
    },
    {
      icon: "⚖️",
      title: "Balance Sheet",
      description:
        "See your assets, liabilities, and equity in a clear balance sheet. Always know your business's true financial position.",
    },
    {
      icon: "🧾",
      title: "VAT & TOT Automation",
      description:
        "Automatically calculate VAT (15%) and Turnover Tax based on your registration type. Generate tax-ready reports with one click.",
    },
    {
      icon: "🏦",
      title: "Bank Reconciliation",
      description:
        "Match your bank statements with your books in minutes. Identify discrepancies and keep your accounts accurate at all times.",
    },
    {
      icon: "📤",
      title: "MoR e-Invoice Compliance",
      description:
        "Every invoice automatically generates an IRN and QR code. Daily Z-Reports transmit to the Ministry of Revenue automatically — no manual effort.",
    },
    {
      icon: "💳",
      title: "Accounts Receivable & Payable",
      description:
        "Track every birr owed to you and every birr you owe. Ageing reports, payment reminders via SMS, and supplier due-date alerts.",
    },
    {
      icon: "📁",
      title: "Expense Tracking",
      description:
        "Record and categorize all business expenses. Attach receipts, assign to departments, and generate expense reports for any period.",
    },
    {
      icon: "☁️",
      title: "Cloud Backup & Security",
      description:
        "All your accounting data is encrypted and automatically backed up to the cloud. INSA security standards compliant.",
    },
  ],
  tabsTitle: "Complete Accounting Tools for Your Business",
  tabs: [
    {
      id: "ledger",
      title: "Ledger & Cashbook Management",
      content:
        "Meleket automatically creates ledger entries for every transaction you record — sales, purchases, payments, expenses. No manual double-entry required. The cash book updates in real time so you always know how much cash your business has.",
      bullets: [
        "Auto-entries for all transactions",
        "Party-wise customer and supplier ledgers",
        "Cash book and bank book maintained automatically",
        "Day book with full transaction history",
        "Filter and search any transaction by date, party, or amount",
      ],
    },
    {
      id: "reports",
      title: "Financial Reports & Statements",
      content:
        "Generate 40+ financial reports with one tap. From daily sales summaries to annual profit & loss statements — everything is available instantly without needing an accountant.",
      bullets: [
        "Profit & Loss statement for any period",
        "Balance sheet updated in real time",
        "Trial balance and general ledger",
        "Cash flow statement",
        "Export all reports to PDF or Excel",
      ],
    },
    {
      id: "tax",
      title: "VAT, TOT & Tax Management",
      content:
        "Meleket handles Ethiopian tax calculations automatically. Whether your business is VAT-registered (15%) or falls under Turnover Tax, the system applies the correct rate on every transaction and keeps tax records organized for audit.",
      bullets: [
        "Auto VAT calculation on invoices and purchases",
        "TOT calculation for eligible businesses",
        "Input vs output VAT tracking",
        "Tax summary reports for any period",
        "Withholding tax support (2%, 15%, 30%)",
      ],
    },
    {
      id: "receivables",
      title: "Receivables & Payables",
      content:
        "Never lose track of who owes you money or who you owe. Meleket tracks every credit transaction and lets you send SMS payment reminders to customers with a single tap.",
      bullets: [
        "Customer-wise outstanding balance view",
        "Supplier-wise payable tracking",
        "Ageing analysis (0-30, 31-60, 61-90, 90+ days)",
        "One-tap SMS payment reminders",
        "Credit limit alerts for customers",
      ],
    },
    {
      id: "reconciliation",
      title: "Bank Reconciliation",
      content:
        "Import your bank statement and match transactions with your Meleket records in minutes. Identify unrecorded transactions, bank charges, and discrepancies automatically.",
      bullets: [
        "Statement import via CSV",
        "Auto-match with existing transactions",
        "Flag and resolve discrepancies",
        "Monthly reconciliation reports",
        "Multiple bank accounts supported",
      ],
    },
  ],
  benefitsTitle: "Why Ethiopian Businesses Choose Meleket for Accounting",
  benefits: [
    {
      title: "No Accounting Degree Required",
      desc: "Meleket is designed so any business owner can manage accounts without any accounting background. The interface guides you through every step.",
    },
    {
      title: "MoR Compliance Built In",
      desc: "Automatic IRN generation, QR codes on every invoice, and daily Z-Report transmission to the Ministry of Revenue — compliance is never an afterthought.",
    },
    {
      title: "Works Online and Offline",
      desc: "Record transactions even without internet. All data syncs automatically when you reconnect, so business never stops due to connectivity issues.",
    },
    {
      title: "Amharic & English Support",
      desc: "Switch between Amharic and English at any time. Generate invoices and reports in either language, with full Ethiopian Calendar support.",
    },
    {
      title: "Real-Time Financial Visibility",
      desc: "See your profit, cash position, and outstanding payments the moment you open the app. No waiting for month-end closing.",
    },
    {
      title: "Affordable for Small Businesses",
      desc: "Professional accounting software at a price that works for Ethiopian small and medium businesses. No hidden fees, no per-user charges.",
    },
  ],
  faqTitle: "Frequently Asked Questions about Meleket Accounting",
  faqs: [
    {
      q: "Do I need accounting knowledge to use Meleket?",
      a: "No. Meleket is designed for business owners, not accountants. You simply record your sales, purchases, and expenses — the software handles all the double-entry bookkeeping and generates financial reports automatically.",
    },
    {
      q: "Is Meleket compliant with Ethiopia's Ministry of Revenue requirements?",
      a: "Yes. Meleket is MoR-certified and automatically generates IRN (Invoice Reference Numbers) and QR codes on every invoice. The daily Z-Report is transmitted to the Ministry of Revenue at the end of each business day without any manual action.",
    },
    {
      q: "Can I generate VAT reports for my accountant or tax authority?",
      a: "Yes. Meleket generates complete VAT reports showing input VAT, output VAT, and net VAT payable. All reports can be exported to PDF or Excel and are formatted according to Ethiopian tax requirements.",
    },
    {
      q: "Does Meleket work without internet?",
      a: "Yes. Meleket works fully offline. All transactions are recorded locally and synced to the cloud when connectivity is restored. This is essential for businesses in areas with inconsistent internet.",
    },
    {
      q: "How is my accounting data protected?",
      a: "Your data is encrypted with enterprise-grade encryption and automatically backed up to the cloud. Meleket meets INSA (Information Network Security Administration) security standards. Only authorized users with role-based access can view financial data.",
    },
    {
      q: "Can multiple staff members use the accounting features?",
      a: "Yes. Meleket supports role-based access. You can restrict accounting reports and financial data to specific staff members, while other roles only see what they need for their job.",
    },
  ],
  ctaTitle: "Start Managing Your Accounts with Meleket",
  ctaSubtitle:
    "Join 5,000+ Ethiopian businesses using Meleket for complete accounting, MoR compliance, and financial visibility.",
};

export default function AccountingPage() {
  return <SolutionPage data={data} />;
}

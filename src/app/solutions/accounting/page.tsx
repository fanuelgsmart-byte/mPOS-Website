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
  title: "Accounting Software for Small Business — Meleket",
  description:
    "Complete accounting software with ledger management, profit & loss, balance sheet, VAT/TOT, bank reconciliation, and MoR e-invoicing. Built for Ethiopian businesses.",
};

const ACCENT = "#E53935";
const ACCENT_LIGHT = "#FFF5F3";

export default function AccountingPage() {
  return (
    <>
      <Navbar />
      <SolutionLayout downloadBarLabel="Download Meleket Accounting Software — Free for Ethiopian Businesses">
        {/* ── HERO ── */}
        <HeroSection
          breadcrumb="Accounting Software"
          title="Accounting Software for"
          titleAccent="Small Business"
          subtitle="Manage ledgers, generate profit & loss statements, stay MoR compliant, and handle VAT/TOT — all in one app designed for Ethiopian businesses."
          ctaLabel="Download Accounting Software"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          dashboardType="accounting"
          labels={[
            { text: "Easy & Professional Invoices", icon: "🧾", pos: { top: "8%", right: "-2%" } },
            { text: "Complete Expense Management", icon: "📊", pos: { bottom: "28%", right: "-2%" } },
            { text: "Accurate Inventory Tracking", icon: "📦", pos: { bottom: "8%", left: "5%" } },
          ]}
        />

        {/* ── COMPARISON TABLE ── */}
        <ComparisonTable
          title="Why Meleket Accounting Software is the Perfect Choice for Your Business?"
          accentColor={ACCENT}
          basicLabel="Basic Accounting"
          meleket="Meleket"
          features={[
            { name: "Digital Ledger Management", basic: false, meleket: true },
            { name: "Profit & Loss Statements", basic: false, meleket: true },
            { name: "Balance Sheet Generation", basic: false, meleket: true },
            { name: "VAT & TOT Calculation", basic: false, meleket: true },
            { name: "Bank Reconciliation", basic: false, meleket: true },
            { name: "MoR e-Invoice Compliance", basic: false, meleket: true },
            { name: "Accounts Receivable & Payable", basic: true, meleket: true },
            { name: "Expense Tracking", basic: true, meleket: true },
            { name: "Multi-User Access", basic: false, meleket: true },
            { name: "Works Online & Offline", basic: false, meleket: true },
            { name: "Cloud Data Backup", basic: false, meleket: true },
            { name: "Amharic & English Interface", basic: false, meleket: true },
          ]}
        />

        {/* ── FEATURE CARDS ── */}
        <FeatureCards
          title="Features of Accounting Software for Small Business"
          accentColor={ACCENT}
          cards={[
            {
              icon: "📒",
              title: "Easy and Professional Invoice Generation",
              description: "Create MoR-compliant invoices with automatic IRN and QR code in seconds. Choose from 15+ professional templates.",
              bullets: [
                "Auto IRN and QR code on every invoice",
                "15+ professional invoice templates",
                "Recurring billing for regular customers",
                "Custom fields for your business needs",
                "Send via SMS, email, or WhatsApp",
              ],
            },
            {
              icon: "💸",
              title: "Complete Expense Management",
              description: "Track every business expense with categories, receipt attachments, and department-wise breakdowns.",
              bullets: [
                "Categorize expenses by type",
                "Attach photos of receipts",
                "Department-wise expense reports",
                "Compare expenses month over month",
              ],
            },
            {
              icon: "⚖️",
              title: "Accurate Balance Sheet",
              description: "See your assets, liabilities, and equity in a clean balance sheet that updates in real time as you record transactions.",
              bullets: [
                "Real-time balance sheet",
                "Asset and liability breakdowns",
                "Equity tracking",
                "Export to PDF or Excel",
              ],
            },
            {
              icon: "📊",
              title: "Profit & Loss Reports",
              description: "Instantly understand your business profitability with detailed P&L statements for any date range.",
              bullets: [
                "Gross profit calculation",
                "Operating expense breakdown",
                "Net profit with tax deductions",
                "Compare periods side-by-side",
              ],
            },
            {
              icon: "🏦",
              title: "VAT & TOT Management",
              description: "Automatically calculate and track Ethiopian VAT (15%) and Turnover Tax. Generate tax-ready reports in one tap.",
              bullets: [
                "Auto VAT/TOT calculation",
                "Input vs output VAT tracking",
                "Withholding tax support",
                "Tax summary for any period",
              ],
            },
            {
              icon: "☁️",
              title: "Automatic Cloud Backup",
              description: "Your accounting data is encrypted and automatically backed up to the cloud. INSA security standards compliant.",
              bullets: [
                "Continuous cloud backup",
                "INSA security compliance",
                "Restore from any point in time",
                "Works offline, syncs when online",
              ],
            },
          ]}
        />

        {/* ── ADVANCED FEATURES ── */}
        <AdvancedFeatures
          title="Advanced Features Built for Small Business Growth"
          accentColor={ACCENT}
          features={[
            {
              title: "Customer Management and History",
              description: "Keep complete records of every customer — their contact details, purchase history, outstanding balances, and communication log — all in one place.",
              bullets: [
                "Customer profiles with full purchase history",
                "Outstanding balance view per customer",
                "Credit limit setting and alerts",
                "Customer statement generation",
                "Birthday and follow-up reminders",
              ],
              imagePlaceholder: "👤",
            },
            {
              title: "Payment Tracking and Reminders",
              description: "Never miss a payment or let a receivable go overdue. Meleket tracks every payment and sends automated SMS reminders to your customers.",
              bullets: [
                "Real-time payment status on all invoices",
                "One-tap SMS payment reminder",
                "Ageing analysis (30, 60, 90+ days)",
                "Partial payment recording",
                "Payment receipt generation",
              ],
              imagePlaceholder: "💳",
            },
            {
              title: "Purchase Order Management",
              description: "Create professional purchase orders, send them to suppliers, and automatically update inventory when goods are received.",
              bullets: [
                "Create and send purchase orders digitally",
                "Track order fulfillment status",
                "Auto-update stock on goods receipt",
                "Supplier-wise purchase history",
                "Purchase vs sales comparison",
              ],
              imagePlaceholder: "🛒",
            },
            {
              title: "Bank and Cash Flow Management",
              description: "Track all cash and bank accounts. Record deposits, withdrawals, and transfers. Generate cash flow statements to understand money movement.",
              bullets: [
                "Multiple bank account management",
                "Cash and bank reconciliation",
                "Cash flow statements",
                "Bank transaction import via CSV",
                "Telebirr and CBE Birr tracking",
              ],
              imagePlaceholder: "🏦",
            },
            {
              title: "Staff Access and Permissions",
              description: "Control who sees what in your accounting system. Set role-based access so staff only access the features they need.",
              bullets: [
                "Role-based access control",
                "Restrict financial reports by role",
                "Audit trail of all user actions",
                "Multiple staff accounts",
                "Separate cashier and manager roles",
              ],
              imagePlaceholder: "🔐",
            },
            {
              title: "Business Reports and Dashboard",
              description: "Generate 40+ business reports covering every aspect of your finances. Export to PDF or Excel for your accountant or tax authority.",
              bullets: [
                "40+ built-in report templates",
                "Daily, weekly, monthly summaries",
                "Tax reports ready for authority",
                "Export to PDF and Excel",
                "Scheduled automatic report generation",
              ],
              imagePlaceholder: "📈",
            },
          ]}
        />

        {/* ── PILL TABS ── */}
        <PillTabs
          title="Why Meleket is the Best Accounting Software for Small Business"
          accentColor={ACCENT}
          tabs={[
            {
              label: "Cost-Effective",
              imagePlaceholder: "💰",
              description: "Professional accounting software at a price designed for Ethiopian small businesses. No per-user charges, no hidden fees. One affordable subscription gives your entire team access to complete accounting features that previously only large corporations could afford.",
            },
            {
              label: "Quick Setup",
              imagePlaceholder: "⚡",
              description: "Get started in under 30 minutes. Import your existing product list and customer data via CSV, configure your tax settings, and you're ready to start recording transactions. No IT team or consultant required.",
            },
            {
              label: "No Internet Needed",
              imagePlaceholder: "📶",
              description: "Record every transaction even without internet connectivity. All your accounting data is stored locally and synced to the cloud automatically when you reconnect. Essential for businesses in areas with unreliable internet.",
            },
            {
              label: "Multi-Device Compatible",
              imagePlaceholder: "📱",
              description: "Use Meleket on your Android phone, iPhone, tablet, or computer. All your data syncs across devices in real time. Check your accounts from anywhere — your office, home, or on the road.",
            },
            {
              label: "Professional Image",
              imagePlaceholder: "✨",
              description: "Branded invoices with your logo and color theme, professional financial reports, and compliant e-invoices make your business look established and trustworthy to customers, suppliers, and tax authorities.",
            },
          ]}
        />

        {/* ── TRUST & TESTIMONIALS ── */}
        <TrustTestimonials
          accentColor={ACCENT}
          stats={[
            { value: "5,000+", label: "Businesses Trust Meleket" },
            { value: "ETB 2B+", label: "Transactions Processed" },
            { value: "40+", label: "Report Templates" },
            { value: "4.8★", label: "Average Rating" },
          ]}
          testimonials={[
            {
              name: "Abebe Kebede",
              business: "Kebede General Trading",
              city: "Addis Ababa",
              rating: 5,
              quote: "Before this software, everything was on paper. Now I manage all my accounts easily and the MoR compliance happens automatically every night. My accountant is impressed.",
              avatar: "AK",
            },
            {
              name: "Tigist Hailu",
              business: "Hailu Supermarket",
              city: "Bahir Dar",
              rating: 5,
              quote: "The e-invoicing feature is exactly what we needed. The Z-Report sends automatically every night — I don't have to worry about compliance at all. The accounting reports are so clear.",
              avatar: "TH",
            },
          ]}
        />

        {/* ── FAQ ── */}
        <FAQSection
          accentColor={ACCENT}
          title="Frequently Asked Questions about Meleket Accounting Software"
          faqs={[
            {
              q: "Do I need accounting knowledge to use Meleket?",
              a: "No. Meleket is designed for business owners, not accountants. You simply record your sales, purchases, and expenses — the software handles all the double-entry bookkeeping and generates financial reports automatically.",
            },
            {
              q: "Is Meleket compliant with Ethiopia's Ministry of Revenue?",
              a: "Yes. Meleket is MoR-certified. Every invoice automatically generates an IRN and QR code. The daily Z-Report is transmitted to the Ministry of Revenue automatically at end of business day — no manual action required.",
            },
            {
              q: "Can I generate VAT reports for the tax authority?",
              a: "Yes. Meleket generates complete VAT reports showing input VAT, output VAT, and net VAT payable. All reports can be exported to PDF or Excel formatted according to Ethiopian tax requirements.",
            },
            {
              q: "Does Meleket accounting software work without internet?",
              a: "Yes. Meleket works fully offline. All transactions are recorded locally and synced to the cloud when connectivity is restored. This is critical for businesses in areas with inconsistent internet.",
            },
            {
              q: "Can multiple staff members use the accounting features?",
              a: "Yes. Meleket supports role-based access. You can restrict accounting reports and financial data to specific staff members, while other roles only see what they need for their job function.",
            },
            {
              q: "How is my accounting data protected?",
              a: "Your data is encrypted with enterprise-grade encryption and automatically backed up to the cloud. Meleket meets INSA (Information Network Security Administration) security standards.",
            },
            {
              q: "Can I import my existing data into Meleket?",
              a: "Yes. You can import products, customers, and opening balances via CSV files. The import wizard guides you through mapping your columns to Meleket's fields. Most businesses complete data import in under an hour.",
            },
            {
              q: "Does Meleket support the Ethiopian Calendar?",
              a: "Yes. Meleket fully supports the Ethiopian Calendar alongside the Gregorian calendar. You can view dates, generate reports, and set reminders in either calendar system. All invoices and reports can use Ethiopian dates.",
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

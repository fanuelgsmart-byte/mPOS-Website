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
import IndustrySection from "@/components/solutions/IndustrySection";
import AdditionalProducts from "@/components/solutions/AdditionalProducts";

export const metadata: Metadata = {
  title: "POS Software for Small Business — Meleket",
  description:
    "Lightning-fast POS billing with barcode scanning, thermal printing, Telebirr and CBE Birr payments, MoR-compliant receipts, and offline mode. Built for Ethiopian retail.",
};

const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#F5F3FF";

export default function POSPage() {
  return (
    <>
      <Navbar />
      <SolutionLayout downloadBarLabel="Download Meleket POS Software — Free for Ethiopian Businesses">
        {/* ── HERO ── */}
        <HeroSection
          breadcrumb="POS Software"
          title="POS Software for"
          titleAccent="Small Business"
          subtitle="Simplify your sales, inventory, and payment processes. Process counter sales in under 3 seconds with barcode scanning, Telebirr, and MoR-compliant receipts."
          ctaLabel="Download POS Software"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          dashboardType="pos"
          labels={[
            { text: "Quick Sales Transactions", icon: "⚡", pos: { top: "8%", right: "-2%" } },
            { text: "Inventory Tracking", icon: "📦", pos: { bottom: "28%", right: "-2%" } },
            { text: "TAX Compliant Invoicing", icon: "✅", pos: { bottom: "8%", left: "5%" } },
          ]}
        />

        {/* ── COMPARISON TABLE ── */}
        <ComparisonTable
          title="Why Meleket POS Software is the Perfect Choice for Your Business?"
          accentColor={ACCENT}
          basicLabel="Basic POS"
          meleket="Meleket"
          features={[
            { name: "Inventory Management", basic: false, meleket: true },
            { name: "Sales Reporting", basic: true, meleket: true },
            { name: "TAX Compliance (MoR/VAT)", basic: false, meleket: true },
            { name: "User Interface & Ease of Use", basic: false, meleket: true },
            { name: "Discounts and Promotions", basic: true, meleket: true },
            { name: "Multi-User Access", basic: false, meleket: true },
            { name: "TAX Calculations", basic: false, meleket: true },
            { name: "Expense Tracking", basic: false, meleket: true },
            { name: "E-Invoice Creation (IRN + QR)", basic: false, meleket: true },
            { name: "Stock Tracking", basic: false, meleket: true },
            { name: "Real-Time Online Sync", basic: false, meleket: true },
            { name: "Telebirr & CBE Birr Payments", basic: false, meleket: true },
          ]}
        />

        {/* ── FEATURE CARDS ── */}
        <FeatureCards
          title="Top Features of the Best POS Software for Small Business"
          accentColor={ACCENT}
          cards={[
            {
              icon: "⚡",
              title: "Quick Sales Transactions",
              description: "Process a complete sale in under 3 seconds. Keyboard shortcuts and quick-access product buttons make checkout lightning fast.",
              bullets: [
                "F6 for new sale, F7 for payment",
                "Barcode scanning for instant product add",
                "Quick-access buttons for top products",
                "Customizable product shortlist",
                "Split-tender payment support",
              ],
            },
            {
              icon: "📦",
              title: "Inventory Tracking in Real-Time",
              description: "Every sale automatically deducts stock. See real-time inventory levels without leaving the POS screen.",
              bullets: [
                "Real-time stock deduction on sale",
                "Low inventory warnings at checkout",
                "Multi-warehouse stock visibility",
                "Stock value overview dashboard",
              ],
            },
            {
              icon: "✅",
              title: "TAX Compliant Invoicing",
              description: "Every receipt includes an IRN and QR code meeting Ministry of Revenue requirements. Daily Z-Reports transmit automatically.",
              bullets: [
                "Auto IRN on every receipt",
                "MoR QR code generation",
                "VAT/TOT breakdown on receipt",
                "Daily Z-Report auto-transmission",
                "Customizable receipt templates",
              ],
            },
            {
              icon: "💱",
              title: "Multi-Currency Support",
              description: "Accept payments in ETB and foreign currencies. Set currency by customer for international clients and track exchange rates.",
              bullets: [
                "Set currency per customer",
                "ETB equivalent recording",
                "Multi-currency sales reports",
                "Global client billing support",
              ],
            },
          ]}
        />

        {/* ── ADVANCED FEATURES ── */}
        <AdvancedFeatures
          title="10 Advanced Features Built for Small Business POS"
          accentColor={ACCENT}
          features={[
            {
              title: "Inventory Management",
              description: "Real-time stock updates with every sale. Detailed product listings with stock value insights. Low inventory alerts prevent stockouts at the counter.",
              bullets: [
                "Real-time stock updates on sale",
                "Stock value insights dashboard",
                "Detailed product listing with variants",
                "Low inventory alerts at POS",
                "Multi-warehouse stock view",
              ],
              imagePlaceholder: "📦",
            },
            {
              title: "Business Dashboard & Insights",
              description: "Complete overview dashboard showing today's sales, pending collections, and weekly trends. Visual reports using graphs and charts.",
              bullets: [
                "Daily sales overview at a glance",
                "Track outstanding dues",
                "Visual revenue graphs and charts",
                "Top-selling products analysis",
                "Cashier performance comparison",
              ],
              imagePlaceholder: "📊",
            },
            {
              title: "Expense Tracking",
              description: "Add daily counter expenses directly at the POS. Categorize costs and download expense vs revenue reports.",
              bullets: [
                "Quick expense entry at POS",
                "Expense category management",
                "Daily expense summary",
                "Expense vs revenue comparison",
                "Export expense reports",
              ],
              imagePlaceholder: "💸",
            },
            {
              title: "Customer Management",
              description: "Store customer information, view transaction history, and send instant invoices via WhatsApp or email directly from the POS.",
              bullets: [
                "Customer profile with full history",
                "Credit sale and balance tracking",
                "Instant WhatsApp/email invoice",
                "Customer loyalty points tracking",
                "Credit limit enforcement",
              ],
              imagePlaceholder: "👤",
            },
            {
              title: "Barcode Billing",
              description: "Efficient billing using barcode scanning for instant product lookup. Generate and print barcode labels for all your products.",
              bullets: [
                "Phone camera barcode scanning",
                "USB barcode scanner support",
                "Instant product add on scan",
                "Barcode label generation",
                "Bulk barcode import",
              ],
              imagePlaceholder: "📟",
            },
            {
              title: "User Role Management",
              description: "Create separate staff accounts with specific permissions. Cashiers handle sales; managers get full access. Complete audit trail of all actions.",
              bullets: [
                "Cashier, manager, admin roles",
                "Permission-level access control",
                "Audit trail of all transactions",
                "Individual cashier login pins",
                "Unauthorized action blocking",
              ],
              imagePlaceholder: "🔐",
            },
            {
              title: "Cash & Bank Management",
              description: "Add cash and bank accounts. Track inflows and outflows. Generate cash flow reports. Manage shift opening and closing cash.",
              bullets: [
                "Opening and closing cash tracking",
                "Telebirr and CBE Birr accounts",
                "Cash drawer reconciliation",
                "Cash flow reports",
                "Bank account management",
              ],
              imagePlaceholder: "🏦",
            },
            {
              title: "Quotation & Estimates",
              description: "Create professional quotations at the counter. Convert approved quotes to invoices with one tap. Send quotes digitally to customers.",
              bullets: [
                "Quotation creation at POS",
                "Digital quote delivery",
                "One-tap quote-to-invoice",
                "Quote validity settings",
                "Quotation follow-up tracking",
              ],
              imagePlaceholder: "📋",
            },
            {
              title: "Sales Order & Delivery Tracking",
              description: "Manage sales orders, track delivery status, and generate delivery challans for goods dispatched from your counter.",
              bullets: [
                "Sales order management",
                "Delivery status tracking",
                "Challan generation",
                "Partial delivery support",
                "Order fulfillment reports",
              ],
              imagePlaceholder: "🚚",
            },
            {
              title: "Backup & Data Security",
              description: "All POS data is automatically backed up to the cloud. INSA-compliant encryption protects your transaction data.",
              bullets: [
                "Automatic cloud backup",
                "INSA security compliance",
                "Transaction-level encryption",
                "Restore from any point",
                "Works offline, syncs on reconnect",
              ],
              imagePlaceholder: "🔒",
            },
          ]}
        />

        {/* ── PILL TABS ── */}
        <PillTabs
          title="Why Meleket is the Best POS Software for Small Business"
          accentColor={ACCENT}
          tabs={[
            {
              label: "Cost-Effective for New Entrepreneurs",
              imagePlaceholder: "💰",
              description: "Professional POS software at a price designed for Ethiopian small businesses. No per-device charges, no hidden hardware requirements. Get a complete counter billing system for a fraction of the cost of international POS solutions.",
            },
            {
              label: "User-Friendly Interface",
              imagePlaceholder: "🎯",
              description: "Most cashiers are fully productive within a few hours of first use. The POS interface is designed for speed — not complexity. Large product buttons, easy quantity input, and clear payment screens mean your staff spend less time training and more time serving customers.",
            },
            {
              label: "Offline Mode for Uninterrupted Business",
              imagePlaceholder: "📶",
              description: "Internet outages don't stop your sales. Meleket POS works fully offline — all transactions are recorded locally and synced automatically when connectivity returns. Cash and card payments process without internet. Telebirr transactions queue and process when online.",
            },
            {
              label: "Works Across Multiple Devices",
              imagePlaceholder: "📱",
              description: "Run your POS on any Android or iOS phone or tablet. Add USB barcode scanners and Bluetooth thermal printers for a full counter setup. Multiple cashier stations can run simultaneously from different devices on the same account.",
            },
            {
              label: "Professional, Customizable Invoices",
              imagePlaceholder: "✨",
              description: "Every receipt carries your business logo, MoR-compliant IRN and QR code, and professional formatting. Choose from multiple receipt templates for thermal, A5, or A4 printing. Customers receive professional documentation that builds trust in your business.",
            },
          ]}
        />

        {/* ── INDUSTRIES ── */}
        <IndustrySection
          title="Industries That Benefit from Meleket POS Software"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          industries={[
            {
              icon: "🏪",
              name: "Retail Businesses",
              description: "Ethiopian retail shops use Meleket POS to process hundreds of transactions daily. Barcode scanning, multiple payment methods including Telebirr, and MoR-compliant receipts make counter billing fast and compliant. Staff learn the system in hours.",
            },
            {
              icon: "🍽️",
              name: "Restaurant Industry",
              description: "Cafes and restaurants use Meleket for table billing, kitchen order management, and daily cash reconciliation. Modifier support for customizing orders, split billing for group tables, and end-of-shift Z-Reports simplify restaurant operations.",
            },
            {
              icon: "🚚",
              name: "Wholesale Distribution",
              description: "Wholesalers use Meleket POS for walk-in customer billing alongside regular invoice-based sales. Credit sales, bulk quantity discounts, and wholesale price lists are all handled. Multi-location stock is always visible during billing.",
            },
            {
              icon: "🔧",
              name: "Service-Based Businesses",
              description: "Service businesses bill customers for parts and labor at the counter. Meleket tracks service inventory, generates professional service receipts, and manages customer accounts for repeat service businesses.",
            },
            {
              icon: "🏭",
              name: "Manufacturing Industry",
              description: "Small manufacturers sell finished goods directly to customers and distributors using Meleket POS. Production-to-sale tracking, bulk order processing, and distributor credit management are all supported.",
            },
          ]}
        />

        {/* ── TRUST & TESTIMONIALS ── */}
        <TrustTestimonials
          accentColor={ACCENT}
          stats={[
            { value: "< 3s", label: "Average Transaction" },
            { value: "10+", label: "Payment Methods" },
            { value: "Zero", label: "Offline Missed Sales" },
            { value: "4.8★", label: "Customer Rating" },
          ]}
          testimonials={[
            {
              name: "Meron Bekele",
              business: "Bekele Cafe",
              city: "Dire Dawa",
              rating: 5,
              quote: "The POS billing is incredibly fast — my staff learned it in one afternoon and customers love getting proper MoR receipts. Telebirr integration means we never lose a sale due to cash shortages.",
              avatar: "MB",
            },
            {
              name: "Biruk Hailu",
              business: "Hailu Electronics",
              city: "Addis Ababa",
              rating: 5,
              quote: "Managing a busy electronics counter with 500+ products was chaotic before Meleket. Now barcode scanning means no pricing errors. The offline mode saved us during a network outage last month.",
              avatar: "BH",
            },
          ]}
        />

        {/* ── FAQ ── */}
        <FAQSection
          accentColor={ACCENT}
          title="Frequently Asked Questions about Meleket POS Software"
          faqs={[
            {
              q: "What is the best POS software for small businesses in Ethiopia?",
              a: "Meleket is designed specifically for Ethiopian small businesses. It includes MoR e-invoice compliance, Telebirr and CBE Birr payment integration, Amharic language support, Ethiopian Calendar, and works fully offline — making it the most complete POS solution for Ethiopian businesses.",
            },
            {
              q: "Is Meleket POS available for free?",
              a: "Meleket offers a free plan with core POS features. The premium plan unlocks advanced features like multi-warehouse inventory, payroll, and detailed analytics. Download the app to start with the free plan and upgrade when you need more.",
            },
            {
              q: "Does Meleket POS work on desktop computers?",
              a: "Yes. Meleket runs on Android, iOS, and Windows. Use it on your phone, tablet, or desktop computer. All data syncs across all your devices in real time.",
            },
            {
              q: "Does Meleket POS work offline?",
              a: "Yes. Meleket POS is built offline-first. All transactions are recorded locally on your device and synced to the cloud when internet is available. Your sales never stop due to connectivity issues.",
            },
            {
              q: "Is Meleket POS compliant with Ethiopian tax laws?",
              a: "Yes. Meleket is MoR-certified. Every receipt includes an IRN and QR code. Daily Z-Reports are automatically transmitted to the Ministry of Revenue. VAT and TOT are calculated automatically on all transactions.",
            },
            {
              q: "Does Meleket POS support barcode scanners?",
              a: "Yes. Meleket supports USB barcode scanners, Bluetooth scanners, and your smartphone camera as a barcode scanner. It works with all standard barcode formats including EAN-13, UPC-A, and QR codes.",
            },
            {
              q: "Can Meleket POS handle expense and payment management?",
              a: "Yes. You can record daily counter expenses directly in the POS. Accept payments via cash, Telebirr, CBE Birr, bank transfer, or card. End-of-day reports show all payments received and expenses incurred.",
            },
            {
              q: "Is there a mobile version of Meleket POS?",
              a: "Yes. Meleket POS runs natively on Android and iOS phones. The mobile interface is optimized for touchscreens with large buttons and easy navigation. Add a Bluetooth thermal printer for complete mobile billing.",
            },
          ]}
        />

        {/* ── ADDITIONAL PRODUCTS ── */}
        <AdditionalProducts exclude="pos" />

        {/* ── STAR RATING ── */}
        <StarRating accentColor={ACCENT} />

        {/* ── FOOTER ── */}
        <DarkFooter />
      </SolutionLayout>
    </>
  );
}

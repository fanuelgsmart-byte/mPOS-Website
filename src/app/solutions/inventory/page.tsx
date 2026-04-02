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

export const metadata: Metadata = {
  title: "Inventory Management Software for Small Businesses — Meleket",
  description:
    "Multi-warehouse stock management with barcode scanning, low-stock alerts, FIFO/LIFO costing, and batch tracking. Built for Ethiopian retailers and wholesalers.",
};

const ACCENT = "#059669";
const ACCENT_LIGHT = "#ECFDF5";

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <SolutionLayout downloadBarLabel="Download Meleket Inventory Software — Free for Ethiopian Businesses">
        {/* ── HERO ── */}
        <HeroSection
          breadcrumb="Inventory Management Software"
          title="Inventory Management Software"
          titleAccent="for Small Businesses"
          subtitle="Track every item from purchase to sale across multiple warehouses. Real-time stock levels, low-stock alerts, and barcode scanning for Ethiopian retailers and wholesalers."
          ctaLabel="Download Inventory Software"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          dashboardType="inventory"
          labels={[
            { text: "Real-Time Stock Tracking", icon: "📊", pos: { top: "8%", right: "-2%" } },
            { text: "Low Stock Alerts", icon: "🔔", pos: { bottom: "28%", right: "-2%" } },
            { text: "Barcode Inventory System", icon: "📟", pos: { bottom: "8%", left: "5%" } },
          ]}
        />

        {/* ── COMPARISON TABLE ── */}
        <ComparisonTable
          title="Why Meleket Inventory Software is the Perfect Choice for Your Business?"
          accentColor={ACCENT}
          basicLabel="Basic Inventory"
          meleket="Meleket"
          features={[
            { name: "Barcode Integration", basic: false, meleket: true },
            { name: "Customizable Invoices", basic: false, meleket: true },
            { name: "TAX Compliance (MoR/VAT)", basic: false, meleket: true },
            { name: "User Interface & Ease of Use", basic: false, meleket: true },
            { name: "Balance Sheet Report", basic: false, meleket: true },
            { name: "Multi-User Access", basic: false, meleket: true },
            { name: "Tax Calculations", basic: false, meleket: true },
            { name: "Expense Tracking", basic: true, meleket: true },
            { name: "E-Invoice Creation", basic: false, meleket: true },
            { name: "Stock Tracking", basic: true, meleket: true },
            { name: "Real-Time Online Sync", basic: false, meleket: true },
            { name: "Batch & Expiry Tracking", basic: false, meleket: true },
          ]}
        />

        {/* ── FEATURE CARDS ── */}
        <FeatureCards
          title="Features of the Best Inventory Management Software"
          accentColor={ACCENT}
          cards={[
            {
              icon: "📊",
              title: "Real-Time Stock Tracking",
              description: "Every sale, purchase, and adjustment updates your inventory in real time. Always know exactly what you have without manual counts.",
              bullets: [
                "Auto stock deduction on every sale",
                "Auto stock increment on purchase receipt",
                "Real-time view across all locations",
                "Complete stock movement history",
                "Discrepancy detection alerts",
              ],
            },
            {
              icon: "📟",
              title: "Barcode Inventory System",
              description: "Use your phone camera as a barcode scanner for receiving goods, stock counting, and billing. Works with all standard barcode formats.",
              bullets: [
                "Phone camera barcode scanning",
                "USB barcode scanner support",
                "Barcode label printing",
                "Bulk barcode import",
                "QR code generation",
              ],
            },
            {
              icon: "🏭",
              title: "Multi-Warehouse Stock Management",
              description: "Manage stock across multiple warehouses, stores, or locations from one dashboard. Transfer stock between locations with full documentation.",
              bullets: [
                "Unlimited warehouse/location setup",
                "Location-wise stock view",
                "Inter-location stock transfer",
                "Transfer approval workflow",
                "Consolidated inventory reports",
              ],
            },
            {
              icon: "🔔",
              title: "Low Stock Alerts & Reorder Reminders",
              description: "Set minimum stock levels per item and get automatic alerts before you run out. Never miss a reorder again.",
              bullets: [
                "Item-level minimum stock settings",
                "Push notification alerts",
                "Daily low-stock summary report",
                "Suggested reorder quantities",
                "One-tap purchase order from alert",
              ],
            },
          ]}
        />

        {/* ── ADVANCED FEATURES ── */}
        <AdvancedFeatures
          title="Advanced Features of Meleket Inventory Software Built for Small Businesses"
          accentColor={ACCENT}
          features={[
            {
              title: "Purchase Management",
              description: "Create purchase orders, send them to suppliers, and receive goods against them. Inventory updates automatically when goods arrive.",
              bullets: [
                "Purchase order creation and sending",
                "Supplier price comparison",
                "Goods receipt with stock update",
                "Purchase returns management",
                "Supplier ledger and ageing",
              ],
              imagePlaceholder: "🛒",
            },
            {
              title: "Sales Management",
              description: "Process sales with automatic inventory deduction. Support for wholesale, retail, and consignment sales with different pricing.",
              bullets: [
                "Auto stock deduction on sale",
                "Retail and wholesale pricing",
                "Consignment sales tracking",
                "Sales return processing",
                "Customer-wise sales history",
              ],
              imagePlaceholder: "🏪",
            },
            {
              title: "Stock Adjustment Entries",
              description: "Record stock write-offs, damage, theft, or adjustments with proper documentation. Full audit trail of all adjustments.",
              bullets: [
                "Stock write-off recording",
                "Damage and wastage tracking",
                "Physical count adjustment",
                "Adjustment reason codes",
                "Auditable adjustment history",
              ],
              imagePlaceholder: "✏️",
            },
            {
              title: "Batch & Expiry Tracking",
              description: "Track batch numbers and expiry dates for perishable goods, pharmaceuticals, and food products. Automatic FIFO dispatch for perishables.",
              bullets: [
                "Batch number tracking",
                "Expiry date management",
                "Expiry alerts before stock expires",
                "FIFO for perishables enforcement",
                "Batch-wise stock valuation",
              ],
              imagePlaceholder: "🏷️",
            },
            {
              title: "Inventory Reports",
              description: "Generate detailed inventory reports for any date range. Identify fast-movers, slow-movers, and dead stock.",
              bullets: [
                "Stock summary and valuation",
                "Fast-moving items analysis",
                "Slow-moving and dead stock",
                "Stock movement history",
                "Inventory ageing analysis",
              ],
              imagePlaceholder: "📈",
            },
            {
              title: "Tax-Ready Inventory",
              description: "All inventory transactions are automatically linked to your accounting. VAT on purchases is tracked for input tax credit claims.",
              bullets: [
                "Purchase VAT tracking for credits",
                "Stock value for balance sheet",
                "COGS calculation for P&L",
                "Tax-ready inventory reports",
                "Export to accountant format",
              ],
              imagePlaceholder: "🧮",
            },
          ]}
        />

        {/* ── PILL TABS ── */}
        <PillTabs
          title="Why Meleket is the Best Inventory Management Software"
          accentColor={ACCENT}
          tabs={[
            {
              label: "Designed for Non-Tech Business Owners",
              imagePlaceholder: "👩‍💼",
              description: "You don't need to be technical to use Meleket's inventory management. The interface is designed like a simple ledger book — familiar to any Ethiopian business owner. Add products, record purchases, and your inventory is always accurate.",
            },
            {
              label: "All-in-One: Billing + Inventory + Accounting",
              imagePlaceholder: "🔗",
              description: "Meleket connects your inventory directly to billing and accounting. When you make a sale, inventory goes down and revenue goes up — automatically. No separate systems, no manual reconciliation, no errors.",
            },
            {
              label: "Low-Stock Alerts & Smart Ordering",
              imagePlaceholder: "🔔",
              description: "Set minimum stock levels for each product and Meleket alerts you before you run out. The system even suggests reorder quantities based on your sales history, so you never overstock or understock.",
            },
            {
              label: "Barcode and Batch Tracking",
              imagePlaceholder: "📟",
              description: "Scan barcodes with your phone to receive goods and make sales 10x faster. Track batch numbers and expiry dates for complete product traceability — essential for food, pharmacy, and healthcare businesses.",
            },
            {
              label: "Offline Mode & Data Security",
              imagePlaceholder: "🔒",
              description: "Your inventory data is available even without internet. All transactions sync automatically when you reconnect. Enterprise-grade encryption protects your stock data, and INSA compliance keeps you audit-ready.",
            },
          ]}
        />

        {/* ── INDUSTRIES ── */}
        <IndustrySection
          title="Industries That Benefit from Meleket Inventory Management"
          accentColor={ACCENT}
          accentLight={ACCENT_LIGHT}
          industries={[
            {
              icon: "🏪",
              name: "Retail Businesses",
              description: "Ethiopian retail shops use Meleket to track hundreds of SKUs in real time. Barcode scanning speeds up receiving and POS billing. Low-stock alerts ensure shelves are never empty. Customer purchase histories enable loyalty programs.",
            },
            {
              icon: "🍽️",
              name: "Restaurant Industry",
              description: "Restaurants track ingredient inventory, daily consumption, and waste with Meleket. Recipe costing features calculate the true cost of each dish. Expiry date tracking prevents using expired ingredients. Supplier purchase orders are managed efficiently.",
            },
            {
              icon: "🚚",
              name: "Wholesale Distribution",
              description: "Wholesalers managing large catalogs across multiple warehouses rely on Meleket for accurate stock levels. Inter-warehouse transfers, FIFO costing, and batch tracking give complete visibility. Bulk order processing is streamlined.",
            },
            {
              icon: "🔧",
              name: "Service-Based Businesses",
              description: "Service businesses track tools, equipment, and supplies with Meleket. Job-wise material consumption is tracked, ensuring accurate project costing. Low-stock alerts ensure service materials are always available.",
            },
            {
              icon: "🏭",
              name: "Manufacturing Industry",
              description: "Small manufacturers use Meleket to track raw materials, work-in-progress, and finished goods. Bill of materials, production entries, and finished goods receipts are all managed. Raw material consumption vs production output is analyzed.",
            },
          ]}
        />

        {/* ── TRUST & TESTIMONIALS ── */}
        <TrustTestimonials
          headline="Trusted by 1,000+ Businesses — Here's What They Say About Meleket"
          accentColor={ACCENT}
          stats={[
            { value: "500K+", label: "SKUs Managed" },
            { value: "3+", label: "Average Warehouses" },
            { value: "Zero", label: "Manual Stocktakes" },
            { value: "4.8★", label: "Average Rating" },
          ]}
          testimonials={[
            {
              name: "Dawit Alemu",
              business: "Alemu Wholesale",
              city: "Addis Ababa",
              rating: 5,
              quote: "Managing three warehouses was a nightmare before Meleket. Now I transfer stock between locations in seconds and always know what's where. Low-stock alerts mean I never run out of my top sellers.",
              avatar: "DA",
            },
            {
              name: "Rahel Solomon",
              business: "Solomon Pharmacy",
              city: "Bahir Dar",
              rating: 5,
              quote: "Batch and expiry tracking is essential for our pharmacy. Meleket alerts us weeks before items expire so we can discount them in time. The barcode scanning is incredibly fast for receiving new stock.",
              avatar: "RS",
            },
          ]}
        />

        {/* ── FAQ ── */}
        <FAQSection
          accentColor={ACCENT}
          title="Frequently Asked Questions about Meleket Inventory Management"
          faqs={[
            {
              q: "Can Meleket manage inventory across multiple warehouses?",
              a: "Yes. Meleket supports unlimited warehouse and location setups. You can view stock at each location separately or as a combined total. Stock transfers between locations are fully documented with timestamps and user records.",
            },
            {
              q: "Does Meleket support barcode scanning?",
              a: "Yes. You can use your smartphone camera as a barcode scanner to scan products during sales, stock counting, and receiving goods. Meleket supports all standard barcode formats (EAN-13, UPC-A, QR code, etc.).",
            },
            {
              q: "What costing methods does Meleket support?",
              a: "Meleket supports FIFO (First-In-First-Out), LIFO (Last-In-First-Out), and Weighted Average Cost methods. You can set the costing method per product or globally for your business.",
            },
            {
              q: "Can I track expiry dates for perishable products?",
              a: "Yes. Meleket tracks batch numbers and expiry dates for each stock batch. You receive alerts before items expire and the system enforces FIFO dispatch for perishable products.",
            },
            {
              q: "How do I import my existing product list into Meleket?",
              a: "You can import products via a CSV file with columns for product name, category, unit, price, and opening stock. The import wizard guides you through mapping your spreadsheet columns.",
            },
            {
              q: "Can I get automatic low-stock alerts?",
              a: "Yes. You can set a minimum stock level for each product. When stock falls below this level, you receive a push notification on your phone and the product appears in the low-stock report.",
            },
            {
              q: "Does inventory connect with invoicing and accounting?",
              a: "Yes. When you create a sales invoice, stock is automatically deducted. When you receive a purchase, stock is automatically added. All inventory movements are reflected in your accounting — cost of goods sold, stock valuation, and balance sheet.",
            },
            {
              q: "Can Meleket handle serial number tracking?",
              a: "Yes. For electronics, equipment, and other high-value items, Meleket tracks serial numbers from purchase to sale. You can look up which customer received any specific serial number for warranty and service purposes.",
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

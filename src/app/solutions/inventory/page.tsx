import type { Metadata } from "next";
import SolutionPage from "@/components/solutions/SolutionPage";
import type { SolutionPageData } from "@/components/solutions/SolutionPage";

export const metadata: Metadata = {
  title: "Inventory Management Software for Ethiopian Businesses — Meleket",
  description:
    "Multi-warehouse inventory management with barcode scanning, low-stock alerts, FIFO/LIFO costing, and stock transfer. Built for Ethiopian retailers and wholesalers.",
};

const data: SolutionPageData = {
  slug: "inventory",
  accentColor: "#059669",
  accentLight: "#ECFDF5",
  heroTag: "Inventory Management",
  heroTitle: "Total Control Over",
  heroTitleAccent: "Your Stock",
  heroSubtitle:
    "Track every item from purchase to sale across multiple warehouses. Real-time stock levels, low-stock alerts, and barcode scanning for Ethiopian retailers and wholesalers.",
  heroFeatures: [
    "Multi-warehouse support",
    "Barcode scanning",
    "Low-stock alerts",
    "FIFO / LIFO costing",
    "Stock transfers",
    "Expiry date tracking",
  ],
  stats: [
    { value: "500K+", label: "SKUs Managed" },
    { value: "0", label: "Manual Stocktake Needed" },
    { value: "3+", label: "Warehouses per Business" },
    { value: "Real-time", label: "Stock Visibility" },
  ],
  featuresTitle: "Complete Inventory Control for Your Business",
  features: [
    {
      icon: "📦",
      title: "Multi-Warehouse Management",
      description:
        "Manage stock across multiple warehouses, stores, or locations from a single app. See combined or location-wise stock levels instantly.",
    },
    {
      icon: "📱",
      title: "Barcode Scanning",
      description:
        "Use your phone camera as a barcode scanner to add products, update stock, or process sales. No dedicated scanner hardware required.",
    },
    {
      icon: "🔔",
      title: "Low Stock Alerts",
      description:
        "Set minimum stock levels for each product. Get automatic alerts when inventory falls below the reorder point so you never run out.",
    },
    {
      icon: "🔢",
      title: "FIFO & LIFO Costing",
      description:
        "Choose First-In-First-Out or Last-In-First-Out costing for accurate inventory valuation and true cost-of-goods-sold calculation.",
    },
    {
      icon: "🏷️",
      title: "Batch & Expiry Tracking",
      description:
        "Track batch numbers and expiry dates for perishable goods, pharmaceuticals, and food products. Get alerts before items expire.",
    },
    {
      icon: "🔄",
      title: "Stock Transfer",
      description:
        "Move stock between locations in seconds. Full transfer history with timestamps and user records for complete traceability.",
    },
    {
      icon: "🖨️",
      title: "Barcode Label Printing",
      description:
        "Print barcode labels for all your products. Supports standard label printers and regular printers with sheet labels.",
    },
    {
      icon: "📊",
      title: "Inventory Reports",
      description:
        "Stock summary, movement report, ageing analysis, and valuation reports. Export to PDF or Excel for audits and financial planning.",
    },
    {
      icon: "📋",
      title: "Purchase Order Management",
      description:
        "Create purchase orders, send them to suppliers, and receive goods against them. Stock updates automatically when goods are received.",
    },
  ],
  tabsTitle: "How Meleket Keeps Your Inventory Accurate",
  tabs: [
    {
      id: "tracking",
      title: "Real-Time Stock Tracking",
      content:
        "Every time you make a sale, receive a purchase, or transfer stock, Meleket updates your inventory levels instantly. No need for periodic manual counts — your stock is always accurate.",
      bullets: [
        "Auto stock deduction on every sale",
        "Auto stock increment on every purchase",
        "Real-time view across all locations",
        "Stock history for every product",
        "Discrepancy detection and alerts",
      ],
    },
    {
      id: "warehouses",
      title: "Multi-Location Management",
      content:
        "Whether you have a main warehouse and a retail shop or three stores across different cities, Meleket lets you manage all locations from one dashboard. Transfer stock between locations with complete documentation.",
      bullets: [
        "Unlimited warehouse and location setup",
        "Location-wise stock view",
        "Inter-location transfer with approval workflow",
        "Consolidated inventory reports across all locations",
        "Location-wise profit analysis",
      ],
    },
    {
      id: "costing",
      title: "FIFO, LIFO & Average Costing",
      content:
        "Choose the costing method that matches your business type. FIFO is ideal for perishable goods, LIFO for commodities, and weighted average for businesses with mixed procurement prices.",
      bullets: [
        "FIFO (First-In-First-Out) costing",
        "LIFO (Last-In-First-Out) costing",
        "Weighted average cost method",
        "Accurate COGS calculation",
        "Inventory valuation at cost or market price",
      ],
    },
    {
      id: "alerts",
      title: "Smart Alerts & Reordering",
      content:
        "Set minimum stock levels for each item. Meleket notifies you when any product approaches the reorder point, giving you enough time to place purchase orders before stockouts occur.",
      bullets: [
        "Item-level minimum stock settings",
        "Push notifications for low stock",
        "Daily low-stock summary report",
        "Suggested reorder quantities",
        "Direct purchase order from alert",
      ],
    },
    {
      id: "reports",
      title: "Inventory Reports & Analytics",
      content:
        "Generate detailed inventory reports for any date range. Understand which products are fast-moving, which are slow-moving, and how your stock value changes over time.",
      bullets: [
        "Stock summary and valuation report",
        "Fast-moving and slow-moving items",
        "Dead stock identification",
        "Stock movement history",
        "Inventory ageing analysis",
      ],
    },
  ],
  benefitsTitle: "Why Meleket is the Right Inventory Software for Ethiopia",
  benefits: [
    {
      title: "Eliminate Stockouts and Overstocking",
      desc: "Smart low-stock alerts and reorder suggestions keep your shelves optimally stocked — no stockouts and no dead inventory tying up cash.",
    },
    {
      title: "Know Your True Product Costs",
      desc: "FIFO and LIFO costing methods give you accurate cost-of-goods-sold figures, enabling better pricing decisions and margin analysis.",
    },
    {
      title: "Manage Multiple Locations Easily",
      desc: "Whether you have one shop or ten warehouses, Meleket gives you a single view of all your stock with inter-location transfers documented automatically.",
    },
    {
      title: "Works with Your Existing Setup",
      desc: "Import your existing product list via CSV. Works with any standard barcode format and most thermal and label printers.",
    },
    {
      title: "Reduce Inventory Shrinkage",
      desc: "Complete audit trail of every stock movement — purchases, sales, adjustments, and transfers — makes it easy to identify and investigate discrepancies.",
    },
    {
      title: "Save Time on Stocktaking",
      desc: "Use your phone camera to scan barcodes during stock counts. Meleket flags discrepancies between physical count and system stock automatically.",
    },
  ],
  faqTitle: "Frequently Asked Questions about Meleket Inventory Management",
  faqs: [
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
      a: "Yes. Meleket tracks batch numbers and expiry dates for each stock batch. You receive alerts before items are about to expire and the system ensures FIFO dispatch for perishables.",
    },
    {
      q: "How do I import my existing product list into Meleket?",
      a: "You can import products via a CSV file with columns for product name, category, unit, price, and opening stock. The import wizard guides you through mapping your spreadsheet columns.",
    },
    {
      q: "Can I get automatic low-stock alerts?",
      a: "Yes. You can set a minimum stock level for each product. When stock falls below this level, you receive a push notification on your phone and the product appears in the low-stock report.",
    },
  ],
  ctaTitle: "Take Control of Your Inventory with Meleket",
  ctaSubtitle:
    "Join thousands of Ethiopian retailers and wholesalers using Meleket for accurate, real-time inventory management.",
};

export default function InventoryPage() {
  return <SolutionPage data={data} />;
}

export const SITE_NAME = "Meleket";
export const SITE_TAGLINE = "Simplify Your Business with Meleket";
export const SITE_DESCRIPTION =
  "Billing, Inventory, POS, Payroll & MoR e-Invoicing — all in one app. Built for Ethiopian businesses.";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Compliance", href: "#compliance" },
  { label: "Invoicing", href: "#invoicing" },
  { label: "About", href: "#about" },
];

export const STATS = [
  { value: "5,000+", label: "Businesses Trust Us" },
  { value: "ETB 2B+", label: "Transactions Processed" },
  { value: "13", label: "Business Modules" },
  { value: "4.8★", label: "Google Play Rating" },
];

export const FEATURES = [
  {
    icon: "ShoppingCart",
    title: "POS Billing",
    description: "Lightning-fast counter sales with barcode scanning and thermal printing.",
    color: "#22C55E",
  },
  {
    icon: "FileText",
    title: "Sales & e-Invoicing",
    description: "MoR-compliant invoices with automatic IRN and QR code generation.",
    color: "#3B82F6",
  },
  {
    icon: "Package",
    title: "Inventory Management",
    description: "Multi-warehouse stock management with FIFO/LIFO costing and alerts.",
    color: "#F59E0B",
  },
  {
    icon: "Truck",
    title: "Purchases & Expenses",
    description: "Track supplier invoices, purchase orders, and operational expenses.",
    color: "#EF4444",
  },
  {
    icon: "Users",
    title: "Staff & Payroll",
    description: "Attendance marking, auto salary calculation, and salary slip generation.",
    color: "#8B5CF6",
  },
  {
    icon: "BarChart2",
    title: "Reports & Analytics",
    description: "40+ reports covering sales, stock, tax, expenses — export to PDF & Excel.",
    color: "#EC4899",
  },
];

export const MORE_FEATURES = [
  "Multi-warehouse support",
  "Barcode label printing",
  "Ethiopian Calendar support",
  "Amharic & English UI",
  "MoR Z-Report auto-transmission",
  "VAT & TOT handling",
  "Telebirr & CBE Birr payments",
  "SMS marketing campaigns",
  "Custom invoice themes",
  "Automated recurring bills",
  "Role-based staff access",
  "INSA security compliant",
  "Withholding tax support",
  "Stock transfer between locations",
  "Keyboard shortcuts (F6, F7)",
  "Works online & offline",
];

export const COMPLIANCE_TABS = [
  {
    id: "mor",
    label: "MoR e-Invoicing",
    title: "Ministry of Revenue e-Invoice Compliance",
    description:
      "Every sales invoice automatically generates an IRN (Invoice Reference Number) and QR code. A daily Z-Report is compiled and transmitted to the Ministry of Revenue at the end of each business day — completely automatically.",
    features: ["Auto IRN generation", "QR code on every invoice", "Daily Z-Report transmission", "Real-time validation"],
  },
  {
    id: "vat",
    label: "VAT & TOT",
    title: "Effortless VAT & TOT Management",
    description:
      "Automatically calculate and apply VAT (15%) or TOT based on your business registration. Generate tax-ready reports, track input vs output VAT, and stay compliant without manual effort.",
    features: ["Auto VAT calculation", "TOT support", "Tax-ready reports", "Input vs Output tracking"],
  },
  {
    id: "insa",
    label: "INSA Security",
    title: "INSA Security Standards Compliant",
    description:
      "Built to meet the Information Network Security Administration standards. Your business data is encrypted, securely stored, and protected with enterprise-grade security measures.",
    features: ["Data encryption", "Secure cloud storage", "Audit trail logging", "Role-based access"],
  },
  {
    id: "export",
    label: "Data Export",
    title: "Export Your Data Anytime",
    description:
      "Export all your business data in standard formats. Generate reports in PDF and Excel, export transaction histories, and maintain full control over your business records.",
    features: ["PDF & Excel export", "Transaction history", "Tax reports", "Bulk data export"],
  },
];

export const INVOICE_THEMES = [
  { name: "Classic", style: "clean" },
  { name: "Modern", style: "bold" },
  { name: "Luxury", style: "elegant" },
  { name: "Stylish", style: "creative" },
];

export const TESTIMONIALS = [
  {
    name: "Abebe Kebede",
    business: "Kebede General Trading",
    city: "Addis Ababa",
    rating: 5,
    quote:
      "Before this software, everything was on paper. Now I can manage my accounts easily and the MoR compliance is automatic.",
    avatar: "AK",
  },
  {
    name: "Tigist Hailu",
    business: "Hailu Supermarket",
    city: "Bahir Dar",
    rating: 5,
    quote:
      "The e-invoicing feature is exactly what we needed. The Z-Report sends automatically every night — I don't worry about it.",
    avatar: "TH",
  },
  {
    name: "Yonas Tadesse",
    business: "Tadesse Wholesale",
    city: "Hawassa",
    rating: 5,
    quote:
      "Managing three warehouses was a nightmare before. Now I transfer stock between locations in seconds.",
    avatar: "YT",
  },
  {
    name: "Meron Bekele",
    business: "Bekele Cafe",
    city: "Dire Dawa",
    rating: 5,
    quote:
      "The POS billing is incredibly fast. My staff learned it in one day and customers love getting proper receipts.",
    avatar: "MB",
  },
];

export const INDUSTRIES = [
  { icon: "🏪", label: "Retail Shops" },
  { icon: "🏭", label: "Wholesalers" },
  { icon: "🚚", label: "Distributors" },
  { icon: "☕", label: "Cafes & Restaurants" },
  { icon: "🔧", label: "Service Providers" },
  { icon: "💊", label: "Pharmacies" },
];
